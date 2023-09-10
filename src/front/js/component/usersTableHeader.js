import React from 'react'

export const UsersTableHeader = () => {
  return (
    <section className="intro">
      <div className="h-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card tableUsersHeader text-center fs-4">
                  <div className="card-body cardBodyUsers">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col" className="text-white text-center users-cell-size">User ID</th>
                            <th scope="col" className="text-white text-center users-cell-size">First Name</th>
                            <th scope="col" className="text-white text-center users-cell-size">Last Name</th>
                            <th scope="col" className="text-white text-center users-cell-size">Role</th>
                            <th scope="col" className="text-white text-center users-cell-size">Actions</th>
                            <th scope="col" className="text-white text-center users-cell-size">Delete</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}