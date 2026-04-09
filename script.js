// adicionando tarefas do javascript
const tarefa = document.getElementById('tarefaInput').value
const buttonAdicionar = document.querySelector("#btnAdicionar")

function criaAtividade(){ // pega o texto, cria objetos html, adiciona tudo na tag li. Esperado: <li><input><span>o que eu quiser</span></li>
    const texto = tarefa
    
    const li = document.createElement('li')
    li.setAttribute('class','task-item')
    
    const input = document.createElement('input')
    input.setAttribute('type', 'radio')
    
    const span = document.createElement('span')
    span.textContent = texto

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class','btn-delete')

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(btnDelete)
}


const deleteButton = document.getElementsByClassName("delete")
deleteButton.forEach(button => { // Aplicando o addEventListener para cada botão que tem a classe "delete" 
    button.addEventListener('click', (button) )
})