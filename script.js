const buttonAdicionar = document.getElementById("btnAdicionar")
const listaTarefa = document.getElementById('listaTarefas')
const aviso = document.getElementById('ocult')

// adicionando tarefas do javascript
function createTask(){ // pega o texto, cria objetos html, adiciona tudo na tag li. Esperado: <li><input><span>o que eu quiser</span></li>
    
    const tarefa = document.getElementById('tarefaInput').value
    if(tarefa === ''){
        aviso.style.display = 'block'
    }
    else{
        aviso.style.display = 'none'
        const texto = tarefa
        const li = document.createElement('li')
        const input = document.createElement('input')
        const span = document.createElement('span')
        const btnDelete = document.createElement('button')
        const inputDiv = document.createElement('input')
        const div = document.createElement('div')
        const img = document.createElement('img')
        
        li.setAttribute('class','task-item')
        input.setAttribute('type', 'checkbox')
        inputDiv.setAttribute('type', 'text')
        inputDiv.setAttribute('placeholder', 'Edite a tarefa...')
        div.setAttribute('class', 'box-edit')
        div.style.display = "none"
        span.textContent = texto
        btnDelete.setAttribute('class','btn-delete')
        img.setAttribute('src', 'img/icon-trash.png')
        
        // adicionando a opção de "completar atividade":
        input.addEventListener('change', () =>{
            if(input.checked){
            
                li.style.backgroundColor = '#1dc48c'
                span.style.textDecoration = 'line-through'    
            }
            else{
                li.style.backgroundColor = '';
                span.style.textDecoration = 'none';
            }
        })
        // evitando propagação:  

        btnDelete.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });
    
    
        // adicionando a opção de editar:
        li.addEventListener('dblclick', editTask)
        
        // adicionando a opção de remover:
        btnDelete.addEventListener('click', () => {
            li.remove() 
        })
        
        div.appendChild(inputDiv)
        btnDelete.appendChild(img)

        li.appendChild(div)
        li.appendChild(input)
        li.appendChild(span)
        li.appendChild(btnDelete)
        return li
    }
}


// criando a função para adicionar a atividade à lista
// funcionará assim que clicar no botão de adicionar
function addTask(){
    const liTask = createTask()
    listaTarefa.appendChild(liTask)
}

// criando a função editar: apenas deixo o display da div oculta a mostra e coloco um input do tipo texto para modificar a tarefa   
function editTask(){
    const div = this.querySelector('.box-edit')
    const input = div.querySelector('input')
    const span = this.querySelector('span')

    div.style.display = 'block'
    input.focus()

    input.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter'){
            span.textContent = input.value
            div.style.display = 'none'
        }
        
    })

}
buttonAdicionar.addEventListener('click', addTask)
