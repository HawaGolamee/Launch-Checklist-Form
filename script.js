// Write your JavaScript code here!
            window.addEventListener("load", function(){

               fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
               response.json().then(function(json){
                  let index = Math.floor(Math.random()*json.length);
                  console.log(json[index].name);
                  let missionTarget = document.getElementById("missionTarget");
                  missionTarget.innerHTML += `
                  <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moon}</li>
            </ol>
            <img src="${json[index].image}"></img>`

               
            });

         });
               let form = document.querySelector("form");
               form.addEventListener("submit", function (event){
                  event.preventDefault();
                  let pilotName = document.querySelector("input[name=pilotName]");
                  let copilotName = document.querySelector("input[name=copilotName]");
                  let fuelLevel = document.querySelector("input[name=fuelLevel]");
                  let cargoMass = document.querySelector("input[name=cargoMass]");
                  let faultyItems = document.getElementById('faultyItems');
                  let launchStatus = document.getElementById("launchStatus");
                  
                  if (pilotName.value === "" || copilotName.value === ""){
                  alert("All feilds are required")
                     
                  } else if (fuelLevel.value === "" || cargoMass.value === "" ){
                     alert("All feilds are required")
                  }else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)){
                     alert("invalid input, The field should be charactors")
                  } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
                     alert("invalid input, the field should be numbers")
                  } else {
                     document.getElementById("pilotStatus").innerHTML = `Pilot Name: ${pilotName.value} Ready`;
                     document.getElementById("copilotStatus").innerHTML = `Co-Pilot Name: ${copilotName.value} Ready`;
                  }

                  if (fuelLevel.value < 10000){
                     document.getElementById("faultyItems").style.visibility = 'visible';
                     document.getElementById("fuelStatus").innerHTML = "Fuel level low for the journey";
                     document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
                     document.getElementById("launchStatus").style.color = "red";
                  } else if (cargoMass > 10000){
                     document.getElementById("faultyItems").style.visibility = 'visible';
                  document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
                  document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
                  document.getElementById("launchStatus").style.color = "red";

                  
                  }
                  else  {
                     document.getElementById("faultyItems").style.visibility = 'visible';
                     document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
                     document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                     document.getElementById("launchStatus").innerHTML = "Shuttle is  ready for launch";
                     document.getElementById("launchStatus").style.color = "green";
                  } 
            
            
               });
            });
         //This block of code shows how to format the HTML once you fetch some planetary JSON!

   