import React, { useEffect  , useRef} from 'react'
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import { useReactToPrint } from 'react-to-print';

import { 
    Paper , 
    Grid,
    Typography,
    Button
 } from '@material-ui/core';
import { createNonNullExpression } from 'typescript';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    ParentResumePaper: {
        margin: "auto",
        marginTop: "1%",
        textAlign: "left",
        padding: "15px",
        maxWidth: "1000px",
    
    },

    ParentResumeModel: {
        margin: "auto",
        marginTop: "1%",
        padding: "15px",
        maxWidth: "1000px",
        borderColor: "pink"
    
    },
    ParentSkillSection: {
        textAlign: "left"
    },
    profilePhoto: {
        textAlign: "left"
    },
    header: {
        textAlign: "left"
    },
    content: {
        textAlign: "left",
        margin: "8px 3px"
    },
  

  }));
const ResumeModel =  (props) => {
    const componentRef = useRef();

  

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const classes = useStyles();


return (
    <div>
         <Button color="secondary"  variant="contained" onClick={handlePrint}>Download / Preview</Button>
        <Paper className ={classes.ParentResumeModel} elevation={1}>
        <div ref={componentRef}  elevation={1} className ={classes.ParentResumePaper}>

            <Grid container spacing={3}>
                 {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                {/* PHOTO , NAME AND ADDRESS */}
                <Grid item xs={3}>
                    <div className={classes.profilePhoto}>
                    {props.profileData.Data ? <img src={props.profileData.Data.url}  alt="Please update image url" width="100px" heigh="100px"></img> :  null}
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={3}>  
                        <Grid item xs={12}>                  
                            <Typography variant="h4" component="h2">
                            {props.profileData.Data ? props.profileData.Data.fname : null}  {props.profileData.Data ? props.profileData.Data.lname : null}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" >
                               Address : {props.profileData.Data ? props.profileData.Data.address : null}
                             </Typography>
                             <Typography variant="subtitle1" >
                             Phone Number: {props.profileData.Data ? props.profileData.Data.phone : null}
                             </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                
                <Grid item xs={12}>
                <Grid container spacing={3}>  
                <Grid item xs={3}>
                <Grid container spacing={3}>  
                {/* Skills */}
                <Grid item xs={12}>
                    <div className={classes.ParentSkillSection}>
                    <Typography variant="h5" component="h2">
                                Skills
                     </Typography>
                     <Divider />
                     {props.SkillsFormData.Data && props.SkillsFormData.Data.length > 0 &&
                        props.SkillsFormData.Data.map(item => 
                            <li>
                                {item}
                            </li>
                          )
                     }
                    </div>

                </Grid>           
                </Grid>
                   
                </Grid>
                <Grid item xs={9}>
                <Grid container spacing={3}>  
                {/* Education */}
                <Grid item xs={12}> 
                    <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                             Education
                         </Typography>
                    </div>
                    <Divider />
                 
                    {props.educationFormData.Data && props.educationFormData.Data.length > 0 && 
                        props.educationFormData.Data.map(instance => 
                        <div className={classes.content}>
                        <Typography variant="h6" component="h2">
                            {instance.college ?instance.college :   null}
                       </Typography>
                       <Typography variant="body2" >
                      {instance.completionYear ?" Graduation Year : "+instance.completionYear :   null}
                        </Typography>
                        <Typography variant="body2">
                        {instance.courseName ?instance.courseName :   null}
                        </Typography>
                        <Typography variant="body2" >
                           {instance.percentage ? " Percentage : "+instance.percentage+"%":   null} 
                        </Typography>
                       </div>      
                        ) }
                   
                </Grid>
                 
                <Grid item xs={12}> 
                  {/* projects */}
                <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                            Mini Projects
                         </Typography>
                    </div>
                    <Divider />

                    {props.projectFormData.Data && props.projectFormData.Data.length > 0 && 
                        props.projectFormData.Data.map(instance => 
                            <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                            {instance.projectName ?instance.projectName :   null}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            {instance.description ?instance.description :   null}
                             </Typography>
                             <Typography variant="body2" gutterBottom>
                              {instance.techStack ? "Tech Stack : "+instance.techStack :   null}
                             </Typography>
                            </div>             
                        )}
                </Grid>
                {/* Social */}
                <Grid item xs={12}> 
                <div className={classes.ParentSkillSection}>
                    <Typography variant="h5" component="h2">
                               Social Links
                     </Typography>
                     <Divider />
                     {props.SocialFormData.Data && props.SocialFormData.Data.length > 0 &&
                        props.SocialFormData.Data.map(item => 
                            <li>
                                <a href={item} target="_blank">{item}</a>
                            </li>
                          )
                     }
                    </div>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
                </Grid>



            </Grid>
        </div>
        </Paper>
    </div>
)
} 

const mapStateToProps = (state) => ({

    educationFormData: state.Education,
    profileData : state.Profile,
    projectFormData: state.Project,
    SkillsFormData: state.Skills,
    SocialFormData: state.Social
  
  });

export default connect(mapStateToProps, {})(ResumeModel);
