// import { VirtualConsolePrinter } from "happy-dom";

// index.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/ramens')
  .then(r =>r.json())
  .then(ramen =>{
    console.log(ramen)
    ramen.forEach((ramenOne)=>{
      const ramenImage = document.createElement('img')
      ramenImage.src = ramen.image
      const ramenMenu= document.querySelector("#ramen-menu")
      ramenMenu.append(ramenImage)
      displayRamens(ramenOne)
        ramenImage.addEventListener("click" , ()=>{
          const handleClick = (ramenOne) => {
            handleClick(ramenOne)
          };
        })
    })
  })
})
// Callbacks
/*
The handle click was supposed to grab the image and then put all the information about 
the ramen into their repsected spots
*/

const handleClick = (ramenOne) => {
  document.querySelector("#ramen-detail")
  document.querySelector("detail-images")
  document.querySelector("restaurant")
  document.querySelector("#rating-display")
  document.querySelector("#comment-display")

};
/*sall
I wasnt able to test out this line of code, yet the logic of this code is that first we have to creating 
a functiojn so that its easier to grab out new form, so we can add an event submit form. Then we have to 
stop the page from reloading. Then we have to target the values where the user's input goes into. 
After we create where the function that the new ramen form will go into when its pulled up in the console. 
*/
//make the addsubmitlistener contain all the jucy stuff in the clicker
const addSubmitListener = () => {
  const  newRamenForm = document.querySelector("#new-ramen")
  newRamenForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(e.target["new-name"].value)
    console.log(e.target["new-restaurant"].value)
    console.log(e.target["new-image"].value)
    console.log(e.target["new-rating"].value)
    console.log(e.target["new-commet"].value)


    const newRamen = {
      name: e.target["new-name"].value,
      restaurant: e.target["new-restaurant"].value, 
      image: e.target["new-image"].value, 
      rating: e.target["new-rating"].value, 
      commet: e.target["new-commet"].value
    }
    displayRamens(newRamen)
  })
}


// ramen.forEach((ramenOne) => {
//   displayRamens(ramenOne)

/*
the top line would make the function. After in the forEach it seperates the array of 
picutres so that they are all individual pictures displayed then create an html img tag for the ramen picutres 
then adding the ramen picutres to the tag that was created. Then calling down the ramen-menu tag
to add the image tag to. Then displaying the ramen picuters. Also since the ramenImage is within this scope and
not global, I put the click add event to the end of the the function.
*/



//function - takes in 0 parameters
//"this is where fetch will go"

// const displayRamens = ramen.forEach((ramenOne)=>{
//   const ramenImage = document.createElement('img')
//   ramenImage.src = ramen.image
//   const ramenMenu= document.querySelector("#ramen-menu")
//   ramenMenu.append(ramenImage)
//   displayRamens(ramenOne)
//   console.log(ramenImage)
//     ramenImage.addEventListener("click" , ()=>{
//       displayRamens(ramenOne)
//     })
// })



//create a function that "creates" each ramen element, then run it using "display ramens (fetch -> for each)"


// const displayRamens= (ramenOne)=>{
//   const ramenMenu= document.querySelector("#ramen-menu")
//   ramen.forEach((ramenOne)=>{
//    const ramenImage = document.createElement('img')
//    ramenImage.src = ramen.image
//    ramenMenu.append(ramenImage)
//    displayRamens(ramenOne)
//   })
// }


const displayRamens = (ramen)=>{
  const ramenImage = document.createElement('img')
  ramenImage.src = ramen.image
  const ramenMenu = document.querySelector("#ramen-menu")
  ramenMenu.append(ramenImage)
  };

//main - this function should run whatever's in it, when the browser/DOM is loaded

const main = () => {
  // displayRamens(ramen)
  addSubmitListener()
  // Invoke displayRamens here - run a function with parenthesis
  // Invoke addSubmitListener here
  
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};



//TO FIX 
//main - run the two functions that says invoke
//create a fetch within the "displayRamen" and foreach it (or just move everything to a new function :)
//