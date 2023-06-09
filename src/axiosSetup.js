import axios from "axios";

export default axios.create({
    baseURL: "https://medback.onrender.com/",
  
headers: {
    'Content-Type': 'application/json'
}});


// export default axios.create({
//     baseURL: "http://127.0.0.1:3000"
// });

// export default axios.create({
//     baseURL: "https://medback.up.railway.app",
  
// headers: {
//     'Content-Type': 'application/json'
// }});



