//rafc + TAB o ENTER

import {CandidatesCard} from "./components/CandidatesCard";


const App = () => {
  return (
    <main>
        <h1>Talenthub</h1>
        <p> Plataforma de Candidates</p>
        <CandidatesCard title="Desarrollador Web" company="Tech Corp" modality="Remoto" salary={1000}/>
        <CandidatesCard title="Analista Web" company="Atiempo" modality="Presencial" salary={500}/>
      
    </main>
  )
}

export default App;



