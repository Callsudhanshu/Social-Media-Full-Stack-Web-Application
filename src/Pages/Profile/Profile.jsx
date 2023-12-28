import React from "react";
import { ProfileUserDetails } from "../../Component/ProfileComponent/ProfileUserDetails";
import ReqUserPostPart from "../../Component/ProfileComponent/ReqUserPostPart";

const Profile = () => {
    return (
        <div className="px-20">
            <div className="">
                <ProfileUserDetails/>
            </div>
            <div>
                <ReqUserPostPart/>
            </div>
        </div>
    )
}

export default Profile