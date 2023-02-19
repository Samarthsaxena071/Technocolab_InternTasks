var userName = "";
userName = userName + prompt("Enter your name");
console.log(userName==""?"Hello!":"Hello, "+userName+"!");

var userQuestion="";
userQuestion=userQuestion+prompt("Write question");
console.log(userQuestion+ "- "+ userName);

var randomNumber = Math.floor(Math.random() * 8);
var eightBall="";

switch (randomNumber){
    case 0:
        eightBall=eightBall+"It is certain";
        break;
    case 1:
        eightBall=eightBall+"It is decidedly so";
        break;
    case 2:
        eightBall=eightBall+"Reply hazy try again";
        break;
    case 3:
        eightBall=eightBall+"Cannot predict now";
        break;
    case 4:
        eightBall=eightBall+"Do not count on it";
        break;
    case 5:
        eightBall=eightBall+"My sources say no";
        break;
    case 6:
        eightBall=eightBall+"Outlook not so good";
        break;
    case 7:
        eightBall=eightBall+"Signs point to yes";
        break;
}

console.log(eightBall);