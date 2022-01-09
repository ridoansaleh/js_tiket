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

const cityOrAirportList = [
  {
    country: "Indonesia",
    city: "Jakarta",
    cityCode: "JKTC",
    airports: [
      {
        name: "Halim Perdanakusuma",
        code: "HLP",
      },
      {
        name: "Soekarno Hatta",
        code: "CGK",
      },
    ],
  },
  {
    country: "Indonesia",
    city: "Surabaya",
    cityCode: "SUBC",
    airports: [
      {
        name: "Juanda",
        code: "SUB",
      },
    ],
  },
  {
    country: "Indonesia",
    city: "Medan",
    cityCode: "MESC",
    airports: [
      {
        name: "Kuala Namu",
        code: "KNO",
      },
    ],
  },
  {
    country: "Indonesia",
    city: "Makassar",
    cityCode: "UPGC",
    airports: [
      {
        name: "Sultan Hasanuddin",
        code: "UPG",
      },
    ],
  },
];

const departureAirportList = document.getElementById("departure-airport-list");
const arrivalAirportList = document.getElementById("arrival-airport-list");

// Initialize custom-select options data

cityOrAirportList.forEach((d) => {
  let li = document.createElement("li");
  li.innerHTML = `
    <div class="cs-option-airport-city">
      <i class="fas fa-city"></i>
      <div>
        <b>${d.city}, ${d.country}</b>
        <span>${d.city}</span>
      </div>
    </div>
    <span class="cs-airport-code">${d.cityCode}</span>
  `;
  departureAirportList.appendChild(li);
});

cityOrAirportList.forEach((d) => {
  let li = document.createElement("li");
  li.innerHTML = `
    <div class="cs-option-airport-city">
      <i class="fas fa-city"></i>
      <div>
        <b>${d.city}, ${d.country}</b>
        <span>${d.city}</span>
      </div>
    </div>
    <span class="cs-airport-code">${d.cityCode}</span>
  `;
  arrivalAirportList.appendChild(li);
});
