
window.addEventListener('message', function(eventData) {
    console.log('onload---->')
    console.log(eventData);
    try { 
        console.log('Parsing data')
        console.log(JSON.parse(eventData.data));
        if (JSON.parse(eventData.data)) {
            console.log('Parse---->')
            let event = JSON.parse(eventData.data);
             if (event.event_code == "custom-event" || event.data || event.data.code == "ym-client-event" || event.data.code == "clickedButton") {
                app.log('Event Successfull');
                console.log('Event Successfull');
            }
            else if (event.event_code == "custom-event" || event.data || event.data.code == "ym-client-event" ||  event.data.code == "clickedButton"){
                app.log('Event Successfull');
                console.log('Event Successfull');
                return;
            } 
            else{
                return;
            }
         }
    } catch (error) {
        return;
    }
}, false);