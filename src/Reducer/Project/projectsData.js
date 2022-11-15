import {PROJECTS  , CLEAR_PROJECTS , MODIFY_PROJECTS_COUNT } from "../../Constants/constant";
const initialState ={
    Data: [{projectName: null , techStack : null , description: null} ],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case PROJECTS:
                return {
                    ...state,
                    Data: action.payload,
                }
            case MODIFY_PROJECTS_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }
           

            case CLEAR_PROJECTS:
                return {
                    
                }
            default:
                return state
         }

    }
    
        

 }