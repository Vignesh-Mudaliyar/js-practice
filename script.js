console.log('JavaScript');

// what is js???
//  - Javascript is a scripting language which helps us to create dynamically uploading content,control multimedia,animate images,etc.
//  - It gives effects  to html and CSS. (it is the brain of html and css).


//  How to add javascript to the browser???
//  - there are two ways to add jvascript to the browser: 
//     1. Internal :- 
//         - we can write the <script> tag in our html file and inside this tag we can write our jvascript code to execute in the browser.
//         - there are two attributes of script tag 'type' and 'language' which is used to define the type and language of the script.CSS.but it is no longer required in HTML5.
    
//     2. Ecternal :-
//         - for adding externally we have to write the 'src' atrribute inside which we have to give the path of the js file.
//         - Example : <script src="js/path.js" ></script>.


// Tasks

// 1. Show an alert :- Create a page that shows a message "I'm JavaScript!".
//  alert() :- the alert() method is used to display the alert box with the specified message
// code :- 
         alert('I am JavaScript');


// 2. Working with variables: - Declare two variables: admin and name.
//                             Assign the value "John" to name.
//                             Copy the value from name to admin.
//                             Show the value of admin using alert (must output “John”).
// code:-
        let admin,name;
        name = "John";
        admin = name;
        alert(admin);



// 3. Create a web-page that asks for a name and outputs it :-

// code :-
        let userName = prompt('Enter your name :-');
        alert(userName);


// 4. Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”.

// code:-
        let name= prompt('What is the official name of the javascript ??');

        if(name == 'ECMAScript'){
            alert('Right!!')
        }
        else{
            alert('You don’t know? ECMAScript!');
        }

// 5. Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

// Code:-
        let number = prompt('Enter any integer :-',0);

        (number > 0) ? alert(1) : (number < 0) ? alert(-1) : (number == 0) ? alert(0) : alert('please enter valid number');




// 6. Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

// code:-
        let uname = prompt("Enter Username :");

        if(uname == 'Admin'){
            let password = prompt('Enter the password');

            if(password == "TheMaster"){
                alert('Welcome!');
            }
            else if(password == '' || password == null){
                alert('canceled!');
            }else{
                alert('Wrong Password!');
            }
        }
        else if(uname == '' || uname == null){
            alert('canceled!')
        }
        else{
            alert('Wrong Username');
        }



// 7. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

let n;

do{
    n= prompt('Enter number greater than 100');
}while(n<=100 && n);


// 8. print prime numbers between 1 to 10

// code:-
        let num = 10;
        next:
        for(let i=2;i<=num;i++){

            for(let j=2;j<i;j++){
                if(i % j == 0){
                   continue next;
                }
            }
         alert(i);
        }