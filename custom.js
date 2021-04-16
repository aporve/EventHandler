
window.addEventListener('click', function(eventData) {
    console.error('Custom Function from Platform ------>>>>')
    app.log(eventData);
    console.log(eventData);
    try { 
         if(app.data){
           app.log(app.data);
         }
        if (JSON.parse(eventData.data)) {
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