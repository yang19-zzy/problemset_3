/*
* Excercise 1
*
*/
let colorBox = document.getElementById("color-block");
// console.log(colorBox);
colorBox.addEventListener("click",changeColor);
colorBox.setAttribute("class","color1");
let colorName = document.getElementById("color-name");
// console.log(colorName);
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(colorBox.getAttribute("class") === "color1"){
        //change the background color using JS
        colorBox.style.backgroundColor = "#F2EF90";
        colorBox.setAttribute("class","color2");
        //Change the text of the color using the span id color-name
        colorName.innerText = "#F2EF90";

    }
    else{
        //change the background color using JS
        colorBox.style.backgroundColor = "#F08080";
        colorBox.setAttribute("class","color1");
        //Change the text of the color using the span id color-name
        colorName.innerText = "#F08080";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertButton = document.getElementById("convertbtn");
console.log(convertButton);
convertButton.addEventListener("click",convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const inputTemp = document.getElementById("f-input").value;
    console.log(inputTemp);
    console.log(Number.isInteger(inputTemp));
    const outputTemp = (parseFloat(inputTemp) - 32)*(5/9);
    console.log(outputTemp);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = "round to " + Math.round(outputTemp);
}


