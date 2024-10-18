let aluno = {
    "nome" : "Luiza",
    "idade" : "18",
    "curso" : "Engenharia da Computação",
    "matricula" : "248122",

    mostrarInformações: function(){
        return "Nome: " + aluno.nome + " Idade: " + aluno.idade  + " Curso: " + aluno.curso + " Matricula: " + aluno.matricula;
    }
};

console.log(aluno.mostrarInformações());