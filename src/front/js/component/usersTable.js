import React, { useContext, useEffect } from 'react'
import PropTypes from "prop-types"
import { Context } from '../store/appContext'

export const UsersTable = ({ user }, ...props) => {
  const { store, actions } = useContext(Context)

  return (
    <section className="intro">
      <div className="h-100">
        <div className="mask d-flex align-items-center h-100 p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card tableUsersItems text-center">
                  <div className="card-body cardBodyUsers">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <tbody>
                          <tr>
                            <th scope="row" className="text-center users-cell-size align-middle fs-5">{user.id}</th>
                            <td className="text-center users-cell-size align-middle fs-5">{user.first_name}</td>
                            <td className="text-center users-cell-size align-middle fs-5">{user.last_name}</td>
                            <td className="text-center users-cell-size align-middle fs-5">{user.role}</td>
                            <td className="text-center users-cell-size align-middle">
                              <button className="btn btn-login text-center" onClick={() => actions.get_user_by_id(user.id)}>
                                <i className="fa-solid fa-circle-info me-2"></i>View Details
                              </button>
                            </td>
                            <td className="text-center users-cell-size align-middle">
                              <button className="btn btn-login text-center" onClick={() =>
                                Swal.fire({
                                  title: 'Are you sure?',
                                  text: "You won't be able to revert this!",
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#d33',
                                  cancelButtonColor: '#34AACB',
                                  confirmButtonText: 'Yes, delete it!',
                                  color: '#FFFFFF',
                                  background: '#41206C'

                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    actions.delete_user_by_id(user)
                                    actions.delete_user_change()
                                  }
                                })}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
UsersTable.propTypes = {
  user: PropTypes.object
}