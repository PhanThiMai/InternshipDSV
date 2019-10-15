import React from 'react';
import './UserSetting.scss'

function UserSetting(props) {
    const { logOut } = props
    return (
        <div className="rectangle-3">
            <p className="account-setting">Account Setting</p>
            <p className="logout" onClick={logOut}>Logout</p>
        </div>
    );
}

export default UserSetting;