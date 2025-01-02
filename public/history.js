const clearHistory = document.getElementById('clear-history');
const historyList = document.getElementById('history-list');
const exportHistory = document.getElementById('export-history');

function loadHistory() {
  historyList.innerHTML = '';

  let history = JSON.parse(localStorage.getItem('history')) || [];

  if (history.length === 0) {
    historyList.innerHTML = '<div>No history available</div>';
    return;
  }

  history.forEach((entry) => {
    const div = document.createElement('div');
    div.textContent = entry;
    historyList.appendChild(div);
  });
}

// Clear history
clearHistory.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear the history?')) {
    localStorage.removeItem('history');
    loadHistory();
  }
});

// Export history and trigger download
exportHistory.addEventListener('click', () => {
  let history = JSON.parse(localStorage.getItem('history')) || [];

  if (history.length === 0) {
    alert('No history to export.');
    return;
  }

  fetch('/exportHistory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ history }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Failed to export history.');
      return response.blob(); // Convert response to Blob (file)
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'history.txt'; // File download name
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up after download
    })
    .catch((error) => {
      alert('Failed to export history.');
      console.error('Error:', error);
    });
});

window.onload = loadHistory;
