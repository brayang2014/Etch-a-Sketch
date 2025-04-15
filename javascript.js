let grid = (colLen, rowLen) => {
    document.documentElement.style.setProperty("--col",colLen);
    for(let row = 0; row<rowLen; row++){
        for(let col = 0;col<colLen; col++){
            let parent = document.getElementById("container");
            let child = document.createElement("div");
            child.classList.add('cnodes');
            parent.appendChild(child);
        }
    }
}
grid(16,16);

let hover = document.getElementById('container');

let draw = (event) => {
    event.target.style.backgroundColor = "white";
}

hover.addEventListener("mouseover", draw);