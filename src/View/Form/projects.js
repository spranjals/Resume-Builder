import React, { useState, useEffect } from "react";
import { SaveProjectData  , ModifyProjectsCount } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,

  Typography,
  Paper
} from "@material-ui/core";


import { connect } from "react-redux";



const useStyles = makeStyles((theme) => ({
  deleteButton: {
    marginRight: "1%"
  },
  addButton: {

  },
  footer: {
    padding: "1%"
  },

  instance: {
    marginBottom: "1%",
    padding: "1%"
  }
 
  
}));



const ProjectForm = (props) => {
  const classes = useStyles();


 

  const handleChange = (index) => (event) =>  {
   const {name , value} = event.target;
   const list = [...props.projectFormData.Data];
   console.log(index+1 , list.length)
   if(index+1 > list.length){
    while(index+1 != list.length){
        list.push({projectName: null , techStack : null , description: null})
      }
   }
   list[index][name] =value;
   props.SaveProjectData(list)

  };


const Deleteducation = () => {
  const list = [...props.projectFormData.Data];
  list.pop()
  props.SaveProjectData(list)
  props.ModifyProjectsCount( props.projectFormData.Count-1)
}

const AddEducation = () => {
    const list = [...props.projectFormData.Data];
    list.push({projectName: null , techStack : null , description: null});
    props.SaveProjectData(list)
    props.ModifyProjectsCount( props.projectFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props.projectFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              required
              fullWidth
              name={`projectName`}
              defaultValue={props.projectFormData.Data && props.projectFormData.Data[i] ? props.projectFormData.Data[i].projectName : ""}
              label="Project Name"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              name={`techStack`}
              defaultValue={props.projectFormData.Data && props.projectFormData.Data[i] ? props.projectFormData.Data[i].techStack : ""}
              label="Tech Stack"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              defaultValue={props.projectFormData.Data && props.projectFormData.Data[i] ? props.projectFormData.Data[i].description : ""}
              name={`description`}
              label="Description"
              onChange={handleChange(i)}
              multiline={2}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" noValidate>
        <Card>
          <CardHeader subheader="Add your Mini Projects" />
          <form>
          {Form.map((instance) => instance)}
          </form>
          <div className={classes.footer}>
           <Button disabled={ props.projectFormData.Count<2} className={classes.deleteButton} onClick={Deleteducation} variant="outlined" color="primary" >
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddEducation} variant="contained" color="primary">
            ADD Project
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  projectFormData: state.Project
});

export default connect(mapStateToProps, {SaveProjectData , ModifyProjectsCount })(ProjectForm);
