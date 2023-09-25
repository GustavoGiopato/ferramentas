   function adicionarCampos() {
 
    var numero = parseInt(document.getElementById("numero").value);

    if (!isNaN(numero)) {
        var container = document.getElementById("container");
        container.innerHTML = "";

        for (var i = 1; i <= numero; i++) {
            var label = document.createElement("label");
            label.textContent = "Tempo em reparo " + i;
            
            var label2 = document.createElement("label");
            label2.textContent = "Ativo funcionando";
        
            var input = document.createElement("input");
            var input2 = document.createElement("input"); 
        
            input.type = "text";
            input.classList="failure";
            input.name = "campo" + i;
            input.id = "campo" + i; 
            input2.type =  "text";
            input2.classList= "working";
            input2.name = "campo2" + i;
            input2.id = "campo2" + i; 
        
            container.appendChild(label);
            container.appendChild(input);
            container.appendChild(label2);
            container.appendChild(input2);
            container.appendChild(document.createElement("br"));
        }        
    } else {
        alert("Digite um número válido.");
    }
    var button = document.createElement("button");
    button.className = "btn"
    button.type = "button"; 
    button.textContent = "Calcular"; 
    button.addEventListener("click", calc); 

    container.appendChild(button);
}
function calc() {
    var inputs = document.querySelectorAll('input[name^="campo"]'); // Acho que isso daqui da pra tocar pelo id do campo ao invez do nome
    
    var mtbfg = (MTBF(inputs));
    var mttrg =(MTTR(inputs));
    var disponibilidadeg = (Disponibilidade(inputs));
    var indisponibilidadeg = (Indisponibilidade(inputs));
    function MTBF(inputs){ // MTBF = (Tempo total – Tempo perdido) / (Quantidade de paradas).
        
        var time_lost = 0.0;
        var time_total = 0.0;
        var stop_count = 0.0;

        for (var i = 0; i < inputs.length; i += 2) {
            var value = parseFloat(inputs[i].value);
            if (!isNaN(value)) {
                time_lost += value; //tempo perdido total
                stop_count++;
            }
        }
        for (var i = 0; i < inputs.length; i++) {
            var value = parseFloat(inputs[i].value);
            if (!isNaN(value)) {
                time_total += value; //Tempo total
            }
        }
        var mtbf = (time_total - time_lost) / stop_count;
        return mtbf;     
    }
    function MTTR(inputs){ // MTTR = (Tempo de parada) / (Quantidade de paradas).
        var time_lost = 0.0;
        var stop_count = 0.0;
        for (var i = 0; i < inputs.length; i += 2) {
            var value = parseFloat(inputs[i].value);
            if (!isNaN(value)) {
                time_lost += value; //tempo perdido total
                stop_count++;
            }
        }
        var mttr = time_lost / stop_count
        return mttr;
    }
    function Disponibilidade(inputs){ // Disponibilidade = MTBF/(MTBF + MTTR).
       var disp =  (MTBF(inputs) / (MTBF(inputs) + MTTR(inputs))) * 100;
       return disp.toFixed(2);
    }
    function Indisponibilidade(inputs){ // Indisponibilidade = 100 - Disponibilidade
        var indisp = 100 - Disponibilidade(inputs);
        return indisp.toFixed(2);
    }

    document.getElementById("mtbf").innerHTML=`<p> MTBF = ${mtbfg.toFixed(2)} horas</p>`;
    document.getElementById("mttr").innerHTML=`<p> MTTR = ${mttrg.toFixed(2)} horas</p>`;
    document.getElementById("disponibilidade").innerHTML=`<p> Disponibilidade = ${disponibilidadeg}% </p>`;
    document.getElementById("indisponibilidade").innerHTML=`<p> Indisponibilidade = ${indisponibilidadeg}% </p>`;


    var xlabels = ['Tempo Disponível %', 'Tempo Indisponível %'];
    var ydatas = [disponibilidadeg, indisponibilidadeg];

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: xlabels,
            datasets: [ {
                data: ydatas,
                borderWidth: 6,
                borderColor: 'rgb(219, 0, 0,0)',
                backgroundColor: ['rgb(6, 182, 6)', 'rgb(219, 0, 0)'],
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                fontStyle: "bold",
                text: "Disponibilidade Inerente %",
            },
        }
    });
}