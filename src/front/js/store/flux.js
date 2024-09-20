const getState = ({ getStore, getActions, setStore }) => {
	return {
		//store van a devolver digamos que "variables= objetos,arrays, null, etc." globales
		store: {
			username: "rsgm1978",
			contacts:[],
			hostContacts: "https://playground.4geeks.com/contact",
			rsgm1978: "Rama78",
				},
		//actions va devolver acciones (funcion a nivel global y esta va ser una funcion felcha) globales
		actions: {
			// Use getActions to call a function within a fuction

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
			}
		}
	};


export default getState;
