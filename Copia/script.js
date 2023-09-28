let inputHoras_em_Funcionamento = document.getElementById("Horas_em_Funcionamento");
let inputNúmero_de_Falhas = document.getElementById("Número_de_Falhas");
let inputTempo = document.getElementById("Tempo");



let resultado_mtbf = document.getElementById("resultado_mtbf");
let resultado_r = document.getElementById("resultado_r");
let resultado_f = document.getElementById("resultado_f");

console.log(inputHoras_em_Funcionamento, inputNúmero_de_Falhas, inputTempo);

function calcular(){

    console.log("Calculando...");
    let Horas_em_Funcionamento = inputHoras_em_Funcionamento.value;
    let Número_de_Falhas = inputNúmero_de_Falhas.value;
    let Tempo = inputTempo.value;

    if(Horas_em_Funcionamento =="" || Número_de_Falhas =="" || Tempo =="" )
    {
    alert( "Preencha todos os campos e use apenas números." );
    return false;
    }

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

    //Tabela para o gráfico de confiabilidade
    var tempo1 = 0;
    var tempo2 = (Tempo * 0.1);
    var tempo3 = (Tempo * 0.2);
    var tempo4 = (Tempo * 0.3);
    var tempo5 = (Tempo * 0.4);
    let tempo6 = (Tempo * 0.5);
    let tempo7 = (Tempo * 0.7);
    let tempo8 = (Tempo * 0.8);
    let tempo9 = (Tempo * 0.9);
    let tempo10 = (Tempo * 1);
    let tempo11 = (Tempo * 1.1);
    let tempo12 = (Tempo * 1.2);
    let tempo13 = (Tempo * 1.3);
    let tempo14 = (Tempo * 1.4);
    let tempo15 = (Tempo * 1.5);
    let tempo16 = (Tempo * 1.6);
    let tempo17 = (Tempo * 1.7);
    let tempo18 = (Tempo * 1.8);
    let tempo19 = (Tempo * 1.9);
    let tempo20 = (Tempo * 2);
    let tempo21 = (Tempo * 3);
    let tempo22 = (Tempo * 6);


    let expoente1 = Taxa_de_Falhas_Negativa*tempo1
    let expoente2 = Taxa_de_Falhas_Negativa*tempo2
    let expoente3 = Taxa_de_Falhas_Negativa*tempo3
    let expoente4 = Taxa_de_Falhas_Negativa*tempo4
    let expoente5 = Taxa_de_Falhas_Negativa*tempo5
    let expoente6 = Taxa_de_Falhas_Negativa*tempo6
    let expoente7 = Taxa_de_Falhas_Negativa*tempo7
    let expoente8 = Taxa_de_Falhas_Negativa*tempo8
    let expoente9 = Taxa_de_Falhas_Negativa*tempo9
    let expoente10 = Taxa_de_Falhas_Negativa*tempo10
    let expoente11 = Taxa_de_Falhas_Negativa*tempo11
    let expoente12 = Taxa_de_Falhas_Negativa*tempo12
    let expoente13 = Taxa_de_Falhas_Negativa*tempo13
    let expoente14 = Taxa_de_Falhas_Negativa*tempo14
    let expoente15 = Taxa_de_Falhas_Negativa*tempo15
    let expoente16 = Taxa_de_Falhas_Negativa*tempo16
    let expoente17 = Taxa_de_Falhas_Negativa*tempo17
    let expoente18 = Taxa_de_Falhas_Negativa*tempo18
    let expoente19 = Taxa_de_Falhas_Negativa*tempo19
    let expoente20 = Taxa_de_Falhas_Negativa*tempo20
    let expoente21 = Taxa_de_Falhas_Negativa*tempo21
    let expoente22 = Taxa_de_Falhas_Negativa*tempo22

    let confiabilidade1 = Math.pow(2.71828,expoente1) * 100;
    let confiabilidade2 = Math.pow(2.71828,expoente2) * 100;
    let confiabilidade3 = Math.pow(2.71828,expoente3) * 100;
    let confiabilidade4 = Math.pow(2.71828,expoente4) * 100;
    let confiabilidade5 = Math.pow(2.71828,expoente5) * 100;
    let confiabilidade6 = Math.pow(2.71828,expoente6) * 100;
    let confiabilidade7 = Math.pow(2.71828,expoente7) * 100;
    let confiabilidade8 = Math.pow(2.71828,expoente8) * 100;
    let confiabilidade9 = Math.pow(2.71828,expoente9) * 100;
    let confiabilidade10 = Math.pow(2.71828,expoente10) * 100;
    let confiabilidade11 = Math.pow(2.71828,expoente11) * 100;
    let confiabilidade12 = Math.pow(2.71828,expoente12) * 100;
    let confiabilidade13 = Math.pow(2.71828,expoente13) * 100;
    let confiabilidade14 = Math.pow(2.71828,expoente14) * 100;
    let confiabilidade15 = Math.pow(2.71828,expoente15) * 100;
    let confiabilidade16 = Math.pow(2.71828,expoente16) * 100;
    let confiabilidade17 = Math.pow(2.71828,expoente17) * 100;
    let confiabilidade18 = Math.pow(2.71828,expoente18) * 100;
    let confiabilidade19 = Math.pow(2.71828,expoente19) * 100;
    let confiabilidade20 = Math.pow(2.71828,expoente20) * 100;
    let confiabilidade21 = Math.pow(2.71828,expoente21) * 100;
    let confiabilidade22 = Math.pow(2.71828,expoente22) * 100;

    let falha1 = (100 - confiabilidade1);
    let falha2 = (100 - confiabilidade2);
    let falha3 = (100 - confiabilidade3);
    let falha4 = (100 - confiabilidade4);
    let falha5 = (100 - confiabilidade5);
    let falha6 = (100 - confiabilidade6);
    let falha7 = (100 - confiabilidade7);
    let falha8 = (100 - confiabilidade8);
    let falha9 = (100 - confiabilidade9);
    let falha10 = (100 - confiabilidade10);
    let falha11 = (100 - confiabilidade11);
    let falha12 = (100 - confiabilidade12);
    let falha13 = (100 - confiabilidade13);
    let falha14 = (100 - confiabilidade14);
    let falha15 = (100 - confiabilidade15);
    let falha16 = (100 - confiabilidade16);
    let falha17 = (100 - confiabilidade17);
    let falha18 = (100 - confiabilidade18);
    let falha19 = (100 - confiabilidade19);
    let falha20 = (100 - confiabilidade20);
    let falha21 = (100 - confiabilidade21);
    let falha22 = (100 - confiabilidade22);


    var t1 = document.getElementById("t1");
    t1.innerHTML = `<p>${tempo1.toFixed(2)} </p>`;
    let r1 = document.getElementById("r1");
    r1.innerHTML = `<p>${confiabilidade1.toFixed(2)}% </p>`;
    let f1 = document.getElementById("f1");
    f1.innerHTML = `<p>${falha1.toFixed(2)}% </p>`;

    let t2 = document.getElementById("t2");
    t2.innerHTML = `<p>${tempo2.toFixed(2)} </p>`;
    let r2 = document.getElementById("r2");
    r2.innerHTML = `<p>${confiabilidade2.toFixed(2)}% </p>`;
    let f2 = document.getElementById("f2");
    f2.innerHTML = `<p>${falha2.toFixed(2)}% </p>`;

    let t3 = document.getElementById("t3");
    t3.innerHTML = `<p>${tempo3.toFixed(2)} </p>`;
    let r3 = document.getElementById("r3");
    r3.innerHTML = `<p>${confiabilidade3.toFixed(2)}% </p>`;
    let f3 = document.getElementById("f3");
    f3.innerHTML = `<p>${falha3.toFixed(2)}% </p>`;

    let t4 = document.getElementById("t4");
    t4.innerHTML = `<p>${tempo4.toFixed(2)} </p>`;
    let r4 = document.getElementById("r4");
    r4.innerHTML = `<p>${confiabilidade4.toFixed(2)}% </p>`;
    let f4 = document.getElementById("f4");
    f4.innerHTML = `<p>${falha4.toFixed(2)}% </p>`;


    let t5 = document.getElementById("t5");
    t5.innerHTML = `<p>${tempo5.toFixed(2)} </p>`;
    let r5 = document.getElementById("r5");
    r5.innerHTML = `<p>${confiabilidade5.toFixed(2)}% </p>`;
    let f5 = document.getElementById("f5");
    f5.innerHTML = `<p>${falha5.toFixed(2)}% </p>`;

    let t6 = document.getElementById("t6");
    t6.innerHTML = `<p>${tempo6.toFixed(2)} </p>`;
    let r6 = document.getElementById("r6");
    r6.innerHTML = `<p>${confiabilidade6.toFixed(2)}% </p>`;
    let f6 = document.getElementById("f6");
    f6.innerHTML = `<p>${falha6.toFixed(2)}% </p>`;

    let t7 = document.getElementById("t7");
    t7.innerHTML = `<p>${tempo7.toFixed(2)} </p>`;
    let r7 = document.getElementById("r7");
    r7.innerHTML = `<p>${confiabilidade7.toFixed(2)}% </p>`;
    let f7 = document.getElementById("f7");
    f7.innerHTML = `<p>${falha7.toFixed(2)}% </p>`;

    let t8 = document.getElementById("t8");
    t8.innerHTML = `<p>${tempo8.toFixed(2)} </p>`;
    let r8 = document.getElementById("r8");
    r8.innerHTML = `<p>${confiabilidade8.toFixed(2)}% </p>`;
    let f8 = document.getElementById("f8");
    f8.innerHTML = `<p>${falha8.toFixed(2)}% </p>`;

    let t9 = document.getElementById("t9");
    t9.innerHTML = `<p>${tempo9.toFixed(2)} </p>`;
    let r9 = document.getElementById("r9");
    r9.innerHTML = `<p>${confiabilidade9.toFixed(2)}% </p>`;
    let f9 = document.getElementById("f9");
    f9.innerHTML = `<p>${falha9.toFixed(2)}% </p>`;

    let t10 = document.getElementById("t10");
    t10.innerHTML = `<p>${tempo10.toFixed(2)} </p>`;
    let r10 = document.getElementById("r10");
    r10.innerHTML = `<p>${confiabilidade10.toFixed(2)}% </p>`;
    let f10 = document.getElementById("f10");
    f10.innerHTML = `<p>${falha10.toFixed(2)}% </p>`;

    let t11 = document.getElementById("t11");
    t11.innerHTML = `<p>${tempo11.toFixed(2)} </p>`;
    let r11 = document.getElementById("r11");
    r11.innerHTML = `<p>${confiabilidade11.toFixed(2)}% </p>`;
    let f11 = document.getElementById("f11");
    f11.innerHTML = `<p>${falha11.toFixed(2)}% </p>`;

    let t12 = document.getElementById("t12");
    t12.innerHTML = `<p>${tempo12.toFixed(2)} </p>`;
    let r12 = document.getElementById("r12");
    r12.innerHTML = `<p>${confiabilidade12.toFixed(2)}% </p>`;
    let f12 = document.getElementById("f12");
    f12.innerHTML = `<p>${falha12.toFixed(2)}% </p>`;

    let t13 = document.getElementById("t13");
    t13.innerHTML = `<p>${tempo13.toFixed(2)} </p>`;
    let r13 = document.getElementById("r13");
    r13.innerHTML = `<p>${confiabilidade13.toFixed(2)}% </p>`;
    let f13 = document.getElementById("f13");
    f13.innerHTML = `<p>${falha13.toFixed(2)}% </p>`;

    let t14 = document.getElementById("t14");
    t14.innerHTML = `<p>${tempo14.toFixed(2)} </p>`;
    let r14 = document.getElementById("r14");
    r14.innerHTML = `<p>${confiabilidade14.toFixed(2)}% </p>`;
    let f14 = document.getElementById("f14");
    f14.innerHTML = `<p>${falha14.toFixed(2)}% </p>`;

    let t15 = document.getElementById("t15");
    t15.innerHTML = `<p>${tempo15.toFixed(2)} </p>`;
    let r15 = document.getElementById("r15");
    r15.innerHTML = `<p>${confiabilidade15.toFixed(2)}% </p>`;
    let f15 = document.getElementById("f15");
    f15.innerHTML = `<p>${falha15.toFixed(2)}% </p>`;

    let t16 = document.getElementById("t16");
    t16.innerHTML = `<p>${tempo16.toFixed(2)} </p>`;
    let r16 = document.getElementById("r16");
    r16.innerHTML = `<p>${confiabilidade16.toFixed(2)}% </p>`;
    let f16 = document.getElementById("f16");
    f16.innerHTML = `<p>${falha16.toFixed(2)}% </p>`;

    let t17 = document.getElementById("t17");
    t17.innerHTML = `<p>${tempo17.toFixed(2)} </p>`;
    let r17 = document.getElementById("r17");
    r17.innerHTML = `<p>${confiabilidade17.toFixed(2)}% </p>`;
    let f17 = document.getElementById("f17");
    f17.innerHTML = `<p>${falha17.toFixed(2)}% </p>`;

    let t18 = document.getElementById("t18");
    t18.innerHTML = `<p>${tempo18.toFixed(2)} </p>`;
    let r18 = document.getElementById("r18");
    r18.innerHTML = `<p>${confiabilidade18.toFixed(2)}% </p>`;
    let f18 = document.getElementById("f18");
    f18.innerHTML = `<p>${falha18.toFixed(2)}% </p>`;

    let t19 = document.getElementById("t19");
    t19.innerHTML = `<p>${tempo19.toFixed(2)} </p>`;
    let r19 = document.getElementById("r19");
    r19.innerHTML = `<p>${confiabilidade19.toFixed(2)}% </p>`;
    let f19 = document.getElementById("f19");
    f19.innerHTML = `<p>${falha19.toFixed(2)}% </p>`;

    let t20 = document.getElementById("t20");
    t20.innerHTML = `<p>${tempo20.toFixed(2)} </p>`;
    let r20 = document.getElementById("r20");
    r20.innerHTML = `<p>${confiabilidade20.toFixed(2)}% </p>`;
    let f20 = document.getElementById("f20");
    f20.innerHTML = `<p>${falha20.toFixed(2)}% </p>`;

    let t21 = document.getElementById("t21");
    t21.innerHTML = `<p>${tempo21.toFixed(2)} </p>`;
    let r21 = document.getElementById("r21");
    r21.innerHTML = `<p>${confiabilidade21.toFixed(2)}% </p>`;
    let f21 = document.getElementById("f21");
    f21.innerHTML = `<p>${falha21.toFixed(2)}% </p>`;

    let t22 = document.getElementById("t22");
    t22.innerHTML = `<p>${tempo22.toFixed(2)} </p>`;
    let r22 = document.getElementById("r22");
    r22.innerHTML = `<p>${confiabilidade22.toFixed(2)}% </p>`;
    let f22 = document.getElementById("f22");
    f22.innerHTML = `<p>${falha22.toFixed(2)}% </p>`;

    var xlabels = [tempo1.toFixed(2), tempo2.toFixed(2), tempo3.toFixed(2), tempo4.toFixed(2), tempo5.toFixed(2), tempo6.toFixed(2), tempo7.toFixed(2), tempo8.toFixed(2), tempo9.toFixed(2), tempo10.toFixed(2), tempo11.toFixed(2), tempo12.toFixed(2), tempo13.toFixed(2), tempo14.toFixed(2), tempo15.toFixed(2), tempo16.toFixed(2), tempo17.toFixed(2), tempo18.toFixed(2), tempo19.toFixed(2), tempo20.toFixed(2), tempo21.toFixed(2), tempo22.toFixed(2)];
    console.log(xlabels);
    var ydatas = [confiabilidade1.toFixed(2), confiabilidade2.toFixed(2), confiabilidade3.toFixed(2), confiabilidade4.toFixed(2), confiabilidade5.toFixed(2), confiabilidade6.toFixed(2), confiabilidade7.toFixed(2), confiabilidade8.toFixed(2), confiabilidade9.toFixed(2), confiabilidade10.toFixed(2), confiabilidade11.toFixed(2), confiabilidade12.toFixed(2), confiabilidade13.toFixed(2), confiabilidade14.toFixed(2), confiabilidade15.toFixed(2), confiabilidade16.toFixed(2), confiabilidade17.toFixed(2), confiabilidade18.toFixed(2), confiabilidade19.toFixed(2), confiabilidade20.toFixed(2), confiabilidade21.toFixed(2), confiabilidade22.toFixed(2)];

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


    var xlabels_f = [tempo1.toFixed(2), tempo2.toFixed(2), tempo3.toFixed(2), tempo4.toFixed(2), tempo5.toFixed(2), tempo6.toFixed(2), tempo7.toFixed(2), tempo8.toFixed(2), tempo9.toFixed(2), tempo10.toFixed(2), tempo11.toFixed(2), tempo12.toFixed(2), tempo13.toFixed(2), tempo14.toFixed(2), tempo15.toFixed(2), tempo16.toFixed(2), tempo17.toFixed(2), tempo18.toFixed(2), tempo19.toFixed(2), tempo20.toFixed(2), tempo21.toFixed(2), tempo22.toFixed(2)];
    var ydatas_f = [falha1.toFixed(2), falha2.toFixed(2), falha3.toFixed(2), falha4.toFixed(2), falha5.toFixed(2), falha6.toFixed(2), falha7.toFixed(2), falha8.toFixed(2), falha9.toFixed(2), falha10.toFixed(2), falha11.toFixed(2), falha12.toFixed(2), falha13.toFixed(2), falha14.toFixed(2), falha15.toFixed(2), falha16.toFixed(2), falha17.toFixed(2), falha18.toFixed(2), falha19.toFixed(2), falha20.toFixed(2), falha21.toFixed(2), falha22.toFixed(2)];

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


    let bloco_resultados = document.querySelector(".bloco_resultados")
    bloco_resultados.style.display= 'block';

    let btn_print = document.querySelector(".btn_print")
    btn_print.style.display= 'flex';



}