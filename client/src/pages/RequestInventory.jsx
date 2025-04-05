// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Instance from "../AxiosConfig";

// const RequestInventory = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [issuedQty, setIssuedQty] = useState();
//   const [issuedToDept, setIssuedToDept] = useState("");
//   const [issuedToFaculty, IssuedtoFaculty] = useState("");
//   const [returnStatus, setReturnStatus] = useState("");

//   const { category,name,qty, issuedToDept,issuedToFaculty,issuedQty,returnStatus } = location.state || {};


//   useEffect(() => {
//     // if (!category || !itemName) {
//     //   alert("Invalid inventory item.");
//     //   navigate("/request-inventory-table");
//     // }
//   }, [category, name, navigate]);

//   const handleRequest = async (e) => {
//     e.preventDefault();
//     try {
//       await Instance.put("/add/request-inventory", {
//         category,
//         qty,
//         name,
//         issuedQty,
//         issuedToDept,
//         issuedToFaculty,
//         returnStatus,
//       });

//       alert("Inventory Request send successfully!");
//       navigate("/");
//     } catch (error) {
//       console.error("Request Inventory error:", error.response?.data || error.message);
//       alert("Error requesting inventory.");
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="main flex items-start justify-center">
//         <div className="add_inventory rounded-2xl bg-blue-100 w-3/5 m-auto my-8 px-10 py-8">
//           <h1 className="text-blue-900 text-3xl font-bold text-center px-8 py-2">
//             Request Inventory 
//           </h1>
//           <form onSubmit={handleRequest}>
//             <div className="grid grid-cols-2 gap-6 px-6 py-10">
//               <div className="font-bold">
//                 <label>Category</label>
//                 <input
//                   className="border-2 my-2 px-5 py-2 w-full bg-gray-200"
//                   type="text"
//                   value={category}
//                   disabled
//                 />
//               </div>

//               <div className="font-bold">
//                 <label>Item Name</label>
//                 <input
//                   className="border-2 my-2 px-5 py-2 w-full bg-gray-200"
//                   type="text"
//                   value={name}
//                   disabled
//                 />
//               </div>

//               <div className="font-bold">
//                 <label>Quantity</label>
//                 <input
//                   className="border-2 my-2 px-5 py-2 w-full"
//                   type="number"
//                   value={qty}
//                   disabled
//                 />
//               </div>

//               <div className="font-bold">
//                 <label>Issue Qty</label>
//                 <input
//                   className="border-2 my-2 px-5 py-2 w-full"
//                   type="number"
//                   value={issuedQty}
//                   onChange={(e) => setIssuedQty(e.target.value)}
//                   required
//                 />
//               </div>



//               <select placeholder="Department Name"
//                 name="issuedToDept"
//                 value={issuedToDept}
//                 onChange={(e) => setIssuedToDept(e.target.value)}
//                 className="border-2 my-2 px-5 py-2 w-full text-black"
//                 required
//               >
//                 <option value="Department Name">Department Name</option>
//                 <option value="Fashion & Textiles">Fashion & Textiles</option>
//                 <option value="Jewellery Design">Jewellery Design</option>
//                  <option value="Fine Arts">Fine Arts</option>
//                 <option value="Performing Arts">Performing Arts</option>
//                 <option value="English Literature & Language">English Literature & Language</option>
//                 <option value="Indian Literature & Languages (Hindi/Sanskrit)">Indian Literature & Languages (Hindi/Sanskrit)</option>
//                 <option value="Foreign Literature & Languages (French/German)">Foreign Literature & Languages (French/German)</option>
//                 <option value="Economics">Economics</option>
//                 <option value="History & Indian Culture">History & Indian Culture</option>
//                 <option value="Sociology & Social Work">Sociology & Social Work
//                 </option>
//                 <option value="Political Science and International Relations">Political Science and International Relations</option>
//                 <option value="Public Administration">Public Administration</option>
//                 <option value="Library & Information Science">Library & Information Science</option>
//                 <option value="Psychology
// ">Psychology
//                 </option>
//                 <option value="Clinical Psychology">Clinical Psychology</option>
//                 <option value="Journalism and Mass Communication
// ">Journalism and Mass Communication
//                 </option>
//                 <option value="Education">Education</option>
//                 <option value="Physical Education
// ">Physical Education
//                 </option>
//                 <option value="Zoology ">Zoology </option>
//                 <option value="Botany
// ">Botany
// </option>
//                 <option value="Microbiology & Biotechnology">Microbiology & Biotechnology</option>
//                 <option value="Environmental Science">Environmental Science</option>
//                 <option value="Home Science">Home Science</option>
//                 <option value="Physics
// ">Physics
//                 </option>
//                 <option value="Chemistry">Chemistry</option>
//                 <option value="Geography">Geography</option>
//                 <option value="Mathematics">Mathematics</option>
//                 <option value="Statistics
// ">Statistics
//                 </option>
//                 <option value="Computer Science & Information Technology">Computer Science & Information Technology</option>
//                 <option value="Accounting & Taxation
// ">Accounting & Taxation
//                 </option>
//                 <option value="Business Studies
// ">Business Studies
//                 </option>
//                 <option value="Financial Studies
// ">Financial Studies
//                 </option>
//                 <option value="Tourism and Aviation
// ">Tourism and Aviation
//                 </option>
//                 <option value="Management Studies
// ">Management Studies
//                 </option>

//               </select>



//               <input
//                 type="text"
//                 name="issuedToFaculty"
//                 placeholder="Faculty Name"
//                 value={issuedToFaculty}
//                 onChange={(e) => IssuedtoFaculty(e.target.value)}
//                 className="border-2 my-2 px-5 py-2 w-full text-black"
//                 required
//               />

//               <div className="font-bold">
//                 <label>Return Status</label>
//                 <select
//                   className="border-2 my-2 px-5 py-2 w-full text-black"
//                   value={returnStatus}
//                   onChange={(e) => returnStatus(e.target.value)}
//                   required
//                 >
//                   <option value="Returnable">Returnable</option>
//                   <option value="Non-Returnable">Non-Returnable</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-center items-center">
//               <button
//                 className="px-8 py-3 bg-blue-900 text-white rounded-2xl mx-4"
//                 type="submit"
//               >
//                 Request
//               </button>
//               <button
//                 className="px-8 py-3 bg-gray-900 text-white rounded-2xl mx-4"
//                 type="button"
//                 onClick={() => navigate("/")}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestInventory;
