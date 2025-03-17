import { NavLink } from "react-router-dom"
import "./sideView.css";
const SideView = () => {
    return(
        <div className="sideContainer">
            <div className="sideHeader d-flex justify-content-around align-items-center">
                <NavLink className="h2" to="/"><h2>Nunity</h2></NavLink>
                <i class="fa-solid fa-gear"></i>
            </div>
            <div className="userName d-flex align-items-center justify-content-around">
                <div className="initials">FS</div>
                <h5 className="user_name">Farinmade Samuel</h5>
            </div>
            <div className="sideItems p-5">
                <div className="sideItem d-flex justify-content-around align-items-center mb-3">
                    <p>WhishList</p>
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>
                <div className="sideItem d-flex justify-content-around align-items-center mb-3">
                    <p>Notifications </p>
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div className="sideItem d-flex justify-content-around align-items-center mb-3">
                    <p>Support </p>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div className="sideItem d-flex justify-content-around align-items-center mb-3">
                    <p>Messages </p>
                    <i class="fa-solid fa-message"></i>
                </div>
            </div>
            <div className="sideItem_last"><p>Loyalty and Rewards</p></div>
        </div>
    )
}

export default SideView;