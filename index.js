window.onload = (event) => {
  var slideIndex = 1;
  var myTimer;

  console.log("page is fully loaded");
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    prevNext(1);
  }, 4000);

  document.getElementById('apparel').className ='border-bottom active';
  //   apparel
  document.getElementById("apparel").addEventListener("click", function () {
    document.getElementById("appraisal_heading").innerHTML = "APPARELS";
    document.getElementById("apparel").className = "border-bottom active";
    document.getElementById("art").className = "border-bottom";
    document.getElementById("collectibles").className = "border-bottom";
    document.getElementById("accessories").className = "border-bottom";
    document.getElementById("clearance").className = "border-bottom";

    document.getElementById(
      "apparels_details"
    ).innerHTML = `A pioneer in the apparel industry, we outfit the world with new
    trends. SPAL is a vertically integrated apparel organization
    operating with cutting-edge technologies in this industry.Our
    manufacturing units predominantly produces infants and children
    for global needs.`;

    console.log("Apprel section CLICKED.....");
  });

  //   art
  document.getElementById("art").addEventListener("click", function () {
    document.getElementById("appraisal_heading").innerHTML = "ART";
    document.getElementById("apparel").className = "border-bottom";
    document.getElementById("art").className = "border-bottom active";
    document.getElementById("collectibles").className = "border-bottom";
    document.getElementById("accessories").className = "border-bottom";
    document.getElementById("clearance").className = "clearance_text";

    document.getElementById(
      "apparels_details"
    ).innerHTML = `Art is a wide range of human activities that
    involve creative imagination and an aim to express technical proficiency,
     beauty, emotional power, or conceptual ideas.The nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics.`;

    console.log("Art section CLICKED.....");
  });

  //   collectibles
  document
    .getElementById("collectibles")
    .addEventListener("click", function () {
      document.getElementById("appraisal_heading").innerHTML = "COLLECTIBLES";
      document.getElementById("apparel").className = "border-bottom ";
      document.getElementById("art").className = "border-bottom";
      document.getElementById("collectibles").className =
        "border-bottom active";
      document.getElementById("accessories").className = "border-bottom";
      document.getElementById("clearance").className = "clearance_text";

      document.getElementById(
        "apparels_details"
      ).innerHTML = `A collectible refers to an item that is worth far more than it was originally sold for because of its rarity. The price for a particular collectible usually depends on how many of the same items are available as well as its overall condition.`;

      console.log("Collectibles section CLICKED.....");
    });

  // accessories
  document.getElementById("accessories").addEventListener("click", function () {
    document.getElementById("appraisal_heading").innerHTML = "ACCESSORIES";
    document.getElementById("apparel").className = "border-bottom ";
    document.getElementById("art").className = "border-bottom";
    document.getElementById("collectibles").className = "border-bottom";
    document.getElementById("accessories").className = "border-bottom active";
    document.getElementById("clearance").className = "clearance_text";

    document.getElementById(
      "apparels_details"
    ).innerHTML = `In fashion, an accessory is an item used to contribute, in a secondary manner, to an individual's outfit. Accessories are often chosen to complete an outfit and complement the wearer's look. They have the capacity to further express an individual's identity and personality.`;

    console.log("Accessories section CLICKED.....");
  });

  // clearance
  document.getElementById("clearance").addEventListener("click", function () {
    document.getElementById("appraisal_heading").innerHTML = "CLEARANCE";
    document.getElementById("apparel").className = "border-bottom ";
    document.getElementById("art").className = "border-bottom";
    document.getElementById("collectibles").className = "border-bottom";
    document.getElementById("accessories").className = "border-bottom";
    document.getElementById("clearance").className = "clearance_text active";

    document.getElementById(
      "apparels_details"
    ).innerHTML = `Every agent can't have the intel on every mission. There were 10 levels of clearance, as well as Level Alpha. As agents moved up from Level 1, they gained access to more information, and frequently, more power, though rank and clearance level is not necessarily correlated.`;

    console.log("Clearance section CLICKED.....");
  });

  //   SLIDESHOW

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-images");
    var textSlides = document.getElementsByClassName("xcom-text");
    var detailSlides = document.getElementsByClassName("carousel-detail");
    if (n > slides.length && n > textSlides.length && n > detailSlides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
      slideIndex = textSlides.length;
      slideIndex = detailSlides.length;
    }
    for (i = 0; i < slides.length && textSlides.length && detailSlides.length; i++) {
      slides[i].style.display = "none";
      textSlides[i].style.display = "none";
      detailSlides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    textSlides[slideIndex - 1].style.display = "block";
    detailSlides[slideIndex - 1].style.display = "block";
  }
// auto previous and next with clearinterval
  function prevNext(n) {
    clearInterval(myTimer);
    if (n < 0) {
      showSlides((slideIndex -= 1));
    } else {
      showSlides((slideIndex += 1));
    }
    if (n === -1) {
      myTimer = setInterval(function () {
        prevNext(n + 2);
      }, 4000);
    } else {
      myTimer = setInterval(function () {
        prevNext(n + 1);
      }, 4000);
    }
  }

};
