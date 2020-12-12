// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event){

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      //for (let item of form)
      // if (isNaN(pilotName)){
      //    console.log(pilotName);
         
      //    alert("All feilds are required")
      //    event.preventDefault();
      // } 
      if (pilotname !== " "){
         alert("invalid input" )
         event.preventDefault();
      }
      
      // if (item[0]!== ""){
      //   // isNaN(pilotName)
      //    alert("invalid input")
      // }

   });
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
