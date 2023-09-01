import React from 'react'

export const UsersTable = () => {
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
                            <th scope="row" className="text-center users-cell-size align-middle">01</th>
                            <td className="text-center users-cell-size align-middle">Stefany María</td>
                            <td className="text-center users-cell-size align-middle">Méndez Salas</td>
                            <td className="text-center users-cell-size align-middle">admi</td>
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