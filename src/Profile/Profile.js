import React from 'react'
import PropTypes from "prop-types";
const Profile = (props) => {
    const{
        fullName,
        bio,
        profession,
        handleName,
    }= props
    return (
        <div>
            {handleName(fullName)}
            <h3>FullName: {fullName}</h3>
            <p>Bio: {bio}</p>
            <h4>profession: {profession}</h4>
        </div>
    )
}
Profile.prototype={
    fullName: PropTypes.string,
        bio: PropTypes.sting,
        profession: PropTypes.string,
        handleName: PropTypes.func,
}
export default Profile
