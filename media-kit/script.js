const ctx = document.getElementById('viewsChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Aug 8', 'Aug 25', 'Aug 22'],
    datasets: [{
      label: 'Views',
      data: [213000, 19300, 4700],
      borderRadius: 2,
      backgroundColor: '#111'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw.toLocaleString()} views`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#777', font: { family: 'DM Mono', size: 10 } }
      },
      y: {
        beginAtZero: true,
        grid: { color: '#d8d6d0' },
        ticks: {
          color: '#777',
          font: { family: 'DM Mono', size: 10 },
          callback: value => value >= 1000 ? `${value/1000}K` : value
        }
      }
    }
  }
});
