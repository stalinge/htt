
// Image split
setTimeout(function () {

  Splitting({
    target: '[data-rows], [data-columns], [data-image]',
    by: 'cells',
    image: true
  });

});


// Scroll title scroll magic
document.addEventListener('DOMContentLoaded', function () {
  var controller = new ScrollMagic.Controller();

  document.querySelectorAll('.item').forEach(function (item, index) {
    var triggerElement = item.querySelector('.trigger');
    var revealElement = item.querySelector('.reveal');

    var scene = new ScrollMagic.Scene({
      triggerElement: triggerElement,
      triggerHook: 0.7,
      duration: "100%",
      offset: 100
    })
      .setClassToggle(revealElement, "visible")
      .addTo(controller);
  });
});

// Description section style
document.addEventListener('DOMContentLoaded', function () {
  var controller = new ScrollMagic.Controller();

  document.querySelectorAll('.full-text-page').forEach(function (fulltextpage, index) {
    var triggerElement = fulltextpage.querySelector('.textreveal1');
    var revealElement = fulltextpage.querySelector('.textreveal');

    var scene = new ScrollMagic.Scene({
      triggerElement: triggerElement,
            triggerHook: 0.9,
            offset: 50
    })
      .setClassToggle(revealElement, "visible")
      .addTo(controller);
  });
});



// $(document).ready(function () {
//   const slider = $('.slider');
//   let scrollMagicEnabled = false; 

//   function onSliderAfterChange(event, slick, currentSlide) {
//     $(event.target).data('current-slide', currentSlide);
//   }

//   function onSliderWheel(e) {
//     var deltaY = e.originalEvent.deltaY,
//       $currentSlider = $(e.currentTarget),
//       currentSlickIndex = $currentSlider.data('current-slide') || 0;

//     if (!scrollMagicEnabled) {
//       return;
//     }

//     if (
//       // check when you scroll up
//       (deltaY < 0 && currentSlickIndex == 0) ||
//       // check when you scroll down
//       (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
//     ) {
//       return;
//     }

//     e.preventDefault();

//     var easing = 'cubic-bezier(0.7, 0, 0.3, 1)';
//     var slideOptions = { speed: 800, easing: easing };

//     if (e.originalEvent.deltaY < 0) {
//       $currentSlider.slick('slickPrev', null, null, slideOptions);
//     } else {
//       $currentSlider.slick('slickNext', null, null, slideOptions);
//     }
//   }

//   const controller = new ScrollMagic.Controller();

//   document.querySelectorAll('.section-image').forEach(function (sectionimage, index) {
//     var triggerElement = sectionimage.querySelector('.image-tigger');
//     var pinElement = sectionimage.querySelector('.image-tigger-pin');

//     var scene = new ScrollMagic.Scene({
//       triggerElement: triggerElement,
//       triggerHook: 0,
//       duration: "100%",
//       offset: 0 
//     })
//       .setPin(pinElement)
//       .on('enter', function () {
//         scrollMagicEnabled = true;
//       })
//       .on('leave', function () {
//         scrollMagicEnabled = false;
//       })
//       .addTo(controller);
//   });

//   slider.each(function (index, element) {
//     var $element = $(element);
//     $element.data('slider-length', $element.children().length);
//   })
//     .slick({
//       infinite: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: false,
//       arrows: false,
//       fade: true,
//       useCSS: true,
//       verticalSwiping: true,
//       cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
//     })
//     .on('afterChange', onSliderAfterChange)
//     .on('wheel', onSliderWheel);
//     new ScrollMagic.Scene({
//       triggerElement: 'body',
//       triggerHook: 'onLeave',
//       duration: 1 
//     })
//       .on('enter', function () {
//         // Reset Slick Slider when scroll reaches the top
//         slider.slick('slickGoTo', 0);
//       })
//       .addTo(controller);
// });


$(document).ready(function () {
  const slider = $('.slider');
  let scrollMagicEnabled = false;

  function onSliderAfterChange(event, slick, currentSlide) {
    $(event.target).data('current-slide', currentSlide);
  }

  function onSliderWheel(e) {
    var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data('current-slide') || 0;

    if (!scrollMagicEnabled) {
      return;
    }

    if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
    ) {
      return;
    }

    e.preventDefault();

    var easing = 'cubic-bezier(0.7, 0, 0.3, 1)';
    var slideOptions = { speed: 800, easing: easing };

    if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick('slickPrev', null, null, slideOptions);
    } else {
      $currentSlider.slick('slickNext', null, null, slideOptions);
    }
  }

  const controller = new ScrollMagic.Controller();

  // Set up ScrollMagic scenes for each section
  document.querySelectorAll('.section-image').forEach(function (sectionimage, index) {
    var triggerElement = sectionimage.querySelector('.image-tigger');
    var pinElement = sectionimage.querySelector('.image-tigger-pin');

    var scene = new ScrollMagic.Scene({
      triggerElement: triggerElement,
      triggerHook: 0,
      duration: "100%",
      offset: 0 
    })
      .setPin(pinElement)
      .on('enter', function () {
        scrollMagicEnabled = true;
      })
      .on('leave', function () {
        scrollMagicEnabled = false;
      })
      .addTo(controller);
  });

  // Initialize Slick slider
  slider.each(function (index, element) {
    var $element = $(element);
    $element.data('slider-length', $element.children().length);
  })
    .slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      fade: true,
      useCSS: true,
      verticalSwiping: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    })
    .on('afterChange', onSliderAfterChange)
    .on('wheel', onSliderWheel);

  // Add ScrollMagic scene for resetting slider when scrolling to top
  new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 'onLeave',
    duration: 1 
  })
    .on('enter', function () {
      // Reset Slick Slider when scroll reaches the top
      slider.slick('slickGoTo', 0);
    })
    .addTo(controller);
});
