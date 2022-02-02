const color_string = document.querySelector('rainbow');
console.log(color_string);
setColors(color_string);
// setInterval(setColors,1000);

function setColors(color_string) {
    for (i=0;i<256;i++) {
        color_string.innerHTML = 
        `<h1 class="header" style="color: rgb(255,0,${i})">статья о том как я писал эту статью</h1>`
    }
    for (i=255;i>-1;i--) {
        color_string.innerHTML = 
        `<h1 class="header" style="color: rgb(${i},0,255)">статья о том как я писал эту статью</h1>`
    }
    for (i=0;i<256;i++) {
        color_string.innerHTML = 
        `<h1 class="header" style="color: rgb(0,${i},255)">статья о том как я писал эту статью</h1>`
    }
    for (i=255;i>-1;i--) {
        color_string.innerHTML = 
        `<h1 class="header" style="color: rgb(0,255,${i})">статья о том как я писал эту статью</h1>`
    }
    for (i=0;i<256;i++) {
        color_string.innerHTML = 
        `<h1 class="header" style="color: rgb(${i},255,0)">статья о том как я писал эту статью</h1>`
    }
    for (i=255;i>-1;i--) {
        color_string.innerHTML = 
        `<h1 class="header" style="color: rgb(255,${i},0)">статья о том как я писал эту статью</h1>`
    }
}