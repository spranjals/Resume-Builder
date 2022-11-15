import { SKILLS , CLEAR_SKILLS, MODIFY_SKILLS_COUNT} from "../../Constants/constant";
const initialState ={
    Data: [],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case SKILLS:
                return {
                    ...state,
                    Data: action.payload,

                }
            case MODIFY_SKILLS_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }

            case CLEAR_SKILLS:
                return {
                    Data: []
                }
            default:
                return state
         }

    }
 }