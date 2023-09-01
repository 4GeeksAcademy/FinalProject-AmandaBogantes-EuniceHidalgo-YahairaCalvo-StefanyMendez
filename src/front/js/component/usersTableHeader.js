import React from 'react'

export const UsersTableHeader = () => {
  return (
    <section class="intro">
      <div class="h-100">
        <div class="mask d-flex align-items-center h-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="card tableUsersHeader text-center">
                  <div class="card-body cardBodyUsers">
                    <div class="table-responsive">
                      <table class="table mb-0">
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