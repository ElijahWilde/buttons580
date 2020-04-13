

document.getElementById("settings").style.display = "none";
let numElems = 0;
let currentButton = "";

function newElem() {
    numElems++;
    let elem = document.createElement("div");
    elem.setAttribute("id", "e"+numElems);
    elem.setAttribute("class", "myButton");
    elem.addEventListener("click", function(){toggleSettings(this.id)});
    document.getElementById("elemsGoHere").append(elem);
}

function toggleSettings(callerID) {

    let currentButton = callerID;
    console.log(currentButton);
    
    var x = document.getElementById("settings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


