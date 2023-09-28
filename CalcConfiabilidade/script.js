function calcular(){
    let horas_em_funcionamento = document.getElementById("tempo-funcional").value;
    let numero_de_falhas = document.getElementById("taxa-horaria").value;
    let tempo = document.getElementById("custo-inatividade").value;
    if(horas_em_funcionamento =="" || numero_de_falhas =="" || tempo =="" ){
        alert( "Preencha todos os campos e use apenas números." );
        return false;
    }
    
    let mtbf = horas_em_funcionamento / numero_de_falhas;
                
    let taxa_de_falhas = 1/mtbf;
    let taxa_de_falhas_negativo = taxa_de_falhas * -1;
    let expoente = taxa_de_falhas_negativo * tempo;
    let confiabilidade = Math.pow(2.71828, expoente);
    let confiabilidadeemp = confiabilidade * 100;
    let probabilidadeFalhas = (1 - confiabilidade)*100;

    graph(tempo,taxa_de_falhas_negativo);

    var resultsBoxes = document.querySelector(".results_boxesC ");

    var printmtbf = document.createElement("div");
    printmtbf.className = "result_boxC";
    printmtbf.innerHTML = `<div><p> MTBF = ${mtbf.toFixed(2)} horas </p></div> <div><p>A <b>Confiabilidade</b> para as próximas <b>${tempo} horas é de ${confiabilidadeemp.toFixed(2)}%.</b> </p></div> <div> <p>A <b>Probabilidade de Falhas</b> para as próximas <b>${tempo} horas é de ${probabilidadeFalhas.toFixed(2)}%.</b> </p> </div>`;
    resultsBoxes.appendChild(printmtbf);

    // var printconfiabilidade = document.createElement("div");
    // printconfiabilidade.className = "result_boxC";
    // printconfiabilidade.innerHTML = `<p>A <b>Confiabilidade</b> para as próximas <b>${tempo} horas é de ${confiabilidadeemp.toFixed(2)}%.</b> </p>`;
    // resultsBoxes.appendChild(printconfiabilidade);

    // var printprobabilidade = document.createElement("div");
    // printprobabilidade.className = "result_boxC";
    // printprobabilidade.innerHTML = `<p>A <b>Probabilidade de Falhas</b> para as próximas <b>${tempo} horas é de ${probabilidadeFalhas.toFixed(2)}%.</b> </p>`;
    // resultsBoxes.appendChild(printprobabilidade);

}    

function graph(tempo, taxa_de_falhas_negativo) {
    let tempos = [];
    let expoente = [];
    let confiabilidade = [];
    let falha = [];

    tempos[0] = 0;
    let count = 0.1
    for(let i = 1;i <= 20 ; i++) {
        tempos[i] = tempo * count 
        count = count + 0.1;
    }
    
    for(let i = 0; i < 22; i++){
        expoente[i] = taxa_de_falhas_negativo * tempos[i]
    }
    for(let i = 0; i < 22; i++) {
        confiabilidade[i] = Math.pow(2.71828, expoente[i]) * 100;
        
    }
    for(let i = 0; i < 22; i++) {
        falha[i] = 100 - confiabilidade[i];
    }
    var xlabels = tempos.map(valor => parseFloat(valor.toFixed(1)));
    var ydatas = confiabilidade;

    var ctx = document.getElementsByClassName("grafico_r");
        
    var ChartGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [ {
                label: "Confiabilidade (%)", 
                data: ydatas,
                borderWidth: 6,
                borderColor: 'rgb(5, 168, 5)',
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                fontStyle: "bold",
                text: "Confiabilidade em Função do Tempo",
                
            }
        }
    });

    var xlabels_f = tempos.map(valor => parseFloat(valor.toFixed(1)));
    var ydatas_f = falha;
    var ctx = document.getElementsByClassName("grafico_f");
            
    var ChartGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels_f,
            datasets: [ {
                label: "Probabilidade de Falhas (%)", 
                data: ydatas_f,
                borderWidth: 6,
                borderColor: 'rgb(219, 0, 0)',
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                fontStyle: "bold",
                
                text: "Probabilidade de Falhas em Função do Tempo",
            }
        }
    });
}