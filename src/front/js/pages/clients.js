import React from 'react'
import "../../styles/clients.css";
import { ClientsTable } from '../component/clientsTable';
import { ClientsTableHeader } from '../component/clientsTableHeader';
import { ClientsButtons } from '../component/clientsButtons';

export const Clients = () => {


    return (
        <>
            <ClientsButtons />
            <ClientsTableHeader />
            <ClientsTable />
        </>
    )
}
