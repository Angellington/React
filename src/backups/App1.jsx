import Task from './components/Task.jsx'
import { useState  } from 'react';


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Seventh Heaven",
    description: "A evolução do Kineorama ao lado da Esperança",
    isCompleted: false
  },
  {
    id: 2,
    title: "Makai",
    description: "A evolução do Kineorama ao lado da Esperança",
    isCompleted: false
  },
  {
    id: 3,
    title: "String Theocracy",
    description: "A evolução do Kineor       ma ao lado da Esperança",
    isCompleted: false
  },

])

function onTaskClick(taskId) {
  const newTasks = tasks.map((task) => {
    // PRECISO ATUALIZAR ESSA TAREFA
    if (task.id === taskId){
      return {...task, isCompleted: !task.isCompleted}
    }

    // NÃO PRECISO ATUALIZAR TAREFA
  })
}

  return (
    <div className='w-screen h-screen bg-slate-300 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center p-4'>Gerenciador de Tarefas</h1>
        <Task tasks={tasks}/>
      </div>
    </div>
  )
}

export default App;