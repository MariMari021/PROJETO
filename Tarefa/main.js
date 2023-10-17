

//Seleciona o formulario de tarefas
const form = document.querySelector('.form');

//seleciona o campo de entrada de tarefas
const input = document.getElementById('input');

//seleciona a lista de tarefas
const lista = document.getElementById('lista')

//cria uma matriz vazia para armazenar as tarefas
let todos = [];

//função para mostrar as tarefas da lista
function listarTarefas() {
    lista.innerHTML = '';

    //loop para as tarefas, cria um elemento de lista para cada uma
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        //cria um elemento de lista, um elemento de span e um botão para cada tarefa
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        //define o texto da tarefa no elemento span
        span.innerHTML = todo;

        //define o texto do botão de exclusão e adiciona um ouvinte de eventos para remover a tarefa da matriz e mostrar a lista novamente
        button.innerHTML = 'X';
        button.style.backgroundColor = '#110b31';
        button.style.color = 'white';
        button.style.borderRadius = '100px';
        button.style.height = '30px';
        button.style.width = '30px';
        
        button.addEventListener('click', function () {
            todos.splice(i, 1);
            listarTarefas();
        });

        //adiciona o elemento span e o botão ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        //adiciona o elemento li na lista de tarefas
        lista.appendChild(li);
    }

}

//adiciona um ouvinte de eventos ao formulario para detectar quando o usuario envia uma nova tarefa
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //obtém o texto da tarefa e remove espaços em brancos extras
    const texto = input.value.trim();

    //retorna se a nova tarefa não tiver nenhum texto 
    if (texto.length === 0) {
        return;
    }

    //adiciona a nova tarefa na matriz e limpa o input e mostra a lista
    todos.push(texto);
    input.value = ''
    listarTarefas();
});

//carregar a lista de tarefas quando a pagina é carregada
listarTarefas();