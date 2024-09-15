function getKey (e) {
    var location = e.location;
    var selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]']
    } else {
        var code = e.keyCode || e.which;
        selector = [
            '[data-key="' + code + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
        ].join(',');
    }
    return document.querySelector(selector);
}

function pressKey (char) {
    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    if (!key) {
        return console.warn('No key for', char);
    }
    key.setAttribute('data-pressed', 'on');
    setTimeout(function () {
        key.removeAttribute('data-pressed');
    }, 200);
}

var h1 = document.querySelector('h1');
var originalQueue = h1.innerHTML;
var queue = h1.innerHTML;

function next () {
    var c = queue[0];
    queue = queue.slice(1);
    h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
    pressKey(c);
    if (queue.length) {
        setTimeout(next, Math.random() * 200 + 50);
    }
}

h1.innerHTML = "&nbsp;";
setTimeout(next, 500);
var num=document.querySelectorAll(".key").length;
// console.log(num);

for (var i = 1; i < num; i++) {

    document.querySelectorAll(".key")[i].addEventListener("click", function() {
  
      var buttonInnerHTML = document.querySelectorAll(".key")[i].dataset.key;
  
      makeSound(buttonInnerHTML);
    console.warn(buttonInnerHTML);
    //   buttonAnimation(buttonInnerHTML);
  
    });
  
  }
  document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    // buttonAnimation(event.key);
  
  });
  function makeSound(key) {
    // Your existing switch statement to play sounds based on the key
    switch (key){
        case "q":
            // Play sound for 'w'
            var tom1 = new Audio("sounds/8d82b5_Letter_Q_Sound_Effect.mp3");
             tom1.play();
            break;

        case "w":
            var tom2 = new Audio("sounds/8d82b5_Letter_W_Sound_Effect.mp3");
            tom2.play();
            break;
        case "e":
                var tom2 = new Audio("sounds/8d82b5_Letter_E_Sound_Effect.mp3");
                tom2.play();
                break;
        case "r":
            var tom2 = new Audio("sounds/8d82b5_Letter_R_Sound_Effect.mp3");
            tom2.play();
            break;
        case "t":
            var tom2 = new Audio("sounds/8d82b5_Letter_T_Sound_Effect.mp3");
            tom2.play();
            break;
        case "y":
            var tom2 = new Audio("sounds/8d82b5_Letter_Y_Sound_Effect.mp3");
            tom2.play();
            break;
        case "u":
            var tom2 = new Audio("sounds/8d82b5_Letter_U_Sound_Effect.mp3");
            tom2.play();
            break;
        case "i":
            var tom2 = new Audio("sounds/8d82b5_Letter_I_Sound_Effect.mp3");
            tom2.play();
            break;
        case "o":
            var tom2 = new Audio("sounds/8d82b5_Letter_O_Sound_Effect.mp3");
            tom2.play();
            break;
        case "p":
            var tom2 = new Audio("sounds/8d82b5_Letter_P_Sound_Effect.mp3");
            tom2.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/8d82b5_Letter_A_Sound_Effect.mp3");
            tom2.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/8d82b5_Letter_S_Sound_Effect.mp3");
            tom2.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/8d82b5_Letter_D_Sound_Effect.mp3");
            tom2.play();
            break;
        case "f":
            var tom2 = new Audio("sounds/8d82b5_Letter_F_Sound_Effect.mp3");
            tom2.play();
            break;
        case "g":
            var tom2 = new Audio("sounds/8d82b5_Letter_G_Sound_Effect.mp3");
            tom2.play();
            break;
        case "h":
            var tom2 = new Audio("sounds/8d82b5_Letter_H_Sound_Effect.mp3");
            tom2.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/8d82b5_Letter_J_Sound_Effect.mp3");
            tom2.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/8d82b5_Letter_K_Sound_Effect.mp3");
            tom2.play();
            break;
        case "l":
            var tom2 = new Audio("sounds/8d82b5_Letter_L_Sound_Effect.mp3");
            tom2.play();
            break;
        case "z":
            var tom2 = new Audio("sounds/8d82b5_Letter_Z_Sound_Effect.mp3");
            tom2.play();
            break;
        case "x":
            var tom2 = new Audio("sounds/8d82b5_Letter_X_Sound_Effect.mp3");
            tom2.play();
            break;
        case "c":
            var tom2 = new Audio("sounds/8d82b5_Letter_C_Sound_Effect.mp3");
            tom2.play();
            break;
        case "v":
            var tom2 = new Audio("sounds/8d82b5_Letter_V_Sound_Effect.mp3");
            tom2.play();
            break;
        case "b":
            var tom2 = new Audio("sounds/8d82b5_Letter_B_Sound_Effect.mp3");
            tom2.play();
            break;
        case "n":
            var tom2 = new Audio("sounds/8d82b5_Letter_N_Sound_Effect.mp3");
            tom2.play();
            break;
        case "m":
            var tom2 = new Audio("sounds/8d82b5_Letter_M_Sound_Effect.mp3");
            tom2.play();
            break;
        case "1":
            var tom2 = new Audio("sounds/8d82b5_The_Number_1_Sound_Effect.mp3");
            tom2.play();
            break;
        case "2":
            var tom2 = new Audio("sounds/8d82b5_The_Number_2_Sound_Effect.mp3");
            tom2.play();
            break;
        case "3":
            var tom2 = new Audio("sounds/8d82b5_The_Number_3_Sound_Effect.mp3");
            tom2.play();
            break;
        case "4":
            var tom2 = new Audio("sounds/8d82b5_The_Number_4_Sound_Effect.mp3");
            tom2.play();
            break;
        case "5":
            var tom2 = new Audio("sounds/8d82b5_The_Number_5_Sound_Effect.mp3");
            tom2.play();
            break;
        case "6":
            var tom2 = new Audio("sounds/8d82b5_The_Number_6_Sound_Effect.mp3");
            tom2.play();
            break;
        case "7":
            var tom2 = new Audio("sounds/8d82b5_The_Number_7_Sound_Effect.mp3");
            tom2.play();
            break;
        case "8":
            var tom2 = new Audio("sounds/8d82b5_The_Number_8_Sound_Effect.mp3");
            tom2.play();
            break;
        case "9":
            var tom2 = new Audio("sounds/8d82b5_The_Number_9_Sound_Effect.mp3");
            tom2.play();
            break;
        case "0":
            var tom2 = new Audio("sounds/8d82b5_The_Number_0_Sound_Effect.mp3");
            tom2.play();
            break;
        case "Enter":
            var tom2 = new Audio("sounds/enter.mp3");
            tom2.play();
        default:
            console.log("No sound for", key);
    }
}

document.addEventListener('keydown', function (event) {
    // Check if the pressed key is the backspace key (key code 8)
    if (event.code === 'Backspace') {
        // Play the sound (you need to have an audio file, e.g., backspace.mp3)
        var audio = new Audio('sounds/backspace.mp3');
        audio.play();
    }
});
document.body.addEventListener('keydown', function (e) {
    var key = getKey(e);
    if (!key) {
        return console.warn('No key for', e.keyCode);
    }

    key.setAttribute('data-pressed', 'on');
});

document.body.addEventListener('keyup', function (e) {
    var key = getKey(e);
    key && key.removeAttribute('data-pressed');
});

function size () {
    var size = keyboard.parentNode.clientWidth / 90;
    keyboard.style.fontSize = size + 'px';
    console.log(size);
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
    size();
});
size();