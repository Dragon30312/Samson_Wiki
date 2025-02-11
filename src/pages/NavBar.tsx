import {Outlet, Link} from "react-router-dom";
import {auth, db} from "../lib/firebase.ts";
import {useEffect, useState} from "react";
import {LoginPopup} from "../components/LoginPopup.tsx";
import {useLogin} from "../contexts/useLogin.ts";


import {
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";

export const NavBar = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const [toggleLoginOptions, setToggleLoginOptions] = useState(false);
    const [username, setUsername] = useState("...");
    const {alreadyLoggingIn} = useLogin();

    useEffect(() => {
        const getUserName = async(uid) => {
            const userDocRef = doc(db, `users/${uid}`);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                setUsername(userDoc.data().username);
                console.log(userDoc.data());
            } else {
                console.log("No such document!");
            }
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("logged in as: ", uid);
                setSignedIn(true);
                getUserName(uid)
            } else {
                setSignedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <aside
                className="flex flex-col w-80 h-screen bg-primary-medium fixed transition-all duration-300 mt-20 -translate-x-80 lg:translate-x-0">
                <NavButton label="Training Plans" icon="/icons/planning.png" isSmall={false}
                           linkTo={"/plans"}/>
                <NavButton label="Exercises By Muscle" icon="/icons/dumbbell.png" isSmall={false}/>
                <div className="flex flex-col p-2 pl-4 py-4 ">
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12 " src={"/icons/wrench.png"} alt="icon"/>
                        <h1 className="text-white font-bold text-2xl">Tools</h1>
                        <img className="w-8 h-8 ml-12" src={"/icons/down-arrow.png"} alt="arrow"/>
                    </div>
                    <NavButton label="Calorie Calculator" isSmall={true} linkTo={"/CalorieCalculator"}/>
                    <NavButton label="1 Rep Max Calculator" isSmall={true} linkTo={"/OneRep"}/>
                </div>
            </aside>
            <header className="h-20  w-screen bg-primary-dark fixed z-40
              flex items-center justify-between">
                <Link to="/"><img className="h-20 ml-10" src="/logo/SamsonWikiLogoDarkFull.png"
                                  alt="SamsonWiki"/></Link>
                {signedIn ?
                    <div className="relative">
                        <img
                            onClick={() => {
                                setToggleLoginOptions((prevState) => !prevState)
                            }}
                            className="h-16 w-16 mr-10 bg-secondary-light rounded-full cursor-pointer"
                            src={'/icons/user(1).png'}
                            alt="User Icon"
                        />
                            <div
                                className={`shadow-lg rounded-md bg-true-white w-40 absolute transition-all duration-300 origin-top-right right-24  top-14 ${toggleLoginOptions? "scale-100": "scale-0" } `}>
                                <div className="p-2">Logged In As <span className={"font-bold  text-primary-medium "}>{username}</span>
                                </div>
                                <button className="p-2 hover:bg-[#EEE] w-full rounded-lg transition-all duration-300" onClick={() => {
                                    setToggleLoginOptions(false);
                                    signOut(auth)
                                }}>
                                    Logout
                                </button>
                            </div>
                    </div>
                    :
                    !alreadyLoggingIn?
                    <button onClick={() => {
                        setIsLoggingIn(true)
                    }}
                            className="mr-10 text-white font-bold p-2 w-20 bg-primary-medium rounded-full hover:scale-110 transition-all duration-300 border-2 border-secondary-light">Login</button>
                        :null
                }
            </header>

            <main className={`pt-20  bg-white min-h-[calc(100vh)] lg:ml-80`}>
                <Outlet/>
            </main>

            {isLoggingIn ?
                <main className={"fixed h-screen top-0 left-0 w-screen flex items-center justify-center bg-primary-transparent z-40"}>
                   <LoginPopup setIsLoggingIn={setIsLoggingIn}/>
                </main>
            :null}
        </>
    )
}

const NavButton = ({label, linkTo, icon, isSmall}) => {
    return(
        <Link to={linkTo} className={`${isSmall?"justify-end":""} flex items-center gap-4 p-2 pl-4 py-4 border-b-2 border-secondary-light transition-all duration-300 hover:border-primary-light group`}>
            {!isSmall ? <img className="w-12 h-12 " src={icon} alt="icon"/> : null}
            <h1 className="text-white font-bold text-2xl group-hover:rotate-2 group-hover:scale-110 transition-all duration-300">{label}</h1>
        </Link>
    )
}

