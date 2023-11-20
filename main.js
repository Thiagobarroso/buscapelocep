const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnBuscarCep");
const resultadoCep = document.getElementById("resultado");

btnCep.addEventListener("click", headleClique);
inputCep.addEventListener("keyup", headleEnter);

function headleEnter(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    const cep = inputCep.value;
    buscaCep(cep);
  }
}

function headleClique(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const conteudo = (document.getElementById("conteudo").innerHTML = `<div>
        <p>CEP: ${data.cep}</p>
        <p>Logradouro: ${data.logradouro}</p>
        <p>Bairro: ${data.bairro}</p>
        <p>Cidade: ${data.localidade}</p>
        <p>Estado: ${data.uf}</p>
        <div class="btn-nova"> 
        <a href="/index.html">Nova Busca</a>
        </div>
        </div>`);
    })
    .catch((error) => {
      alert("Digite um CEP valido\nExemplo: 00000-000", error);
    });
}
