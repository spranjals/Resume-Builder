import React, { useState, useEffect } from "react";
import { SaveProfileData } from "../../actions"; 
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

  Typography
} from "@material-ui/core";
import { connect } from "react-redux";



const useStyles = makeStyles((theme) => ({
root: {
  padding: "10px"
}
 
  
}));



const ProfileForm = (props) => {
  const classes = useStyles();

  const {profileData} = props

  const handleChange = (event) => {
    const {name , value} = event.target;
    const prevdata = profileData.Data

    if( name == "url" ){
      if(event.target.files.length > 0){
        prevdata[name] = URL.createObjectURL(event.target.files[0])
        prevdata["FileName"] =  event.target.files[0].name;
      
      }
    }else{
     prevdata[name] = value;
    }
    props.SaveProfileData(prevdata)

  };

  const RemoveImage = () => {
    const prevdata = profileData.Data;
    prevdata["url"] = null
    prevdata["FileName"] =  null

    props.SaveProfileData(prevdata)
  }


  return (
    <>
      <form autoComplete="off" noValidate>
        <Card className={classes.root}>
          <CardHeader subheader="Add your profile details" />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="fname"
                defaultValue={profileData.Data?  profileData.Data.fname : ""}
                label="First Name"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="lname"
                defaultValue={profileData.Data?  profileData.Data.lname : ""}
                label="Last Name"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                defaultValue={profileData.Data?  profileData.Data.phone : null}
                name="phone"
                label="Phone Number"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="address"
                defaultValue={profileData.Data?  profileData.Data.address : null}
                label="Address"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            {profileData.Data.url && profileData.Data.url.length > 0 ? 
             <Button
             color="secondary"
             variant="outlined"
             onClick={RemoveImage}>
               Remove {profileData.Data.FileName}
             </Button>
            
          :
          <div style={{textAlign: "left"}}>
            Profile Image
          <TextField
            fullWidth
            type="file"
            name="url"
            onChange={handleChange}
            variant="outlined"
          />
          </div>
         
         
          }           
            </Grid>
          </Grid>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  profileData : state.Profile
});

export default connect(mapStateToProps, {SaveProfileData})(ProfileForm);
