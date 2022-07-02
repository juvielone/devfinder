import React from 'react';
import { Link } from "react-router-dom";



const UserItem = ({ user: { avatar_url, login } }) => {
    return (
        <div className="card user-card" style={{ width: "15rem" }}>
            <img src={avatar_url} className="card-img-top profile" alt="profile" />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <Link to={`/user/${login}`} className="btn show-more-btn">
                    Show More
                </Link>
            </div>
        </div>
    )
}

export default UserItem;