import React, { useContext, useEffect } from 'react'
import "../../styles/clients.css";
import { ClientsTable } from '../component/clientsTable';
import { ClientsTableHeader } from '../component/clientsTableHeader';
import { ClientsButtons } from '../component/clientsButtons';
import { Context } from '../store/appContext';
import { ClientsModal } from '../component/clientsModal';

export const Clients = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.get_all_clients()
    }, [store.show_modal])

    return (
        <>
            <ClientsButtons />
            <ClientsTableHeader />
            {!!store.clients && store.clients.map((client, index) => {
                return (
                    <ClientsTable key={index} client={client} />
                )
            })}
            <ClientsModal show={store.show_modal}/>
        </>
    )
}
