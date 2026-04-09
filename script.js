const buttonAdicionar = document.getElementById("btnAdicionar")
const listaTarefa = document.getElementById('listaTarefas')

// adicionando tarefas do javascript
function createTask(){ // pega o texto, cria objetos html, adiciona tudo na tag li. Esperado: <li><input><span>o que eu quiser</span></li>
    const tarefa = document.getElementById('tarefaInput').value
    
    const texto = tarefa
    
    const li = document.createElement('li')
    li.setAttribute('class','task-item')
    
    const input = document.createElement('input')
    input.setAttribute('type', 'radio')
    
    const span = document.createElement('span')
    span.textContent = texto

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class','btn-delete')
    
    // adicionando a opção de remover:
    btnDelete.addEventListener('click', () => {
        li.remove() 
    })

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(btnDelete)
    return li
}


// criando a função para adicionar a atividade à lista
// funcionará assim que clicar no botão de adicionar
function addTask(){
    const liTask = createTask()
    listaTarefa.appendChild(liTask)
}

buttonAdicionar.addEventListener('click', addTask)