import React, { useEffect } from 'react'
import './fileupload.css'
import { FiUpload } from "react-icons/fi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import {useHistory} from 'react-router-dom'

function FileUpload(props) {
    const history = useHistory();
const {name} = props;
useEffect(()=>{
    if(!name){
        alert('you need to log in first');
        history.push('/')
    }
    //redirects to home if user did'nt logged in
},[history,name]);
  return (
    <div>
    {name && (<div>
        <div className="welcome-msg">
    <p >welcome {name} ; upload the file here</p>
    </div>
    <br />
        <div className="fileupload-wrapper">
            <div className="container">
                <div className="left-box">
                <FiUpload className='upload'/>
                <h4>Drag and drop file</h4>
                <p>or</p>
                <input type="file" name="" id="file-input" />
                <label htmlFor="file-input"></label>
            </div>
            <div className="right-box">
                <div className="status-container">
                <div className="file-type sp2">
                    <SiMicrosoftexcel />
                </div>
                <div className="file-name sp2">example.xls</div>
                <div className="upload-status sp2">
                <FaCheckCircle />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>)}
    
    </div>
  )
}

export default FileUpload