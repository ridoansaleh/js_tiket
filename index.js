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

const checkTravelType = (elementID) => {
  const isChecked = document.getElementById(elementID).checked
  if (elementID === 'pulang-pergi' && isChecked) {
    document.querySelector("input[name='gohome']").checked = true
    document.querySelector("input[name='return-date']").disabled = false
  } else if (elementID === 'sekali-jalan' && isChecked) {
    document.querySelector("input[name='gohome']").checked = false
    document.querySelector("input[name='return-date']").disabled = true
  }
}

// Collect Data

let flightData = {
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
  showFlexiTicket: false
};

const totalPassengerTextElement = document.getElementById('total-passenger')
totalPassengerTextElement.innerText = flightData.totalPassenger.adult + flightData.totalPassenger.child + flightData.totalPassenger.baby

const selectedCabinTextElement = document.getElementById('selected-cabin')
selectedCabinTextElement.innerText = flightData.cabinClass

const selectedCabinElement = document.getElementById('economy-cabin')
selectedCabinElement.innerHTML = `<i class="fas fa-check"></i>`

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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  {
    id: 5,
    country: "Indonesia",
    city: "Batam",
    cityCode: "BTHC",
    airports: [
      {
        name: "Hang Nadim",
        code: "BTH",
      },
    ],
  },
];

const toLowerCase = (text) => {
  if (!text) return "";
  return text.toLowerCase();
};

const isContain = (reference, text) => {
  if (!reference || !text) return false;
  const _reference = toLowerCase(reference);
  const _text = toLowerCase(text);
  return _reference.includes(_text);
};

const departureAirportList = document.getElementById("departure-airport-list");
const arrivalAirportList = document.getElementById("arrival-airport-list");

const handleSelectDepartureAirport = (evt, data) => {
  evt.stopPropagation();
  flightData.departureAirport = data;
  const input = document.querySelector("input[name='departure-airport']");
  input.value = data;
  departureSelect.style.display = "none";
};

const handleSelectArrivalAirport = (evt, data) => {
  evt.stopPropagation();
  flightData.arrivalAirport = data;
  const input = document.querySelector("input[name='arrival-airport']");
  input.value = data;
  arrivalSelect.style.display = "none";
};

const handleExchangeAirport = () => {
  flightData = {
    ...flightData,
    departureAirport: flightData.arrivalAirport,
    arrivalAirport: flightData.departureAirport
  }
  document.querySelector("input[name='departure-airport']").value = flightData.departureAirport;
  document.querySelector("input[name='arrival-airport']").value = flightData.arrivalAirport;
}

