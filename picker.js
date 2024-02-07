const minis = document.querySelectorAll(".mini")
const  main = document.querySelector(".main")

const left_top = document.getElementById("left_top")
const left_bottom = document.getElementById("left_bottom")
const right_top = document.getElementById("right_top")
const right_bottom = document.getElementById("right_bottom")

changeMini(main.value)
minis.forEach(mini =>{
    mini.addEventListener("click", function (){
        main.value =ColorHEX(mini.style.backgroundColor)
        changeMini(main.value)
    })
})
main.addEventListener("input", function (){

    changeMini(main.value)
})
main.addEventListener("click", function (){
    navigator.clipboard.writeText(main.value)
})
function ColorHEX(rgb){

    let border = [rgb.indexOf(','),rgb.indexOf(',',rgb.indexOf(',')+1),rgb.indexOf(')')]
    let r = dec2Hex(rgb.slice(4,border[0]))
    let g =dec2Hex(rgb.slice(border[0]+2,border[1]))
    let b = dec2Hex(rgb.slice(border[1]+2,border[2]))

    return '#' + r + g + b
}

function dec2Hex(c) {
    let start =c
    if(c>255)
        c=255
    if(c<0)
        c=0
    let result = ""
    if(c<=16)
        result+=c
    while (c>16) {
        if(c%16===15)
            result += "F"
        else if(c%16===14)
            result += "E"
        else if(c%16===13)
            result += "D"
        else if(c%16===12)
            result += "C"
        else if(c%16===11)
            result += "B"
        else if(c%16===10)
            result += "A"
        else
            result += c % 16
        c -= c%16

        if(c%16===0)
            if(c/16===15)
                result += "F"
            else if(c/16===14)
                result += "E"
            else if(c/16===13)
                result += "D"
            else if(c/16===12)
                result += "C"
            else if(c/16===11)
                result += "B"
            else if(c/16===10)
                result += "A"
            else
                result += c / 16
            break;
    }
    console.log("start: "+ start +" c: " + result)
    return result.split('').reverse().join('')
}
function changeMini(color) {

    var r =  parseInt(color.slice(1,3),16)
    var g = parseInt(color.slice(3,5),16)
    var b = parseInt(color.slice(5,7),16)
    console.log("#" + (r + 10) + (g+10) + (b+10))
    left_top.style.backgroundColor = "#" + dec2Hex(r + 40) + dec2Hex(g+10) + dec2Hex(b)
    left_bottom.style.backgroundColor = "#" + dec2Hex(r -20) + dec2Hex(g+15) + dec2Hex(b+10)
    right_top.style.backgroundColor = "#" + dec2Hex(r ) + dec2Hex(g-15) + dec2Hex(b+10)
    right_bottom.style.backgroundColor = "#" + dec2Hex(r + 10) + dec2Hex(g) + dec2Hex(b+25)
}
