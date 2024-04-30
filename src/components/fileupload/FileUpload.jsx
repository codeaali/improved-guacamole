import React, { useContext, useEffect, useState } from 'react'
import './fileupload.css'
import { FiUpload } from "react-icons/fi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import {useHistory} from 'react-router-dom';
import * as XLSX from 'xlsx';
import  {MyContext}  from '../../index.js';

function FileUpload(props) {
     
    
    const {prodData, setProdData, salesData, setSalesData, weeklydata, setWeeklyData} = useContext(MyContext);
    const [prodSheetName, setProdSheetName] = useState('');
    const [salesDueName, setSalesDueName] = useState('');
    const [weeklyDataName, setWeeklyDataName] = useState('');
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
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0]; // Assuming first sheet
      console.log('*************',sheetName);
      if(sheetName === 'Production_Due.xlsx' || sheetName === 'Production_Due.xls'){
        setProdSheetName(sheetName);
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setProdData(excelData);
      }else if (sheetName === 'Sales_Due' || sheetName === 'Sales_Due.xlsx' || sheetName === 'Sales_Due.xls'){
        setSalesDueName(sheetName);
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        console.log(excelData);
        setSalesData(excelData);
      }else if ((sheetName.includes('Production_Qty_Weekly')) || (sheetName.includes('Before monday'))){
        setWeeklyDataName(sheetName);
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        console.log(excelData);
        setWeeklyData(excelData);
      }
      
      
    };

    reader.readAsArrayBuffer(file);
    
}
const handleUpload = () => {
    console.log(prodSheetName)
    if( (prodSheetName && prodSheetName === 'Production_Due.xlsx' || prodSheetName === 'Production_Due.xls') ||
        (salesDueName && salesDueName === 'Sales_Due.xlsx' || salesDueName === 'Sales_Due.xls' || salesDueName === 'Sales_Due')  || 
        (weeklyDataName && weeklyDataName.includes('Production_Qty_Weekly') || weeklyDataName.includes('Before monday') )){
        if(weeklydata.length > 0){
            console.log('weeklyData upload success', weeklydata);
        }
        if(prodData.length > 0 || salesData.length > 0 || weeklydata.length > 0){
            alert('uploading success....');
            history.push('/trackBoard');
        } 
        
    }else{
        alert('Wrong file uploaded :( upload failed !!!')
    }
    // if(productionDueData.length>0){
    //     history.push('/trackBoard')
    // }
    // console.log(prodData)
        
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
                    <input type="file" name="" id="file-input" onChange={handleChange} />
                    <label htmlFor="file-input"></label>

                    <input type="file" name="" id="file-input" onChange={handleChange} />
                    <label htmlFor="file-input"></label>
                    <input type="file" name="" id="file-input" onChange={handleChange} />
                    <label htmlFor="file-input"></label>
                    <button className='upload-btn' onClick={handleUpload}>Upload</button>
                </div>
            <div className="right-box">
                <div className="status-container">
                <div className="file-type sp2">
                    <SiMicrosoftexcel />
                </div>
                {/* {selectedFile && <div className="file-name sp2">{selectedFile}</div>} */}
                {console.log('fileUpload.jsx', prodData)}
                {console.log('fileUpload.jsx sales', salesData)}
                <div className="upload-status sp2">
                {/* <FaCheckCircle /> */}
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