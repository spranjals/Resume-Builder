import { SOCIALS , CLEAR_SOCIALS, MODIFY_SOCIAL_COUNT} from "../../Constants/constant";
const initialState ={
    Data: [],
    Count: 1
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case SOCIALS:
                return {
                    ...state,
                    Data: action.payload,
                }
            case MODIFY_SOCIAL_COUNT:
                return {
                    ...state,
                    Count : action.payload
                }
            case CLEAR_SOCIALS:
                return {
                    Data: []
                }
            default:
                return state
         }

    }
 }