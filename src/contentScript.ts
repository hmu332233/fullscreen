let contextMenuElement: HTMLElement | null;

document.addEventListener('contextmenu', function(e){ 
  console.log(e.target);
  contextMenuElement = e.target as HTMLElement;
});

chrome.runtime.onMessage.addListener(message => {
  console.log(message)
  switch (message.action) {
    case 'fullscreen-execute':
      if (!contextMenuElement) return;

      contextMenuElement.requestFullscreen();
    break;
  }

});