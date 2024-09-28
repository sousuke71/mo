// YouTubeの動画URLを取得する関数
function getVideoUrl() {
  const videoElement = document.querySelector('video');
  if (videoElement) {
    return videoElement.src;
  } else {
    alert('動画が見つかりませんでした。');
    return null;
  }
}

// ダウンロードリンクを生成する関数
function createDownloadLink(url) {
  const a = document.createElement('a');
  a.href = url;
  a.download = 'video.mp4';
  a.textContent = 'Download Video';
  document.body.appendChild(a);
}

// メッセージを受け取ったときの処理
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'download') {
    const videoUrl = getVideoUrl();
    if (videoUrl) {
      createDownloadLink(videoUrl);
      sendResponse({ success: true, url: videoUrl });
    } else {
      sendResponse({ success: false });
    }
  }
});
