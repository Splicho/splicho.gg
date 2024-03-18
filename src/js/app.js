function copyToClipboard() {
    const codeElement = document.querySelector('code');
    if (codeElement) {
      const text = codeElement.innerText;
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Code copied to clipboard!');
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
          alert('Failed to copy code to clipboard.');
        });
    }
  }
  