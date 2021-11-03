const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});

function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tabslink = document.getElementsByClassName("tabs-link");
  for (i = 0; i < tabslink.length; i++) {
    tabslink[i].className = tabslink[i].className.replace(" active", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}
