import React, { useState, useEffect } from "react";
import { SaveSocialData  , ModifySocialsCount } from "../../actions";
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



const SocialForm = (props) => {
  const classes = useStyles();

 

  const handleChange = (index) => (event) =>  {
   const { value} = event.target;
   const list = [...props.SocialFormData.Data];
   list[index] =value;
   props.SaveSocialData(list)

  };


const DeleteSocial = () => {
  const list = [...props.SocialFormData.Data];
  list.pop();
  props.SaveSocialData(list)
  props.ModifySocialsCount( props.SocialFormData.Count-1)
}

const AddSocial = () => {
  const list = [...props.SocialFormData.Data];
  list.push(null);
  props.SaveSocialData(list)

  props.ModifySocialsCount( props.SocialFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  props.SocialFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              required
              fullWidth
              name={`Social`}
              defaultValue={props.SocialFormData.Data && props.SocialFormData.Data[i] ? props.SocialFormData.Data[i] : ""}
              label="Social Links"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
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
          <CardHeader subheader="Add social links like linkedin , github etc" />
          {Form.map((instance) => instance)}
          <div className={classes.footer}>
           <Button disabled={ props.SocialFormData.Count<2} className={classes.deleteButton} onClick={DeleteSocial} variant="outlined" color="primary" >
            Delete Social
          </Button>
          <Button  className={classes.addButton} onClick={AddSocial} variant="contained" color="primary">
            ADD Social
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  SocialFormData: state.Social
});

export default connect(mapStateToProps, {SaveSocialData , ModifySocialsCount })(SocialForm);
