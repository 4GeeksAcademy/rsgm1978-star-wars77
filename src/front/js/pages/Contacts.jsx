import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Contacts = () => {
    const {store, actions} = useContext (Context); 
    const navigate = useNavigate()
    const [dataToSend, setDataToSend] = {
      name: "",
      phone: "",
      email: "",
      address: ""
        }

const handleName = (event)=>{
      const name = event.target.value;
      setDataToSend({...dataToSend,name:name});
      const phone = event.target.value;
      setDataToSend({...dataToSend,name:phone});
      const email = event.target.value;
      setDataToSend({...dataToSend,name:email});
      const address = event.target.value;
      setDataToSend({...dataToSend,name:address});
  }
  return
   <div>
      <form onSubmit={(event)=>handleSubmit(event)}>
            <input type="text" placeholder="Name" onChange={(event)=>handleName(event)} value={dataToSend.name}/>
            <input type="text" placeholder="Phone" onChange={(event)=>handleName(event)} value={dataToSend.phone}/>
            <input type="text" placeholder="Email" onChange={(event)=>handleName(event)} value={dataToSend.email}/>
            <input type="text" placeholder="Address" onChange={(event)=>handleName(event)} value={dataToSend.address}/>
            <button type="submit">Submit</button>
      </form>
   </div>






   /* const addContacts = () => {
      navigate('/add-contacts')

    }

    const deleteContacts = async (nro) => {
        console.log(nro);
        
      }
    const uri = '${host}/contacts/${nro}'

    const EditContact =async () => {
      //guardar los datos que quiero editar en clave del store
      //ir al componente EditContacts
      const dataToSend = {
        <button className="text-center"> formulario</button>
      }
    }*/
    return (
      <div>
            <h1>Contacts</h1>
    </div>  
    )
    

}
