const headerElement = document.getElementById
const footerButton = document.getElementById
const  mainButton = document.getElementById
const  sidebarButton = document.getElementById
const bannerButton = document. getElementById
const navigationButton = document.getElementById
const  contentButton = document.getElementById
const increasesSizeButton = document.getElementById
const decreaseSizeButton = document. getElementById


let number = 0;

function  clearTimeou(){
    headerElement. textContent = number;
}

footerButton.addEventListener('click',() =>{
     number++;
     clearTimeou();
});
mainButton.addEventListener('click',() =>{
 number--;
 clearTimeou();
});

sidebarButton.addEventListener('click',() =>{
     number+=5;
     clearTimeou();
});
bannerButton.addEventListener('click',() =>{
number-= 5;
clearTimeou();
});






