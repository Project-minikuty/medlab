import axios from "axios";

export default axios.create({
    baseURL: "https://medback.onrender.com/"
});

// export default axios.create({
//     baseURL: "http://localhost:3001"
// });
