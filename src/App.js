import './App.css';
import SayMyName from './components/SayMayName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = "Maria";
  return (
    <div className="App"> 
    <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome = "Filipe"/>   
      <SayMyName nome = "João"/>  
      <SayMyName nome = {nome}/> 
      <Pessoa nome="Oliveira" idade="30" profissao="Programador" foto="https://djairgalvao.com/wp-content/uploads/2021/08/pessoa.jpg"/>
    </div>
  );
}

export default App;
