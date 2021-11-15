const CONTEXT_MENU_ID = "FULLSCREEN_CONTEXT";

chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: "해당 요소를 큰 화면으로 보기",
  contexts: ["all"],
});


chrome.contextMenus.onClicked.addListener(
  () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0].id) return;
    
      return chrome.tabs.sendMessage(tabs[0].id, { action: 'fullscreen-execute' });
    });
  }
)


