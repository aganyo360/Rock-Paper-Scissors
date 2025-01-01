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

let username = +prompt("Who is this")

if(username === "Master"){
    let pass = +prompt("Enter Password")
    if(pass === "Tusker01")
        alert("Welcome, Successful Login")

    else if( pass ==="" || pass === null){
        alert("Cancelled")
    }
    else{
        alert("wrong password")
    }}

else{
    alert("User doesn't exist")
    }
