function initDropdown()
{
  document.getElementById("more-services").onclick = toggleDropDown;

  // Close dropdown if user clicks outside of it
  window.addEventListener("click", function(event) {
      if (!event.target.matches('.drop-button') && !event.target.closest('.dropdown-panel')) {
        var dropdowns = document.getElementsByClassName("dropdown-panel");
        for (let i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
  });
}

function toggleDropDown() {
  document.getElementById("more-services-dropdown").classList.toggle("show");
}
