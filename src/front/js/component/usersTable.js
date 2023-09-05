import React from 'react'
import PropTypes from "prop-types"

export const UsersTable = ({user}, ...props) => {
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
                            <th scope="row" className="text-center users-cell-size align-middle">{user.id}</th>
                            <td className="text-center users-cell-size align-middle">{user.first_name}</td>
                            <td className="text-center users-cell-size align-middle">{user.last_name}</td>
                            <td className="text-center users-cell-size align-middle">{user.role}</td>
                            <td className="text-center users-cell-size align-middle">
                              <button className="btn btn-login fw-bold text-center">
                                <i class="fa-solid fa-circle-info me-2"></i>View Details
                              </button>
                            </td>
                            <td className="text-center users-cell-size align-middle">
                              <button className="btn btn-login fw-bold text-center">
                                <i class="fa-solid fa-trash me-2"></i>
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
UsersTable.propTypes ={
  user: PropTypes.object
}