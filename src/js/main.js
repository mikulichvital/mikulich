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
  
  document.getElementById('btn-category-popular').onclick = function (event) { openMenu(event, 'popular') };
  document.getElementById('btn-category-vegetables').onclick = function (event) { openMenu(event, 'vegetables') };
  document.getElementById('btn-category-meat').onclick = function (event) { openMenu(event, 'meat') };