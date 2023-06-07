import { useNavigate } from "react-router-dom";
import "./logOut.css";
function LogoutP(props) {
    const navigate = useNavigate();
    function type(){
        setTimeout(()=>{
            var d=document.getElementById("logout-text")
            var t = d.innerText
            if (t.length<=props.text.length+5){
                d.innerText=t+"."
                type()
            }
            else{
                navigate("/")
            }
        },500)
    }
  return (
    <div className="logout-container">
      <div className="logout-box">
        <div>
          <text className="logout-text" id="logout-text">{props.text}</text>
          {type()}
        </div>
      </div>
    </div>
  );
}

export default LogoutP;
