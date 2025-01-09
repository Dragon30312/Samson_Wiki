import {useNavigate} from "react-router-dom";
export const ManFront = ({height, primary}) => {
    const navigate = useNavigate();

    return(
        <svg className={"stroke-primary-dark fill-true-white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.16 778.69" height={height}>
            <g>
                <path d="M148.05,136.2l3.52-2.91c.61-.5,1.23-.97,1.88-1.41l2.85-1.93c1.76-1.19,3.64-2.18,5.62-2.96l5.03-1.98,8.02-3.41c.19-.08.37-.17.54-.26l3.05-1.64,2.41-1.72c.86-.61,1.67-1.3,2.41-2.04l2.32-2.32,1.11-1.28.2,17.87c0,.48-.08.96-.25,1.41l-.59,1.6c-.25.68-.65,1.31-1.16,1.83l-2.92,2.96-2.76,1.7c-.68.42-1.45.66-2.24.69l-1.92.09c-.85.04-1.71-.08-2.51-.36l-2.86-.99c-.4-.14-.81-.26-1.22-.35l-4.22-.98c-.69-.16-1.38-.28-2.08-.37l-5.47-.69c-.59-.07-1.18-.12-1.78-.15l-6.13-.26-.85-.13Z"/>
                <path d="M279.11,135.89l-3.52-2.91c-.61-.5-1.23-.97-1.88-1.41l-2.85-1.93c-1.76-1.19-3.64-2.18-5.62-2.96l-5.03-1.98-8.02-3.41c-.19-.08-.37-.17-.54-.26l-3.05-1.64-2.41-1.72c-.86-.61-1.67-1.3-2.41-2.04l-2.32-2.32-1.11-1.28-.2,17.87c0,.48.08.96.25,1.41l.59,1.6c.25.68.65,1.31,1.16,1.83l2.92,2.96,2.76,1.7c.68.42,1.45.66,2.24.69l1.92.09c.85.04,1.71-.08,2.51-.36l2.86-.99c.4-.14.81-.26,1.22-.35l4.22-.98c.69-.16,1.38-.28,2.08-.37l5.47-.69c.59-.07,1.18-.12,1.78-.15l6.13-.26.85-.13Z"/>
            </g>
                <g id="shoulders" onClick={()=>{navigate("/exercises/shoulders")}} className={`${primary=="shoulders"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`}>
                <path id="deltoid_muscle_left" d="M175.81,140.49l-3.08,1.54-7.21,3.32-3.72,2.48c-1.1.73-2.14,1.54-3.12,2.41l-2.63,2.35c-.75.67-1.46,1.37-2.14,2.1l-1.98,2.14c-1.06,1.15-2.04,2.39-2.92,3.69l-1.38,2.05c-.58.86-1.19,1.7-1.84,2.52l-2.33,2.96c-.48.61-.99,1.2-1.51,1.78l-6.82,7.39c-.54.59-1.1,1.15-1.69,1.7l-7.04,6.58c-.51.48-1.05.92-1.61,1.33l-2.1,1.53c-1.13.82-2.37,1.49-3.69,1.98l-2.91,1.08c-.87.32-1.77.57-2.68.73l-4.38.78c-.97.17-1.93.41-2.87.72l-3.55,1.17c-1.07.35-2.12.79-3.12,1.32l-4.49,2.34,1.85-8.17,2.11-7.57c.17-.61.36-1.22.58-1.81l3.37-9.19,2.5-6.72c.38-1.01.81-2,1.29-2.96l1.86-3.69c.57-1.13,1.23-2.22,1.97-3.25l1.6-2.24c1.21-1.68,2.65-3.18,4.28-4.45l1.97-1.53c.83-.64,1.69-1.25,2.57-1.81l2.38-1.52c1.86-1.18,3.88-2.09,6-2.69l5.1-1.45,11.64-2.82.45-.08c.92-.17,1.85-.25,2.78-.23l1.85.04,4.21.28c.22.01.43.03.65.06l4.42.53,4.04.65c.21.03.42.08.62.13l4.04.97c.25.06.5.13.75.22l2.47.85c.37.13.76.21,1.15.25l2.31.23Z"/>
                <path id="deltoid_muscle_right" d="M251.35,140.17l3.08,1.54,7.21,3.32,3.72,2.48c1.1.73,2.14,1.54,3.12,2.41l2.63,2.35c.75.67,1.46,1.37,2.14,2.1l1.98,2.14c1.06,1.15,2.04,2.39,2.92,3.69l1.38,2.05c.58.86,1.19,1.7,1.84,2.52l2.33,2.96c.48.61.99,1.2,1.51,1.78l6.82,7.39c.54.59,1.1,1.15,1.69,1.7l7.04,6.58c.51.48,1.05.92,1.61,1.33l2.1,1.53c1.13.82,2.37,1.49,3.69,1.98l2.91,1.08c.87.32,1.77.57,2.68.73l4.38.78c.97.17,1.93.41,2.87.72l3.55,1.17c1.07.35,2.12.79,3.12,1.32l4.49,2.34-1.85-8.17-2.11-7.57c-.17-.61-.36-1.22-.58-1.81l-3.37-9.19-2.5-6.72c-.38-1.01-.81-2-1.29-2.96l-1.86-3.69c-.57-1.13-1.23-2.22-1.97-3.25l-1.6-2.24c-1.21-1.68-2.65-3.18-4.28-4.45l-1.97-1.53c-.83-.64-1.69-1.25-2.57-1.81l-2.38-1.52c-1.86-1.18-3.88-2.09-6-2.69l-5.1-1.45-11.64-2.82-.45-.08c-.92-.17-1.85-.25-2.78-.23l-1.85.04-4.21.28c-.22.01-.43.03-.65.06l-4.42.53-4.04.65c-.21.03-.42.08-.62.13l-4.04.97c-.25.06-.5.13-.75.22l-2.47.85c-.37.13-.76.21-1.15.25l-2.31.23Z"/>
            </g>
                <g id="biceps" onClick={()=>{navigate("/exercises/biceps")}} className={`${primary=="biceps"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`}>
                <path id="biceps_left" d="M94.93,198.52l-2.17,1.73-1.81,2.15-3.46,4.85c-.45.63-.87,1.28-1.26,1.95l-2.3,3.96c-.8,1.37-1.53,2.78-2.18,4.22l-2.96,6.52c-.47,1.04-.91,2.1-1.31,3.17l-2.28,6.13c-.72,1.92-1.24,3.91-1.57,5.94l-.27,1.68-.95,6.36c-.26,1.76-.37,3.54-.32,5.31l.13,4.69c.01.43.08.86.19,1.27l.91,3.23c.17.6.44,1.17.8,1.68l1.76,2.51c.42.59.94,1.1,1.55,1.5l2.27,1.49c.63.41,1.35.67,2.09.75l4.01.45c.36.04.72.04,1.07,0l2.17-.28c1.04-.13,2.04-.45,2.97-.93l2.88-1.51c.36-.19.71-.39,1.04-.62l3.32-2.22c2.12-1.41,3.98-3.18,5.51-5.21l4.17-5.54,7.32-9.85c.65-.88,1.35-1.73,2.08-2.54l6.18-6.88,4.95-5.52c1.15-1.28,1.96-2.82,2.37-4.49l.17-.71.85-3c.62-2.21.94-4.49.94-6.78v-7.13c0-1.85-.18-3.7-.53-5.52l-.36-1.85c-.17-.86-.55-1.67-1.12-2.34l-.78-.93c-1.27-1.51-2.99-2.57-4.91-3.02l-2.82-.67c-1.36-.32-2.75-.5-4.14-.54l-2.54-.06c-1.14-.03-2.28.04-3.4.22l-1.7.26c-1.23.19-2.44.45-3.64.79l-3.65,1.02-4.14,1.71c-1.12.46-2.22,1-3.28,1.6l-1.84,1.04Z"/>
                <path id="biceps_right" d="M332.23,198.21l2.17,1.73,1.81,2.15,3.46,4.85c.45.63.87,1.28,1.26,1.95l2.3,3.96c.8,1.37,1.53,2.78,2.18,4.22l2.96,6.52c.47,1.04.91,2.1,1.31,3.17l2.28,6.13c.72,1.92,1.24,3.91,1.57,5.94l.27,1.68.95,6.36c.26,1.76.37,3.54.32,5.31l-.13,4.69c-.01.43-.08.86-.19,1.27l-.91,3.23c-.17.6-.44,1.17-.8,1.68l-1.76,2.51c-.42.59-.94,1.1-1.55,1.5l-2.27,1.49c-.63.41-1.35.67-2.09.75l-4.01.45c-.36.04-.72.04-1.07,0l-2.17-.28c-1.04-.13-2.04-.45-2.97-.93l-2.88-1.51c-.36-.19-.71-.39-1.04-.62l-3.32-2.22c-2.12-1.41-3.98-3.18-5.51-5.21l-4.17-5.54-7.32-9.85c-.65-.88-1.35-1.73-2.08-2.54l-6.18-6.88-4.95-5.52c-1.15-1.28-1.96-2.82-2.37-4.49l-.17-.71-.85-3c-.62-2.21-.94-4.49-.94-6.78v-7.13c0-1.85.18-3.7.53-5.52l.36-1.85c.17-.86.55-1.67,1.12-2.34l.78-.93c1.27-1.51,2.99-2.57,4.91-3.02l2.82-.67c1.36-.32,2.75-.5,4.14-.54l2.54-.06c1.14-.03,2.28.04,3.4.22l1.7.26c1.23.19,2.44.45,3.64.79l3.65,1.02,4.14,1.71c1.12.46,2.22,1,3.28,1.6l1.84,1.04Z"/>
            </g>
                <g id="forearms" onClick={()=>{navigate("/exercises/forearms")}} className={`${primary=="forearms"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`}>
                <path id="musculus_brachialis_left" d="M75.86,231.14l-3.09,6.34-1.11,2.07c-1.68,3.13-3.7,6.07-6.01,8.77l-1.96,2.28-8.93,10.06c-1.01,1.13-1.95,2.33-2.81,3.57l-2.09,3c-1.31,1.89-2.5,3.86-3.54,5.92l-2.26,4.45-5.02,10.64-2.56,5.06c-.56,1.11-1.09,2.24-1.57,3.39l-3.1,7.3-5.02,13.62-2.89,7.32-2.18,4.99c-.87,2-1.82,3.98-2.83,5.92l-1.45,2.78c-.11.22-.11.48.02.69l1.08,1.78c.96,1.59,2.08,3.07,3.36,4.41l1.84,1.95c.44.47.99.81,1.6,1l1.42.45c.93.29,1.89.45,2.87.45h.84c.9,0,1.79-.09,2.67-.26l1.46-.29c.4-.08.74-.33.94-.68l1.67-2.93c.32-.57.69-1.11,1.1-1.63l.46-.58c1.49-1.88,3.15-3.62,4.96-5.2l3.5-3.07,9.36-8.17,7.83-6.72,4.85-5.19,6.3-8.34,3.41-5.21c1.18-1.8,2.26-3.67,3.23-5.6l4.16-8.26,3.15-5.82c.51-.94,1.05-1.86,1.62-2.77l2.94-4.68c.82-1.31,1.71-2.58,2.65-3.8l3.44-4.46,3.29-4.72-2.57,2.18c-1,.85-2.06,1.62-3.17,2.32l-2.62,1.65c-.43.27-.88.52-1.32.79-.96.61-1.99,1.09-3.05,1.48l-1.14.41c-1.23.06-2.41.22-3.58.13l-2.35-.19c-1.2-.1-2.37-.46-3.41-1.08l-2.13-1.25c-1.19-.7-2.16-1.72-2.79-2.95l-1.82-3.54c-.54-1.06-.87-2.22-.95-3.41l-.22-3.06c-.16-2.18-.11-4.37.14-6.55l.34-2.98c.1-.91.24-1.83.4-2.73l.5-2.85c.36-2.06.86-4.09,1.5-6.08l.68-2.14Z"/>
                <path id="musculus_brachialis_right" d="M351.3,230.82l3.09,6.34,1.11,2.07c1.68,3.13,3.7,6.07,6.01,8.77l1.96,2.28,8.93,10.06c1.01,1.13,1.95,2.33,2.81,3.57l2.09,3c1.31,1.89,2.5,3.86,3.54,5.92l2.26,4.45,5.02,10.64,2.56,5.06c.56,1.11,1.09,2.24,1.57,3.39l3.1,7.3,5.02,13.62,2.89,7.32,2.18,4.99c.87,2,1.82,3.98,2.83,5.92l1.45,2.78c.11.22.11.48-.02.69l-1.08,1.78c-.96,1.59-2.08,3.07-3.36,4.41l-1.84,1.95c-.44.47-.99.81-1.6,1l-1.42.45c-.93.29-1.89.45-2.87.45h-.84c-.9,0-1.79-.09-2.67-.26l-1.46-.29c-.4-.08-.74-.33-.94-.68l-1.67-2.93c-.32-.57-.69-1.11-1.1-1.63l-.46-.58c-1.49-1.88-3.15-3.62-4.96-5.2l-3.5-3.07-9.36-8.17-7.83-6.72-4.85-5.19-6.3-8.34-3.41-5.21c-1.18-1.8-2.26-3.67-3.23-5.6l-4.16-8.26-3.15-5.82c-.51-.94-1.05-1.86-1.62-2.77l-2.94-4.68c-.82-1.31-1.71-2.58-2.65-3.8l-3.44-4.46-3.29-4.72,2.57,2.18c1,.85,2.06,1.62,3.17,2.32l2.62,1.65c.43.27.88.52,1.32.79.96.61,1.99,1.09,3.05,1.48l1.14.41c1.23.06,2.41.22,3.58.13l2.35-.19c1.2-.1,2.37-.46,3.41-1.08l2.13-1.25c1.19-.7,2.16-1.72,2.79-2.95l1.82-3.54c.54-1.06.87-2.22.95-3.41l.22-3.06c.16-2.18.11-4.37-.14-6.55l-.34-2.98c-.1-.91-.24-1.83-.4-2.73l-.5-2.85c-.36-2.06-.86-4.09-1.5-6.08l-.68-2.14Z"/>
            </g>
            <g >
                <path id="hand_left" d="M35.32,348.48l-.57,1.54c-.24.65-.38,1.33-.43,2.01l-.02.35c-.06.93.16,1.85.63,2.66h0c.61,1.06.97,2.24,1.06,3.46l.11,1.53-.37,2.93c-.12.95-.52,1.84-1.16,2.55l-.23.26c-.84.94-1.42,2.07-1.71,3.3l-.65,2.77-.57,2.7c-.21.97-.34,1.95-.39,2.93l-.25,4.42c-.01.22-.03.45-.06.67l-.7,5.28c-.03.23-.07.46-.12.69l-.51,2.43c-.12.58-.42,1.1-.85,1.5h0c-.65.6-1.49.96-2.37,1.02l-.9.06c-.38.03-.77-.02-1.14-.14l-.13-.04c-.32-.1-.61-.29-.84-.53l-.91-.97c-.63-.68-1.05-1.53-1.2-2.45l-.29-1.8-.73-3.96c-.08-.41-.11-.82-.11-1.24v-5.24c0-.19-.22-.29-.36-.16l-2.03,1.76c-.32.28-.56.63-.71,1.02l-.61,1.67.25,1.1c.31,1.36.28,2.77-.07,4.12l-.18.67-1.26,3.99c-.2.63-.35,1.27-.46,1.92l-.41,2.5c-.14.84-.21,1.7-.21,2.55v9.2c0,.71-.18,1.41-.54,2.03l-.24.43c-.42.74-1.16,1.24-2.01,1.35l-1.58.21-.47-3.02c-.17-1.1-.26-2.22-.26-3.34v-5.27c0-1.39.18-2.78.54-4.12l.58-2.17c.26-.99.62-1.95,1.07-2.86l1.25-2.58c.38-.78.81-1.52,1.3-2.24l1.42-2.08,1.26-2.29-1.69,2.99-1.36,1.86-1.81,3.5-.64,1.52-1.16,3.17-.57,2.83-.28,4.95v4.45l.62,3.88-.21,2.2c-.09.95-.54,1.84-1.27,2.47h0c-.27.24-.58.43-.91.56l-1.08.44c-.48.2-1.03.17-1.49-.08l-.62-.33c-.23-.13-.41-.34-.49-.59l-1.06-3.49c-.23-.75-.42-1.51-.57-2.28l-.37-1.86c-.33-1.65-.53-3.33-.59-5.02l-.13-3.95c-.04-1.29,0-2.58.11-3.87l.38-4.13.83-8.45.3-4.09c.07-.93.34-1.84.8-2.66l1.67-2.99,2.54-5.52,2.57-5.87,1.76-4.46c.25-.63.47-1.28.67-1.93l1.74-5.77c.22-.71.45-1.42.71-2.12l2.5-6.75.25-.81,1.27,1.77.9,1.43c.44.7.94,1.37,1.5,1.99l1.43,1.6c.36.4.74.77,1.16,1.12l.65.55c.5.42,1.07.73,1.69.93l.18.06c.75.24,1.53.39,2.32.47l.76.07c.84.08,1.68.04,2.51-.11l1.94-.35c.11-.02.22-.04.33-.07l1.36-.32Z"/>
                <path id="hand_right" d="M391.83,348.16l.57,1.54c.24.65.38,1.33.43,2.01l.02.35c.06.93-.16,1.85-.63,2.66h0c-.61,1.06-.97,2.24-1.06,3.46l-.11,1.53.37,2.93c.12.95.52,1.84,1.16,2.55l.23.26c.84.94,1.42,2.07,1.71,3.3l.65,2.77.57,2.7c.21.97.34,1.95.39,2.93l.25,4.42c.01.22.03.45.06.67l.7,5.28c.03.23.07.46.12.69l.51,2.43c.12.58.42,1.1.85,1.5h0c.65.6,1.49.96,2.37,1.02l.9.06c.38.03.77-.02,1.14-.14l.13-.04c.32-.1.61-.29.84-.53l.91-.97c.63-.68,1.05-1.53,1.2-2.45l.29-1.8.73-3.96c.08-.41.11-.82.11-1.24v-5.24c0-.19.22-.29.36-.16l2.03,1.76c.32.28.56.63.71,1.02l.61,1.67-.25,1.1c-.31,1.36-.28,2.77.07,4.12l.18.67,1.26,3.99c.2.63.35,1.27.46,1.92l.41,2.5c.14.84.21,1.7.21,2.55v4.7s0,4.51,0,4.51c0,.71.18,1.41.54,2.03l.24.43c.42.74,1.16,1.24,2.01,1.35l1.58.21.47-3.02c.17-1.1.26-2.22.26-3.34v-5.27c0-1.39-.18-2.78-.54-4.12l-.58-2.17c-.26-.99-.62-1.95-1.07-2.86l-1.25-2.58c-.38-.78-.81-1.52-1.3-2.24l-1.42-2.08-1.26-2.29,1.69,2.99,1.36,1.86,1.81,3.5.64,1.52,1.16,3.17.57,2.83.28,4.95v4.45s-.62,3.88-.62,3.88l.21,2.2c.09.95.54,1.84,1.27,2.47h0c.27.24.58.43.91.56l1.08.44c.48.2,1.03.17,1.49-.08l.62-.33c.23-.13.41-.34.49-.59l1.06-3.49c.23-.75.42-1.51.57-2.28l.37-1.86c.33-1.65.53-3.33.59-5.02l.13-3.95c.04-1.29,0-2.58-.11-3.87l-.38-4.13-.83-8.45-.3-4.09c-.07-.93-.34-1.84-.8-2.66l-1.67-2.99-2.54-5.52-2.57-5.87-1.76-4.46c-.25-.63-.47-1.28-.67-1.93l-1.74-5.77c-.22-.71-.45-1.42-.71-2.12l-2.5-6.75-.25-.81-1.27,1.77-.9,1.43c-.44.7-.94,1.37-1.5,1.99l-1.43,1.6c-.36.4-.74.77-1.16,1.12l-.65.55c-.5.42-1.07.73-1.69.93l-.18.06c-.75.24-1.53.39-2.32.47l-.76.07c-.84.08-1.68.04-2.51-.11l-1.94-.35c-.11-.02-.22-.04-.33-.07l-1.36-.32Z"/>
            </g>
                <g id="obliques" onClick={()=>{navigate("/exercises/obliques")}} className={`${primary=="obliques"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`}>
                <path d="M132.52,222.25l-.08.96c-.24,2.78.05,5.58.85,8.26l.4,1.35,1.83,5.91c.29.93.6,1.85.93,2.76l1.04,2.84c.47,1.28.98,2.55,1.54,3.81l2.73,6.21,2.14,5.05c.7,1.64,1.47,3.25,2.32,4.82l.71,1.31c.7,1.3,1.32,2.65,1.85,4.03h0c1.19,3.12,2.09,6.34,2.71,9.62h0c.58,3.09.89,6.22.94,9.36l.02,1.24c.03,2.14-.02,4.27-.16,6.4l-.2,3.02c-.2,2.99-.56,5.97-1.07,8.92l-.34,1.96c-.37,2.1-.63,4.23-.78,6.36l-.35,4.74c-.08,1.08-.19,2.15-.33,3.22l-.51,3.97c-.22,1.68-.34,3.38-.38,5.07l-.03,1.34c-.01.49.34.92.83.99l2.08.33c.12.02.24.03.36.03h3.27c.62,0,1.23-.13,1.79-.39l1.3-.59c.34-.16.69-.3,1.04-.43l2.89-1.1c1.19-.45,2.28-1.12,3.21-1.97l2.12-1.93c1.49-1.36,2.72-2.97,3.64-4.77l2.28-4.47c.28-.54.49-1.12.62-1.71l1.19-5.22c.26-1.14.39-2.31.39-3.49v-8.22c0-1.68-.05-3.36-.16-5.04l-.5-7.88c-.13-1.97-.12-3.95.02-5.92l.47-6.59c.11-1.58.32-3.15.62-4.7l1.09-5.67.86-4.56c.56-2.97.84-5.99.84-9.01v-8.31l-.35-2.35c-.16-1.06-.7-2.02-1.54-2.69-1.98-1.6-5.56-4.5-5.69-4.75-.14-.27-8.15-7.6-11.28-10.45-.83-.75-1.63-1.53-2.41-2.34l-9.48-9.78-6.47-6.17-4.22-4.27c-1.12-1.14-2.3-2.22-3.53-3.25l-2.23-1.86,1.27,3.39c.3.82.52,1.66.66,2.52l.32,2.11c.13.83.19,1.67.18,2.51l-.05,5.76-.03.74c-.11,2.41-.38,4.81-.82,7.18l-.33,1.79Z"/>
                <path d="M294.64,221.93l.08.96c.24,2.78-.05,5.58-.85,8.26l-.4,1.35-1.83,5.91c-.29.93-.6,1.85-.93,2.76l-1.04,2.84c-.47,1.28-.98,2.55-1.54,3.81l-2.73,6.21-2.14,5.05c-.7,1.64-1.47,3.25-2.32,4.82l-.71,1.31c-.7,1.3-1.32,2.65-1.85,4.03h0c-1.19,3.12-2.09,6.34-2.71,9.62h0c-.58,3.09-.89,6.22-.94,9.36l-.02,1.24c-.03,2.14.02,4.27.16,6.4l.2,3.02c.2,2.99.56,5.97,1.07,8.92l.34,1.96c.37,2.1.63,4.23.78,6.36l.35,4.74c.08,1.08.19,2.15.33,3.22l.51,3.97c.22,1.68.34,3.38.38,5.07l.03,1.34c.01.49-.34.92-.83.99l-2.08.33c-.12.02-.24.03-.36.03h-3.27c-.62,0-1.23-.13-1.79-.39l-1.3-.59c-.34-.16-.69-.3-1.04-.43l-2.89-1.1c-1.19-.45-2.28-1.12-3.21-1.97l-2.12-1.93c-1.49-1.36-2.72-2.97-3.64-4.77l-2.28-4.47c-.28-.54-.49-1.12-.62-1.71l-1.19-5.22c-.26-1.14-.39-2.31-.39-3.49v-8.22c0-1.68.05-3.36.16-5.04l.5-7.88c.13-1.97.12-3.95-.02-5.92l-.47-6.59c-.11-1.58-.32-3.15-.62-4.7l-1.09-5.67-.86-4.56c-.56-2.97-.84-5.99-.84-9.01v-8.31s.35-2.35.35-2.35c.16-1.06.7-2.02,1.54-2.69,1.98-1.6,5.56-4.5,5.69-4.75.14-.27,8.15-7.6,11.28-10.45.83-.75,1.63-1.53,2.41-2.34l9.48-9.78,6.47-6.17,4.22-4.27c1.12-1.14,2.3-2.22,3.53-3.25l2.23-1.86-1.27,3.39c-.3.82-.52,1.66-.66,2.52l-.32,2.11c-.13.83-.19,1.67-.18,2.51l.05,5.76.03.74c.11,2.41.38,4.81.82,7.18l.33,1.79Z"/>
            </g>
                <path id="quads "  onClick={()=>{navigate("/exercises/quads")}} className={`${primary=="quads"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`} d="M297.14,460.86l-.67-15.91-.32-7.62c-.13-3.03-.39-6.05-.8-9.06l-.5-3.74-1.9-14.44-1.09-5.97-1.05-5.78-1.18-5.87-.66-3.4c-.33-1.69-.7-3.36-1.13-5.03l-.89-3.47-1.24-5.14-.28-1.08c-.86-3.34-1.55-6.72-2.06-10.14l-.02-.15-.16-.78c-.57-2.73-1.01-5.49-1.31-8.26l-.03-.23c-.11-.97-.24-1.93-.4-2.89l-.78-4.63-.67-6.12c-.11-.99-.24-1.97-.41-2.95l-.38-2.24-.59-.56-4.32.44-6,2.54-8.17,4.85-6.81,5.79-6.72,7.57-2.27,3.73c-2.45,4.03-4.45,8.32-5.96,12.78l-1.9,5.62-4.34,13.11-1.79,5.34c-1.18,3.52-2.68,6.93-4.48,10.19l-1.8,3.26c-.62,1.13-1.48,2.12-2.51,2.91l-.38.29c-1.03.67-1.62.91-3.12,1.86l-1.34.57c-.61.17-1,.35-2.68.79v-.07c-2.57-.06-2.99-.61-3.6-.78l-.84-.24c-1.3-.38-2.52-.99-3.6-1.81l-.38-.29c-1.03-.78-1.88-1.77-2.51-2.91l-1.8-3.26c-1.8-3.26-3.3-6.67-4.48-10.19l-1.79-5.34-4.34-13.11-1.9-5.62c-1.51-4.47-3.51-8.76-5.96-12.78l-2.27-3.73-6.72-7.57-6.81-5.79-8.17-4.85-6-2.54-4.32-.44-.59.56-.38,2.24c-.16.98-.3,1.96-.41,2.95l-.67,6.12-.78,4.63c-.16.96-.29,1.92-.4,2.89l-.03.23c-.3,2.77-.74,5.53-1.31,8.26l-.16.78-.02.15c-.52,3.41-1.21,6.79-2.06,10.14l-.28,1.08-1.24,5.14-.89,3.47c-.43,1.66-.8,3.34-1.13,5.03l-.66,3.4-1.18,5.87-1.05,5.78-1.09,5.97-1.9,14.44-.5,3.74c-.4,3.01-.67,6.03-.8,9.06l-.32,7.62-.67,15.91c-.12,2.84-.13,5.69-.04,8.53l.28,8.59.08,4.13c.06,3.32.28,6.63.64,9.93l.47,4.24,1.2,9.03c.28,2.09.62,4.18,1.04,6.25l1.08,5.39c.34,1.71.74,3.41,1.19,5.09l2.16,8c.26.98.69,1.9,1.25,2.74l1.87,2.76c.44.65,1.05,1.17,1.75,1.52l1.31.64c.61.3,1.28.45,1.96.45h.79c.81,0,1.6-.17,2.34-.51l1.72-.79c.22-.1.45-.17.69-.2l.11-.02c.91-.12,1.83.04,2.64.48.52.28.93.73,1.16,1.27l.43,1.02c.27.63.48,1.28.64,1.95l1.16,4.9c.26,1.11.63,2.2,1.11,3.24l.73,1.62c.12.26.26.51.41.74l.57.86c.36.55.84,1.01,1.39,1.36l2.62,1.67c.8.51,1.73.78,2.67.78h2.98l1.83-.21c1.2-.14,2.34-.58,3.33-1.29l.56-.4c.44-.32.84-.7,1.18-1.13l1.74-2.21c.38-.48.72-.98,1.02-1.51l2-3.46c.46-.8.87-1.63,1.21-2.48l1.86-4.59.07-.18c1.48-3.5,2.55-7.16,3.21-10.91l1.4-7.98.9-6.83c.36-2.77.91-5.51,1.62-8.2l2.84-10.67,1.36-5.28c1.42-5.49,3.16-10.9,5.23-16.18l1.16-2.96,3.49-11.49.06-.21c2.12-7.68,5.9-14.23,7.09-22.11l.45-1.83v-17.74,19.51c1.19,7.88,4.53,14.17,6.64,21.86l.06.21,3.49,11.49,1.16,2.96c2.06,5.29,3.81,10.69,5.23,16.18l1.36,5.28,2.84,10.67c.72,2.7,1.26,5.44,1.62,8.2l.9,6.83,1.4,7.98c.66,3.75,1.73,7.4,3.21,10.91l.07.18,1.86,4.59c.35.85.75,1.68,1.21,2.48l2,3.46c.3.53.65,1.03,1.02,1.51l1.74,2.21c.34.43.73.81,1.18,1.13l.56.4c.98.71,2.13,1.15,3.33,1.29l1.83.21h2.98c.95,0,1.87-.27,2.67-.78l2.62-1.67c.55-.35,1.03-.82,1.39-1.36l.57-.86c.16-.24.3-.49.41-.74l.73-1.62c.47-1.04.84-2.13,1.11-3.24l1.16-4.9c.16-.67.37-1.32.64-1.95l.43-1.02c.23-.54.64-.99,1.16-1.27.81-.44,1.73-.61,2.64-.48l.11.02c.24.03.47.1.69.2l1.72.79c.73.33,1.53.51,2.34.51h.79c.68,0,1.35-.15,1.96-.45l1.31-.64c.71-.34,1.31-.87,1.75-1.52l1.87-2.76c.57-.84.99-1.76,1.25-2.74l2.16-8c.45-1.68.85-3.38,1.19-5.09l1.08-5.39c.41-2.07.76-4.16,1.04-6.25l1.2-9.03.47-4.24c.37-3.3.58-6.61.64-9.93l.08-4.13.28-8.59c.09-2.84.08-5.69-.04-8.53Z"/>
            <g >
                <path id="knee_left" d="M186.77,535.83l-3.38,8.05c-.31.74-.67,1.46-1.08,2.15l-2.86,4.82c-.41.69-.88,1.34-1.4,1.95l-1.04,1.22c-.43.5-.94.92-1.52,1.24l-.78.44c-.77.43-1.63.7-2.51.78l-2.99.27c-.65.06-1.55.26-2.17.07l-1.14-.37c-1.17-.36-2.51-1.39-3.42-2.2l-1.14-1.01c-.68-.61-1.23-1.36-1.58-2.2l-1.3-3.03c-.22-.52-.4-1.06-.54-1.61l-.95-3.83c-.35-1.41-.87-2.77-1.56-4.05l-.48-.9c-.09-.16-.23-.27-.4-.33l-1.17-.14c-.5-.16-1.03-.17-1.54-.03l-2.9,1.02c-.45.15-2.1.28-2.57.22l-1.26-.16c-.31-.04-.6-.13-.88-.27l-1.18-.6c-.57-.29-1.06-.71-1.42-1.24l-2.82-4.02-.42,7.14-.33,4.5c-.23,3.06-.68,6.09-1.36,9.08l-.29,1.29c-.29,1.3-.5,2.61-.61,3.93l-.47,5.64-.26,3.97c-.01.22.11.43.32.52l1.61.69c.97.42,1.84,1.03,2.55,1.79l1.64,1.75c.75.8,1.42,1.68,1.98,2.62l1.74,2.91c.38.63.8,1.23,1.25,1.81l1.41,1.77c.83,1.04,1.87,1.89,3.06,2.48.41.21.85.37,1.29.48l2.52.64c.12.03.25.06.37.08l1.43.24c.81.14,1.63.13,2.44-.02l1.07-.2c.84-.16,1.66-.4,2.45-.72l1.17-.47c1.1-.45,2.13-1.06,3.04-1.82l3.15-2.62,2.34-2.34c1.24-1.24,2.31-2.64,3.19-4.16l2.96-5.12,3.38-6.46c.89-1.7,1.62-3.48,2.19-5.32l1.47-4.79c.22-.7.4-1.41.56-2.13l1.29-5.9c.32-1.45.39-2.94.21-4.41l-.37-3.11Z"/>
                <path id="knee_right_" d="M291.87,563.34l-.47-5.64c-.11-1.32-.31-2.64-.61-3.93l-.29-1.29c-.68-2.99-1.13-6.03-1.36-9.08l-.33-4.5-.42-7.14-2.82,4.02c-.37.52-.86.95-1.42,1.24l-1.18.6c-.27.14-.57.23-.88.27l-1.26.16c-.47.06-2.11-.08-2.57-.22l-2.9-1.02c-.51-.14-1.04-.13-1.54.03l-1.17.14c-.17.05-.31.17-.4.33l-.48.9c-.69,1.28-1.21,2.64-1.56,4.05l-.95,3.83c-.14.55-.32,1.09-.54,1.61l-1.3,3.03c-.36.84-.9,1.59-1.58,2.2l-1.14,1.01c-.92.81-2.26,1.83-3.42,2.2l-1.14.37c-.62.19-1.52-.01-2.17-.07l-2.99-.27c-.88-.08-1.74-.35-2.51-.78l-.78-.44c-.58-.32-1.09-.74-1.52-1.24l-1.04-1.22c-.52-.61-.99-1.26-1.4-1.95l-2.86-4.82c-.41-.69-.77-1.41-1.08-2.15l-3.38-8.05-.37,3.11c-.18,1.47-.1,2.96.21,4.41l1.29,5.9c.16.72.34,1.43.56,2.13l1.47,4.79c.57,1.84,1.3,3.62,2.19,5.32l3.38,6.46,2.96,5.12c.88,1.52,1.95,2.92,3.19,4.16l2.34,2.34,3.15,2.62c.91.76,1.94,1.37,3.04,1.82l1.17.47c.79.32,1.61.56,2.45.72l1.07.2c.81.15,1.63.16,2.44.02l1.43-.24c.13-.02.25-.05.37-.08l2.52-.64c.45-.11.88-.28,1.29-.48,1.19-.59,2.23-1.44,3.06-2.48l1.41-1.77c.46-.57.87-1.18,1.25-1.81l1.74-2.91c.57-.94,1.23-1.82,1.98-2.62l1.64-1.75c.72-.77,1.59-1.38,2.55-1.79l1.61-.69c.2-.09.33-.29.32-.52l-.26-3.97Z"/>
            </g>
            <g >
                <path id="musculus_tibialis_anterior_left" d="M175.12,616.71c-.07-1.18-.18-2.35-.32-3.52l-1.02-8.52-.91-9.15-.73-8.4c-.09-1.07-.13-2.15-.11-3.23l.06-3.2c.01-.86.1-1.72.25-2.56l.26-1.45-3.67,3.36c-.32.29-.65.56-.99.82l-2.03,1.52c-1,.75-2.12,1.35-3.3,1.76l-1.48.52c-1.11.39-2.26.63-3.44.71h-.11c-.73.06-1.46,0-2.18-.14l-1.54-.32c-.66-.14-1.29-.36-1.89-.67l-2.31-1.17c-.83-.42-1.55-1.04-2.11-1.79l-3.5-4.75-2.81-3.91c-.82-1.13-1.84-2.1-3.02-2.84l-3.04-1.92-.89,1.6-1.35,3.93-1.19,4.12c-.46,1.59-.86,3.2-1.2,4.82l-.8,3.79-1.24,5.2-.86,4.26c-.19.94-.35,1.9-.46,2.85l-.62,4.98-.34,2.64c-.28,2.19-.44,4.4-.48,6.61l-.1,5.74-.1,3.34c-.06,2.03-.04,4.06.08,6.09l.31,5.61.08,3.78c.05,2.52.25,5.04.59,7.53l.28,2.06.61,4.98.86,6.16.47,5.32c.13,1.52.32,3.03.56,4.53l.47,3.01.96,9.51.8,8.62.29,9-.11,6.52c-.03,2.11-.27,4.22-.7,6.29l-.11.53c-.29,1.38-.49,2.78-.62,4.18l-.28,3c-.19,2.12-.86,4.17-1.96,6l-3.93,7.09-2.37,3.58c-.5.76-.98,1.54-1.44,2.33l-2.08,3.62c-1.07,1.87-2.41,3.56-3.98,5.04l-5.29,4.96-4.85,4.93c-1.05,1.07-1.93,2.3-2.59,3.65l-1.02,2.08c-.27.55-.41,1.15-.41,1.76v2c0,.51.22.99.61,1.33l1.33,1.14c.39.33.76.68,1.12,1.05l2.71,2.74,1.16,1.3c.7.78,1.62,1.31,2.63,1.54l.57.13c.39.09.75.24,1.09.45l1.54.96.62.29c.43.21.91.31,1.39.31h.35c.87,0,1.72-.27,2.43-.78l.28-.2.6.13c.3.06.57.2.8.4l1.47,1.32.77.25c.36.11.72.19,1.1.22l1.19.1c.11,0,.22.01.33.01h1.22c.6,0,1.2-.12,1.76-.34l.26-.11c.73-.29,1.4-.7,2.01-1.19l2.82-2.29,1.6-2.16c1.06-1.43,2.46-2.59,4.07-3.36l.16-.08c.6-.29,1.14-.68,1.6-1.16l1.28-1.33c.32-.33.6-.71.84-1.11l.43-.74c.8-1.37,1.29-2.9,1.41-4.48l.17-2.15c.08-1.03.57-1.98,1.35-2.64l4.2-3.56,2.97-2.15c1.42-1.03,2.65-2.28,3.64-3.72.24-.35.37-.78.35-1.2l-.3-7.73c-.04-.98-.14-1.95-.29-2.92l-.47-2.9c-.17-1.05-.19-2.12-.05-3.17l.45-3.47c.08-.6.22-1.19.43-1.77l1.48-4.09.25-1.08c.28-1.19.4-2.42.35-3.64l-.45-12.85c-.02-.59-.02-1.17,0-1.76l.19-6.28c.07-2.44.36-4.86.86-7.25l.81-3.85,1.24-5.87,1.66-7.31,2.07-7.85,2.27-8.01,1.49-4.68c.57-1.81,1.28-3.57,2.1-5.27l1.69-3.48c.32-.65.61-1.31.87-1.99l1.34-3.38c.34-.86.55-1.76.62-2.68l.34-4.48c.15-1.96.16-3.93.03-5.89l-.26-4.07Z"/>
                <path id="musculus_tibialis_anterior_right" d="M326.6,761.44l-1.02-2.08c-.66-1.35-1.54-2.58-2.59-3.65l-4.85-4.93-5.29-4.96c-1.57-1.47-2.91-3.17-3.98-5.04l-2.08-3.62c-.45-.79-.93-1.57-1.44-2.33l-2.37-3.58-3.93-7.09c-1.09-1.83-1.76-3.88-1.96-6l-.28-3c-.13-1.41-.34-2.8-.62-4.18l-.11-.53c-.43-2.07-.66-4.18-.7-6.29l-.11-6.52.29-9,.8-8.62.96-9.51.47-3.01c.24-1.5.42-3.01.56-4.53l.47-5.32.86-6.16.61-4.98.28-2.06c.34-2.5.54-5.01.59-7.53l.08-3.78.31-5.61c.11-2.03.14-4.06.08-6.09l-.1-3.34-.1-5.74c-.04-2.21-.2-4.42-.48-6.61l-.34-2.64-.62-4.98c-.12-.96-.27-1.91-.46-2.85l-.86-4.26-1.24-5.2-.8-3.79c-.34-1.62-.74-3.23-1.2-4.82l-1.19-4.12-1.35-3.93-.89-1.6-3.04,1.92c-1.18.75-2.21,1.71-3.02,2.84l-2.81,3.91-3.5,4.75c-.55.75-1.28,1.36-2.11,1.79l-2.31,1.17c-.6.3-1.23.53-1.89.67l-1.54.32c-.71.15-1.45.2-2.18.15h-.11c-1.17-.09-2.33-.33-3.44-.72l-1.48-.52c-1.19-.41-2.3-1.01-3.3-1.76l-2.03-1.52c-.34-.26-.67-.53-.99-.82l-3.67-3.36.26,1.45c.15.85.24,1.7.25,2.56l.06,3.2c.02,1.08-.02,2.16-.11,3.23l-.73,8.4-.91,9.15-1.02,8.52c-.14,1.17-.25,2.35-.32,3.52l-.26,4.07c-.12,1.96-.11,3.93.03,5.89l.34,4.48c.07.92.28,1.82.62,2.68l1.34,3.38c.27.67.56,1.34.87,1.99l1.69,3.48c.83,1.71,1.53,3.47,2.1,5.27l1.49,4.68,2.27,8.01,2.07,7.85,1.66,7.31,1.24,5.87.81,3.85c.5,2.39.79,4.81.86,7.25l.19,6.28c.02.59.02,1.17,0,1.76l-.45,12.85c-.04,1.22.08,2.45.35,3.64l.25,1.08,1.48,4.09c.21.57.35,1.16.43,1.77l.45,3.47c.14,1.05.12,2.12-.05,3.17l-.47,2.9c-.16.97-.25,1.94-.29,2.92l-.3,7.73c-.02.43.11.85.35,1.2,1,1.44,2.23,2.69,3.64,3.72l2.97,2.15,4.2,3.56c.79.67,1.27,1.62,1.35,2.64l.17,2.15c.12,1.58.6,3.11,1.41,4.48l.43.74c.24.4.52.77.84,1.11l1.28,1.33c.46.48,1,.87,1.6,1.16l.16.08c1.61.77,3,1.93,4.07,3.36l1.6,2.16,2.82,2.29c.61.49,1.29.89,2.01,1.19l.26.11c.56.23,1.16.34,1.76.34h1.22c.11,0,.22,0,.33-.01l1.19-.1c.37-.03.74-.1,1.1-.22l.77-.25,1.47-1.32c.23-.2.5-.34.8-.4l.6-.13.28.2c.71.51,1.56.78,2.43.78h.35c.48,0,.96-.11,1.39-.31l.62-.29,1.54-.96c.33-.21.7-.36,1.09-.45l.57-.13c1.02-.23,1.94-.77,2.63-1.54l1.16-1.3,2.71-2.74c.36-.36.74-.71,1.12-1.05l1.33-1.14c.39-.33.61-.82.61-1.33v-2c0-.61-.14-1.21-.41-1.76Z"/>
            </g>
                <g id="abs" onClick={()=>{navigate("/exercises/abs")}} className={`${primary=="abs"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`}>
                <path id="musculus_rectus_abdominis-2" d="M212.2,378.84l1.1.16,1.78-.38c.5-.11.96-.32,1.36-.63l1.43-1.1,1.78-1.44c.74-.6,1.42-1.26,2.04-1.98l.1-.12c1.5-1.75,2.93-3.55,4.3-5.41l1.31-1.77,2.4-3.31c.89-1.23,1.65-2.54,2.27-3.92l1.58-3.54,1.4-2.76c.57-1.13,1.08-2.3,1.51-3.5l.84-2.33,2.21-5.19,1.87-8.43,1.23-6,.44-2.84c.47-3.07.8-6.16.98-9.27l.15-2.66.64-8.47.38-8.64.64-8.85.47-14.64.34-9.7.26-10.81v-6.77s.98-6.77.98-6.77l1.36-4.94.62-3.31c.18-.95.08-1.93-.28-2.83l-.36-.89c-.3-.75-.75-1.43-1.32-2.01l-2.29-2.3-3.28-2.31-6.46-2.52-4.07-1.58c-1.26-.49-2.54-.9-3.85-1.24l-2.74-.71c-.49-.13-1-.2-1.51-.22l-3.71-.12c-.64-.02-1.28.06-1.89.23l-2,.55c-.8.22-1.51.67-2.05,1.3l-1.41,1.64v2.76h0s0-2.76,0-2.76l-2.23-2.6-4.15-1.15-5.44.18-5.44,1.4-5.96,2.31-4.41,1.72c-1.37.53-2.66,1.23-3.86,2.08l-.72.51c-.5.35-.96.74-1.39,1.18l-1.75,1.76c-.5.5-.9,1.1-1.16,1.77l-.51,1.27c-.3.74-.38,1.55-.23,2.33l.67,3.57.91,3.3c.3,1.09.53,2.2.69,3.31l.47,3.27c.17,1.21.26,2.43.26,3.65v4.93l.26,10.81.34,9.7.47,14.64.64,8.85.38,8.64.64,8.47.21,3.68c.14,2.42.4,4.84.77,7.24l.59,3.84,1.23,6,1.45,6.51c.28,1.27.68,2.52,1.19,3.72l1.44,3.39,1.49,4.13,2.26,4.47,1.79,4.01c.48,1.07,1.07,2.09,1.75,3.03l2.71,3.72,2.38,3.22c.65.89,1.34,1.75,2.06,2.59l1,1.17c.8.93,1.68,1.79,2.63,2.56l1.46,1.18,2.12,1.58,3.47.54h.08"/>
                <path d="M240.9,243.61l-3.5-1.23c-.25-.09-.5-.16-.76-.21l-4.25-.82-5.02-1.02-4.09-.66c-.28-.04-.56-.07-.84-.07h-3.65c-.66,0-1.31-.12-1.92-.36h0c-.62-.24-1.2-.6-1.69-1.05l-.24-.22c-.77-.71-1.32-1.64-1.57-2.67l-.11-.45c-.1-.41-.15-.83-.15-1.25v-6.36,6.36c0,.42-.05.84-.15,1.25l-.11.45c-.25,1.02-.79,1.95-1.57,2.67l-.24.22c-.49.45-1.07.81-1.69,1.05h0c-.61.24-1.26.36-1.92.36h-3.65c-.28,0-.56.02-.84.07l-4.09.66-5.02,1.02-4.25.82c-.26.05-.51.12-.76.21l-3.5,1.23"/>
                <line x1="213.11" y1="326.95" x2="213.11" y2="367.93"/>
                <path d="M232.61,245.05l-3.39-1.01c-.97-.29-1.96-.51-2.97-.66l-1.51-.22c-.96-.14-1.94-.21-2.91-.21h-1.03c-.93,0-1.86.09-2.76.28l-.63.13c-.78.16-1.51.52-2.12,1.04l-1.04.88c-.22.19-.43.39-.61.61l-.46.54c-.26.3-.4.69-.4,1.09v3.66s0-3.66,0-3.66c0-.4-.14-.79-.4-1.09l-.46-.54c-.19-.22-.39-.42-.61-.61l-1.04-.88c-.61-.52-1.34-.88-2.12-1.04l-.63-.13c-.91-.19-1.84-.28-2.76-.28h-1.03c-.97,0-1.95.07-2.91.21l-1.51.22c-1,.15-2,.37-2.97.66l-3.39,1.01"/>
                <path d="M239.2,273.84h-5.87s-7.02,0-7.02,0h-1.68c-1.21,0-2.41-.22-3.54-.64l-1.54-.57-3.06-1.05c-.68-.23-1.32-.57-1.9-1l-.84-.62c-.39-.29-.63-.75-.63-1.24v-10.14,10.14c0,.49-.23.95-.63,1.24l-.84.62c-.58.43-1.22.76-1.9,1l-3.06,1.05-1.54.57c-1.13.42-2.33.64-3.54.64h-14.57"/>
                <path d="M233.26,276.83l-3.91-.38-3.81-.56c-.88-.13-1.78-.19-2.67-.19h-3.76c-.6,0-1.2.09-1.78.27l-.83.26c-.29.09-.56.24-.78.44l-2.07,1.78c-.33.29-.53.71-.53,1.15v4.79s0-4.79,0-4.79c0-.44-.19-.86-.53-1.15l-2.07-1.78c-.23-.2-.5-.35-.78-.44l-.83-.26c-.58-.18-1.18-.27-1.78-.27h-3.76c-.89,0-1.79.06-2.67.19l-3.81.56-3.91.38"/>
                <path d="M237.15,305.25h-11.74s-5.72,0-5.72,0c-1.15,0-2.3-.23-3.36-.68l-.28-.12c-.35-.15-.67-.37-.93-.66l-1.19-1.33c-.53-.59-.83-1.36-.83-2.16v-7.12,7.12c0,.8-.29,1.57-.83,2.16l-1.19,1.33c-.26.29-.57.51-.93.66l-.28.12c-1.06.45-2.21.68-3.36.68h-17.46"/>
                <path d="M233.77,308.56h-4.91s-4.85.32-4.85.32l-4.74.76c-.54.09-1.06.24-1.56.47l-2,.9c-.71.32-1.33.81-1.82,1.42l-.07.09c-.46.58-.71,1.3-.71,2.04v4.09s0-4.09,0-4.09c0-.74-.25-1.46-.71-2.04l-.07-.09c-.48-.61-1.11-1.1-1.82-1.42l-2-.9c-.5-.22-1.02-.38-1.56-.47l-4.74-.76-4.85-.32h-4.91"/>
            </g>
            <path  d="M187.02,89.69l-.15,27.83.15,10.24v1.64c0,.69-.09,1.37-.28,2.04h0c-.2.72-.5,1.4-.89,2.04l-.09.14c-.67,1.1-1.49,2.11-2.44,2.98l-1.1,1c-.66.6-1.37,1.13-2.14,1.58l-1.56.92,3.44-.58c.8-.13,1.6-.22,2.41-.27l3.07-.17c.53-.03,1.05-.03,1.58,0l3.86.19c.35.02.69.04,1.04.08l2.94.31c1.16.12,2.3.4,3.38.82l1.78.7c.83.33,1.64.72,2.4,1.17l2.37,1.4c1.18.7,2.23,1.61,3.09,2.68l1.59,1.99c.41.51.78,1.06,1.09,1.63l.73,1.32,2.57-3.51,1.53-1.89c1.02-1.26,2.26-2.32,3.66-3.13l.52-.3c.71-.41,1.45-.79,2.2-1.12l.85-.37c1.9-.83,3.91-1.38,5.97-1.63l2.24-.27c.58-.07,1.15-.12,1.73-.15l4.2-.2c1.02-.05,2.05-.03,3.07.06l3.73.32c.82.07,1.63.22,2.41.45l1.34.39-5.62-3.7-3.03-3.62c-.29-.47-.44-1.01-.44-1.56l-.04-7.38.12-10.69-.74-11.9-.38-13.69-4.6,5.37c-.69.8-1.45,1.53-2.27,2.19l-2.5,1.98c-1.02.81-2.11,1.51-3.27,2.11l-3.11,1.62c-.91.48-1.87.87-2.85,1.17l-4.96,1.53c-.47.15-.96.23-1.46.26l-1.9.09c-.56.03-1.11-.04-1.65-.19l-4.19-1.2c-.63-.18-1.25-.42-1.84-.72l-5.12-2.56c-.87-.44-1.71-.94-2.5-1.51l-3.28-2.37c-.87-.63-1.67-1.36-2.39-2.16l-4.29-4.88v1.5Z"/>
            <path  d="M212.4,103.68l-2.02-.17-4.55-1.32-6.54-3.22c-.53-.26-1.03-.56-1.51-.9l-3.85-2.74c-.77-.55-1.48-1.18-2.12-1.87l-2.9-3.19c-1.2-1.31-2.07-2.89-2.54-4.59l-.92-3.31-.69-4.32c-.05-.3-.26-.54-.56-.63l-2.46-.71-2.05-.95c-.63-.29-1.13-.79-1.43-1.42l-.88-1.86c-.21-.44-.37-.91-.46-1.39l-.56-2.72c-.1-.48-.15-.98-.15-1.47v-8.35c0-1.38.53-2.7,1.49-3.69l.38-.39c.47-.48,1.09-.79,1.76-.86l1.78-.19c.43-.05.79-.36.89-.78l1.5-5.95c.07-.28.12-.56.15-.84l.64-5.96,1.11-6.89.85-2.05c.57-1.38,1.26-2.7,2.07-3.96l.71-1.1c.36-.56.81-1.04,1.35-1.44l.51-.37c.54-.4,1.15-.71,1.79-.91l.51-.16c.64-.2,1.32-.18,1.95.04l2.14.76,5.32,1.91,6.19,1.19,6.75-.09,3.81-.06c1.09-.02,2.16-.15,3.22-.41l3.69-.89,4.21-1.62,2.91-1.19c.41-.17.85-.23,1.29-.18l1.76.21c.53.06,1.03.27,1.45.61l.68.54c.25.2.46.46.61.75l1.22,2.41,1.42,2.59c.16.28.28.59.35.9l.72,2.85c.43,1.72.59,3.49.46,5.26l-.16,2.19c-.08,1.07-.08,2.15,0,3.22l.48,6.86c.06.86.5,1.65,1.2,2.16l1.49,1.08,1.77,1.31c.43.32.77.73,1,1.22l.62,1.33c.18.37.27.78.27,1.2v5.35c0,.66-.11,1.32-.31,1.95l-.47,1.43c-.1.31-.19.63-.27.95l-.82,3.5c-.09.38-.22.74-.38,1.09l-.91,1.92c-.21.45-.6.8-1.07.98l-1.05.38c-.28.1-.58.17-.88.2l-2.8.28c-.12.01-.21.1-.22.22l-.14,1.17c-.26,2.23-.73,4.44-1.4,6.59l-.2.63c-.38,1.22-1,2.35-1.83,3.32l-1.48,1.73-2.3,2.59c-.32.36-.68.7-1.05,1.01l-2.52,2.06c-.2.16-.4.31-.62.45l-4.03,2.55-4.98,2.23c-.41.18-.82.34-1.25.47l-3.59,1.11c-.26.08-.53.14-.8.17l-1.31.15c-.48.06-.97.06-1.46.03Z"/>
            <path  d="M181.41,53.36l-.11-5.66v-10.68l-.24-12.27.35-6.77,1.8-4.02,3.21-4.98,3.85-2.79,6.1-2.79,5.9-1.13,2.95,1.39,3.47-1.39,3.28-1.29,4.89-.47,4.55.21,4.26,1.23,2.3.89,3.45,1.02,2.72,1.53,3.26-.69,5.01-.48,3.8.19,3.67,1.15.29,1.28-5.04.77-6.03,1.82.29,1.21.61,1.15,1.28,1.34,1.47,1.76,1.28,1.05,1.18,1.88,1.69,3.13.96,5.2-.19,4.95-.22,5.46-.45,5.01-.61,5.43-2.17,4.09-.33-4.73-.2-4.72.24-4.43-.84-5.19-1.4-3.61-2.59-4.54-3.5-1.38-4.16,1.21-5.68,2.04-7.96,1.08-7.15.1-7-1.08-5.2-1.79-.91-.32c-1.29-.46-2.68-.58-4.04-.36l-1.21.2-3.42,3.44-2.18,4.23-1.11,4.88c-.27,1.19-.48,2.39-.63,3.6l-.28,2.27c-.16,1.3-.36,2.59-.59,3.88l-.51,2.82-1.44,4.58-.68.1Z"/>
                <g id="chest"  onClick={()=>{navigate("/exercises/chest")}} className={`${primary=="chest"?"fill-secondary-light":"fill-white hover:fill-secondary-transparent"}`}>
                <path id="pectoralis_major" d="M309.75,190.68c-.64-.23-1.28-.46-1.89-.76-.61-.29-1.21-.62-1.79-.97l-2.62-1.8c-.57-.39-1.12-.81-1.64-1.26l-4.05-3.47-4.79-4.47c-1.11-1.03-2.17-2.11-3.18-3.24l-3.46-3.85c-2.17-2.41-4.19-4.95-6.05-7.6l-.9-1.28c-1.45-2.06-3.03-4.03-4.74-5.89l-.76-.83c-1.34-1.47-2.77-2.86-4.26-4.17l-3.36-2.95c-.33-.29-.68-.56-1.05-.8-2.64-1.75-5.44-3.26-8.35-4.5l-.6-.26c-1.43-.61-2.89-1.17-4.36-1.69l-2.35-.82-2.04-.62c-.67-.2-1.35-.32-2.05-.36l-5.61-.32c-1.52-.09-3.04-.06-4.55.07l-5.34.47c-1.38.12-2.73.48-3.98,1.06l-5.26,2.44c-.83.39-1.57.96-2.14,1.68l-3.65,4.55c-.87,1.08-1.34,2.43-1.34,3.82v.32c0-1.39-.47-2.74-1.34-3.82l-3.65-4.55c-.58-.72-1.31-1.29-2.14-1.68l-5.26-2.44c-1.26-.58-2.6-.94-3.98-1.06l-5.34-.47c-1.51-.13-3.04-.16-4.55-.07l-5.61.32c-.69.04-1.38.16-2.05.36l-2.04.62-2.35.82c-1.47.52-2.93,1.08-4.36,1.69l-.6.26c-2.92,1.24-5.71,2.75-8.35,4.5-.37.24-.72.51-1.05.8l-3.36,2.95c-1.49,1.31-2.92,2.7-4.26,4.17l-.76.83c-1.71,1.86-3.29,3.83-4.74,5.89l-.9,1.28c-1.86,2.65-3.88,5.19-6.05,7.6l-3.46,3.85c-1.01,1.12-2.07,2.2-3.18,3.24l-4.79,4.47-4.05,3.47c-.53.45-1.07.87-1.64,1.26l-2.62,1.8c-.58.36-1.18.68-1.79.97-.61.29-1.25.53-1.89.76l-2.52.89,5.09-.24c2.45.08,4.86.68,7.05,1.77l2.82,1.39,2.94,2.37c1.18.95,2.29,1.98,3.32,3.09l4.92,5.26c1.27,1.36,2.62,2.65,4.05,3.85l1.96,1.65c1.63,1.38,3.44,2.53,5.39,3.42l.85.39c1.68.77,3.4,1.45,5.16,2.02l4.94,1.61,5.93.9c2.06.31,4.13.47,6.22.47h3.79c1.45,0,2.88-.27,4.23-.8l6.64-2.61,2.83-1.23c2.13-.93,4.09-2.2,5.81-3.77l2.82-2.57c1.55-1.42,3-2.95,4.32-4.59l.99-1.23c1.36-1.68,2.51-3.51,3.42-5.47l1.81-3.86c.92-1.97,1.4-4.11,1.4-6.29v-.32c0,2.17.48,4.32,1.4,6.29l1.81,3.86c.92,1.95,2.07,3.79,3.42,5.47l.99,1.23c1.32,1.64,2.77,3.17,4.32,4.59l2.82,2.57c1.72,1.57,3.68,2.84,5.81,3.77l2.83,1.23,6.64,2.61c1.35.53,2.78.8,4.23.8h3.79c2.08,0,4.16-.16,6.22-.47l5.93-.9,4.94-1.61c1.76-.57,3.48-1.25,5.16-2.02l.85-.39c1.94-.89,3.75-2.04,5.39-3.42l1.96-1.65c1.42-1.2,2.78-2.49,4.05-3.85l4.92-5.26c1.03-1.1,2.14-2.14,3.32-3.08l2.94-2.37,2.82-1.39c2.2-1.08,4.6-1.69,7.05-1.77l5.09.24-2.52-.89Z"/>
                <polyline points="213.58 186.11 213.58 187.56 213.58 170.63 213.58 152.89"/>
            </g>
        </svg>

    )
}