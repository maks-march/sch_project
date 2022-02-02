setInterval(setColors(),6000);
function setColors() {
    for (i=0;i<256;i++) {
        setTimeout (setcolor1(i),1000);
    }
    for (i=255;i>-1;i--) {
        setTimeout (setcolor2(i),1000);        
    }
    for (i=0;i<256;i++) {
        setTimeout (setcolor3(i),1000);    
    }
    for (i=255;i>-1;i--) {
         
        setTimeout (setcolor4(i),1000);             
    }
    for (i=0;i<256;i++) {
        setTimeout (setcolor5(i),1000);               
    }
    for (i=255;i>-1;i--) {
        setTimeout (setcolor6(i),1000); 
    }
    };
    function setcolor1(i){
        document.querySelector('.rainbow').innerHTML = ``;
        setInterval (() => {console.log(document.querySelector('.header'));},1000);
        document.querySelector('.rainbow').innerHTML = `<h1 class="header" style="color: rgb(255,0,${i})">статья о том как я писал эту статью</h1>`;
    }
    function setcolor2(i){
        document.querySelector('.rainbow').innerHTML = ``;
        document.querySelector('.rainbow').innerHTML = `<h1 class="header" style="color: rgb(${i},0,255)">статья о том как я писал эту статью</h1>`;
    }
    function setcolor3(i){
        document.querySelector('.rainbow').innerHTML = ``;
        document.querySelector('.rainbow').innerHTML = `<h1 class="header" style="color: rgb(0,${i},255)">статья о том как я писал эту статью</h1>`;
    }
    function setcolor4(i){
        document.querySelector('.rainbow').innerHTML = ``;
        document.querySelector('.rainbow').innerHTML = `<h1 class="header" style="color: rgb(0,255,${i})">статья о том как я писал эту статью</h1>`;
    }
    function setcolor5(i){
        document.querySelector('.rainbow').innerHTML = ``;
        document.querySelector('.rainbow').innerHTML = `<h1 class="header" style="color: rgb(${i},255,0)">статья о том как я писал эту статью</h1>`;
    }
    function setcolor6(i){
        document.querySelector('.rainbow').innerHTML = ``;
        document.querySelector('.rainbow').innerHTML = `<h1 class="header" style="color: rgb(255,${i},0)">статья о том как я писал эту статью</h1>`;
    }