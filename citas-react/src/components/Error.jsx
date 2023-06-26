

const Error = ({mensajeError}) => {
  return (
    <div className="bg-red-800 rounded-md mt-3">
    <p className="font-black text-center text-white uppercase p-3 mb-4">{mensajeError}]</p>
  </div>
  )
}

export default Error