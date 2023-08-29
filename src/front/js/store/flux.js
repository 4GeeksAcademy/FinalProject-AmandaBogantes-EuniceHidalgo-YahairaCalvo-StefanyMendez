const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

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
		}
	};
};

export default getState;
