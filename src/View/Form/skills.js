import React, { useState, useEffect } from "react";
import { SaveSkillsData  , ModifySkillsCount } from "../../actions";
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



const SkillsForm = (props) => {
  const classes = useStyles();

  const handleChange = (index) => (event) =>  {
   const { value} = event.target;
   const list = [...props.SkillsFormData.Data];
   list[index] =value;
   props.SaveSkillsData(list)

  };


const DeleteSkills = () => {
  console.log("Decreasing count")
  const list = [...props.SkillsFormData.Data];
  list.pop();
  props.SaveSkillsData(list)
  props.ModifySkillsCount( props.SkillsFormData.Count-1)
}

const AddSkill = () => {
  const list = [...props.SkillsFormData.Data];
  list.push(null);
  props.SaveSkillsData(list)
  console.log("Increasing count")
  props.ModifySkillsCount( props.SkillsFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props.SkillsFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
       
          <Grid item md={12} xs={12}>
            <TextField
              required
              fullWidth
              name={`skill`}
              defaultValue={props.SkillsFormData.Data && props.SkillsFormData.Data[i] ? props.SkillsFormData.Data[i] : ""}
              label="Skill"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
            />
        </Grid>
        <Divider />
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" noValidate>
        <Card>
          <CardHeader subheader="Add your Skills" />
          <Grid container spacing={3}>
          {Form.map((instance) => instance)}
          </Grid>
          <div className={classes.footer}>
           <Button disabled={props.SkillsFormData.Count<2} className={classes.deleteButton} onClick={DeleteSkills} variant="outlined" color="primary" >
            Delete Skill
          </Button>
          <Button  className={classes.addButton} onClick={AddSkill} variant="contained" color="primary">
            ADD Skill
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  SkillsFormData: state.Skills
});

export default connect(mapStateToProps, {SaveSkillsData , ModifySkillsCount })(SkillsForm);
