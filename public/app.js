function copyToClipboard() {
  const codeElement = document.querySelector('code');
  if (codeElement) {
    const text = codeElement.innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        const tooltip = document.getElementById('tooltip');
        if (tooltip) {
          tooltip.innerText = 'Copied!';
          tooltip.classList.remove('hidden');
          setTimeout(() => {
            tooltip.classList.add('hidden');
          }, 2000); // Hide the tooltip after 2 seconds
        }
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        alert('Failed to copy code to clipboard.');
      });
  }
}

document.getElementById('discord').addEventListener('click', copyToClipboard);