import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const UsersButtons = () => {
  const { store, actions } = useContext(Context)
  return (
    <div>
      <div className="container usersButtons my-3">
        <div className="row justify-content-center">
          <div className="col-md-7 col-sm-7 my-3">
            <div className="card usersCard">
              <div className="card-body pb-0 pt-0">
                <div className="d-flex align-items-center py-2">
                  <input type="text" id="inputUsersSearch" className="form-control formControlUsersButtons"
                    autoComplete="off" aria-describedby="passwordHelpInline" placeholder='Search by Data'
                    onKeyUp={(e) => {
                      actions.search_users(e.target.value)
                    }} />
                  <button className="btn btn-login my-1 fw-bold d-flex align-items-center">
                    <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 my-4">
            <div className="card usersCard d-flex justify-content-center align-items-center">
              <div className="card-body pb-0 pt-0">
                <button className="btn btn-login my-1 fw-bold" onClick={() => { actions.handle_show_modal() }}><i className="fa-solid fa-user-plus me-2"></i>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}