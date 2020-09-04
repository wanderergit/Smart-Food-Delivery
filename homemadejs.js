function splitScroll(){
  var controller= new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: '.about-title'
    })
      .setPin(".about-title")
      .addIndicators()
      .addTo(controller);

  splitScroll();
