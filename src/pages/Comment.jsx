// import React, { useState, useEffect } from "react";
// // import db from "../firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";

// const Comment = () => {
//   // const [comment, setComment] = useState({
//   //   Comment: "",
//   // });

//   // const [data, setData] = useState([]);

//   // const loadData = async () => {
//   //   await getDocs(collection(db, "comment"))
//   //     .then((querySnapshot) => {
//   //       const newData = querySnapshot.docs.map((doc) => ({
//   //         id: doc.id,
//   //         ...doc.data(),
//   //       }));
//   //       setData(newData);
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error getting documents: ", error);
//   //     });
//   // };

//   useEffect(() => {
//     loadData();
//   }, []);

//   // const handleChange = (e) => {
//   //   setComment({ ...comment, [e.target.name]: e.target.value });
//   // };

//   // const handleComment = async () => {
//   //   try {
//   //     await addDoc(collection(db, "comment"), comment);
//   //     setComment({ Comment: "" });
//   //     alert("Comment sent successfully");
//   //     loadData(); // Refresh the data after adding a new comment
//   //   } catch (error) {
//   //     console.error("Error adding comment: ", error);
//   //     alert("Failed to send comment");
//   //   }
//   // };

//   return (
//     <div>
//       <div data-aos="zoom-in" className="comment my-20">
//         <div className="container mx-auto">
//           <div className="white text-xl mb-10">COMMENT</div>
//           <div className="flex w-full my-3">
          
//             <input
//               name="Comment"
//               value={comment.Comment}
//               onChange={handleChange}
//               type="text"
//               className="p-3 w-full rounded-lg"
//               placeholder="Text"
//             />
//           </div>
//           <div className="w-full">
           
//           <div className="white ps-5 py-6">
//             {data.map((item) => (
//               <div key={item.id} className="flex mb-4">
                
//                 <div>
//                   <div className="flex gap-3">
//                     <div>anonymous</div>
//                     <div className="detail">{item.timestamp?.toDate().toLocaleTimeString()}</div>
//                   </div>
//                   <div className="detail">{item.Comment}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button onClick={handleComment} className="bg-primary p-3 w-full rounded-lg">
//               Comment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comment;
