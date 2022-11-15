import React, { useEffect  , useRef} from 'react'
import { connect } from "react-redux";
import { makeStyles  } from "@material-ui/core/styles";

import ResumeModel from "./resume"
import { 
Button
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
  
  }));

const MainPage = (props) => {



    const classes = useStyles();
    return (
        <div>

            <ResumeModel />
        </div>
    )
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MainPage);
