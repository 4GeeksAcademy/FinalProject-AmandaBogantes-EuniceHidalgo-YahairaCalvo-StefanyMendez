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

			first_name: null,
			last_name: null,
			phone: null,

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
			clients: [],
			users: [],

			user_login: {},
			user_question: {},
			is_logued: false,
			job_search: {},

			hidden_username: null,
			hidden_questions_answer: null,
			correct_answer: false,
			password_changed: false,

			buttons_admin_tech:{
				users:true,
				clients:true,
				jobs: true,
				login:false,
				account:true
			}
		},
		actions: {
			/* 			addJob: async()=>{
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
				console.log(store.buttons_admin_tech.login);
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

					console.log(result);

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
						setStore({ isloged: true })
						setStore({user_login: result.User})
						actions.active_buttons_by_role()
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
					setStore({ isloged: false })
				}
			},
			active_buttons_by_role: () =>{
				const store = getStore()
				if (store.user_login.role == "admin"){
					setStore({buttons_admin_tech:{users:false, jobs:false, clients:false,login:true,account:false}})
				}else if (store.user_login.role=="technical"){
					setStore({buttons_admin_tech:{users:true, jobs:false, clients:true,login:true,account:false}})

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
				setStore({ correct_answer: false})
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
			handle_change: e => {
				setStore({ [e.target.name]: e.target.value })
			}
		}
	};
};

export default getState;
