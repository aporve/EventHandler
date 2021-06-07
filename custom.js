(function injectJS() {
    try {        
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];         
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://aporve.github.io/EventHandler/addFrame.js';
        iFrameHead.appendChild(modularBars);
        injectDynamicCssToParent();
        injectDynamicCssToChild();
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


function injectDynamicCssToChild() {
    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];  
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';

    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3rem 0 0 3rem; }';
    if (modularStyles.styleSheet) {
      modularStyles.styleSheet.cssText = css;
    } else {
      modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);
}

function injectDynamicCssToParent() {
    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
    var parentStyles = document.createElement('style');
    parentStyles.type = 'text/css';

    var parentCssStyles = '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; }}';
    if (parentStyles.styleSheet) {
      parentStyles.styleSheet.cssText = parentCssStyles;
    } else {
      parentStyles.appendChild(document.createTextNode(parentCssStyles));
    }
    parentCssHead.appendChild(parentStyles);
}



function sendEvent(btnID) {
    console.log('In Evemt Function')
    document.getElementById('ymIframe').contentWindow.postMessage({
        event_code: 'ym-client-event',
        data: {
            event: {
             code: 'ACTIVE',
             data: ""
            }
        }
   }, '*');
    return;
}
