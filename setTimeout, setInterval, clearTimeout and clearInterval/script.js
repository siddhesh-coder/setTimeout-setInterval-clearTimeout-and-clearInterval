//setTimeout

// //changing code
// const changeText = function(){
//     document.querySelector('h1').innerHTML = "Hello JavaScript";
// } 
// const timer = setTimeout(changeText, 10000);

// //Time Stopping code

// document.querySelector('#stop').addEventListener('click', function(){
//      clearTimeout(timer);
//      alert("Timer has been stopped");
// });

//setInterval

// const greet = function(str) {//we can also pass parameter
//     console.log(str, Date.now());
// }

// let intervalId; // Declare the interval ID variable
// const startInterval = function() {
//     if(!intervalId){
//     intervalId = setInterval(greet,5000,"Siddhesh");
//     }
// }

// const stopping = function() {
//     clearInterval(intervalId);
//     intervalId = null; //because it will take space again
//     alert("Interval has been stopped");
// }

// document.querySelector('#start').addEventListener('click', startInterval);

// document.querySelector('#stop2').addEventListener('click', stopping);


const changingColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}


let interverID;

const startchangingBackground = function (){

    interverID = setInterval(changeBG, 1000);
     
    function changeBG(){
        document.body.style.backgroundColor = changingColor();
    }
};

const stopchangingBackground = function (){
    clearInterval(interverID);
    interverID = null;
};


document.querySelector('#Start').addEventListener('click', startchangingBackground);
document.querySelector('#Stop').addEventListener('click', stopchangingBackground);