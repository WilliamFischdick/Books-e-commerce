let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

bucarLivros();

async function bucarLivros() {
    const resp = await fetch(endPointAPI)
    livros = await resp.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibeLivros(livrosDesconto)
}
