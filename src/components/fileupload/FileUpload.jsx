import React, { useEffect, useState } from 'react'
import './fileupload.css'
import { FiUpload } from "react-icons/fi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import {useHistory} from 'react-router-dom'

function FileUpload(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const history = useHistory();
const {name} = props;
useEffect(()=>{
    if(!name){
        alert('you need to log in first');
        history.push('/')
    }
    //redirects to home if user did'nt logged in
},[history,name]);
const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file.name);
}
const handleUpload = () => {
    console.log(selectedFile)
    if(selectedFile && selectedFile === 'Production_Due.xlsx' || selectedFile === 'Production_Due.xls'){
        alert('uploading success....');
        history.push('/trackBoard')
    }else{
        alert('Wrong file uploaded :( upload failed !!!')
    }
        
}
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
                <input type="file" name="" id="file-input" onChange={handleChange} />
                <label htmlFor="file-input"></label>
                <button className='upload-btn' onClick={handleUpload}>Upload</button>
            </div>
            <div className="right-box">
                <div className="status-container">
                <div className="file-type sp2">
                    <SiMicrosoftexcel />
                </div>
                {selectedFile && <div className="file-name sp2">{selectedFile}</div>}
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