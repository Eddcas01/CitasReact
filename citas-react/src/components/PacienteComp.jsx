

const PacienteComp = ({ paciente, setPaciente,eliminarPaciente}) => {

  const { nombre, encargado, correo, fecha, sintomas,id } = paciente

  const handleEliminar = () =>{
    const respuesta =  confirm('Desea eliminar el paciente')

    if(respuesta){

      eliminarPaciente(id)

    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}

        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Encargado: {''}

        <span className="font-normal normal-case">{encargado}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}

        <span className="font-normal normal-case">{correo}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}

        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}

        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-end mt-5">
        <button type="button" className="py-2 px-10 bg-indigo-500 rounded-lg hover:bg-indigo-700 text-white font-bold"
        onClick={ () =>setPaciente(paciente) //se llama la funcion
      }  
        
        >
          Editar
        </button>
        <button type="button" className="py-2 px-10 ml-2 bg-red-500 rounded-lg hover:bg-red-700 text-white font-bold"
        onClick={handleEliminar}
        >
          Eliminar
        </button>

      </div>

    </div>
  )
}

export default PacienteComp