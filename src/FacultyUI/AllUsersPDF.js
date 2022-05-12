import React from "react";
import CICT_Logo from "../images/login/cict_logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import bulsu_icon from "../images/bulsu_icon.png";

export default function AllUsersPDF(){
   
   //getting the email of user
   let email_key = localStorage.getItem("email");

   //Hook for getting all certificates
   const [getAllUser, setGetAllUser] = useState([]);
   const loadGetAllUser = async () => {
     const result = await axios.get("http://localhost/fms/getAllUser.php");
     setGetAllUser(result.data.phpresult);
   };
   useEffect(() => {
     loadGetAllUser();
   }, []);
 
   var input_keyForGetUser_ctr = 0;
   const input_keyForUser = getAllUser.map((res) => {
     if (res.email != email_key && res.account_status =="Approved") {
       input_keyForGetUser_ctr++;
       return (
        <div className="th1" key={input_keyForGetUser_ctr}>
          <div style={{width:"25%",fontWeight:"normal"}}>
            <span>{res.fname+" "+res.lname}</span>
          </div>
          <div style={{width:"30%",fontWeight:"normal"}}><span>{res.email}</span></div>
          <div style={{width:"20%",fontWeight:"normal"}}><span>{res.department}</span></div>
          <div style={{width:"25%",fontWeight:"normal"}}><span>{res.employment+" EMPLOYEE"}</span></div>
          </div>
       );
     }
   });
 

    return(
        <div className="certificatePDF_container">
            <div className="pdf_container" id="ActiveUsers_pdf">

                <div className="top">
                    <div>
                        <p className="nameOfschool">Bulacan State University</p>
                        <div className="header">COLLEGE OF INFORMATION AND</div>
                        <div className="header1">COMMUNICATION TECHNOLOGY</div>
                    </div>
                    <div>
                        <img src={bulsu_icon} style={{marginRight:"30px"}}/> 
                        <img src={CICT_Logo}/> 
                    </div>
                </div>


                <div className="th">
                    LIST OF ALL ACTIVE FACULTY USERS
                </div>

                <div className="th1">
                    <div style={{width:"25%"}}><span>FACULTY</span></div>
                    <div style={{width:"30%"}}><span>EMAIL ADDRESS</span></div>
                    <div style={{width:"20%"}}><span>DEPARTMENT</span></div>
                    <div style={{width:"25%"}}><span>EMPLOYMENT STATUS</span></div>
                </div>
                {input_keyForUser}
            </div>


        </div>
    )
}

