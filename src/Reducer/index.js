import { combineReducers } from "redux";
import educationData from "./Education/educationData";
import profileData from "./Profile/profileData";
import projectsData from "./Project/projectsData";
import skillsData from "./Skills/skillsData";
import socialData from "./Social/socialData";


export default combineReducers({
    Education : educationData,
    Profile: profileData,
    Skills: skillsData,
    Social: socialData,
    Project: projectsData
});
