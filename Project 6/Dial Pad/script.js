let count = 0
function b1() {
    count = count * 10 + 1
    document.getElementById("pg").innerHTML = count
}
function b2() {
    count = count * 10 + 2
    document.getElementById("pg").innerHTML = count
}
function b3() {
    count = count * 10 + 3
    document.getElementById("pg").innerHTML = count
}
function b4() {
    count = count * 10 + 4
    document.getElementById("pg").innerHTML = count
}
function b5() {
    count = count * 10 + 5
    document.getElementById("pg").innerHTML = count
}
function b6() {
    count = count * 10 + 6
    document.getElementById("pg").innerHTML = count
}
function b7() {
    count = count * 10 + 7
    document.getElementById("pg").innerHTML = count
}
function b8() {
    count = count * 10 + 8
    document.getElementById("pg").innerHTML = count
}
function b9() {
    count = count * 10 + 9
    document.getElementById("pg").innerHTML = count
}
function b0() {
    count = count * 10 + 0
    document.getElementById("pg").innerHTML = count
}
function backspace() {
    count = parseInt(count / 10)
    document.getElementById("pg").innerHTML = count
}
