import { useState,useEffect } from "react"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header2 from "./components/Header2"

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] = useState({});

 


  useEffect(() => {

localStorage.setItem('pacientes',JSON.stringify(pacientes));


  },[pacientes])
  const eliminarPaciente =  (id) => { 

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)

  }
  
  //vacios cuando llegan al formulario

  return (
    
    <div className="container mx-auto">

     <Header2
     
   
     
     />
     <div className="mt-12 md:flex">
     <Formulario
   pacientes={pacientes}
  setPacientes={setPacientes}    
  paciente={paciente}  
  setPaciente={setPaciente}
     />
     <ListadoPacientes 
     
     pacientes = {pacientes}
     
     setPaciente = {setPaciente} 
     eliminarPaciente = {eliminarPaciente}
     />
     
     </div>
    </div>
  )
}

export default App
