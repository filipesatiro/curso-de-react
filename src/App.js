import './App.css';
import SayMyName from './components/SayMayName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria";
  return (
    <div className="App"> 
      <SayMyName nome = "Filipe"/>   
      <SayMyName nome = "João"/>  
      <SayMyName nome = {nome}/> 
      <Pessoa nome="Oliveira" idade="30" profissao="Programador" foto="https://djairgalvao.com/wp-content/uploads/2021/08/pessoa.jpg"/>
    </div>
  );
}

export default App;
