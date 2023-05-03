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

            $('.loader-login p').html('Welcome!')

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

        setTimeout(() =>{
            openIntro(); //going back to intro on 3 wrong pin
        }, 3000)


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
////////////////////////////////////////

// adding date and time on desktop
// fetching current date

function dateDisplay (){

    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const dateString = (`${currentMonth}/${currentDayOfMonth}/${currentYear}`)
    return dateString;
    }
    
    
    // fetching current time
    
    function timeDisplay (){
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        const adjustedMinute = currentMinute < 10 ?'0' + currentMinute: '' + currentMinute;
        const timeString = (`${currentHour}:${adjustedMinute}`)
        return timeString;
    }
    
$("#current-time").html(timeDisplay());
$("#current-date").html(dateDisplay());
///////////////////////////////////////////////

                // taskbar funcitonality //////
                // start menu ////
$("#start-btn").click(startBtnClicked);
    function startBtnClicked(){
        $('#start-menu').toggleClass('slide-down slide-up').toggleClass('show');
        $('#pc-info-reveal').removeClass('show slide-up2').addClass('slide-down2');

        setTimeout(() => {
            
        $('#start-menu').toggleClass('no-display');
        $('#pc-info-reveal').addClass('no-display');

        }, 150);

    }

$(document).keypress(winKeyPressed);
function winKeyPressed(e) {
}
$(document).keypress(spaceBarPressed);
function spaceBarPressed(e) {


    let key = e.which;
        if (key == 32){
            startBtnClicked();
        }
}

        // pcinfo (right taskbar navigation)////////////
$('.pc-info').click(pcInfoClicked);
    function pcInfoClicked(){
        $('#pc-info-reveal').toggleClass('slide-down2 slide-up2').toggleClass('show');
        $('#start-menu').removeClass('show slide-up').addClass('slide-down');
        setTimeout(() => {
        $('#start-menu').addClass('no-display');
        $('#pc-info-reveal').toggleClass('no-display');
        }, 150);
    }
    $('.pc-info-img').click(settingsClicked);
    function settingsClicked(){
        $(this).toggleClass('bot-right-menu-click-col');
    }

    // close menus on blank screen click///////////////
$('.dsk-top-shade').click(closeOnClick);
    function closeOnClick(){
        if (($('#pc-info-reveal').hasClass('slide-up2 show')) || ($('#start-menu').hasClass('slide-up show'))){
            $('#pc-info-reveal').removeClass('show slide-up2').addClass('slide-down2');
            $('#start-menu').removeClass('show slide-up').addClass('slide-down');
            setTimeout(() => {
                $('#start-menu').addClass('no-display');
                $('#pc-info-reveal').addClass('no-display');
                }, 150);
        }
        

    }
    closeOnClick()
    /////////////////////////////////////////////////

    // brightness slider ////////////////////////////
    function changeBrightness(value){
    let brightness = $('body');
    brightness.css('filter', 'brightness('+value/100+')')
}
$('.brightness-slider').on('input', bright);
    function bright(){
        changeBrightness(this.value);
    }


    

    $('#shutDownBtn').click(shutDownClicked);
        function shutDownClicked(){
        $('#login').addClass('hide');
        $('#sign-in-success').addClass('hide');
        $('#multiple-invalid-pin').addClass('hide');
        $('#shut-down').removeClass('hide')
        setTimeout(() => {
            openIntro()
            
        }, 5000);


    }
    $('.start-bottom-right').click(desktopShutDown);
        function desktopShutDown(){
        $('.dsk-top').addClass('hide');
        $('#shut-down').removeClass('hide');

          setTimeout(() => {
            openIntro()
            
        }, 5000);
    }
