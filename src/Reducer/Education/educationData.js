import {EDUCATION  , CLEAR_EDUCATION ,MODIFY_COUNT } from "../../Constants/constant";
const initialState ={
    Data: [{courseName: null , completionYear: null, college: null , percentage: null }],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case EDUCATION:
                return {
                    ...state,
                    Data: action.payload,
                }
            case MODIFY_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }
           

            case CLEAR_EDUCATION:
                return {
                    
                }
            default:
                return state
         }

    }
    
        

 }