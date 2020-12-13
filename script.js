// Write your JavaScript code here!
   window.addEventListener("load", function(){
      let form = document.querySelector("form");
      form.addEventListener("submit", function (event){
         event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let faultyItems = document.getElementById('faultyItems');
         let launchStatus = decument.getElementById("launchStatus");
         console.log(pilotName);
         if (pilotName.value === "" || copilotName.value === ""){
           alert("All feilds are required")
            
         } else if (fuelLevel.value === "" || cargoMass.value === "" ){
            alert("All feilds are required")
         }else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)){
            alert("invalid names")
         } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("invalid numbers")
         } else {
            document.getElementById("pilotName").innerHTML = `Pilot Name: ${pilotName.value}`;
            document.getElementById("copilotName").innerHTML = `Co-Pilot Name: ${copilotName.value}`;
         }

         if (fuelLevel.value < 10000){
            document.getElementById("faultyItem").style.visibility = 'visible';
            document.getElementById("fuelStatus").innerHTML = "Fuel level low for the journey";
            document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
         } else if (cargoMass > 10000 ) {
            document.getElementById("faultyItem").style.visibility = 'visible';
            document.getElementById("cargoMass").innerHTML = "Too much mass for the shuttle to take off";
            document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
         }
         
      });
   //This block of code shows how to format the HTML once you fetch some planetary JSON!
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
      response.json().then(function(json){
         let index = Math.floor(Math.random()*json.length);
         console.log(json[index].name);
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML += '
         <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${}</li>
      <li>Diameter: ${}</li>
      <li>Star: ${}</li>
      <li>Distance from Earth: ${}</li>
      <li>Number of Moons: ${}</li>
   </ol>
   <img src="${}"></img>'

      });
   });

 });