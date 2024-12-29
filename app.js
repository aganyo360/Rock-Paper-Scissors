let userName = String(prompt("Who's there?"))

if (userName === "Admin"){
    if(String(prompt("Password?")) == "TheMaster"){
        alert("Welcome!")
    } 
    else if (prompt("Password?") === null){
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
}
else if (userName === "" || userName === null){
    alert("Canceled")
}
else {
    alert("I don't know you")
}