// // const images = ['img/hero big2.jpg', 'img/hero big3.jpg', 'img/hero big1.jpg'];
// // let currentImageIndex = 0;


// // function changeBackground() {
// //   setInterval(() => {
// //     $('#hero-image').css('background-image', `url("${images[currentImageIndex]}")`);
// //     console.log(currentImageIndex );
// //     currentImageIndex = (currentImageIndex + 1) % images.length;

// //   }, 2000);

// // }

// // changeBackground();


// const images = ['img/hero big1.jpg', 'img/hero big2.jpg', 'img/hero big3.jpg'];
// let currentImageIndex = 0;
// const intervalTime = 3500; // Change image every 3.5 seconds

// function changeBackground() {
//   setInterval(() => {
//     changeImage();

//   }, intervalTime);
// }

// initialImage();
// changeBackground();


// function initialImage() {

//   const $heroImage = $('#hero-image');
//   const $newImage = $('<div class="new-image"></div>');
//   $newImage.css('background-image', `url("${images[currentImageIndex]}")`);

//   // Add the new image, position it to slide in from the right
//   $heroImage.append($newImage);
//   $newImage.css('left', '100%').animate({ left: 0 }, 0);

//   // Slide out the previous image to the left and remove it after the animation
//   $heroImage.find('.old-image').animate({ left: '-100%' }, 0, function () {
//     $(this).remove();
//   });

//   // Increment image index
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   $newImage.addClass('old-image').removeClass('new-image');

// }


// function changeImage() {

//   const $heroImage = $('#hero-image');
//   const $newImage = $('<div class="new-image"></div>');
//   $newImage.css('background-image', `url("${images[currentImageIndex]}")`);

//   // Add the new image, position it to slide in from the right
//   $heroImage.append($newImage);
//   $newImage.css('left', '100%').animate({ left: 0 }, 600);


//   // Slide out the previous image to the left and remove it after the animation
//   $heroImage.find('.old-image').animate({ left: '-100%' }, 600, function () {
//     $(this).remove();
//   });

//   // Increment image index
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   $newImage.addClass('old-image').removeClass('new-image');
// }


//hero image carousal//
$('#hero-image').slick({
  pauseOnHover:false,
  arrows:false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4200,
  speed: 1350,
  
});



//responsive hero image change// 
function handleResize() {
  var currentWidth = $(window).width();

  if (currentWidth <= 1024) { // Change 768 to your desired threshold
    // Switch to static image view
    $("#hero-image").hide();
    $("#hero-image-sm").show();
  } else {
    // Switch back to carousel view
    $("#hero-image").show();
    $("#hero-image-sm").hide();
  }
}

$(window).on('resize', function() {
  handleResize();
});


//navbar element active//
const bar = $("#bar");
const nav = $("#navbar");

bar.on("click",()=>{
  nav.toggleClass("active")
})




//change product on hover//
  $(".pro").each(function() {
    var originalImage = $(this).find("img").attr("src");
    var hoverImage = originalImage.replace('1.jpg', '4.jpg');

    $(this).hover(
      function() {
        $(this).find("img").attr("src", hoverImage);
        $(this).css("transition", "transform 0.2s ease");
        // $(this).css("transform", "scale(1.1)");
      },
      function() {
        $(this).find("img").attr("src", originalImage);
        $(this).css("transition", "transform 0.2s ease");
        // $(this).css("transform", "scale(1)");
      }
    );
  });

  $(".pro.sold-out").each(function() {
    var originalImage = $(this).find("img").attr("src");
    var hoverImage = originalImage.replace('1.jpg', '1.jpg');

    $(this).hover(
      function() {
        $(this).find("img").attr("src", hoverImage);
        $(this).css("transition", "transform 0.2s ease");
        // $(this).css("transform", "scale(1.1)");
      },
      function() {
        $(this).find("img").attr("src", originalImage);
        $(this).css("transition", "transform 0.2s ease");
        // $(this).css("transform", "scale(1)");
      }
    );
  });





//zoom image on hover//
    $('.pro1').hover(function() {
        $(this).find('img').css('transform', 'scale(1.1)');
    }, function() {
        $(this).find('img').css('transform', 'scale(1)');
    });

    $('.pro1.sold-out').hover(function() {
      $(this).find('img').css('transform', 'scale(1)');
  }, function() {
      $(this).find('img').css('transform', 'scale(1)');
  });



 //wemon's boot carousal// 
$("#boot-carousal .c-1").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0, // Set autoplaySpeed to 0 to enable continuous autoplay
  speed:5000, // Adjust the speed of transition between slides (if needed)
  cssEase: 'linear',
  infinite: true,
  centerMode: true,
  pauseOnHover:false,
  centerPadding: '60px',
  slidesToShow: 4,
  pauseOnFocus: false,
  
  // rtl:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4px',
        slidesToShow: 1
      }
    }
  ]
})

$("#boot-carousal .c-2").slick({
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 0, // Set autoplaySpeed to 0 to enable continuous autoplay
  speed:4500, // Adjust the speed of transition between slides (if needed)
  cssEase: 'linear',
  infinite: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 6,
  pauseOnHover:false,
  rtl:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4px',
        slidesToShow: 10
            }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})



//change currency//
$(document).ready(function() {
  $('#cad').on('click', function() {
 
    window.location.hash = "cad";
 
    $('.price').each(function() {

          var destination = $(this).closest(".pro").attr("onclick");

          if (destination !== undefined) {
            $(this).closest(".pro").attr("onclick", destination.replace(".html", ".html#cad"));
          }
          

          var priceText = $(this).text();
          var currentCurrency = priceText.split(' ')[1]; // Get the currency (USD/CAD)
          var price = parseFloat(priceText.split(' ')[0].substring(1)); // Extract and convert the price to a number
          if (currentCurrency === 'USD') {
              var newPrice = (price * 1.35).toFixed(0); // Multiply by 1.35 and round to 2 decimal places
              $(this).text('$' + newPrice + ' CAD'); // Update the text content
              $(".shipping-message").css("display","initial");
          }
      });
  });

  $('#usd').on('click', function() {

    window.location.hash = "usd";

      $('.price').each(function() {
          var priceText = $(this).text();
          var currentCurrency = priceText.split(' ')[1]; // Get the currency (USD/CAD)
          var price = parseFloat(priceText.split(' ')[0].substring(1)); // Extract and convert the price to a number
          if (currentCurrency === 'CAD') {
              var newPrice = (price / 1.35).toFixed(0); // Divide by 1.35 and round to 2 decimal places
              $(this).text('$' + newPrice + ' USD'); // Update the text content
              $(".shipping-message").css("display","none");
          }
      });
  });

  if (window.location.hash === "#cad") {

    $('#cad').click();

  }

});




//currency button in the nav bar//
$('.currency').on('click', function() {

  // Remove 'active' class from all list items with class 'currency'
  $('.currency').removeClass('active');
  
  // Add 'active' class to the clicked list item
  $(this).addClass('active');
  
  // Your currency conversion logic here...
  // ...
});




//grey out the sold-out ones//
$(".sold-out .cart-link").hide();
$(".sold-out").css("box-shadow","none")
$(".sold-out").css("opacity","0.8")


$(document).ready(function() {
  $('.pro1.sold-out .price').css('color', 'grey');


});
$(document).ready(function() {
  $('.pro.sold-out .price').css('color', 'grey');


});