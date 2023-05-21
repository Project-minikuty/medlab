import axios from "axios";

export default axios.create({
    baseURL: "https://medback.up.railway.app/"
});

// export default axios.create({
//     baseURL: "http://localhost:3001"
// });
