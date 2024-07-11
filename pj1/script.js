const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red' , 'green', 'blue' ,'orange','black', 'yellow', 'aqua']

//  body.style.backgroundColor='white'
button. addEventListener('click', changeB)
function changeB() {
    const colorindex = parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorindex]
}

document.getElementById('rgbButton').addEventListener('click', function()
{
    const colors = [
        'rgb(255, 0, 0)',   // Red
        'rgb(0, 255, 0)',   // Green
        'rgb(0, 0, 255)'  
    ];

const currentColor = this.style.backgroundColor;
const nextColor = color[(color.indexOf(currentColor) + 1) % color.length];
this.style.backgroundColor = nextColor;
});
// document.getElementById('rgbButton').addEventListener('click', function() {
//     const colors = [
//         'rgb(255, 0, 0)',   // Red
//         'rgb(0, 255, 0)',   // Green
//         'rgb(0, 0, 255)'    // Blue
//     ];
//     const currentColor = this.style.backgroundColor;
//     const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
//     this.style.backgroundColor = nextColor;
// });