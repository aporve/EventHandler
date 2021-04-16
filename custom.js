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
        // console.log(data.event.code);
        // console.log(data.event.data);
       if(((JSON.parse(ymEvent.data)).event.code) == 'clickedButton') {
            console.log('Get Data');
            console.log(data.event.data);
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