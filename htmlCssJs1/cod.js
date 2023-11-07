const url = "https://botafogo-atletas.mange.li";
const url2 = "https://botafogo-atletas.mange.li/all";
const numero_jogador = 1;

const cartoes = document.createElement('div');
document.body.appendChild(cartoes);

const largura = '20rem';
const cor = '#777777';
const alinhamento = 'center';
const margem = 'auto';

const criarCartao = (entrada) => { 

    const container = document.createElement('div');
    formatarCartao(container);

    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;

    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    cartoes.appendChild(container);
}


const formatarCartao = (cartao) => {

    cartao.style.width = largura;
    cartao.style.backgroundColor = cor;
    cartao.style.textAlign = alinhamento;
    cartao.style.margin = margem;
}

const pegarJson = async (caminho) => {
    return (await fetch(caminho)).json();
}

function filtrar(name) {
    const filtrado = atletas.find(atleta => atleta.nome.toLowerCase() == name.toLowerCase());
    cartoes.innerHTML="";
    criarCartao(filtrado);
}

const pesquisa = document.createElement('div');
pesquisa.style.textAlign = 'left';

const input = document.createElement('input');

const botao = document.createElement('button');
botao.innerHTML = "Buscar";
botao.onclick = () => {filtrar(input.value)};

pesquisa.appendChild(input);
pesquisa.appendChild(botao);
document.body.appendChild(pesquisa);

pegarJson(`${url}/${numero_jogador}`).then((r) => criarCartao(r));

const atletas = pegarJson(url2);
