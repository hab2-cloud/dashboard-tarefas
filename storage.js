// PEGAR tarefas
function pegarTarefas() {
  return JSON.parse(localStorage.getItem("tarefas")) || [];
}

// SALVAR tarefas
function salvarTarefas(tarefas) {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
