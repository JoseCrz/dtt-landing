const style = document.createElement('style')
document.head.appendChild(style)

const logo = document.querySelectorAll('.logo path')

console.log(logo)

for (let i = 0; i <= logo.length - 1; i++) {
    console.log (`letter ${i} length is: ${logo[i].getTotalLength()}`)
    const totalLength = logo[i].getTotalLength()
    const delay = 0 + .3 * i
    const cssRule = `.logo path:nth-child(${i+1}) { 
        stroke-dasharray: ${totalLength}; 
        stroke-dashoffset: ${totalLength};
        animation: line-animation 2s ease forwards ${delay}s;
     }`

    style.sheet.insertRule(cssRule)
    if (i === logo.length-1) {
        style.sheet.insertRule(`.logo { animation: fill 0.5s ease forwards ${delay+1.5}s; }`)
    }
}

