window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const passedUrl = urlParams.get('url');
//  if (passedUrl) {
    const output = document.getElementById('url-output');
    output.textContent = `Opened with URL: ${passedUrl}`;
    // You can navigate within your PWA or perform actions based on the URL
//  }
});
