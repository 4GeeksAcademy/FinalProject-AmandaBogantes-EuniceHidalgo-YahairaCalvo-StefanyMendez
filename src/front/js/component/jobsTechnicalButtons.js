import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const JobsTechnicalButtons = () => {
    const { store, actions } = useContext(Context)
    return (
        <div>
            <div className="container jobsTechnicalButtons my-3">
                <div className="titleJobsTable mb-3 mt-5 text-start">
                    <p>Jobs Dashboard</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-sm-7 my-3">
                        <div className="card jobsTechnicalCard">
                            <div className="card-body pb-0 pt-0">
                                <div className="input-search d-flex align-items-center">
                                    <input type="text" id="inputJobSearch" className="form-control formControlJobsSearchButton"
                                        onKeyUp={(e) => {
                                            actions.search_jobs(e.target.value)
                                        }}
                                        placeholder='Search by Data'
                                        autoComplete="off" aria-describedby="passwordHelpInline" />
                                        <i className="fa-solid fa-magnifying-glass me-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
