import Button from "./evento/Button";


function Evento() {
    function meuEvento() {
    console.log(`Ativando  primeiro Evento`  );
    }
    function segundoEvento() {
        console.log(' Ativando segundo Evento');
    }
    return (
     <div>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="PrimeiroEvento"/>
        <Button event={segundoEvento} text="Segundo Ecento"/>
        
     </div>
    )
}

export default Evento;