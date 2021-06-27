function changeMode(size, weight, transform, background, color) {
    return function(){
        document.documentElement.style["font-size"] = size;
        document.documentElement.style["font-weight"] = weight;
        document.documentElement.style["text-transform"] = transform;
        document.documentElement.style["background-color"] = background;
        document.documentElement.style["color"] = color;
    } 
};

let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    

function main() {
        
    paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    spookButton = document.createElement("button");
    spookButton.innerHTML = "Spooky";
    spookButton.setAttribute("onClick", "spooky()");
    document.body.appendChild(spookButton);

    darkButton = document.createElement("button");
    darkButton.innerHTML = "Dark mode";
    darkButton.setAttribute("onClick", "darkMode()");
    document.body.appendChild(darkButton);

    screamButton = document.createElement("button");
    screamButton.innerHTML = "Scream mode";
    screamButton.setAttribute("onClick", "screamMode()");
    document.body.appendChild(screamButton);
};

window.onload = main;
