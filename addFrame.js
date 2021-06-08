(function addFrames () {
    try {    
      document.getElementById('player').style.width= '0px'
      document.querySelector('#chatContainer').insertAdjacentHTML(
        'afterbegin',
        `<div>
            <div style="position: absolute; top: 0; left: 0px; right: 0; bottom: 0;">
                <ul class="sc-eCApnc jvVggF" style="display: flex; flex-direction: column; justify-content: center; background-color: #fff; padding: 0; width: 3rem; list-style: none; height: calc(100% - 55px); justify-content: space-between;border: 1px solid #ccc">
                    <a to="/" id="e1" onclick="sendEvent('VEMO')" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a href="#" id="e1" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a href="#" id="e2" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/4dnzmSDugrwW1622800597860.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a href="#" id="e3" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/peOgkPdE8n0A1622800752931.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a href="#" id="e4" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/FPloPRu3LmfA1622800812350.png" style="width: 1.2rem; height: auto;" />
                    </a>
                    <a href="#" id="e5" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/sULHcUPQH5RL1622800858305.png" style="width: 1.2rem; height: auto;" />
                    </a>
                  <a href="#" id="e6" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/VLla29GmwVpi1622800914321.png" style="width: 1.2rem; height: auto;" />
                    </a>
                  <a href="#" id="e7" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/o2BBDya1HiQT1622800956549.png" style="width: 1.2rem; height: auto;" />
                    </a>
                  <a href="#" id="e8" href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                        <img src="https://cdn.yellowmessenger.com/g6Fdrr5NeUj01622800983140.png" style="width: 1.2rem; height: auto;" />
                    </a>
                </ul>
            </div>
            <div style="position: fixed; top: 0; right: 0; width: calc(100% - 3rem - 2px); z-index: 1;">
                <ul class="sc-eCApnc jvVggF" style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; background-color: #fff; padding: 0; list-style: none; height: 3rem;border: 1px solid #ccc;border-left: 0">
                    <div>
                        <a href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer;">
                            <img src="https://cdn.yellowmessenger.com/mv8YPnKAfFOm1623088433384.png" style="width: 1.2rem; height: auto;" />
                        </a>
                        <a href="#" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer;">
                            <img src="https://cdn.yellowmessenger.com/DOZyHmvCcjee1623088538196.jpg" style="width: 1.2rem; height: auto;" />
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
    parent.postMessage("ACTIVE", "*")
};

document.getElementById('e2').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("ACTIVE", "*")
};

document.getElementById('e3').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("ASSET", "*")
};

document.getElementById('e4').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("ECON", "*")
};

document.getElementById('e5').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("INVESTOR", "*")
};

document.getElementById('e6').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("POPFAQ", "*")
};

document.getElementById('e7').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("RETIREMENT", "*")
};

document.getElementById('e8').onclick = function () {
    // parent.postMessage("message to be sent", "http://the-website-that-will-receive-the-msg.com")
    parent.postMessage("VCMM", "*")
};