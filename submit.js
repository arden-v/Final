function submitchanges() {
   

    let message = "Thank you!"
    Thankyou.textContent = message;
    
}

function colorchange() {
    
let color = document.getElementById("coloroptions");
console.log(color.value);
document.body.style.backgroundColor = color.value;

}