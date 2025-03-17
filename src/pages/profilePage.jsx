import React from 'react';
import SideView from "../components/sideView";
import RightView from "../components/rightView";
import "./profilePage.css"
const ProfilePage = () => {
    return (
        <div className="container-fluid g-0 body">
            <div className="row">
                <div className="col-lg-3 side">
                    <SideView />
                </div>
                <div className="col-lg-9">
                    <RightView />
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;