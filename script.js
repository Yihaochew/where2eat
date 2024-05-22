// Initialize and add the map
async function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 1.3521, lng: 103.8198 }, 
  });

  function addMarkers(locations) {
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: location,
        map,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div><strong>${location.name}</strong><br>${location.address}</div>`,
      });
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }

  // Hardcoded recommendations with location data
  const recommendations = [
    { name: "Sushi Tei", address: "1 Harbourfront Walk, #01-153/154 VivoCity, Singapore 098585", lat: 1.2648, lng: 103.8217, cuisine: "Japanese", budget: "$$", location: "South", mealType: "Dinner", publicTransport: true },
    { name: "Din Tai Fung", address: "50 Jurong Gateway Rd, #01-01 JEM, Singapore 608549", lat: 1.3321, lng: 103.7429, cuisine: "Chinese", budget: "$$$", location: "West", mealType: "Lunch", publicTransport: true },
    { name: "Jumbo Seafood", address: "20 Upper Circular Rd, #B1-48 The Riverwalk, Singapore 058416", lat: 1.2843, lng: 103.8443, cuisine: "Chinese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
    { name: "Ramen Keisuke Tonkotsu King", address: "1 Tras Link, #01-08 Orchid Hotel, Singapore 078867", lat: 1.2800, lng: 103.8505, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
    { name: "The Soup Spoon", address: "10 Eunos Rd 8, #01-153 SingPost Centre, Singapore 408600", lat: 1.3284, lng: 103.8967, cuisine: "Western", budget: "$$", location: "East", mealType: "Lunch", publicTransport: true },
    { name: "NamNam Noodle Bar", address: "3 Temasek Blvd, #B1-125 Suntec City Mall, Singapore 038983", lat: 1.2938, lng: 103.8565, cuisine: "Vietnamese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
    { name: "So Pho", address: "3 Gateway Dr, #01-21 Westgate, Singapore 608532", lat: 1.3409, lng: 103.7446, cuisine: "Vietnamese", budget: "$$", location: "West", mealType: "Lunch", publicTransport: true },
    { name: "Ya Kun Kaya Toast", address: "18 China St, #01-01 Far East Square, Singapore 049560", lat: 1.2812, lng: 103.8519, cuisine: "Local", budget: "$", location: "Central", mealType: "Breakfast", publicTransport: true },
    { name: "McDonald's", address: "83 Punggol Central, #01-25/26 Waterway Point, Singapore 828761", lat: 1.4041, lng: 103.9060, cuisine: "Western", budget: "$", location: "North East", mealType: "Breakfast", publicTransport: true },
    { name: "Haidilao Hot Pot", address: "313@Somerset, #04-23/24, Singapore 238895", lat: 1.3000, lng: 103.8390, cuisine: "Chinese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  ];


  // Function to dynamically populate select options
  function populateDropdowns() {
    const filters = ["cuisine", "budget", "location", "mealType", "publicTransport"];

    filters.forEach(filterId => {
      const select = document.getElementById(filterId);
      const uniqueOptions = [...new Set(recommendations.map(location => location[filterId]))];
      uniqueOptions.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        select.appendChild(optionElement);
      });
    });
  }


  // Function to filter locations
  function filterLocations() {
    // ... (Your existing filter logic) ...
  }

  // Data for featured items (hardcoded)
  const featuredItems = [
    { name: "Singaporean Laksa", image: "Images/Laksa.jpg", description: "A spicy, coconut milk-based noodle soup that's a national treasure." },
    { name: "Hainanese Chicken Rice", image: "Images/ChickenRice.jpg", description: "Tender poached chicken served with fragrant rice – a must-try local dish." },
    { name: "Chilli Crab", image: "Images/ChilliCrab.jpg", description: "Messy, delicious, and iconic – Singapore's most famous seafood dish." },
    { name: "Roti Prata", image: "images/roti_prata.jpg", description: "Crispy, flaky flatbread served with savory curry – a breakfast favorite." },
    { name: "Kaya Toast", image: "images/kaya_toast.jpg", description: "Toasted bread with coconut jam and butter – a classic Singaporean breakfast." },
    { name: "Hokkien Mee", image: "images/hokkien_mee.jpg", description: "Stir-fried noodles with seafood and pork in a flavorful broth." },
    { name: "Satay", image: "images/satay.jpg", description: "Grilled skewered meat (chicken, beef, or mutton) with peanut sauce – a popular street food." },
    { name: "Nasi Lemak", image: "images/nasi_lemak.jpg", description: "Coconut rice with fried anchovies, peanuts, egg, and sambal – the national dish of Singapore." },
    { name: "Bak Kut Teh", image: "images/bak_kut_teh.jpg", description: "Peppery pork rib soup, often eaten for breakfast." },
    { name: "Ice Kachang", image: "images/ice_kachang.jpg", description: "A colorful shaved ice dessert topped with sweet treats and syrups." }
  ];
  

  // Function to display random featured items
  function displayFeaturedItems() {
    // Shuffle the featuredItems array
    for (let i = featuredItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [featuredItems[i], featuredItems[j]] = [featuredItems[j], featuredItems[i]];
    }

    const featuredItemsContainer = document.querySelector('.featured-items');
    featuredItemsContainer.innerHTML = ''; // Clear previous items

    // Display 3 random featured items
    for (let i = 0; i < 3; i++) {
      const item = featuredItems[i];
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('featured-item');
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      featuredItemsContainer.appendChild(itemDiv);
    }
  }

  // Event listener for "Feeling Lucky" button
  document.getElementById("feelingLuckyBtn").addEventListener("click", displayFeaturedItems);

  // Initial display of featured items on page load
  displayFeaturedItems();

  // Call populateDropdowns when the page loads
  populateDropdowns();
}

window.initMap = initMap; // Make initMap available globally
