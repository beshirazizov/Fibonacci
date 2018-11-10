var btn = document.getElementById('cal');
btn.addEventListener("click", function () {
    var n = document.querySelector("#inputtext").value;
    if (n>0) {
        document.querySelector(".answer").innerHTML = Math.floor(n) + "th Fibonacci number is <span>"+ fib(n) +"</span>";
        document.querySelector("#inputtext").value = "";      
    }else{
        document.querySelector(".answer").innerHTML = "Please enter a <span>valid</span> number.";
        document.querySelector("#inputtext").value = "";
    }
});
function fib(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}