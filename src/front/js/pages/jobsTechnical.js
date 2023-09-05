import React, { useContext, useEffect } from 'react'
import "../../styles/jobsTechnical.css";
import { JobsTechnicalTable } from '../component/jobsTechnicalTable';
import { JobsTechnicalButtons } from '../component/jobsTechnicalButtons';
import { JobsTechnicalTableHeader } from '../component/jobsTechnicalTableHeader';
import { JobsTechnicalModal } from '../component/jobsTechnicalModal';
import { Context } from '../store/appContext';

export const JobsTechnical = () => {

    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.get_all_jobs()
    }, [])


    return (
        <>
            <JobsTechnicalButtons />
            <JobsTechnicalTableHeader />
            <JobsTechnicalTable />
            <JobsTechnicalModal />
        </>
    )
}
