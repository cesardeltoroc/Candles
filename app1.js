function guessingGame() {
    let userAnswer = prompt('Guess a # from 1-10');
    let correctAnswer = 2;   //may be a random number later on
    let attempts = 4;

    for(let i =1; i < attempts; i++ ){
        while(userAnswer < 1 || userAnswer > 10){
        userAnswer = prompt('Please try again 1-10?');
        }
        if(userAnswer == correctAnswer){
            alert('Congradulations you got the answer!');
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry. Too high go lower');
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry the number is too low');
        }
        if(i == 7){
            alert('The correct answer was' + correctAnswer);
        }
    }
}
let userName= prompt ('Welcome Please Insert Name')
    document.write ('Welcome, ' + userName);


function userSign () {
    let userSign= prompt ("Are you interested in signing up for email notficitations for future sales and markdown, type YES if so? All sales are final and when on markdown. Type NO if you are NOT interested and you will be Redirected to the website.")
   
    if(userSign.toUpperCase() == "YES" ){
        userSign= prompt ("Please Insert Your Email:")
    }

}

function askCoffee(){
    let anotherPicture = prompt('How many baby yoda images would you like to see?');
    let picURL = "https://am22.mediaite.com/tms/cnt/uploads/2019/12/Baby-Yoda-With-His-Little-Cup-Is-All-of-Us.jpeg"
    for(let i = 0; i < anotherPicture; i++){
        document.write('<img src="' + picURL + '">')
    }
}