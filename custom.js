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