import { EDUCATION, MODIFY_COUNT, MODIFY_PROJECTS_COUNT, MODIFY_SKILLS_COUNT, MODIFY_SOCIAL_COUNT, PROFILE, PROJECTS, SKILLS, SOCIALS } from "../Constants/constant";

export const SaveEducationData = (data) => dispatch =>{

    dispatch({
     type: EDUCATION,
     payload : data
    })
}

export const ModifyEducationCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_COUNT,
     payload: count
    })
   }

   export const ModifySkillsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_SKILLS_COUNT,
     payload: count
    })
   }
   export const ModifySocialsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_SOCIAL_COUNT,
     payload: count
    })
   }
   export const ModifyProjectsCount = (count) => dispatch =>{
    dispatch({
     type: MODIFY_PROJECTS_COUNT,
     payload: count
    })
   }
   export const SaveProfileData = (data) => dispatch =>{

    dispatch({
     type: PROFILE,
     payload : data
    })
}

export const SaveSocialData = (data) => dispatch =>{

    dispatch({
     type: SOCIALS,
     payload : data
    })
}

export const SaveSkillsData = (data) => dispatch =>{
    dispatch({
     type: SKILLS,
     payload : data
    })
}

export const SaveProjectData = (data) => dispatch =>{
    dispatch({
     type: PROJECTS,
     payload : data
    })
}