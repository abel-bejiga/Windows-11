// windows and main intro logo ..on loading

    $(".intro").removeClass('hide')
$("#win-img").addClass("hide");

$('.power-switch input').click(powerClicked);
function powerClicked(){
    $(this).addClass('hide')
    setTimeout(() => {
        
   
    $('loader').removeClass('hide');
$("main").removeClass('hide').addClass("reviel-triple")
$("#win-img").removeClass('hide').addClass("reviel").addClass("loading")
setTimeout(() => {
    $("#win-img").addClass("hide");
    $('loader').addClass('hide');
    
}, 4000);
openLogIn();
}, 1500);
introPlay();
}

/////////////////////////////////////////////////

// windows intro audio .. on loading /////////

let audio = document.querySelector("#intro-sound");
    function introPlay() {
        $("#win-img").addClass("loading")
        $(".win11-add-img").addClass("win11-img")
        audio.play();
    }

//////////////////////////////////////////////////
                                // login page /////

// pin submission /////////////
$("#pin-btn").click(pinBtnClick);
function pinBtnClick(){
    pinCheck()

}
/////////////////////////////
function correctPin(){
    $('#input-pin').attr('id', 'input-pin-correct');
}

function wrongPin(){
    $('#input-pin').attr('id', 'input-pin-invalid');
    setTimeout(() => {
        $('#input-pin-invalid').attr('id', 'input-pin');
        
    }, 500);
}

let pinCheck = () => {
    
    let pin = $("#input-pin").val();
    let show = $("#menu");
    let loginPage = $("#login");
    let trialCount = 3;


        // login pin result ///////////////////////////////
    pin = Number(pin);
        if (pin === 1234){
            // $('.pin-trials').removeClass('hide').html("<h3>Welcome!</h3>");
            $('.pin-input-disc').addClass('fadeOut').addClass('hide');
            $('.loader-login').removeClass('hide');
            correctPin();
            setTimeout(() => {
                loginPage.addClass("hide");
                openDeskTop();
            }, 4000);

            
        } else { 
            trialCounter()
            
         if(isNaN(pin)) {
            wrongPin();
        } else {
            wrongPin();

        }
    }

}
////////////////////////////////////////////

// on enter press
$("#input-pin").keypress(enterPressed)
function enterPressed(e){
   let key = e.which;
    if (key == 13) {
       pinCheck();
    }
    return key;
}
// login pin counter ////////////////////////////
let countTrial = 4;

        function trialCounter(){

        if (countTrial > 1) {   
             countTrial--;
             if (countTrial < 2){
                $('.pin-trials').removeClass('hide').html(`You only have <span style='color:#C41E3A; font-weight:700; font-size: 17px'>${countTrial}</span> trial left!`);
             }
             else{

                 $('.pin-trials').removeClass('hide').html(`You have <span style='color:#FFC300; font-weight:600; font-size: 15px'>${countTrial}</span> trial left!`);
             }    
    
        } else if (countTrial === 1){
            $('#login').addClass('hide');
            $('body').css('background', 'red')
            $('.access-denied').removeClass('hide');

        }
}
////////////////////////////////////////////
        // opening needed html files //////////////////
function openIntro(){
            window.location.href = "./index.html"
}
function openDeskTop() {
            window.location.href = "./desktop.html";        
}
const delay = ms => new Promise(res => setTimeout(res, ms));
let openLogIn = async() => {
       await delay(4000);
        window.location.href = "./login.html"
}
///////////////////////////////////////

                            // desktop

// desktop searchbar onclick
$("#taskbar-search").click(dsktopSearch)
function dsktopSearch(){
    $(this).css('text-indent', '33px');
    
}
// $(".start-search input").click(startSearch)
// function startSearch(){
//     $(this).toggleCss('text-indent', '45px');
    
// }
// adding date and time on desktop

$("#current-time").html(timeDisplay());
$("#current-date").html(dateDisplay());

                // desktop funcitonality //////
                // start menu ////
$("#start-btn").click(startBtnClicked);
    function startBtnClicked(){
        $('#start-menu').toggleClass('slide-down slide-up').toggleClass('show');
        setTimeout(() => {
            
            $('#start-menu').toggleClass('no-display');
        }, 150);

    }
$(document).keypress(winKeyPressed);
function winKeyPressed(e) {

    let key = e.which;
        if (key == 32){
            startBtnClicked();
            console.log(key)
        }
}
$('.pc-info').click(pcInfoClicked);
    function pcInfoClicked(){
        $('#pc-info-reveal').toggleClass('slide-down2 slide-up2').toggleClass('show');
        setTimeout(() => {

        $('#pc-info-reveal').toggleClass('no-display');
        }, 150);
    }



