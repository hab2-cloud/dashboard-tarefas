const CHAVE = "tarefas";

function pegarTarefas() {
    const dados = localStorage.getItem(CHAVE);
        return dados ? JSON.parse(dados) : [];
        }

        function salvarTarefas(tarefas) {
            localStorage.setItem(CHAVE, JSON.stringify(tarefas));
            }
