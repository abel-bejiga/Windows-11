// windows and main intro logo ..on loading
// $("main").addClass("reviel-triple")
// $("#win-img").addClass("reviel").addClass("loading")
// setTimeout(() => {
//     $("#win-img").addClass("hide");
// }, 4000);


// windows intro audio .. on loading

// let audio = document.querySelector("#intro-sound");
//     function introPlay() {
//         $("#win-img").addClass("loading")
//         audio.play();


//         console.log("should be playing...")
//     }

// introPlay();


$("#pin-btn").click(pinBtnClick);
function pinBtnClick(){
    pinCheck()
}

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
        // login pin result
    pin = Number(pin);
        if (pin === 1234){
            console.log("access granted!");
            correctPin();
            setTimeout(() => {
                loginPage.addClass("hide");
                $("h1").removeClass("hide");
            }, 1000);

            
        } else if(isNaN(pin)) {
            console.log("pin should only be numbers")
            wrongPin();
        } else {
            console.log("access denied!")
            wrongPin();

        }

}

// on enter press
$("#input-pin").keypress(enterPressed)
function enterPressed(e){
   let key = e.which;
    if (key == 13) {
       pinCheck();
    }
}
