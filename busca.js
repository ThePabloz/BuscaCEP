function DadosTela(dados){
    document.querySelector('.logradouro').value = dados.logradouro
    document.querySelector('.bairro').value = dados.bairro
    document.querySelector('.localidade').value = dados.localidade
    document.querySelector('.uf').value = dados.uf
    document.querySelector('.ddd').value = dados.ddd
}


async function Buscardados(cep){
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json());
    DadosTela(dados)
}

function Cliquebotao(){
    const cep = document.querySelector('.cep').value
    Buscardados(cep)
}

function Limpar() {
    document.querySelector('.logradouro').value = ""
    document.querySelector('.bairro').value = ""
    document.querySelector('.localidade').value = ""
    document.querySelector('.uf').value = ""
    document.querySelector('.ddd').value = ""
}