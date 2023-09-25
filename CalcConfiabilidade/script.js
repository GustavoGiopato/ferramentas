var funcionamento = document.getElementById("tempo-funcional");
var parada = document.getElementById("taxa-horaria");
var confiabilidade = document.getElementById("tempo-confiabilidade");
function calc() {
    let MTBF = Horas_em_Funcionamento / Número_de_Falhas;
            
    console.log(MTBF);

    let Taxa_de_Falhas = 1/MTBF;
    let Taxa_de_Falhas_Negativa = Taxa_de_Falhas * -1;
    let expoente = Taxa_de_Falhas_Negativa*Tempo;

    let Confiabilidade = Math.pow(2.71828,expoente);
    let Confiabilidadeemp = Confiabilidade * 100;
    let ProbabilidadeFalhas = (1 - Confiabilidade)*100;
                
    console.log(Taxa_de_Falhas_Negativa);
    console.log(Confiabilidade);
    console.log(ProbabilidadeFalhas);

    resultado_mtbf.innerHTML = `<p> <b>MTBF =</b> ${MTBF.toFixed(2)} horas</p>`
    resultado_r.innerHTML = `<p>A <b>Confiabilidade</b> para as próximas <b>${Tempo} horas é de ${Confiabilidadeemp.toFixed(2)}%.</b> </p>`
    resultado_f.innerHTML = `<p>A <b>Probabilidade de Falhas</b> para as próximas <b>${Tempo} horas é de ${ProbabilidadeFalhas.toFixed(2)}%.</b> </p>`

}