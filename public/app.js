document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('discord').addEventListener('click', copyToClipboard);
});

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
        // Triggering a reflow before adding the 'fade-in' and 'pop-in' classes to ensure CSS transition works
        void tooltip.offsetWidth;
        tooltip.classList.add('fade-in', 'pop-in');
        setTimeout(() => {
          tooltip.classList.remove('fade-in', 'pop-in');
          tooltip.classList.add('fade-out', 'pop-out');
          setTimeout(() => {
            tooltip.classList.add('hidden');
            tooltip.classList.remove('fade-out', 'pop-out');
          }, 500); // Duration of fade-out transition
        }, 2000); // Hide the tooltip after 2 seconds
      }
    })
    .catch((error) => {
      console.error('Error copying to clipboard:', error);
      alert('Failed to copy code to clipboard.');
    });
}
}
