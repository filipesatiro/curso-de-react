function SeuNome ({setNome}) {
    return (

        <div>
            <p>Digite o seu Nome: </p>
        <input type="text" placeholder= "Qual é o seu nome?" 
        onChange={(e) => setNome(e.target.value)}>
        </input>
        </div>
    )
}
export default SeuNome;