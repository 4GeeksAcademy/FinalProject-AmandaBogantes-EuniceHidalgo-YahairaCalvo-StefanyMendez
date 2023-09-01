import React from 'react'
import "../../styles/users.css";
import { UsersTable } from '../component/usersTable';
import { UsersTableHeader } from '../component/usersTableHeader';
import { UsersButtons } from '../component/usersButtons';
import { UsersModal } from '../component/usersModal';

export const Users = () => {
    return (
        <>
            <UsersButtons />
            <UsersTableHeader />
            <UsersTable />
            <UsersModal />
        </>
    )
}
