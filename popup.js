document.getElementById('openMoppyButton').addEventListener('click', function() {
  openNewWindow('https://pc.moppy.jp');
});

document.getElementById('openHapitasButton').addEventListener('click', function() {
  openNewWindow('https://hapitas.jp');
});

document.getElementById('openNiftyButton').addEventListener('click', function() {
  openNewWindow('https://lifemedia.jp/entry/4062655/welcome');
});

document.getElementById('openPontawebButton').addEventListener('click', function() {
  openNewWindow('https://lifemedia.jp');
});

document.getElementById('openECNaviButton').addEventListener('click', function() {
  openNewWindow('https://ecnavi.jp');
});


function openNewWindow(url) {
  const width = 1500; // 新しいウィンドウの幅
  chrome.windows.create({
    url: url,
    width: width,
    height: screen.height,
    left: screen.width - width
  });
}
