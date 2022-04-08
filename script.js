
function calcular() {
    var salario = document.querySelector('#salario')
    var horat = document.querySelector('#horat')
    var horase = document.querySelector('#horase')
    var het = document.querySelector('#het')
    var DDL= document.querySelector('#DDL')
    var DDL2= document.querySelector('#DDL2')

   
    
    var result_extra =  document.querySelector('#extra')
    var result_dsr = document.querySelector('#dsr')
    
    
    
    var hora_extra = (((salario.value) / (horat.value)) *(horase.value)) * (het.value)
    var dias_uteis = DDL.value-DDL2.value
    var dsr_extra = (hora_extra/dias_uteis)*DDL2.value
  


    result_extra.innerHTML=   (hora_extra);
    result_dsr.innerHTML =  (dsr_extra);
    
    
}
