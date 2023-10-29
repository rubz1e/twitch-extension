function showBanner() {
  document.getElementById("banner").style.display = "block";
  setTimeout(hideBanner, 17000);
}

function hideBanner() {
  document.getElementById("banner").style.display = "none";
  setTimeout(showBanner, 300000);
}
showBanner();