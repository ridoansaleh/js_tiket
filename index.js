const departureAirport = document.getElementById("departure-airport");
const departureSelect = document.getElementById("departure-select");

departureAirport.addEventListener("click", () => {
  departureSelect.style.display = "block";
});

const closeDepartureModal = (e) => {
  e.stopPropagation();
  departureSelect.style.display = "none";
};
