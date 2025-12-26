fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('sidebar').innerHTML = html;
    })
    .catch(err => console.error('Failed to load sidebar:', err));