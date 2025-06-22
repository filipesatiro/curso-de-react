function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Usuário cadastrado com sucesso!");
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="texto" placeholder="Digite o seu Nome"></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;