$(document).ready(function () {
  $('#hamburger').click(function () {
    $('#mobileMenu').slideToggle();
  });
});


function updateGoldRate() {
  const rate = (100000 + Math.random() * 5000).toFixed(2);
  document.getElementById('goldRate').innerText = `Rs ${rate} per tola`;
}

setInterval(updateGoldRate, 2000);
updateGoldRate();
