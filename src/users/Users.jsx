import React, { useContext, useEffect } from 'react';
import GithubContext from '../context/githubContext';
import Spinner from "../layout/Spinner";
import UserItem from './UserItem';
import Zoom from '@mui/material/Zoom';

const Users = () => {

    const githubContext = useContext(GithubContext);
    const { loading, users, userApi } = githubContext;



    if (loading) {
        return <Spinner />
    } else {

        return (
            <Zoom in={true}>

                <div className="row user-container">

                    {users.map(user => (
                        <div className="col-lg-4 col-md-6 ">
                            <UserItem key={user.id} user={user} />

                        </div>
                    ))}

                </div>

            </Zoom>
        );
    }
}





export default Users;
