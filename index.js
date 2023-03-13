/*<==============================================================================


                                         Design Section
                                         
                                         
====================================================================================>*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// =================================================
$("#companyc").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  items: 9,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 9,
    },
  },
});
$("#dream-student1,#dream-student2").owlCarousel({
  loop: true,
  margin: 20,
  items: 4,
  autoplay: true,
  pagination: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    800: {
      items: 4,
    },
  },
});
$("#youtube").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
$("#industry").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});