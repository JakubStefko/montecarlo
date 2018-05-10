var year = new Date();

if (year.getFullYear() == 2018) {
  document.getElementById("year").innerHTML = "still working ;)";
} else {
  document.getElementById("year").innerHTML = year.getFullYear();
}
