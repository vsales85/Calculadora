function calcular()
    {
        var salario = document.querySelector('#salario')
        var horat = document.querySelector('#horat')
        var resultado = document.querySelector('span')
        var horase =    document.querySelector('#horase')
        var het = document.querySelector('#het')
        
        resultado.innerHTML =parseFloat(((salario.value) / parseFloat(horat.value))*parseFloat(horase.value))*parseFloat(het.value)
    
    }