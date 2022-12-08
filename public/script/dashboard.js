var dataArray = [];
var valoresArray = [];
var valoresTotal = 0;

$(document).ready(function() {

  $.ajax({
    type: "POST",
    url: "http://164.92.96.22:3000/script/dashboard.php",
    dataType: "json",
    success: function(data){
      for (let i = 0; i < data.length; i++) {
        dataArray.push(data[i].data_medicoes);
        valoresArray.push(data[i].valor_medicoes);
      }
      for(let i = 0; i < valoresArray.length; i++){
        valoresTotal += (Number)(valoresArray[i]);
      }
      iniciarCharts(dataArray, valoresArray, valoresTotal);
    }
  })

})

function iniciarCharts(dataArray, valoresArray, valoresTotal){

  new Chart(document.getElementById('metaDeConsumo'), {
    type: 'bar',
    data: {
      labels: ['Consumo máximo', 'Meta de consumo', 'Consumo atual'],
      datasets: [{
        label: 'Metas',
        backgroundColor: ['rgb(151, 215, 232)', 'rgb(16, 137, 184)'],
        borderColor: ['rgb(151, 215, 232)', 'rgb(16, 137, 184)'],
        fill: true,
        tension	: 0.4,
        data: [3000, 2500, valoresTotal],
        borderWidth: 1,
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
        beginAtZero: true
        }
      },
      duration: 3000,
    }
  });
  
  new Chart(document.getElementById('consumoPorDia'), {
    type: 'line',
    data: {
      labels: dataArray,
      datasets: [{
        label: 'Litros consumidos por dia',
        backgroundColor: 'rgb(16, 137, 184)',
        borderColor: 'rgb(16, 137, 184)',
        fill: true,
        tension	: 0.4,
        data: valoresArray,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
        beginAtZero: true
        }
      },
      duration: 3000,
    }
  });
  
  new Chart(document.getElementById('consumoPorMes'), {
    type: 'line',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Litros consumidos por mês',
        backgroundColor: 'rgb(151, 215, 232)',
        borderColor: 'rgb(151, 215, 232)',
        fill: true,
        tension	: 0.4,
        data: [3127, 2800, 3090, 2997, 2670, 2946, 3015],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
        beginAtZero: true
        }
      },
      duration: 3000,
    }
  });

  new Chart(document.getElementById('statusMedidores'), {
    type: 'doughnut',
    data: {
      labels: ['Ativo', 'Reparo', 'Inativo'],
      datasets: [{
        label: 'Status dos medidores',
        backgroundColor: ['rgb(33, 196, 69)', 'rgb(255, 230, 0)', 'rgb(255, 3, 3)'],
        borderColor: ['rgb(33, 196, 69)', 'rgb(255, 230, 0)', 'rgb(255, 3, 3)'],
        fill: true,
        tension	: 0.4,
        data: [8, 2, 1],
        borderWidth: 1,
        radius: '80%'
      }]
    },
    options: {
      scales: {
        y: {
        beginAtZero: true
        }
      },
      duration: 3000,
    }
  });

}

