// windows and main intro logo ..on loading

    $(".intro").removeClass('hide')
$("#win-img").addClass("hide");

$('#continue-btn').click(continueClicked);
function continueClicked(){
    $(this).addClass('hide')
$("main").removeClass('hide').addClass("reviel-triple")
$("#win-img").removeClass('hide').addClass("reviel").addClass("loading")
setTimeout(() => {
    $("#win-img").addClass("hide");
    
}, 4000);
introPlay();
openLogIn();
}

/////////////////////////////////////////////////

// windows intro audio .. on loading /////////

let audio = document.querySelector("#intro-sound");
    function introPlay() {
        $("#win-img").addClass("loading")
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
            $('.pin-trials').addClass('hide')
            console.log("access granted!");
            correctPin();
            setTimeout(() => {
                loginPage.addClass("hide");
                // $("#sign-in-success h1").removeClass("hide");
                openDeskTop();
            }, 1000);

            
        } else { 
            trialCounter()
            
         if(isNaN(pin)) {
            console.log("pin should only be numbers")
            wrongPin();
        } else {
            console.log("access denied!")
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
             $('.pin-trials').removeClass('hide').html(`You have ${countTrial} trial left!`);
             console.log(countTrial)   
    
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
        $('#start-menu').toggleClass('slide-down slide-up').toggleClass('show no-display');

    }


