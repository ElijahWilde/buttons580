//I realize I just have a ton of functions and nothing else. Is this functional programming?

let numElems = 0;
let currentButton = "";
let editMode = false;
let buttIDForZoomSlider = "";
let buttSize = '150px';
let buttOn = document.createElement("AUDIO");
buttOn.src = "Button Click On.mp3";

window.addEventListener('load', function() {  
    document.getElementById('uploadImage').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            addBackgroundImg(URL.createObjectURL(this.files[0]));
        }
    });
});

function generalButtonPress(callerID){
    buttOn.play();
    currentButton = callerID;
    if (editMode){
        toggleSettings();
    } else{
        toggleLightUp();
    }
}

function editButtonPress(){
    toggleAddButton();
    editMode = !editMode;
    eb = document.getElementById('editBtn');
    if (eb.classList.contains('editBtnOff')){
        eb.classList.remove('editBtnOff');
        eb.classList.add('editBtnOn');
    } else {
        eb.classList.add('editBtnOff');
        eb.classList.remove('editBtnOn');
    }

    if (document.getElementById('settings').style.display === "block"){
        toggleSettings();
    }

    toggleButtSize()
}

function toggleLightUp(){
    let elem = document.getElementById(currentButton);
    if (elem.classList.contains('lightUp')){
        elem.classList.remove('lightUp');
    } else {
        elem.classList.add('lightUp');
    }
}

function delCurrentButton() {
    let elem = document.getElementById(currentButton);
    elem.parentNode.removeChild(elem);
    toggleSettings("No Button Selected");
}

function delBackgroundImg(){
    let elem = document.getElementsByClassName('pattern-background-image-'+currentButton+'z')[0];
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
    let elem = document.getElementsByClassName('pattern-background-image-'+currentButton+'z')[0];
    if (elem.classList.contains("noBackgroundImg")){
        elem.classList.remove("noBackgroundImg");
    }
    elem.style.backgroundImage = 'url("'+ url +'")';

    document.getElementById('uploadImage').value = null;
    /*
    let elem = document.getElementById(currentButton);
    if (elem.classList.contains("noBackgroundImg")){
        elem.classList.remove("noBackgroundImg");
    }
    elem.style.backgroundImage = 'url("'+ url +'")';

    document.getElementById('uploadImage').value = null;
    */
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

    eID = "e"+numElems;
    buttIDForZoomSlider = eID+"z";

    let elem = document.createElement("div");
    elem.setAttribute("id", eID);
    elem.setAttribute("class", "myButton");
    elem.style.height = buttSize;
    elem.style.width = buttSize;
    /*
    let textHolder = document.createElement("div");
    textHolder.setAttribute("class", "buttonText");
    textHolder.setAttribute("id", eID+"t");
    elem.appendChild(textHolder);
    */
    elem.addEventListener("click", function(){generalButtonPress(this.id)});

    elem.addEventListener("mouseover", function(){this.timer=window.setTimeout(function(){generalButtonPress(elem.id)},2000)});
    elem.addEventListener("mouseout", function(){if(this.timer){window.clearTimeout(this.timer)}});
   
    document.getElementById("elemsGoHere").append(elem);

    img1 = new ImageControl();
    img1.init({
    container: '#'+eID,
    containerSize: buttSize,
    backgroundPattern: 'https://cookieshq.co.uk/images/2016/06/28/background-image.jpg'
    });

}

