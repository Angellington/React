function Header(){
    return (
        <>
        <header className="bg-white drop-shadow-lg flex  justify-center mx-40 flex-col">
      <div className="flex justify-center flex-col self-center px-20 text-center  gap-2 p-5 ">
        <div><h2 className="bg-slate-400 p-2 text-lg w-60"> NUMCAD: 1259-2024</h2></div>
        <p className="font-bold">Quantidade de Vítimas - 5</p>
        <p className="font-bold">Quantidade de Vítimas - 5</p>
        <p className="font-bold">Quantidade de Vítimas - 5</p>
      </div>
      <div className="bg-slate-200 p-3 border-t-4 border-gray-300 flex justify-evenly">
        <div className="px-4">
          <p className="font-bold text-gray-500">Registrado por</p>
          <p className="font-bold text-gray-700">David Júnior Figueiredo Júnior</p>
        </div>
        <div className="px-4">
          <p className="font-bold text-gray-500">Criado em</p>
          <p className="font-bold text-gray-700">12/01/2024 - 16h</p>
        </div>
        <div className="px-4">
          <p className="font-bold text-gray-500">Delegacia de Registro</p>
          <p className="font-bold text-gray-700">2º Distrito Policial</p>
        </div>
        <div className="px-4">
          <p className="font-bold text-gray-500">Última atualização</p>
          <p className="font-bold text-gray-700">12/01/2024 às 16:52:23</p>
        </div>
      </div>
    </header>
    <div className='w-full'></div></>
    )
}

export default Header