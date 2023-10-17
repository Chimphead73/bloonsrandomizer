
var fustyMode = false;

function getRandomImageHero() {
   
    var imageUrls = [
      "assets/Quincy.png",//a
      "assets/Gwendolin.png",//a
      "assets/StrikerJones.png",//a
      "assets/ObynGreenFoot.png",//
      "assets/CaptainChurchill.png",//a
      "assets/PatFusty.png",//a
      "assets/AdmiralBrickell.png",//a
      "assets/Etienne.png",//a
      "assets/Sauda.png",//a
      "assets/Psi.png",//a
      "assets/Geraldo.png",//a
      "assets/BenJammin.png",//a
      "assets/Ezili.png",//a
      "assets/Adora.png",//a
      
      // Add more image URLs here
    ];

    // Generate a random index corresponding to the imageUrls array
    var randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Get the random image URL based on the random index
    var randomImageUrl = imageUrls[randomIndex];

    if(fustyMode == false){
    document.getElementById("resultHero").src = randomImageUrl;
    }
    else{
      document.getElementById("resultHero").src = "assets/PatFusty.png";
    }
  }

  function getRandomImageMonkey() {
    // Array of image URLs
    var imageUrls = [
        "assets/000-DartMonkey.png",
        "assets/000-BoomerangMonkey.png",
        "assets/000-IceMonkey.png",//3
        "assets/000-CannonMonkey.png",//4
        "assets/000-GlueMonkey.png",//5
        "assets/000-TackMonkey.png",//6
        "assets/000-SniperMonkey.png",//7
        "assets/000-SubMonkey.png",//8
        "assets/000-PirateMonkey.png",//9
        "assets/000-PlaneMonkey.png",//10
        "assets/000-HeliMonkey.png",//11
        "assets/000-MortarMonkey.png",//12
        "assets/000-DartlingGunMonkey.png",//13
        "assets/000-WizardMonkey.png",//14
        "assets/000-SuperMonkey.png",//15
        "assets/000-NinjaMonkey.png",//16
        "assets/000-AlchemistMonkey.png",//17
        "assets/000-DruidMonkey.png",//18
        "assets/000-FarmMonkey.png",//19
        "assets/000-SpikeMonkey.png",//20
        "assets/000-VillageMonkey.png",//21
        "assets/000-EngineerMonkey.png",//22
        "assets/000-BeastMonkey.png"//23
    
    ];

    // Generate a random index corresponding to the imageUrls array
    var randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Get the random image URL based on the random index
    var randomImageUrl = imageUrls[randomIndex];

    // Display the image in the HTML element with id "result"
    if(fustyMode == false){
    document.getElementById("resultMonkey").src = randomImageUrl;
    }
    else{
      document.getElementById("resultMonkey").src = "assets/PatFusty.png";
    }
  }















  function randomizeMap() {
    var maparr = [];
    //array of maps by difficulty 
    var beginnermaps = [
      "Monkey Meadow",
      "Tree Stump",
      "Town Center",
      "Middle of the Road",
      "One Two Tree",
      "Scrapyard",
      "The Cabin",
      "Resort",
      "Skates",
      "Lotus Island",
      "Candy Falls",
      "Winter Park",
      "Carved",
      "Park Path",
      "Alpine Run",
      "Frozen Over",
      "In The Loop",
      "Cubism",
      "Four Circles",
      "Hedge",
      "End of the Road",
      "Logs"
    ];
    
    var intermediateMaps = [

      "Water Park",
      "Polyphemus",
      "Covered Garden",
      "Quarry",
      "Quiet Street",
      "Bloonarius Prime",
      "Balance",
      "Encrypted",
      "Bazaar",
      "Adora's Temple",
      "Spring Spring",
      "KartsNDarts",
      "Moon Landing",
      "Haunted",
      "Downstream",
      "Firing Range",
      "Cracked",
      "Streambed",
      "Chutes",
      "Rake",
      "Spice Islands"
    ];
    
    var advancedMaps = [
   
      "Dark Path",
      "Erosion",
      "Midnight Mansion",
      "Sunken Columns",
      "X Factor",
      "Mesa",
      "Geared",
      "Spillway",
      "Cargo",
      "Pat's Pond",
      "Peninsula",
      "High Finance",
      "Another Brick",
      "Off The Coast",
      "Cornfield",
      "Underground"
    ];

    var expertMaps = [
      "Dark Dungeons",
      "Sanctuary",
      "Ravine",
      "Flooded Valley",
      "Infernal",
      "Bloody Puddles",
      "Workshop",
      "Quad",
      "Dark Castle",
      "Muddy Puddles",
      "#Ouch"
    ];
    

    var beginnerCheckbox = document.getElementById('beginnerCheckbox');
    var intermediateCheckbox = document.getElementById('intermediateCheckbox');
    var advancedCheckbox = document.getElementById('advancedCheckbox');
    var expertCheckbox = document.getElementById('expertCheckbox');
// Check if Beginner checkbox is selected
var isBeginnerSelected = beginnerCheckbox.checked;

// Check if Intermediate checkbox is selected
var isIntermediateSelected = intermediateCheckbox.checked;

// Check if Advanced checkbox is selected
var isAdvancedSelected = advancedCheckbox.checked;

// Check if Expert checkbox is selected
var isExpertSelected = expertCheckbox.checked;

// Check if Beginner checkbox is selected
if (beginnerCheckbox.checked) {
  maparr = maparr.concat(beginnermaps);
}

// Check if Intermediate checkbox is selected
if (intermediateCheckbox.checked) {
  maparr = maparr.concat(intermediateMaps);
}

// Check if Advanced checkbox is selected
if (advancedCheckbox.checked) {
  maparr = maparr.concat(advancedMaps);
}

// Check if Expert checkbox is selected
if (expertCheckbox.checked) {
  maparr = maparr.concat(expertMaps);
}
var randomIndex = Math.floor(Math.random() * maparr.length);
var randomMap = maparr[randomIndex];// Update the <h3> element with the random map value
var mapHeading = document.getElementById("mapHeading");
// Get the random image URL based on the random index
if(maparr.length != 0){
  document.getElementById("resultMap").src = "assets/placeholderformap.png"
mapHeading.textContent = randomMap;

}
else{
  document.getElementById("resultMap").src = "assets/placeholder.jpg"
  mapHeading.textContent = "you forgot to select a difficulty you silly goose!!";
}


if(fustyMode == false){
 
  }
  else{
    document.getElementById("resultMap").src = "assets/PatFusty.png";
    mapHeading.textContent = "funny monke"
  }






  }












function toggleFustyMode() {
  
  if (fustyMode === false) {
 
    console.log("Fusty Mode activated!");
    fustyMode = true;
    
  } else {

    console.log("Fusty Mode deactivated!");
    fustyMode = false;
  }
  updateFustyModeText();
}

function updateFustyModeText() {
  var fustyModeTextElement = document.getElementById("fustyModeText");
  if (fustyMode === true) {
    fustyModeTextElement.textContent = "Fusty Mode: Enabled";
  } else {
    fustyModeTextElement.textContent = "Fusty Mode: Disabled";
  }
}

updateFustyModeText();
