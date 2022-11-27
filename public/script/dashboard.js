$(document).ready(function() {

  $.ajax({
    type: "POST",
    url: "http://localhost:80/script/dashboard.php",
    dataType: "json",
    success: function(data){
      for (let i = 0; i < data.length; i++) {
        dataArray.push(data[i].data_medicoes);
        valoresArray.push(data[i].valor_medicoes);
      }
    }
  })

})

var dataArray = [];
var valoresArray = [];
var valoresTotal = 0;
// for(let i = 0; valores.length; i++){
//   valoresTotal += valores[i];
// }

new Chart(document.getElementById('metaDeConsumo'), {
  type: 'bar',
  data: {
    labels: ['Consumo máximo', 'Meta de consumo', 'Consumo atual'],
    datasets: [{
      label: 'Meta de consumo',
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
    labels: ['2022-01-20', '2022-03-12'],
    datasets: [{
      label: 'Litros consumidos por dia',
      backgroundColor: 'rgb(16, 137, 184)',
      borderColor: 'rgb(16, 137, 184)',
      fill: true,
      tension	: 0.4,
      data: [100, 114],
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
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'MAio', 'Junho'],
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