import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import no_record_icon from "../images/no_record_icon.png";
import FacultyRow from "./FacultyRow";

export default function TableRowFaculty() {
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
         <FacultyRow
             key={input_keyForGetUser_ctr}
             fImage = {res.profile_photo}
             fName = {res.fname+" "+res.lname}
             fEmail = {res.email}
             fDep = {res.department}
             fEmp = {res.employment}
             fDate = {res.date_created}
         />
       );
     }
   });
 


  return (
    <div id="rowTable_forSearch">
      <div className="header_faculty">
            <div className="th th1"><span>Name</span></div>
            <div className="th th2"><span>Email Address</span></div>
            <div className="th th3"><span>Department</span></div>
            <div className="th th4"><span>Employment</span></div>
            <div className="th th5"><span>Action</span></div>
      </div>

      <div className="tableRow_scrollable_container_faculty">

        {input_keyForUser}

        {/*input_keyForUser*/} 
        <div className="no_searchFound7">
              <img src={no_record_icon}/>
              <p>No Faculty Available!</p>
        </div>
      </div>

    </div>
  );
}

