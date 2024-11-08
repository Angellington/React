import Task from './components/Task.jsx'
import Header from './components/Header.jsx'
// import { useState } from 'react';


function App() {
  const blur = [{
    id: 1,
    name: "Seventh Heaven",
    description: "A evolução do Kineorama, a expansão dos movimentos",
    isActivate: false
  },
  {
    id: 2,
    name: "String Theocracy",
    description: "A expansão das cordas sentimentais. Ou Desespero, ou esperança",
    isActivate: false
  },
  {
    id: 3,
    name: "Python",
    description: "O looping infinito dentro das linhas",
    isActive: false
  },
  {
    id: 4,
    name: "Blasfêmia",
    description: "O campo de fogo controlado e regido"
  },] 

  return (
    <>
    <Header/>
    <Task tasks={blur}/>
    </>
  )
}

export default App