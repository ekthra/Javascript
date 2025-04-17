alunosJSON = '[{"nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"} ]'

alunos = JSON.parse(alunosJSON)
console.log(alunos[0].notas[1])
function aprovado(objeto){
    
    for (let j = 0; j<objeto.length; j++){ 
        var somador = 0
        var media = 0
    
        for (let i = 0; i<objeto[j].notas.length; i++){
            somador = somador + objeto[j].notas[i];
            

        }
            media = somador/objeto[j].notas.length

        if (media >= 7){
            console.log('Aluno Aprovado\n\nnome: '+objeto[j].nome+'\nMédia: '+media.toFixed(2)+'\nCurso: '+objeto[j].curso+'\n')
        }
        

    }
}

var aprovados = aprovado(alunos)