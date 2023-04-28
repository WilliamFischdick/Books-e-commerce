const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoria)
    exibeLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotalLivros(livrosFiltrados)
        exibeValorDisponivel(valorTotal)
    }

    function exibeValorDisponivel(valorTotal) {
        valorTotalLivros.innerHTML =`
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</div>
        </div>`
    }
}

function filtrarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}
