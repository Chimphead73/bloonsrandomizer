


function getRandomImage() {
    // Array of image URLs
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

    // Display the image in the HTML element with id "result"
    document.getElementById("result").src = randomImageUrl;
  }