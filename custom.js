
window.addEventListener('message', function(eventData) {
    let clickedButton = btnID;
    try { 
         if(clickedButton){
           
         }
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code == "custom-event" || event.data || event.data.code == "ym-client-event" || event.data.code == "clickedButton") {
                app.triggerIntent('vemo-2021-talking-points-asset-class-return-outlooks')
            }
            else if (event.event_code == "custom-event" || event.data || event.data.code == "ym-client-event" ||  event.data.code == "clickedButton"){
                run_recaptcha();
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