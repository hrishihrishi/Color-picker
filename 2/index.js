const input =  document.getElementById("input1")

function reverse(str) {
    return str.split("").reverse().join("")
}
const b = document.getElementsByTagName("body")[0]

function check_palindrome() {
    const value = input.value;
    const rev = reverse(value)
    if (value === rev) {
        alert(" PALINDROME")
    } else {
        alert("NOT TODAY")
    }
    input.style.backgroundColor("green")
    input.value = ""
    
}