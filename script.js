

//const ImageEditor = new FilerobotImageEditor();
//ImageEditor.open('Elijah Wilde ID Photo.jpg');



document.getElementById("settings").style.display = "none";
let numElems = 0;
let currentButton = "";

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            addBackgroundImg(URL.createObjectURL(this.files[0]));
        }
    });
});

function delCurrentButton() {
    let elem = document.getElementById(currentButton);
    elem.parentNode.removeChild(elem);
    toggleSettings("No Button Selected");
}

function delBackgroundImg(){
    let elem = document.getElementById(currentButton);
    elem.classList.add("noBackgroundImg");
}

function changeBackgroundColor(color){
    let elem = document.getElementById(currentButton);
    elem.style.backgroundColor = "rgba(" + color[0].toString() + "," + color[1].toString() + "," + color[2].toString() + "," + color[3].toString() + ")";
}

function toggleTextBackground(){
    let elem = document.getElementById(currentButton+"t");
    console.log(elem)
    if (elem.classList.contains('textBackground')){
        elem.classList.remove('textBackground');
    } else {
        elem.classList.add('textBackground')
    }
}

function changeTextColor(color){
    let elem = document.getElementById(currentButton+"t");
    elem.style.color = "rgba(" + color[0].toString() + "," + color[1].toString() + "," + color[2].toString() + "," + color[3].toString() + ")";
}

function addBackgroundImg(url){
    let elem = document.getElementById(currentButton);
    if (elem.classList.contains("noBackgroundImg")){
        elem.classList.remove("noBackgroundImg");
    }
    elem.style.backgroundImage = 'url("'+ url +'")';
}

function changeText(){
    let elem = document.getElementById(currentButton+"t");
    let text = document.getElementById('textBox').value;
    console.log(text)
    elem.innerHTML = text;
}

function changeTextWeight() {
    let elem = document.getElementById(currentButton+"t");
    elem.style.fontWeight = document.getElementById('textWeight').value;
}

function changeTextSize() {
    let elem = document.getElementById(currentButton+"t");
    elem.style.fontSize = document.getElementById('textSize').value.toString() + "%";
}

function newElem() {
    numElems++;
    let elem = document.createElement("div");
    elem.setAttribute("id", "e"+numElems);
    elem.setAttribute("class", "myButton");

    let textHolder = document.createElement("div");
    textHolder.setAttribute("class", "buttonText");
    textHolder.setAttribute("id", "e"+numElems+"t");

    elem.appendChild(textHolder);
    elem.addEventListener("click", function(){toggleSettings(this.id)});

    document.getElementById("elemsGoHere").append(elem);
}

function toggleSettings(callerID) {

    currentButton = callerID;
    console.log(currentButton);
    
    var x = document.getElementById("settings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//https://github.com/Simonwep/pickr/blob/master/README.md
const pickr1 = Pickr.create({
    el: '.color-picker-background',
    theme: 'classic',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
        }
    }
});

const pickr2 = Pickr.create({
    el: '.color-picker-text',
    theme: 'classic',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
        }
    }
});

pickr1.on('save', (color, instance) => {
    changeBackgroundColor(color.toRGBA());
    //console.log('save', color, instance);
})

pickr2.on('save', (color, instance) => {
    changeTextColor(color.toRGBA());
    //console.log('save', color, instance);
})
