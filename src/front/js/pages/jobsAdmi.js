import React, { useContext, useEffect } from 'react'
import "../../styles/jobsAdmi.css";
import { JobsAdmiButtons } from '../component/jobsAdmiButtons'
import { JobsAdmiTableHeader } from '../component/jobsAdmiTableHeader';
import { JobsAdmiTable } from '../component/jobsAdmiTable'
import { JobsAdmiModal } from '../component/jobsAdmiModal';
import { Context } from '../store/appContext';

export const JobsAdmi = () => {

    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.get_all_jobs()
    }, [])


    return (
        <>
            <JobsAdmiButtons />
            <JobsAdmiTableHeader />
            <JobsAdmiTable />
            <JobsAdmiModal />
        </>
    )
}
