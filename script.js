

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
  });
  
  function imageIsLoaded() { 

    const ImageEditor = new FilerobotImageEditor();

    ImageEditor.open(this.src);

}

//const ImageEditor = new FilerobotImageEditor();

//ImageEditor.open('Elijah Wilde ID Photo.jpg');



document.getElementById("settings").style.display = "none";
let numElems = 0;
let currentButton = "";

function delCurrentButton() {
    let elem = document.getElementById(currentButton);
    elem.parentNode.removeChild(elem);
    toggleSettings("No Button Selected");
}

function changeColor(color){
    let elem = document.getElementById(currentButton);
    elem.style.backgroundColor = "rgba(" + color[0].toString() + "," + color[1].toString() + "," + color[2].toString() + "," + color[3].toString() + ")";
}

function newElem() {
    numElems++;
    let elem = document.createElement("div");
    elem.setAttribute("id", "e"+numElems);
    elem.setAttribute("class", "myButton");
    elem.addEventListener("click", function(){toggleSettings(this.id)});
    elem.style.backgroundImage = 'url("Elijah Wilde ID Photo.jpg")';
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
const pickr = Pickr.create({
    el: '.color-picker',
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

pickr.on('save', (color, instance) => {
    changeColor(color.toRGBA());
    //console.log('save', color, instance);
})

