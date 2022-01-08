const departureAirport = document.getElementById("departure-airport");
const departureSelect = document.getElementById("departure-select");
const arrivalAirport = document.getElementById("arrival-airport");
const arrivalSelect = document.getElementById("arrival-select");
const passengerAndCabinText = document.getElementById(
  "passenger-and-cabin-text"
);
const passengerAndCabin = document.getElementById("passenger-and-cabin");

departureAirport.addEventListener("click", () => {
  departureSelect.style.display = "block";
});

const closeDepartureModal = (e) => {
  e.stopPropagation();
  departureSelect.style.display = "none";
};

arrivalAirport.addEventListener("click", () => {
  arrivalSelect.style.display = "block";
});

const closeArrivalModal = (e) => {
  e.stopPropagation();
  arrivalSelect.style.display = "none";
};

passengerAndCabinText.addEventListener("click", () => {
  passengerAndCabin.style.display = "block";
});

const closePassengerAndCabinModal = (e) => {
  e.stopPropagation();
  passengerAndCabin.style.display = "none";
};

const productElements = ["airplane", "hotel", "to-do", "train", "car", "event"];

const initialSelectedElement = document.getElementById("airplane");
initialSelectedElement.classList.add("selected-product");

const selectProduct = (productID) => {
  const selectedElement = document.getElementById(productID);
  selectedElement.classList.add("selected-product");

  const unselectedElements = productElements.filter((el) => el !== productID);
  unselectedElements.forEach((el) => {
    const unselectedElement = document.getElementById(el);
    unselectedElement.classList.remove("selected-product");
  });
};

// Collect Data

const flightData = {
  travelType: "Sekali Jalan",
  departureAirport: "",
  arrivalAirport: "",
  departureDate: "",
  returnDate: "",
  totalPassenger: {
    adult: 1,
    child: 0,
    baby: 0,
  },
  cabinClass: "Ekonomi",
};

const sekaliJalan = document.getElementById("sekali-jalan");
const pulangPergi = document.getElementById("pulang-pergi");

if (sekaliJalan.value === flightData.travelType) {
  sekaliJalan.checked = true;
} else if (pulangPergi.value === flightData.travelType) {
  pulangPergi.checked = true;
}

sekaliJalan.addEventListener("change", (e) => {
  flightData.travelType = e.target.value;
});

pulangPergi.addEventListener("change", (e) => {
  flightData.travelType = e.target.value;
});
