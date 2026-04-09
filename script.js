const buttonAdicionar = document.getElementById("btnAdicionar")
const listaTarefa = document.getElementById('listaTarefas')

// adicionando tarefas do javascript
function createTask(){ // pega o texto, cria objetos html, adiciona tudo na tag li. Esperado: <li><input><span>o que eu quiser</span></li>
    
    const tarefa = document.getElementById('tarefaInput').value
    const texto = tarefa
    const li = document.createElement('li')
    const input = document.createElement('input')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const btnDelete = document.createElement('button')
    const inputDiv = document.createElement('input')
    
    
    
    li.setAttribute('class','task-item')
    input.setAttribute('type', 'radio')
    inputDiv.setAttribute('type', 'text')
    inputDiv.setAttribute('placeholder', 'Edite a tarefa...')
    div.setAttribute('class', 'box-edit')
    div.style.display = "none"
    span.textContent = texto
    btnDelete.setAttribute('class','btn-delete')
    btnDelete.setAttribute('class', 'btn-edit')
    
    
    // adicionando a opção de editar:
    li.addEventListener('dbclick', editTask)
    
    // adicionando a opção de remover:
    btnDelete.addEventListener('click', () => {
        li.remove() 
    })
    
    div.appendChild(inputDiv)
    
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

// criando a função editar: muda o html para 
function editTask(){
    const div = this.querySelector('div')
    const input = div.querySelector('input')
    const newTask = input.textContent
    const oldTask = this.querySelector('input')
    div.style.display = 'block'
    input.addEventListener('keydown', ()=>{
        oldTask.textContent = newTask
    })

}
buttonAdicionar.addEventListener('click', addTask)
