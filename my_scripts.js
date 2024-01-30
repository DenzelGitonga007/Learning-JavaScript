// Change the text of 'hello' id
function ChangeHello() {
    document.getElementById('hello').innerHTML="The text has been changed by JavaScript"
}

let firstName = "Denzel";
let lastName = "Gitonga";

let text = `Welcome ${firstName}, ${lastName}!`;

document.getElementById("demo").innerHTML = text;

// alerts
let age = 22;
alert('Denzel is '+ age + ' years old');