// Initialize custom-select options data
const populateDepartureList = () => {
  departureAirportList.innerHTML = "";
  cityOrAirportList.forEach((d) => {
    let li = document.createElement("li");
    li.addEventListener("click", (evt) =>
      handleSelectDepartureAirport(evt, d.city + " (" + d.cityCode + ")")
    );
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
};

const populateArrivalList = () => {
  arrivalAirportList.innerHTML = "";
  cityOrAirportList.forEach((d) => {
    let li = document.createElement("li");
    li.addEventListener("click", (evt) =>
      handleSelectArrivalAirport(evt, d.city + " (" + d.cityCode + ")")
    );
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
};

populateDepartureList();
populateArrivalList();

document.querySelector("input[name='return-date']").disabled = true

const searchDepartureCityOrAirport = (e) => {
  const value = e.target.value;
  const popularLabel = document.querySelector(
    "#departure-select .cs-option-category"
  );

  if (value === "") {
    popularLabel.style.display = "block";
    populateDepartureList();
    return;
  }

  popularLabel.style.display = "none";

  const result = cityOrAirportList.filter(
    (d) =>
      [d.country, d.city, d.cityCode].some((e) => isContain(e, value)) ||
      d.airports.some(
        (f) => isContain(f.name, value) || isContain(f.code, value)
      )
  );

  departureAirportList.innerHTML = "";

  if (result.length === 0) {
    let li = document.createElement("li");
    li.innerHTML = `
      <div>
        <b class="not-found-title">Maaf, tidak ada hasil</b>
        <br />
        <span class="not-found-subtitle">Silahkan coba kata kunci lain atau pilih kota atau bandara dari daftar.</span>
      </div>
    `;
    departureAirportList.appendChild(li);
    return;
  }

  result.forEach((d) => {
    let li = document.createElement("li");

    if (d.airports.length > 1) {
      li.innerHTML = `
        <div class="full-width">
          <div class="flex space-between" onclick="handleSelectDepartureAirport(event, '${
            d.city
          } ' + '(' + '${d.cityCode}' + ')')">
            <div class="cs-option-airport-city">
              <i class="fas fa-city"></i>
              <div>
                <b>${d.city}, ${d.country}</b>
                <span>${d.city}</span>
              </div>
            </div>
            <span class="cs-airport-code">${d.cityCode}</span>
          </div>
          <ul class="pl-30 pt-8">
            ${d.airports
              .map(
                (e) => `
              <li class="flex space-between py-8" onclick="handleSelectDepartureAirport(event, '${e.name} ' + '(' + '${e.code}' + ')')">
                <div class="cs-option-airport-city">
                  <i class="fas fa-luggage-cart"></i>
                  <div>
                    <b>${d.city}, ${d.country}</b>
                    <span>${e.name}</span>
                  </div>
                </div>
                <span class="cs-airport-code">${e.code}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      `;
    } else {
      li.addEventListener("click", (evt) =>
        handleSelectDepartureAirport(evt, d.city + " (" + d.cityCode + ")")
      );
      li.innerHTML = `
        <div class="cs-option-airport-city">
          <i class="fas fa-city"></i>
          <div>
            <b>${d.city}, ${d.country}</b>
            <span>${d.airports[0].name}</span>
          </div>
        </div>
        <span class="cs-airport-code">${d.airports[0].code}</span>
      `;
    }
    departureAirportList.appendChild(li);
  });
};

// Arrival Select
const searchArrivalCityOrAirport = (e) => {
  const value = e.target.value;
  const popularLabel = document.querySelector(
    "#arrival-select .cs-option-category"
  );

  if (value === "") {
    popularLabel.style.display = "block";
    populateArrivalList();
    return;
  }

  popularLabel.style.display = "none";

  const result = cityOrAirportList.filter(
    (d) =>
      [d.country, d.city, d.cityCode].some((e) => isContain(e, value)) ||
      d.airports.some(
        (f) => isContain(f.name, value) || isContain(f.code, value)
      )
  );

  arrivalAirportList.innerHTML = "";

  if (result.length === 0) {
    let li = document.createElement("li");
    li.innerHTML = `
      <div>
        <b class="not-found-title">Maaf, tidak ada hasil</b>
        <br />
        <span class="not-found-subtitle">Silahkan coba kata kunci lain atau pilih kota atau bandara dari daftar.</span>
      </div>
    `;
    arrivalAirportList.appendChild(li);
    return;
  }

  result.forEach((d) => {
    let li = document.createElement("li");

    if (d.airports.length > 1) {
      li.innerHTML = `
        <div class="full-width">
          <div class="flex space-between" onclick="handleSelectArrivalAirport(event, '${
            d.city
          } ' + '(' + '${d.cityCode}' + ')')">
            <div class="cs-option-airport-city">
              <i class="fas fa-city"></i>
              <div>
                <b>${d.city}, ${d.country}</b>
                <span>${d.city}</span>
              </div>
            </div>
            <span class="cs-airport-code">${d.cityCode}</span>
          </div>
          <ul class="pl-30 pt-8">
            ${d.airports
              .map(
                (e) => `
              <li class="flex space-between py-8" onclick="handleSelectArrivalAirport(event, '${e.name} ' + '(' + '${e.code}' + ')')">
                <div class="cs-option-airport-city">
                  <i class="fas fa-luggage-cart"></i>
                  <div>
                    <b>${d.city}, ${d.country}</b>
                    <span>${e.name}</span>
                  </div>
                </div>
                <span class="cs-airport-code">${e.code}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      `;
    } else {
      li.addEventListener("click", (evt) =>
        handleSelectArrivalAirport(evt, d.city + " (" + d.cityCode + ")")
      );
      li.innerHTML = `
        <div class="cs-option-airport-city">
          <i class="fas fa-city"></i>
          <div>
            <b>${d.city}, ${d.country}</b>
            <span>${d.airports[0].name}</span>
          </div>
        </div>
        <span class="cs-airport-code">${d.airports[0].code}</span>
      `;
    }
    arrivalAirportList.appendChild(li);
  });
};

const decreasePassenger = (passengerType, elementID) => {
  const selectedElement = document.getElementById(elementID)
  let prevValue = flightData.totalPassenger[passengerType]
  if (prevValue === 0) return
  if (passengerType === "adult" && prevValue === 1) return 
  let updatedValue = prevValue - 1
  selectedElement.innerText = updatedValue
  flightData.totalPassenger[passengerType] = updatedValue
  totalPassengerTextElement.innerText = flightData.totalPassenger.adult + flightData.totalPassenger.child + flightData.totalPassenger.baby
}

const increasePassenger = (passengerType, elementID) => {
  const selectedElement = document.getElementById(elementID)
  const _totalPassenger = flightData.totalPassenger.adult + flightData.totalPassenger.child + flightData.totalPassenger.baby
  const maxPassenger = 11

  if (_totalPassenger === maxPassenger) return
  if (passengerType === "baby" && flightData.totalPassenger.adult === flightData.totalPassenger.baby) return

  let prevValue = flightData.totalPassenger[passengerType]
  let updatedValue = prevValue + 1
  selectedElement.innerText = updatedValue
  flightData.totalPassenger[passengerType] = updatedValue
  totalPassengerTextElement.innerText = flightData.totalPassenger.adult + flightData.totalPassenger.child + flightData.totalPassenger.baby
}

const selectCabin = (cabin, elementID) => {
  const cabinsWrapperID = ['economy-cabin', 'premium-economy-cabin', 'bussines-cabin', 'first-cabin']
  cabinsWrapperID.forEach(cabinID => {
    document.getElementById(cabinID).innerHTML = ''
  })
  const selectedElement = document.getElementById(elementID)
  selectedElement.innerHTML = `<i class="fas fa-check"></i>`
  flightData.cabinClass = cabin
  selectedCabinTextElement.innerText = flightData.cabinClass
}

const selectDepartureDate = (e) => {
  const value = e.target.value
  flightData.departureDate = value
}

const selectReturnDate = (e) => {
  const value = e.target.value
  flightData.returnDate = value
}

const checkGohome = (elementName) => {
  const isChecked = document.querySelector(`input[name='${elementName}']`).checked
  document.querySelector("input[name='return-date']").disabled = !isChecked
  if (isChecked) {
    document.getElementById("pulang-pergi").checked = true
  } else {
    document.getElementById("sekali-jalan").checked = true
  }
}

const checkFlexiTicket = (elementName) => {
  const isChecked = document.querySelector(`input[name='${elementName}']`).checked
  flightData.showFlexiTicket = isChecked
}

const searchFlights = () => {
  console.info('Form data : \n', JSON.stringify(flightData))
  const resultElement = document.querySelector('.search-result')
  resultElement.style.display = "block"
  document.getElementById('result-code').innerText = JSON.stringify(flightData, undefined, 4)
}

const closeSearchResult = () => {
  document.querySelector('.search-result').style.display = 'none'
};
