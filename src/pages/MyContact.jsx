// import React, { useState } from "react";
// import db from "../firebase.js";
// import { collection, addDoc } from "firebase/firestore";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Contact = () => {
//   const [form, setForm] = useState({
//     Name: "",
//     Email: "",
//     Message: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdddata = async () => {
//     if (!form.Name || !form.Email || !form.Message) {
//       alert("Please fill in all fields");
//       return;
//     }
//     try {
//       const res = await addDoc(collection(db, "contact"), form);
//       alert("Message sent successfully!");
//       console.log(res);
//       setForm({ Name: "", Email: "", Message: "" }); // Clear form after submission
//     } catch (error) {
//       alert("Error sending message: " + error.message);
//     }
//   };

//   return (
//     <div className="section xl:flex xl:items-center contact mt-20">
//       <div className="container mx-auto">
//         <div className="xl:flex xl:justify-around gap-10">
//           <div className="xl:w-5/12 xl:flex xl:items-center">
//             <div data-aos="fade-right">
//               <div className="font-bold text-4xl text-white flex justify-center xl:justify-start">
//                 MESSAGE
//               </div>

//               <div className="text-center detail mt-10 xl:text-start">
//                 I'm a third-year Software Engineering student at the University of
//                 Phayao, looking for an internship opportunity from April to May.
//                 Eager to learn, contribute, and gain real-world insights into software
//                 development. Excited to join your team. Thank you.
//               </div>

//               <div className="flex gap-4 icon justify-center opacity-50 mt-10 xl:justify-start">
//                 <FontAwesomeIcon
//                   icon="fa-brands fa-github"
//                   style={{ color: "#ffffff" }}
//                 />
//                 <FontAwesomeIcon
//                   icon="fa-brands fa-facebook"
//                   style={{ color: "#ffffff" }}
//                 />
//                 <FontAwesomeIcon
//                   icon="fa-solid fa-envelope"
//                   style={{ color: "#ffffff" }}
//                 />
//                 <FontAwesomeIcon
//                   icon="fa-brands fa-linkedin"
//                   style={{ color: "#ffffff" }}
//                 />
//                 <FontAwesomeIcon
//                   icon="fa-brands fa-instagram"
//                   style={{ color: "#ffffff" }}
//                 />
//               </div>
//             </div>
//           </div>
//           <div data-aos="fade-up">
//             <div className="white text-center mt-16 xl:text-start xl:mb-5 text-xl">
//               Form Contact
//             </div>
//             <label htmlFor="Name" className="white">
//               Name
//             </label>
//             <input
//               name="Name"
//               type="text"
//               value={form.Name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="w-full p-3 mt-3 rounded-lg mb-3"
//             />
//             <label htmlFor="Email" className="white">
//               Email
//             </label>
//             <input
//               name="Email"
//               type="email"
//               value={form.Email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full p-3 mt-3 rounded-lg mb-3"
//             />
//             <label htmlFor="Message" className="white">
//               Message
//             </label>
//             <textarea
//               name="Message"
//               value={form.Message}
//               onChange={handleChange}
//               placeholder="Message"
//               rows={4}
//               className="w-full p-3 mt-3 rounded-lg mb-3"
//             />

//             <button
//               onClick={handleAdddata}
//               className="w-full p-3 rounded-lg bg-primary"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
