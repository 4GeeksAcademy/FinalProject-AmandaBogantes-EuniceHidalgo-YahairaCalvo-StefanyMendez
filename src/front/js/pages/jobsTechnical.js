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
        actions.get_job_by_technical(store.user_login.id)
    }, [store.show_modal])

    return (
        <>
            <JobsTechnicalButtons />
            <JobsTechnicalTableHeader />
            {!!store.jobs && store.jobs.map((job, index) => {
                return (
                    <JobsTechnicalTable key={index} job={job} />
                )
            })}
            <JobsTechnicalModal show={store.show_modal} />
        </>
    )
}
