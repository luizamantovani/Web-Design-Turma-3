let aluno = {
    "nome" : "Luiza",
    "idade" : 18,
    "curso" : "Engenharia da Computação",
    "matricula" : "248122",

    mostrarInformações: function(){
        return "Nome: " + aluno.nome + " Idade: " + aluno.idade  + " Curso: " + aluno.curso + " Matricula: " + aluno.matricula;
    }
};

let aluno2 = {
    "nome" : "Pedro",
    "idade" : 17,
    "curso" : "Engenharia da Computação",
    "matricula" : "248123",

    mostrarInformações: function(){
        return "Nome: " + aluno.nome + " Idade: " + aluno.idade  + " Curso: " + aluno.curso + " Matricula: " + aluno.matricula;
    }
}

let alunos = [aluno, aluno2];

function alunosMaior(todosAlunos){
    let alunosMaiores18 = [];
    for(let item in todosAlunos){
        if(todosAlunos[item].idade>=18){
            alunosMaiores18+=todosAlunos[item];
        }
    }

    return alunosMaiores18;
}

let novoArray = alunosMaior(alunos);
console.log(novoArray);
