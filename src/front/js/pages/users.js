import React, { useContext, useEffect } from 'react'
import "../../styles/users.css";
import { UsersTable } from '../component/usersTable';
import { UsersTableHeader } from '../component/usersTableHeader';
import { UsersButtons } from '../component/usersButtons';
import { UsersModal } from '../component/usersModal';
import { Context } from '../store/appContext';

export const Users = () => {
    const {store, actions} = useContext(Context)

    useEffect(()=>{
        actions.get_all_users()
    },[store.show_modal, store.user_deleted])
    
    return (
        <>
            <UsersButtons />
            <UsersTableHeader />
            {!!store.users && store.users.map((user, index) =>{
                return (
                    <UsersTable key={index} user={user} />
                )
            })}
           <UsersModal show={store.show_modal}/>
        </>
    )
}
