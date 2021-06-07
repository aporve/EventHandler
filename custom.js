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

window.addEventListener('message', function(eventData) {
    console.log('onload---->')
    console.log(eventData);
    try { 
        console.log('Parsing data')
        // console.log(JSON.parse(eventData.data));
        let ymEvent = JSON.parse(eventData.data)
        // console.log(JSON.parse(ymEvent.data), "Event Data")
        //    console.log((JSON.parse(ymEvent.data)).event.code)
        let data = JSON.parse(ymEvent.data);
        console.log(data.event.code, "Data------>");
        // console.log(data.event.data);
       if(((JSON.parse(ymEvent.data)).event.code) == 'VEMO') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "VEMO",
                     data: ""
                    }
                }
           }, '*');
           return;
       }


       if(((JSON.parse(ymEvent.data)).event.code) == 'ACTIVE') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ACTIVE",
                     data: ""
                    }
                }
           }, '*');
            return;
        }

        if(((JSON.parse(ymEvent.data)).event.code) == 'ASSET') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ASSET",
                     data: ""
                    }
                }
           }, '*');
            return;
        }

        if(((JSON.parse(ymEvent.data)).event.code) == 'ECON') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ECON",
                     data: ""
                    }
                }
           }, '*');
            return;
        }


        if(((JSON.parse(ymEvent.data)).event.code) == 'INVESTOR') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "INVESTOR",
                     data: ""
                    }
                }
           }, '*');
            return;
        }

        if(((JSON.parse(ymEvent.data)).event.code) == 'POPFAQ') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "POPFAQ",
                     data: ""
                    }
                }
           }, '*');
            return;
        }

        if(((JSON.parse(ymEvent.data)).event.code) == 'RETIREMENT') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "RETIREMENT",
                     data: ""
                    }
                }
           }, '*');
            return;
        }

        if(((JSON.parse(ymEvent.data)).event.code) == 'VCMM') {
            console.log('Get Data');
            console.log(data.event.data);
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "VCMM",
                     data: ""
                    }
                }
           }, '*');
            return;
        }
       
        if (JSON.parse(eventData.data)) {
            console.log('Parse---->')
            let event = JSON.parse(eventData.data);
            // console.log("event specs")
            // console.log(event)
            // console.log(typeof event)
            // console.log(event.event_code)
            // console.log(event.data, "Event Data ---->")
            switch (event.event_code){
                case "ym-client-event":
                    console.log("event successful")
                    break;
                default:
                    console.log("event unsuccessful")
                    break;
            }
            console.log("ending up here")
            return;
         }
    } catch (error) {
        return;
    }
}, false);