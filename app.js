// let userName = String(prompt("Who's there?"))

// if (userName === "Admin"){
//     if(String(prompt("Password?")) == "TheMaster"){
//         alert("Welcome!")
//     } 
//     else if (prompt("Password?") === null){
//         alert("Canceled")
//     } else {
//         alert("Wrong password")
//     }
// }
// else if (userName === "" || userName === null){
//     alert("Canceled")
// }
// else {
//     alert("I don't know you")
// }

// let username = prompt("Who is this")

// if(username === "Master"){
//     let pass = prompt("Enter Password")
//     if(pass === "Tusker01")
//         // alert("Welcome, Successful Login")
//         alert(`Welcome, ${username.split(1,4)}`)

//     else if( pass ==="" || pass === null){
//         alert("Cancelled")
//     }
//     else{
//         alert("wrong password")
//     }}

// else if(username === "" || username === null){
//     alert("Cancelled")
// }
// else{
//     alert("User doesn't exist")
//     }


// function troubleshooting() {
// 	const a = 1;
// 	const b = 1;

// 	let result;

// 	// Edit between these lines
// 	// =================================
// 	result = a + b

// 	// =================================

// 	return result;
// }

// // Do not change this 

//     console.log(troubleshooting()); // Should print "ab"
 
// number = Number(prompt("enter a number"))

// function numberChecker() {
// 	if(number => 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// // }

// console.log(numberChecker()); // Should print "true"



// const a = 1+8
// const b = 22*3
// const c =5%4
// const d = a-17
// const e = a+b+c+d
// console.log(a, b, c, d, e)
let value;
value  = Number(prompt("Enter a number"))
// console.log(typeof value)
function isEven(){
	if(+(value%=2) == 0){
		alert(`${value} number is Even` )
	}
	else{
		alert(`${value}Number is odd`)
	}
	console.log(value)
}
isEven()