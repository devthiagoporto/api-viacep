function consultaEndereco() {
    let cep = document.querySelector('#cep').value;
        if (cep.length !== 8) {
            alert('CEP Inválido')
            return
        }
    let url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url).then(function(response){
    response.json().then(function(data){
        console.log(data)
        mostraEndereco(data)
    })
})

}
function mostraEndereco(dados){
    let resultado = document.querySelector('#resultado')
    if (dados.erro) {
        resultado.innerHTML = "Não foi possivel localizar endereço!"
    } else {

    
    resultado.innerHTML =  `<p>Endereco: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Endereco: ${dados.logradouro}</p>
                            <p>${dados.localidade} - ${dados.uf}</p>`

             }                           
}

let tbusca = document.getElementById('principal')
console.log(tbusca)
let tresultado = document.getElementById('tela2')

function telaBusca(){
    tbusca.style.display = 'flex'
    tresultado.style.display = 'none'
}

function telaResultado(){
    tbusca.style.display = 'none'
    tresultado.style.display = 'flex'
}

