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
			technical_id: null,
			client_id: null,

			jobs: [],

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
			job_search: {},

			hidden_username: null,
			hidden_questions_answer: null,
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

			hidden_input_question_answer: true

		},
		actions: {
			/* addJob: async()=>{
							const body = {
								"code":"lsdflknsdfj",
								"type":"cpu",
								"brand":"HP",
								"model":"ljksdfsdsdf2313",
								"serial_number":"jksdflan56",
								"status":"finish",
								"issues":"Tarjeta madre alzo fuego",
								"comments":"Se le cambio la tarjeta",
								"id_technical":"14",
								"id_client":"1"
							}
			
							const response = await fetch(process.env.BACKEND_URL + "/job",{
			
								method:'POST',
								body: JSON.stringify(body),
								headers: {
									'Content-Type': 'application/json'
								}
							}
							
							)
							const result = await response.json()
			
							console.log(result)
						} */
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
							timer: 2000
						})
						localStorage.setItem("jwt-token", result.access_token);
						localStorage.setItem("user_login", JSON.stringify(result.User))
						setStore({ user_login: result.User })
						actions.active_buttons_by_role()
						setStore({ is_logued: true })

					} else {
						Swal.fire({
							position: 'top-end',
							icon: 'error',
							title: 'Opppsss',
							text: result.message,
							showConfirmButton: false,
							color: '#FFFFFF',
							background: '#41206C',
							timer: 1500
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
							timer: 1500
						})
					}
					else if (result.msg == "ok") {
						setStore({ user_question: result.User })
						setStore({ hidden_username: true })
						setStore({ hidden_questions_answer: false })
						setStore({ password_changed: false })
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
							timer: 1500
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
				if (store.question_security == null || store.answer_security == null || store.answer_security == "") {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: "Please select the question and enter the answer",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 1500
					})
				}
				else if (store.user_question.question_security == store.question_security && store.user_question.answer_security == store.answer_security) {
					setStore({ correct_answer: true })
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: "Please enter the correct information",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 1500
					})
				}
			},
			change_password: async () => {
				const store = getStore()
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
								timer: 1500
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
									'Content-Type': 'application/json'
								}
							})
							const result = await response.json()
							setStore({ password_changed: true })
							Swal.fire({
								position: 'top-end',
								icon: 'success',
								title: 'Good',
								text: "Password Changed",
								showConfirmButton: false,
								color: '#FFFFFF',
								background: '#41206C',
								timer: 1500
							})
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
						timer: 1500
					})
				}
			},
			logout: () => {
				setStore({ is_logued: false })
				setStore({
					buttons_admin_tech: {
						users: true, jobs_admin: true, jobs_technical:true,
						clients: true, login: false, account: true
					}
				})
				setStore({ user_login: {} })
				localStorage.clear();
			},

			get_all_users: async () => {

				const response = await fetch(process.env.BACKEND_URL + '/user', {
					method: 'GET'
				})
				const result = await response.json()
				setStore({ users: result.Users })
				setStore({ users_search: result.Users })

			},
			get_user_by_id: async (user_id) => {

				setStore({ show_modal: true })
				const response = await fetch(process.env.BACKEND_URL + `/user/${user_id}`, {
					method: 'GET',
				})
				const result = await response.json()
				setStore({ user_id: result.User })
				setStore({ hidden_input_question_answer: true })
				setStore({ read_only_username: true })
			},
			add_user: async () => {
				setStore({ show_modal: true })
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
						'Content-Type': 'application/json'
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
						timer: 2000
					})
					setStore({ username: null })
					setStore({ first_name: null })
					setStore({ last_name: null })
					setStore({ role: null })
					setStore({ phone: null })
					setStore({ password: null })
					setStore({ question_security: null })
					setStore({ answer_security: null })
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 1500
					})
				}

			},
			update_user_by_id: async (user_id) => {
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
						'Content-Type': 'application/json'
					}
				})
				const result = await response.json()
				if (result.msg == "ok") {
					actions.handle_delete_modal()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Done',
						text: "The user " + store.user_id.username + " was updated",
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 1500
					})
					setStore({ first_name: null })
					setStore({ last_name: null })
					setStore({ role: null })
					setStore({ phone: null })
					setStore({ password: null })
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
						timer: 1500
					})
				}

			},
			delete_user_by_id: async (user_id) => {
				const response = await fetch(process.env.BACKEND_URL + `/user/${user_id}`, {
					method: 'DELETE'
				})
				const result = await response.json()
				setStore({ user_deleted: true })
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
				const store = getStore()
				const response = await fetch(process.env.BACKEND_URL + '/client', {
					method: 'GET'
				})
				const result = await response.json()
				setStore({ clients: result.clients })
				setStore({ clients_search: result.clients })
			},
			get_client_by_id: async (client_id) => {
				setStore({ show_modal: true })
				const response = await fetch(process.env.BACKEND_URL + `/client/${client_id}`, {
					method: 'GET'
				})
				const result = await response.json()
				setStore({ client_id: result.Client })

			},
			add_client: async () => {
				setStore({ show_modal: true })
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
						'Content-Type': 'application/json'
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
						timer: 2000
					})
					setStore({ first_name: null })
					setStore({ last_name: null })
					setStore({ phone: null })
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 1500
					})
				}

			},
			update_client_by_id: async (client_id) => {
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
						'Content-Type': 'application/json'
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
						timer: 1500
					})
					setStore({ first_name: null })
					setStore({ last_name: null })
					setStore({ phone: null })
				} else {
					Swal.fire({
						position: 'top-end',
						icon: 'error',
						title: 'Opppsss',
						text: result.message,
						showConfirmButton: false,
						color: '#FFFFFF',
						background: '#41206C',
						timer: 1500
					})
				}
			},
			search_clients: (input) => {
				const store = getStore()
				const newClient = store.clients_search.filter(client => {
					if (client.id.toString().includes(input) ||
						client.first_name.toLowerCase().includes(input.toLowerCase()) ||
						client.last_name.toLowerCase().includes(input.toLowerCase())) {
						return client
					}
				})
				setStore({ clients: newClient })
			},

			get_all_jobs: async () => {
				const response = await fetch(process.env.BACKEND_URL + '/job', {
					method: 'GET'
				})
				const result = await response.json()
				setStore({ jobs: result.Jobs })
			},

			handle_show_modal: () => {
				const store = getStore()
				setStore({ show_modal: true })
				if (!!store.user_id != true) {
					setStore({ hidden_input_question_answer: false })
					setStore({ read_only_username: false })
				}
			},

			handle_delete_modal: () => {
				setStore({ show_modal: false })
				setStore({ user_id: null })
				setStore({ client_id: null })

			},

			handle_change: e => {
				setStore({ [e.target.name]: e.target.value })
			},
		}
	};
};

export default getState;
