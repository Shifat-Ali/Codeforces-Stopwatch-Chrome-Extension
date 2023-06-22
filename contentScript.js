let div = document.createElement("div");
div.className = "shifar ali";
div.innerHTML = ` 
    <div style=  "position: fixed; top: 20; right: 0px; display: block; width: max-content; height: 120; z-index: 1;">
        <div id="clock" style="display: flex; justify-content: center;">
            <h1>
            <span id="hr">00 </span> : <span id="min">00</span> : <span id="sec">00</span>
            </h1>
        </div>
        <div id="button" style="display: flex; justify-content: center;">
            <button type="button" id="start" style="margin: 2px; width: 70;">start</button>
            <button type="reset" id="stop" style="margin: 2px; width: 70;">stop</button>
            <button type="button" id="reset" style="margin: 2px; width: 70;">reset</button>
        </div>
    </div>`;
let script = document.createElement("script");
script.innerHTML = "<script src = 'popup.js'> </script>";
div.appendChild(script);
document.body.prepend(div);
