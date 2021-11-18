let userAnswer= prompt ('Welcome Please Insert Name')

document.write ('Welcome, ' + userAnswer);

function userSign () {
    let userSign= prompt ("Are you interested in signing up for email notficitations for future sales and markdown? All sales are final and when on markdown")
   
    if(userSign.toUpperCase() == "YES" ){
        userSign= prompt ("Please Insert Your Email:")
    }

}
userSign ();