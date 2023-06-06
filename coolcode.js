
var fustyMode = false;

function getRandomImageHero() {
   
    var imageUrls = [
      "assets/Quincy.png",//
      "assets/Gwendolin.png",//
      "assets/StrikerJones.png",//
      "assets/ObynGreenfoot.png",//
      "assets/CaptainChurchill.png",//
      "assets/PatFusty.png",//
      "assets/AdmiralBrickell.png",//
      "assets/Etienne.png",
      "assets/Sauda.png",//
      "assets/Psi.png",
      "assets/Geraldo.png",//
      "assets/BenJammin.png",//
      "assets/Ezili.png",//
      "assets/Adora.png",//
      
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