import PacienteComp from "./PacienteComp"


const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {


  return (
    <div className="md:dw-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-5 text-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold"> Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            //generar un key

            <PacienteComp
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente = {eliminarPaciente}

            />


          ))}
        </>

      ) : (

<>    <h2 className="font-black text-3xl text-center">Sin Pacientes</h2>

          <p className="text-xl mt-5 mb-5 text-center">
            Comienza {' '}
            <span className="text-indigo-600 font-bold"> Agregando a los pacientes</span>
          </p>



</>


      )     }

     




    </div>
  )
}

export default ListadoPacientes