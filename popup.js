document.getElementById('download').addEventListener('click', () => {
  const url = document.getElementById('url').value;
  chrome.downloads.download({ url: url });
});
