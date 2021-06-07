(function addFrames () {
    try {    
      document.querySelector('#chatContainer').insertAdjacentHTML(
        'afterbegin',
        `<div>
            <div style="position: absolute; top: 0; left: 0px; right: 0; bottom: 0;">
                <ul class="sc-eCApnc jvVggF" style="display: flex; flex-direction: column; justify-content: center; background-color: #fff; padding: 0; width: 3rem; list-style: none; height: calc(100% - 55px); justify-content: space-between;border: 1px solid #ccc">
                    <a to="/" id="e1" onclick="sendEvent('VEMO')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a to="/" id="e1" href="#" onclick="sendEvent('VEMO')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a to="/" id="e2" href="#" onclick="sendEvent('ACTIVE')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/4dnzmSDugrwW1622800597860.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a to="/" id="e3" href="#" onclick="sendEvent('ASSET')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/peOgkPdE8n0A1622800752931.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a to="/" id="e4" href="#" onclick="sendEvent('ECON')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/FPloPRu3LmfA1622800812350.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a to="/" id="e5" href="#" onclick="sendEvent('INVESTOR')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/sULHcUPQH5RL1622800858305.png" style="width: 1.2rem; height: auto;" />
                    </a>
                  <a to="/" id="e6" href="#" onclick="sendEvent('POPFAQ')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/VLla29GmwVpi1622800914321.png" style="width: 1.2rem; height: auto;" />
                    </a>
                  <a to="/" id="e7" href="#" onclick="sendEvent('RETIREMENT')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/o2BBDya1HiQT1622800956549.png" style="width: 1.2rem; height: auto;" />
                    </a>
                  <a to="/" id="e8" href="#" onclick="sendEvent('VCMM')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/g6Fdrr5NeUj01622800983140.png" style="width: 1.2rem; height: auto;" />
                    </a>
                </ul>
            </div>
            <div style="position: fixed; top: 0; right: 0; width: calc(100% - 3rem - 2px); z-index: 1;">
                <ul class="sc-eCApnc jvVggF" style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; background-color: #fff; padding: 0; list-style: none; height: 3rem;border: 1px solid #ccc;border-left: 0">
                    <div>
                        <a to="/" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer;">
                            <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto;" />
                        </a>
                        <a to="/" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer;">
                            <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto;" />
                        </a>
                    </div>
                </ul>
            </div>
        </div>`      
      );
    } catch(e) {
      console.log("failing while trying to insert add frame script", e);
    }
  })();

  document.getElementById('e1').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e2').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e3').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e4').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e5').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e6').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e7').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};

document.getElementById('e8').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("myevent", "*")
};