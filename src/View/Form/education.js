import React, { useState, useEffect } from "react";
import { SaveEducationData  , ModifyEducationCount } from "../../actions";
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
    alignItems: "left",
    padding: "1%"
  },

  instance: {
    marginBottom: "1%",
    padding: "1%"
  }
 
  
}));



const EducationForm = (props) => {
  const classes = useStyles();


  const handleChange = (index) => (event) =>  {
   const {name , value} = event.target;
   const list = [...props.educationFormData.Data];
   console.log(index+1 , list.length)
   if(index+1 > list.length){
    while(index+1 != list.length){
      list.push({courseName: null , completionYear: null, college: null , percentage: null })
    }
   }
   console.log(list)
   list[index][name] =value;
   props.SaveEducationData(list)
  };



  const onSubmit = (data) => {
    console.log(data)
  }

const Deleteducation = () => {
  console.log("Decreasing count")
  const list = [...props.educationFormData.Data];
  list.pop();
  props.SaveEducationData(list)
  props.ModifyEducationCount( props.educationFormData.Count-1)
}

const AddEducation = () => {
  const list = [...props.educationFormData.Data];
  list.push({courseName: null , completionYear: null, college: null , percentage: null });
  props.SaveEducationData(list)
  props.ModifyEducationCount( props.educationFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props.educationFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`courseName`}
              defaultValue={props.educationFormData.Data && props.educationFormData.Data[i] ? props.educationFormData.Data[i].courseName : ""}
              label="Course Name"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`completionYear`}
              defaultValue={props.educationFormData.Data && props.educationFormData.Data[i] ? props.educationFormData.Data[i].completionYear : ""}
              label="Completion Year"
              type="number"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={props.educationFormData.Data && props.educationFormData.Data[i] ? props.educationFormData.Data[i].college : ""}
              name={`college`}
              label="College/School"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={props.educationFormData.Data && props.educationFormData.Data[i] ? props.educationFormData.Data[i].percentage : ""}
              name={`percentage`}
              label="Percentage"
              onChange={handleChange(i)}
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
          <CardHeader subheader="Add your Education Details" /> 
          {Form.map((instance) => instance)}
          <div className={classes.footer}>
           <Button disabled={props.educationFormData.Count<2} className={classes.deleteButton} onClick={Deleteducation} variant="outlined" color="primary" >
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddEducation} variant="contained" color="primary">
            ADD EDUCATION
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  educationFormData: state.Education
});

export default connect(mapStateToProps, {SaveEducationData , ModifyEducationCount })(EducationForm);
