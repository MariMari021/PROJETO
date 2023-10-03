//Seleciona o formulário de login 
const form = document.querySelector('.login-form');

//Seleciona os campos de entrada de usuário e senha
const usernameInput = form.querySelector('input[type="text"]');
//Dessa forma pegamos identificamos a tag pelo tipo do input dela, usamos o form ao invés de document para indicar em qual classe, ou dentro de onde eu vou chamar esse input
const senhaInput = form.querySelector('input[type="password"');


//Adiciona um ouvinte de eventos ao formulários para detectar quando o usu´srio clica no botão
form.addEventListener('submit', (event) =>{
    //event.preventDefault() evita que a página seja recarregada quando o formulário for enviado
    event.preventDefault();

    //obtém os valores dos campos de entrada do usuário e senha e o trim() remove os espaços em branco que podem ter antes e depois de cada campo
    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    //verifica se os campos de entrada e saida estão vazios
    if(usuario === '' || senha === ''){
        alert('Por favor, preencha os campos.')
        //verifica se as informações de login e senha estão corretas
    }else if(usuario === 'usuario' &&  senha === 'senha'){
        alert('Bem-vindo!')
        //redireciona o usuário para outra página após o login
        location.replace("C:/Users/DEV2A-16/Documents/PROJETO/Tarefa/index.html", "_self");
    } else{
        //exibe uma mensagem de erro se as informações estiverem erradas
        alert('Usuário ou senha incorreto, tente novamente')
    }
})


//Seleciona o formulário de login 
const formulario = document.querySelector('.conta-form');

//Seleciona os campos de entrada de usuário e senha
const nomeInput = document.getElementById('nome')
//Dessa forma pegamos identificamos a tag pelo tipo do input dela, usamos o form ao invés de document para indicar em qual classe, ou dentro de onde eu vou chamar esse input
const emailInput = form.querySelector('input[type="email"]')

const userInput = document.getElementById('user')

const passwordInput = form.querySelector('input[type="password"]');


//Adiciona um ouvinte de eventos ao formulários para detectar quando o usu´srio clica no botão
formulario.addEventListener('cadastro', (event) =>{
    //event.preventDefault() evita que a página seja recarregada quando o formulário for enviado
    event.preventDefault();

    //obtém os valores dos campos de entrada do usuário e senha e o trim() remove os espaços em branco que podem ter antes e depois de cada campo
    const user = userInput.value.trim();
    const pass = passwordInput.value.trim();

    const email = emailInput.value.trim();
    const nome = nomeInput.value.trim();


    //verifica se os campos de entrada e saida estão vazios
    if(user === '' || pass === '' || email === '' || nome === ''){
        alert('Por favor, preencha os campos.')
        //verifica se as informações de login e senha estão corretas
    }
       

})