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

let cbutton = document.querySelector(".clear");

let clear = () => {
    let children = hover.children;
    for(let i = 0; i<children.length; i++){
        children[i].style.backgroundColor = "black";
    }
}

cbutton.addEventListener("click", clear);

let csize = document.querySelector(".size");

let changeSize = () => {
    let size = prompt("Choose a size: ");
    if(size>100){
        alert("Size too big, max = 100!")
    }else{
        hover.innerHTML = "";
        grid(size,size);
    }
}

csize.addEventListener("click", changeSize);