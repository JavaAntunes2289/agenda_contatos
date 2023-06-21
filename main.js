const form = document.getElementById('form-atividade');
let linhas = '';
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('num-telefone');

    if (contatos.some(contato => contato.telefone === inputNumeroTelefone.value)) {
        alert(`O número ${inputNumeroTelefone.value} já foi inserido`);
    } else {
        const telefone = inputNumeroTelefone.value.slice(0, 15); 
        const contato = {
            nome: inputNomeContato.value,
            telefone: telefone
        };

        contatos.push(contato);
        atualizaLinhas();
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaLinhas() {
    linhas = '';
    contatos.forEach(contato => {
        let linha = '<tr>';
        linha += `<td>${contato.nome}</td>`;
        linha += `<td>${contato.telefone}</td>`;
        linha += '</tr>';

        linhas += linha;
    });
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

