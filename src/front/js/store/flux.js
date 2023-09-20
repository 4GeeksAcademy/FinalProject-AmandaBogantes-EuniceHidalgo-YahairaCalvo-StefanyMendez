import Swal from 'sweetalert2'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			username: null,
			first_name: null,
			last_name: null,
			role: null,
			phone: null,
			password: null,
			confirm_password: null,
			question_security: null,
			answer_security: null,

			code: null,
			type: null,
			brand: null,
			model: null,
			serial_number: null,
			status: null,
			issues: null,
			comments: null,
			technical_id: null,

			jobs: [],
			jobs_search: [],
			job_id: null,
			job_deleted: false,

			users: [],
			users_search: [],
			user_id: null,
			read_only_username: true,
			user_deleted: false,

			clients: [],
			clients_search: [],
			client_id: null,

			user_login: JSON.parse(localStorage.getItem("user_login")) == undefined ? {} : JSON.parse(localStorage.getItem("user_login")),
			user_question: {},
			is_logued: false,

			hidden_username: null,
			hidden_questions_answer: null,
			hidden_id: null,
			hidden_time_stamp: null,
			hidden_input_question_answer: true,
			hidden_btn_new_code: null,

			correct_answer: false,
			password_changed: false,

			show_modal: false,

			buttons_admin_tech: {
				users: JSON.parse(localStorage.getItem("btnUsers")) == undefined ? true : JSON.parse(localStorage.getItem("btnUsers")),
				clients: JSON.parse(localStorage.getItem("btnClients")) == undefined ? true : JSON.parse(localStorage.getItem("btnClients")),
				jobs_admin: JSON.parse(localStorage.getItem("btnJobsAdmin")) == undefined ? true : JSON.parse(localStorage.getItem("btnJobsAdmin")),
				jobs_technical: JSON.parse(localStorage.getItem("btnJobsTechnical")) == undefined ? true : JSON.parse(localStorage.getItem("btnJobsTechnical")),
				login: JSON.parse(localStorage.getItem("btnLogin")) == undefined ? false : JSON.parse(localStorage.getItem("btnLogin")),
				account: JSON.parse(localStorage.getItem("btnAccount")) == undefined ? true : JSON.parse(localStorage.getItem("btnAccount"))
			},

		},
		actions: {
			login_user: async () => {

				const store = getStore()
				const actions = getActions()
				try {
					let user = {}
					if (store.username == null) {
						user = null
					} else if (store.password == null) {
						user = {
							username: store.username
						}
					}
					else {
						user = {
							username: store.username,
							password: store.password
						}
					}
					const response = await fetch(process.env.BACKEND_URL + "/login", {
						method: 'POST',
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const result = await response.json()

					if (result.msg == "ok") {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Good',
							text: `Welcome ${result.User.first_name} ${result.User.last_name}`,
							showConfirmButton: false,
							color: '#FFFFFF',
							background: '#41206C',
							timer: 3000
						})
						localStorage.setItem("jwt-token", result.access_token);
						localStorage.setItem("user_login", JSON.stringify(result.User))
						setStore({ user_login: result.User })
						actions.active_buttons_by_role()
						setStore({ is_logued: true })
						actions.clear_store()

					} else {
						Swal.fire({
							position: 'top-end',
							icon: 'error',
							title: 'Opppsss',
							text: result.message,
							showConfirmButton: false,
							color: '#FFFFFF',
							background: '#41206C',
							timer: 3000
						})
					}

				} catch (error) {
					console.log(error + " Error in login_user backEnd")
					setStore({ is_logued: false })
				}
			},
			active_buttons_by_role: () => {
				const store = getStore()
				if (store.user_login.role == "admin") {
					localStorage.setItem("btnUsers", false)
					localStorage.setItem("btnJobsAdmin", false)
					localStorage.setItem("btnJobsTechnical", true)
					localStorage.setItem("btnClients", false)
					localStorage.setItem("btnLogin", true)
					localStorage.setItem("btnAccount", false)
					setStore({
						buttons_admin_tech: {
							users: false, jobs_admin: false, jobs_technical: true,
							clients: false, login: true, account: false
						}
					})

				} else if (store.user_login.role == "technical") {
					localStorage.setItem("btnUsers", true)
					localStorage.setItem("btnJobsAdmin", true)
					localStorage.setItem("btnJobsTechnical", false)
					localStorage.setItem("btnClients", true)
					localStorage.setItem("btnLogin", true)
					localStorage.setItem("btnAccount", false)
					setStore({
						buttons_admin_tech: {
							users: true, jobs_admin: true, jobs_technical: false,
							clients: true, login: true, account: false
						}
					})
				}
			},
			forgot_password: async () => {
				const store = getStore()
				const actions = getActions()

				try {
					const response = await fetch(process.env.BACKEND_URL + `/user/${store.username}`, {
						method: 'GET'
					})
					const result = await response.json()

					if (store.username == "" || store.username == null) {
						Swal.fire({
							position: 'top-end',
							icon: 'error',
							title: 'Opppsss',
							text: "Please enter the username",
							showConfirmButton: false,
							color: '#FFFFFF',
							background: '#41206C',
							timer: 3000
						})
					}
					else if (result.msg == "ok") {
						setStore({ user_question: result.User })
						setStore({ hidden_username: true })
						setStore({ hidden_questions_answer: false })
						setStore({ password_changed: false })
						actions.clear_store()
					}
					else {
						Swal.fire({
							position: 'top-end',
							icon: 'error',
							title: 'Opppsss',
							text: result.message,
							showConfirmButton: false,
							color: '#FFFFFF',
							background: '#41206C',
							timer: 3000
						})
					}
				} catch (error) {
					console.log(error + " Error in forgot_password backEnd")
				}

			},
			reset_hidden_username_question: (username, questions_answer) => {
				setStore({ hidden_username: username })
				setStore({ hidden_questions_answer: questions_answer })
				setStore({ correct_answer: false })
			},
			check_question_answer: () => {
				const store = getStore()
				const actions = getActions()

				if (store.question_security == null || store.answer_security == null || store.answer_security == "") {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: "Please select the question and enter the answer",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
				else if (store.user_question.question_security == store.question_security && store.user_question.answer_security == store.answer_security) {
					setStore({ correct_answer: true })
					actions.clear_store()

				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: "Please enter the correct information",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},
			change_password: async () => {
				const store = getStore()
				const actions = getActions()
				const token = localStorage.getItem('jwt-token')

				if (store.password == store.confirm_password) {
					try {
						if (store.password == "" || store.password == null || store.confirm_password == "" || store.confirm_password == null) {
							Swal.fire({
								position: 'top-end',
								icon: 'error',
								title: 'Opppsss',
								text: "Please enter the passwords",
								showConfirmButton: false,
								color: '#FFFFFF',
								background: '#41206C',
								timer: 3000
							})
						}
						else {
							const user = {
								password: store.password
							}
							const response = await fetch(process.env.BACKEND_URL + `/user/${store.user_question.id}`, {
								method: 'PUT',
								body: JSON.stringify(user),
								headers: {
									"Content-Type": "application/json",
								}
							})
							const result = await response.json()

							if (result.msg == "ok") {
								setStore({ password_changed: true })
								Swal.fire({
									position: 'top-end',
									icon: 'success',
									title: 'Good',
									text: "Password Changed",
									showConfirmButton: false,
									color: '#FFFFFF',
									background: '#41206C',
									timer: 3000
								})
								actions.clear_store()
							}
							else {
								Swal.fire({
									position: 'top-end',
									icon: 'error',
									title: 'Opppsss',
									text: result.message,
									showConfirmButton: false,
									color: '#FFFFFF',
									background: '#41206C',
									timer: 3000
								})
							}
						}
					} catch (error) {
						console.log(error + " Error in change_password backEnd")
					}
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: "The passwords don't match",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},
			logout: () => {
				setStore({ is_logued: false })
				setStore({
					buttons_admin_tech: {
						users: true, jobs_admin: true, jobs_technical: true,
						clients: true, login: false, account: true
					}
				})
				setStore({ user_login: {} })
				localStorage.clear();
			},

			get_all_users: async () => {

				const token = localStorage.getItem('jwt-token')
				const response = await fetch(process.env.BACKEND_URL + '/user', {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ users: result.Users })
				setStore({ users_search: result.Users })

			},
			get_user_by_id: async (user_id) => {
				const token = localStorage.getItem('jwt-token')
				setStore({ hidden_input_question_answer: true })
				setStore({ read_only_username: true })
				setStore({ hidden_id: false })
				setStore({ show_modal: true })
				const response = await fetch(process.env.BACKEND_URL + `/user/${user_id}`, {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ user_id: result.User })

			},
			add_user: async () => {
				const token = localStorage.getItem('jwt-token')
				setStore({ hidden_input_question_answer: false })
				setStore({ read_only_username: false })
				const store = getStore()
				const actions = getActions()

				let user = {}
				if (store.username != null) {
					user.username = store.username
				}
				if (store.first_name != null) {
					user.first_name = store.first_name
				}
				if (store.last_name != null) {
					user.last_name = store.last_name
				}
				if (store.role != null) {
					user.role = store.role
				}
				if (store.phone != null) {
					user.phone = store.phone
				}
				if (store.password != null) {
					user.password = store.password
				}
				if (store.question_security != null) {
					user.question_security = store.question_security
				}
				if (store.answer_security != null) {
					user.answer_security = store.answer_security
				}

				const response = await fetch(process.env.BACKEND_URL + '/user', {
					method: 'POST',
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()

				if (result.msg == "ok") {
					actions.handle_delete_modal()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Add',
						text: `The User ${result.User.first_name} ${result.User.last_name} was added`,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
					actions.clear_store()

				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}

			},
			update_user_by_id: async (user_id) => {
				const token = localStorage.getItem('jwt-token')
				const store = getStore()
				const actions = getActions()
				setStore({ hidden_input_question_answer: true })
				let user = {}
				if (store.first_name != null) {
					user.first_name = store.first_name
				}
				if (store.last_name != null) {
					user.last_name = store.last_name
				}
				if (store.role != null) {
					user.role = store.role
				}
				if (store.phone != null) {
					user.phone = store.phone
				}
				if (store.password != null) {
					user.password = store.password
				}

				const response = await fetch(process.env.BACKEND_URL + `/user/${user_id}`, {
					method: 'PUT',
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token
					}
				})
				const result = await response.json()
				if (result.msg == "ok") {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Done',
						text: "The user " + store.user_id.username + " was updated",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
					actions.handle_delete_modal()
					actions.clear_store()
				}
				else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})

				}

			},
			delete_user_by_id: async (user_id) => {
				const token = localStorage.getItem('jwt-token')
				const response = await fetch(process.env.BACKEND_URL + `/user/${user_id.id}`, {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				if (result.msg == "ok") {
					setStore({ user_deleted: true })
					Swal.fire({
						title: 'Deleted!',
						text: `The user ${user_id.first_name} ${user_id.last_name} was deleted`,
						icon: 'success',
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 2000
					})
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},
			search_users: (input) => {
				const store = getStore();

				const newUser = store.users_search.filter(user => {
					if (user.first_name.toLowerCase().includes(input.toLowerCase()) ||
						user.last_name.toLowerCase().includes(input.toLowerCase()) ||
						user.role.toLowerCase().includes(input.toLowerCase()) ||
						user.id.toString().includes(input)) {
						return user
					}
				})
				setStore({ users: newUser })
			},
			delete_user_change: () => {
				setStore({ user_deleted: false })
			},

			get_all_clients: async () => {
				const token = localStorage.getItem('jwt-token')
				const response = await fetch(process.env.BACKEND_URL + '/client', {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ clients: result.clients })
				setStore({ clients_search: result.clients })
			},
			get_client_by_id: async (client_id) => {
				const token = localStorage.getItem('jwt-token')
				setStore({ show_modal: true })
				setStore({ hidden_id: false })

				const response = await fetch(process.env.BACKEND_URL + `/client/${client_id}`, {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ client_id: result.Client })

			},
			add_client: async () => {
				const token = localStorage.getItem('jwt-token')
				const store = getStore()
				const actions = getActions()

				let client = {}
				if (store.first_name != null) {
					client.first_name = store.first_name
				}
				if (store.last_name != null) {
					client.last_name = store.last_name
				}
				if (store.phone != null) {
					client.phone = store.phone
				}

				const response = await fetch(process.env.BACKEND_URL + '/client', {
					method: 'POST',
					body: JSON.stringify(client),
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()

				if (result.msg == "ok") {
					actions.handle_delete_modal()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Add',
						text: `The Client ${result.client.first_name} ${result.client.last_name} was added`,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
					actions.clear_store()
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})		
				}

			},
			update_client_by_id: async (client_id) => {
				const token = localStorage.getItem('jwt-token')
				const store = getStore()
				const actions = getActions()

				let client = {}
				if (store.first_name != null) {
					client.first_name = store.first_name
				}
				if (store.last_name != null) {
					client.last_name = store.last_name
				}
				if (store.phone != null) {
					client.phone = store.phone
				}

				const response = await fetch(process.env.BACKEND_URL + `/client/${client_id}`, {
					method: 'PUT',
					body: JSON.stringify(client),
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				if (result.msg == "ok") {
					actions.handle_delete_modal()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Done',
						text: `The client ${store.client_id.first_name} ${store.client_id.last_name} was updated`,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
					actions.clear_store()

				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},
			search_clients: (input) => {
				const store = getStore()
				const newClient = store.clients_search.filter(client => {
					if (client.id.toString().includes(input) ||
						client.first_name.toLowerCase().includes(input.toLowerCase()) ||
						client.last_name.toLowerCase().includes(input.toLowerCase()) ||
						client.phone.toLowerCase().includes(input.toLowerCase())) {
						return client
					}
				})
				setStore({ clients: newClient })
			},

			get_all_jobs: async () => {
				const token = localStorage.getItem('jwt-token')
				const response = await fetch(process.env.BACKEND_URL + '/job', {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ jobs: result.Jobs })
				setStore({ jobs_search: result.Jobs })
			},
			get_job_by_id: async (job_id) => {
				const token = localStorage.getItem('jwt-token')
				setStore({ show_modal: true })
				setStore({ hidden_id: false })
				setStore({ hidden_time_stamp: false })
				setStore({ hidden_btn_new_code: true })
				const response = await fetch(process.env.BACKEND_URL + `/job/${job_id}`, {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ job_id: result.Job })
			},
			get_job_by_technical: async (user_login_id) => {
				const token = localStorage.getItem('jwt-token')
				const response = await fetch(process.env.BACKEND_URL + `/job/technical/${user_login_id}`, {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				setStore({ jobs: result.Jobs })
				setStore({ jobs_search: result.Jobs })
			},
			get_job_by_code: async (job_code) => {
				const response = await fetch(process.env.BACKEND_URL + `/job/code/${job_code}`, {
					method: 'GET'
				})
				const result = await response.json()
				if (result.msg == "ok") {
					Swal.fire({
						title: 'Welcome ' + result.Job.client.first_name + ' ' + result.Job.client.last_name,
						background: '#41206C',
						color: '#FFFFFF',
						width: 650,
						html: `Code: ${result.Job.code}<br><br><h4>Status: ${result.Job.status}</h4>`,
						footer: 'Thank you for choosing us!',
						showClass: {
							popup: 'animate__animated animate__swing'
						},
						hideClass: {
							popup: 'animate__animated animate__fadeOutBottomRight'
						}
					})
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 2000,
						showClass: {
							popup: 'animate__animated animate__swing'
						},
						hideClass: {
							popup: 'animate__animated animate__fadeOutBottomRight'
						}
					})
				}
				setStore({ code: null })
			},
			add_job: async () => {
				const token = localStorage.getItem('jwt-token')
				const store = getStore()
				const actions = getActions()

				let job = {}

				job.code = store.code

				if (store.type != null) {
					job.type = store.type
				}
				if (store.brand != null) {
					job.brand = store.brand
				}
				if (store.model != null) {
					job.model = store.model
				}
				if (store.serial_number != null) {
					job.serial_number = store.serial_number
				}
				if (store.status != null) {
					job.status = store.status
				}
				if (store.issues != null) {
					job.issues = store.issues
				}
				if (store.comments != null) {
					job.comments = store.comments
				}
				if (store.client_id != null) {
					job.id_client = store.client_id
				}
				if (store.technical_id != null) {
					job.id_technical = store.technical_id
				}

				const response = await fetch(process.env.BACKEND_URL + "/job", {
					method: 'POST',
					body: JSON.stringify(job),
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				}

				)
				const result = await response.json()
				if (result.msg == "ok") {
					actions.handle_delete_modal()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Add',
						text: `The Job ${result.Job.code} was added`,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
					actions.clear_store()

				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},
			update_job_by_id: async (job_id) => {
				const token = localStorage.getItem('jwt-token')
				const store = getStore()
				const actions = getActions()

				let job = {}
				if (store.type != null) {
					job.type = store.type
				}
				if (store.brand != null) {
					job.brand = store.brand
				}
				if (store.model != null) {
					job.model = store.model
				}
				if (store.serial_number != null) {
					job.serial_number = store.serial_number
				}
				if (store.status != null) {
					job.status = store.status
				}
				if (store.issues != null) {
					job.issues = store.issues
				}
				if (store.comments != null) {
					job.comments = store.comments
				}
				if (store.client_id != null) {
					job.id_client = store.client_id
				}
				if (store.technical_id != null) {
					job.id_technical = store.technical_id
				}


				const response = await fetch(process.env.BACKEND_URL + `/job/${job_id}`, {
					method: 'PUT',
					body: JSON.stringify(job),
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				if (result.msg == "ok") {
					actions.handle_delete_modal()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Update',
						text: `The Job ${result.Job.code} was updated`,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
					actions.clear_store()

				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}

			},
			delete_job_by_id: async (job_id) => {
				const token = localStorage.getItem('jwt-token')
				const response = await fetch(process.env.BACKEND_URL + `/job/${job_id.id}`, {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json",
						'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
					}
				})
				const result = await response.json()
				if (result.msg == "ok") {
					setStore({ job_deleted: true })
					Swal.fire({
						title: 'Deleted!',
						text: `The job ${job_id.code} was deleted`,
						icon: 'success',
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 2000
					})
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},
			search_jobs: (input) => {
				const store = getStore();

				const newJob = store.jobs_search.filter(job => {
					if (job.code.includes(input) ||
						job.type.toLowerCase().includes(input.toLowerCase()) ||
						job.status.toLowerCase().includes(input.toLowerCase()) ||
						job.technical.username.toLowerCase().includes(input.toLowerCase()) ||
						job.id.toString().includes(input)) {
						return job
					}
				})
				setStore({ jobs: newJob })
			},
			delete_job_change: () => {
				setStore({ job_deleted: false })
			},
			random_code_job: () => {
				const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				const charactersLength = characters.length;
				let result = "";
				let ch;
				while (result.length < 10) {
					ch = characters.charAt(Math.floor(Math.random() * charactersLength));
					if (!result.includes(ch)) {
						result += ch;
					}
				}
				setStore({ code: result })
			},

			handle_show_modal: () => {
				const store = getStore()
				const actions = getActions()
				setStore({ show_modal: true })
				if (!!store.user_id != true) {
					setStore({ hidden_input_question_answer: false })
					setStore({ read_only_username: false })
					setStore({ hidden_id: true })
				}
				if (!!store.client_id != true) {
					setStore({ hidden_id: true })
				}
				if (!!store.job_id != true) {
					actions.random_code_job()
					setStore({ hidden_id: true })
					setStore({ hidden_time_stamp: true })
					setStore({ hidden_btn_new_code: false })
				}
			},
			handle_delete_modal: () => {
				const actions = getActions()

				setStore({ show_modal: false })
				setStore({ user_id: null })
				setStore({ client_id: null })
				setStore({ job_id: null })

				actions.clear_store()

			},

			handleSubmit: async (e, data) => {
				e.preventDefault();
				const response = await fetch(process.env.BACKEND_URL + '/send_email', {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
				// const result = await response.json()

				if (response.ok) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Success',
						text: `Message sent succesdfully`,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: "At this moment we can't send your message",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 3000
					})
				}
			},

			clear_store: () => {

				setStore({ username: null })
				setStore({ first_name: null })
				setStore({ last_name: null })
				setStore({ role: null })
				setStore({ phone: null })
				setStore({ password: null })
				setStore({ confirm_password: null })
				setStore({ question_security: null })
				setStore({ answer_security: null })

				setStore({ code: null })
				setStore({ type: null })
				setStore({ brand: null })
				setStore({ model: null })
				setStore({ serial_number: null })
				setStore({ status: null })
				setStore({ issues: null })
				setStore({ comments: null })
				setStore({ client_id: null })
				setStore({ technical_id: null })
			},

			handle_change: (e) => {
				setStore({ [e.target.name]: e.target.value })
			},
		}
	};
};

export default getState;
