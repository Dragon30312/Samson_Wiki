import {useEffect, useState} from "react";
import {collection, getDocs, query} from "firebase/firestore";
import {auth, db} from "../lib/firebase.ts";
import {useParams} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {WeekDaySelector} from "../components/WeekDaySelector.tsx";
import {TrainingPlanBlockDisplay} from "../components/TrainingPlanBlockDisplay.tsx";
import {ExercisePieceList} from "../components/ExercisePieceList.tsx";
import {EquipmentFilterDropdown} from "../components/EquipmentFilterDropdown.tsx";
import {ManFront} from "../components/ManFront.tsx";
import {ManBack} from "../components/ManBack.tsx";
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {useNavigate} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore"

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday","sunday"];

export const TrainingPlanEditPage = () => {
    const {planId} = useParams();
    const navigate = useNavigate();

    const [userUID, setUserUID] = useState(null);
    const [trainingPlan, setTrainingPlan] = useState(null);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedMuscle, setSelectedMuscle] = useState("chest");
    const [saved, setSaved] = useState(true);
    const [areYouSurePopup, setAreYouSurePopup] = useState(false);

    const updateExercisesInDatabase = async () => {
        try {
            // Reference to the Firestore document (e.g., "plans/plan_kot")
            const docRef = doc(db, `users/${userUID}/trainingPlans/${planId}`);

            // Save the object to Firestore
            await setDoc(docRef, trainingPlan);
        } catch (error) {
            console.error("Error adding plan to Firestore:", error);
        }
    }

    function handleDragEnd(event:DragEndEvent){
        const {active, over} = event;

        if(!over) return;

        const exerciseName = active.id as string;
        const exerciseToDropOnName = over.id as string;
        const indexToDropOn =  parseInt(over.id.split("*")[1], 10);

        console.log(exerciseName,exerciseToDropOnName, indexToDropOn);


        setTrainingPlan((prevState)=> {
            const updatedDays = {};

            days.forEach(day => {
                if (day != days[selectedDay]) {
                    updatedDays[day] = prevState.days[day];
                }else{
                    const dayExercises = [...prevState.days[day]]
                    dayExercises.splice(indexToDropOn, 0, {
                        name:exerciseName,
                        sets:3,
                        minReps:8,
                        maxReps:12
                    })
                    updatedDays[day] = dayExercises
                }
            })

            return{
                name:prevState.name,
                days:updatedDays
            }
        })

        setSaved(false);
    }

    useEffect(() => {
        console.log(`rendering`, trainingPlan)
    }, [trainingPlan]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUserUID(uid);
                getData(uid);
            } else {
                setUserUID(null);
            }
        });
        return () => unsubscribe();
    }, []);



    const getData = async (uid) => {
        console.log("getData")
        const q = query(collection(db,`users/${uid}/trainingPlans`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(doc.id===planId){
                setTrainingPlan(doc.data());
            }
        });
    }

    return(
        <DndContext onDragEnd={handleDragEnd}>
        {
            userUID?
                trainingPlan?
            <main className="w-full flex ">
                {areYouSurePopup?(
                        <main
                            className={`fixed w-screen h-screen top-0 left-0 items-center justify-center bg-primary-transparent flex z-50`}>
                            <div className={"flex flex-col gap-4 rounded-xl w-[1000px] p-10 bg-true-white"}>
                                <h1 className={"text-primary-medium font-bold text-4xl text-center"}>You have unsaved changes, are
                                    you sure that you want to exit without saving?</h1>
                                <div className={"flex justify-between"}>
                                <button
                                    onClick={() => {
                                        updateExercisesInDatabase()
                                        navigate("/plans")
                                    }}
                                    className={`px-6 bg-primary-light rounded-md text-white font-bold text-3xl h-12 mt-8 ml-4 hover:bg-primary-medium transition-transform duration-300 hover:scale-110`}>Exit With Save
                                </button>
                                <button
                                    onClick={() => {
                                        navigate("/plans")
                                    }}
                                    className={`px-6 bg-primary-light rounded-md text-white font-bold text-3xl h-12 mt-8 ml-4 hover:bg-primary-medium transition-transform duration-300 hover:scale-110`}>Exit Without Saving
                                </button>
                                <button
                                    onClick={() => {
                                        setAreYouSurePopup(false)
                                    }}
                                    className={`px-6 bg-primary-light rounded-md text-white font-bold text-3xl h-12 mt-8 ml-4 hover:bg-primary-medium transition-transform duration-300 hover:scale-110`}>Cancel
                                </button>
                                </div>
                            </div>
                        </main>
                    )
                    : null}
                <div className={"w-7/12 h-[calc(100vh-5rem)] border-r-4 border-primary-medium p-6 bg-white"}>
                    <h1 className={"text-primary-medium text-6xl font-bold isD"}>Editing Plan "{trainingPlan.name}"
                        :</h1>
                    <div className={"flex justify-between"}>
                        <WeekDaySelector selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                        <div>
                            <div className={"flex flex-col"}>
                        <button
                            onClick={() => {
                                updateExercisesInDatabase()
                                setSaved(true);
                            }}
                            className={`w-40 bg-primary-light rounded-md text-white font-bold text-3xl h-12 mt-8 ml-4 hover:bg-primary-medium transition-transform duration-300 hover:scale-110`}>Save
                        </button>
                        <button
                            onClick={() => {
                            saved?navigate("/plans"):setAreYouSurePopup(true);
                            }}
                            className={`w-40 bg-primary-light rounded-md text-white font-bold text-3xl h-12 mt-8 ml-4 hover:bg-primary-medium transition-transform duration-300 hover:scale-110`}>Exit
                        </button>
                            </div>
                        </div>
                    </div>
                    <TrainingPlanBlockDisplay setTrainingPlan={setTrainingPlan} setSaved={setSaved} currentDay={selectedDay} exercises={trainingPlan.days[days[selectedDay]]}/>
                </div>
                <div className={"w-5/12 h-[calc(100vh-5rem)] bg-white flex flex-col items-center p-6"}>
                    <ExercisePieceList muscle={selectedMuscle}/>
                    <div className={"bg-primary-light p-2 flex rounded-[32px]"}>
                        <div className={"min-h-40 bg-true-white rounded-3xl w-[350px] justify-around flex p-2 justify-around"}>
                            <ManFront primary={selectedMuscle} setSelectedMuscle={setSelectedMuscle} dontChangeURL={true} height={290}/>
                            <ManBack primary={selectedMuscle} setSelectedMuscle={setSelectedMuscle}  dontChangeURL={true} height={290}/>
                        </div>
                        <EquipmentFilterDropdown isDropped={true}/>
                    </div>
                </div>
            </main>
                    :
                    <h1>Loading...</h1>
                :
                <h1>u need to be logged in</h1>
        }
        </DndContext>
    )
}