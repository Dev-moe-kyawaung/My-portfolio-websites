const createChart = (id, label, value, color) => {
  const ctx = document.getElementById(id).getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [label, ''],
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [color, '#333'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        tooltip: {enabled:false},
        legend: {display:false}
      }
    }
  });
}

// Flutter Web
createChart('flutterChart', 'Flutter', 90, '#02569B');
// Kotlin/Ktor
createChart('kotlinChart', 'Kotlin', 85, '#A97BFF');
// HTML/CSS/JS
createChart('htmlChart', 'HTML/CSS/JS', 95, '#F16529');
// 3D Animations
createChart('threeChart', '3D Animations', 80, '#FF4C60');
