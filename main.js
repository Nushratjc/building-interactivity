if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", mainFunction)
}
else {
    mainFunction()
}



function mainFunction() {   
    
    // *************************************************************************
    //  Exercise #1
    //      Change the color of the text within the h1 with an id of #main-h1.
    //
    //      1.  Select the button with an id of #change-text-color and save 
    //          it to a variable named changeColorButton.
    //      2.  Add a click event listener to the button with an id #change-text-color.
    //      3.  Add a function that will change the text color in the button to black.



      const changeColorButton = document.getElementById('change-text-color');
        changeColorButton.addEventListener('click', function () {
            changeColorButton.style.color = 'black';

        })

    
     //Change color of H1 in #main-h1 when clicking the same button
        const mainH1 = document.getElementById('main-h1');
        changeColorButton.addEventListener('click', function () {
            mainH1.style.color = 'black';

        })


    // ***************************************************************************
    //  Exercise #2
    //      When user clicks on the change text color button the text in the button
    //      should change to "Hello World".
    //
    //      1.  Select the button with an id of #change-text-color and save it to a
    //          variable named changeTextButton. 
    //      2.  Add a click event listener to the button with an id #change-text-color.
    //      3.  Add a function that will change the text in the button to "Hello World".

    


        const changeTextButton = document.getElementById('change-text-color');
            changeTextButton.addEventListener('click', function () {
                changeTextButton.innerHTML = 'Hello World';

            })




    // ***************************************************************************
    //  Exercise #3
    //      When user clicks on the subscribe button, an alert box should pop up 
    //      with the message "Thank you for subscribing".
    //
    //      1.  Select the button with an id of #subscribe-button and save it to a 
    //          variable named subscribeButton.
    //      2.  Add a click event that will display an alert box with the message 
    //          "Thank you for subscribing". 




        const subscribeButton = document.getElementById('subscribe-button');
            subscribeButton.addEventListener('click', function () {
                alert("Thank you for subscribing");

            })





    // ***************************************************************************
    //  Exercise #4
    //      When user clicks each of the buttons on the card elements with class 
    //      name of .card-btn the button should disappear.
    //
    //      1.  Select the buttons with a class name of .card-btn and save them to a 
    //          variable named cardButton.
    //      2.  Add a click event to each button that will trigger a function which will cause the 
    //          visibility property of the button clicked to be changed to hidden to black. You 
    //          should use some sort of loop to add the event listener to each button.


    
  const cardButton = document.querySelectorAll('.card-btn');
    cardButton.forEach(button => {
        button.addEventListener('click', () => {
            // button.hidden = true; //shrinks the size like display: none;
            button.style.visibility = 'hidden'; //leaves the space allocated to the element

        })
    })







    // ***************************************************************************
    //  Exercise #5
    //      When user enters text in the input field, if the letter "h" is entered in 
    //      the input field, display an alert box with the text from the input field. 
    //
    //      1.  Select the input field with a class of .input-field and save it to a 
    //          variable named userInput.
    //      2.  Add a keyup event that checks the value of the user input. If value contains 
    //          the letter "h", display alert box. The .includes method may be usefull here.


         const userInput = document.querySelector('.input-field');
            userInput.addEventListener('keyup', function (event) {
                if (event.key === 'h') {  //.key returns the letter - .keyCode returns numerical code of the key
                    alert(event.target.value);
                }
            })


    





    // ****************************************************************************
    //  Exercise #6
    //      When user moves mouse over the words "Subscribe To Our Newletter" the text color 
    //      should change to red. When user moves mouse away the text color should change back to white.
    //
    //      1.  Select the h3 element and save it to a variable named newsletterHeader.
    //      2.  Add a mouseover event that will change the color of the text in the h3 element to red.
    //      3.  Add a mouseout event that will change the color of the text in the h3 element back to white.







    


    // *****************************************************************************
    //  Exercise #7
    //      When user clicks on the <Add div> button a new div element should be created 
    //      with a <p> tag containing some text.
    //      1.  Select the button with an id of #add-element and save it to a variable named addDiv.
    //      2.  Select the div container with an id of #add-element-section so that you are 
    //          able to append your new div to the page.
    //      3.  Add a click event to the addDiv button which will run a function creating a new div
    //          with a <p> tag containing some text.

          const addDiv = document.getElementById('add-element');
            const parentDiv = document.getElementById('add-element-section');
            const newDiv = document.createElement('DIV');
            addDiv.onclick = function () {
                newDiv.innerHTML = '<p>Hello World </p>';
                parentDiv.appendChild(newDiv);
            }




    


}





















//Solutions
// *********************************************************************
// *********************************************************************
// *********************************************************************



// #1
// const changeColorButton = document.getElementById("change-text-color");
    // changeColorButton.addEventListener("click", () => {
    //     changeColorButton.style.color = "black";
    // })

    
    // changeColorButton.addEventListener("click", changeColor);
    // function changeColor(el) {
    //     el.target.style.color = "black";
    // }


    // const changeColor = (el) => {
    //     el.target.style.color = "black";
    // }