function toggleButtSize() {
    let x = document.getElementById("buttSize");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleSettings() {  
    let x = document.getElementById("settings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleAddButton() {  
    let x = document.getElementById("addButtonWrapper");
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
    useAsButton: 'true',

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
    useAsButton: 'true',

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

function zoom(){
    let elem = document.getElementsByClassName('pattern-background-image-'+currentButton+'z')[0];
    elem.style.backgroundSize = document.getElementById('picZoom').value + '%';
}

function changeButtonSize(){
    let elems = document.getElementsByClassName('myButton');
    size = document.getElementById('buttSize').value + 'px';
    buttSize = size;
    for (let i = 0; i < elems.length; i++){
        console.log('entered loop')
        elems[i].style.height = size;
        console.log(size)
        console.log(elems[i].style.height)
        elems[i].style.width = size;
    }
}

//https://www.cookieshq.co.uk/posts/creating-a-draggable-background-image
//https://coffeescript.org/#overview
var ImageControl;
ImageControl = (function() {
  return function() {
    this.init = function(args) {
      var imageContainer, mainContainer, patternImage, zoomSlider, zoomSliderContainer;
      this.originalArgs = args;
      mainContainer = $(args.container).css({
        position: 'relative',
        'max-width': args.containerSize,
        height: args.containerSize,
        overflow: 'hidden'
      });
      imageContainer = $('<div />').css({
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'move'
      });
      let textHolder = document.createElement("div");
      textHolder.setAttribute("class", "buttonText");
      textHolder.setAttribute("id", eID+"t");
      console.log(textHolder)
      patternImage = $('<div />').attr({
      }).css({
        left: 0,
        top: 0,
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        'background-size': "70%",
        'background-repeat': 'repeat',
        'background-position': "0% 0%",
        'background-image': `url('${args.backgroundPattern}')`
      }).addClass('pattern-background-image-' + buttIDForZoomSlider
      ).addClass("noBackgroundImg"
      ).addClass('pattern-background-image'
      ).append(textHolder);

      zoomSliderContainer = $("<div />").attr({
        class: 'range-slider'
      }).css({
        top: 0,
        right: 0,
        width: '100%',
        height: '2%',
        'z-index': 100000,
        position: 'absolute',
        'text-align': 'center'
      });
      zoomSlider = $("<input type='range' step='1' min='20' max='99' value='70'>").css({
        width: '50%',
        display: 'inline-block',
        '-webkit-appearance': 'none',
        'background': '#eee',
        '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)',
        'display': 'none'
      });
      zoomSlider.attr({id: buttIDForZoomSlider});
      zoomSliderContainer.append(zoomSlider);
      imageContainer.append(patternImage);
      mainContainer.append(imageContainer);
      mainContainer.append(zoomSliderContainer);
      this.zoomSlider = zoomSlider;
      this.patternImage = patternImage;
      zoomSlider.on('input change', function(e) {
        var zoomVal;
        zoomVal = $(this).val();
        return imageContainer.find('.pattern-background-image').css({
          'background-size': "" + zoomVal + "%"
        });
      });
      return imageContainer.on('mousedown touchstart', function(e) {
        if (editMode == false){
            return;
        }
        var containerSize, elepos, mousedown, patternBackground, patternBackgroundWidth, zoomLevel;
        e.preventDefault();
        patternBackground = $(this).find('.pattern-background-image');
        patternBackgroundWidth = patternBackground.width();
        mousedown = {
          x: e.originalEvent.pageX || e.originalEvent.touches[0].pageX,
          y: e.originalEvent.pageY || e.originalEvent.touches[0].pageY
        };
        elepos = {
          x: parseFloat(patternBackground.css("backgroundPosition").split(" ")[0].replace('%', '')),
          y: parseFloat(patternBackground.css("backgroundPosition").split(" ")[1].replace('%', ''))
        };
        zoomLevel = parseInt(zoomSlider.val());
        containerSize = parseInt(patternBackgroundWidth);
        $(document).on('mouseup touchend', function(e) {
          return $(document).unbind('mousemove touchmove');
        });
        return $(document).on('mousemove touchmove', function(e) {
          var actualMovePercentage, mousepos, movePercentage;
          mousepos = {
            x: e.originalEvent.pageX || e.originalEvent.changedTouches[0].pageX || mousedown.x,
            y: e.originalEvent.pageY || e.originalEvent.changedTouches[0].pageY || mousedown.y
          };
          if (mousedown !== mousepos) {
            movePercentage = {
              x: (100 * (mousepos.x - mousedown.x)) / patternBackgroundWidth,
              y: (100 * (mousepos.y - mousedown.y)) / patternBackgroundWidth
            };
            actualMovePercentage = {
              x: (1.1 / (1 - (zoomLevel / 100))) * movePercentage.x, // THIS AFFECTS HOW FAST THE IMAGE MOVES
              y: (1.1 / (1 - (zoomLevel / 100))) * movePercentage.y
            };
            patternBackground.css({
              'background-position': `${elepos.x + actualMovePercentage.x}% ${elepos.y + actualMovePercentage.y}%`
            });
          }
        });
      });
    };
  };
})();

$(document).ready(function() {
    editButtonPress();
});
