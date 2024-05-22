async function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 1.3521, lng: 103.8198 }, // Centered on Singapore
  });

  function addMarkers(locations) {
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: location,
        map: map // Explicitly set the map property
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div><strong><span class="math-inline">\{location\.name\}</strong\><br\></span>{location.address}</div>`,
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
      { name: "Burnt Ends", address: "20 Teck Lim Rd, Singapore 088391", lat: 1.2819, lng: 103.8461, cuisine: "Australian", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
      { name: "Candlenut", address: "17A Dempsey Rd, Singapore 249676", lat: 1.3098, lng: 103.8027, cuisine: "Peranakan", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: false },
      { name: "Artichoke", address: "161 Middle Rd, Singapore 188978", lat: 1.3028, lng: 103.8549, cuisine: "Middle Eastern", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
      { name: "Odette", address: "1 Saint Andrew's Rd, 01-04 National Gallery Singapore, Singapore 178957", lat: 1.2945, lng: 103.8519, cuisine: "Modern French", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
      { name: "Corner House", address: "1 Cluny Rd, E J H Corner House Singapore Botanic Gardens, Singapore 259569", lat: 1.3194, lng: 103.8158, cuisine: "Modern European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: false },
      { name: "Tippling Club", address: "38 Tanjong Pagar Rd, Singapore 088461", lat: 1.2782, lng: 103.8465, cuisine: "Modern European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
      { name: "Labyrinth", address: "8 Raffles Ave, #02-23 Esplanade Mall, Singapore 039802", lat: 1.2909, lng: 103.8548, cuisine: "Modern Singaporean", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
      { name: "The Dempsey Cookhouse & Bar", address: "17D Dempsey Rd, Singapore 249676", lat: 1.3096, lng: 103.8021, cuisine: "Modern European", budget: "$$$", location: "Central", mealType: "Brunch", publicTransport: false },
      { name: "PS. Cafe", address: "28B Harding Rd, Singapore 249549", lat: 1.3074, lng: 103.8043, cuisine: "Western", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: false },
      { name: "Wild Honey", address: "333A Orchard Rd, 03-02 Mandarin Gallery, Singapore 238897", lat: 1.3040, lng: 103.8323, cuisine: "All-Day Breakfast", budget: "$$", location: "Central", mealType: "Breakfast", publicTransport: true },
        { name: "Atlas", address: "600 North Bridge Rd, Parkview Square, Singapore 188778", lat: 1.2975, lng: 103.8533, cuisine: "European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Cloudstreet", address: "84 Amoy St, Singapore 069903", lat: 1.2802, lng: 103.8466, cuisine: "Modern Australian", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Les Amis", address: "1 Scotts Rd, #01-16 Shaw Centre, Singapore 228208", lat: 1.3024, lng: 103.8346, cuisine: "French", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Thevar", address: "9 Keong Saik Rd., Singapore 089117", lat: 1.2808, lng: 103.8453, cuisine: "Modern Indian", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Meta Restaurant", address: "1 Keong Saik Rd., #01-02, Singapore 089109", lat: 1.2801, lng: 103.8449, cuisine: "Modern Asian", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Sushi Kimura", address: "390 Orchard Rd, #01-07 Palais Renaissance, Singapore 238871", lat: 1.3050, lng: 103.8317, cuisine: "Japanese", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Luke's Oyster Bar & Chop House", address: "22 Gemmill Ln, Singapore 069253", lat: 1.2825, lng: 103.8480, cuisine: "American", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Bar-Roque Grill", address: "165 Tanjong Pagar Rd, #01-00, Singapore 088539", lat: 1.2782, lng: 103.8455, cuisine: "French", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
        { name: "Merci Marcel (Club St)", address: "7-9 Club St, Singapore 069403", lat: 1.2817, lng: 103.8448, cuisine: "French", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: true },
        { name: "Kith Cafe (Robertson Quay)", address: "80 Mohamed Sultan Rd, #01-01, Singapore 239013", lat: 1.2897, lng: 103.8276, cuisine: "Western", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: false },
    ];
    
  
  
    // Function to dynamically populate select options
    function populateDropdowns() {
      const filters = ["cuisine", "budget", "location", "mealType", "publicTransport"];
  
      filters.forEach(filterId => {
        const select = document.getElementById(filterId);
        // Get existing options
        const existingOptions = Array.from(select.options).map(option => option.value);
        const uniqueOptions = [...new Set(recommendations.map(location => location[filterId]))];
        uniqueOptions.forEach(option => {
          if (!existingOptions.includes(option)) { // Add only if not already present
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.text = option;
            select.appendChild(optionElement);
          }
        });
      });
    }
  
    // Function to filter locations
    function filterLocations() {
      const cuisineFilter = document.getElementById("cuisine").value;
      const budgetFilter = document.getElementById("budget").value;
      const locationFilter = document.getElementById("location").value;
      const mealTypeFilter = document.getElementById("meal-type").value;
      const publicTransportFilter = document.getElementById("public-transport").value === "true"; // Use strict equality (===)
  
      const filtered = recommendations.filter(location => {
        const cuisineMatch = cuisineFilter === "Any" || location.cuisine === cuisineFilter;
        const budgetMatch = budgetFilter === "Any" || location.budget === budgetFilter;
        const locationMatch = locationFilter === "Any" || location.location === locationFilter;
        const mealTypeMatch = mealTypeFilter === "Any" || location.mealType === mealTypeFilter;
        const publicTransportMatch = publicTransportFilter === "Any" || location.publicTransport === publicTransportFilter;
  
        return cuisineMatch && budgetMatch && locationMatch && mealTypeMatch && publicTransportMatch;
      });
  
      return filtered;
    }
  
    function generateRecommendations() {
      const filtered = filterLocations();
  
      if (filtered.length === 0) {
        document.getElementById("results").innerHTML = "<p>No recommendations found for your selection.</p>";
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * filtered.length);
      const randomLocation = filtered[randomIndex];
  
      document.getElementById("results").innerHTML = `<p>${randomLocation.name}</p>`;
  
      // Clear existing markers before adding new ones
      map.markers && map.markers.forEach(marker => marker.setMap(null));
  
      addMarkers([randomLocation]); // Add a marker for the single recommendation
    }
  
    // Call populateDropdowns when the page loads
    populateDropdowns();
  }
  
  window.initMap = initMap;

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: { lat: 1.3521, lng: 103.8198 }, 
});

require('dotenv').config();

// Now you can access the environment variables like this:
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

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
    { name: "Ice Kachang", image: "images/ice_kachang.jpg", description: "A colorful shaved ice dessert topped with sweet treats and syrups." },
    { name: "Char Kway Teow", image: "images/char_kway_teow.jpg", description: "Stir-fried flat rice noodles with cockles, bean sprouts, and Chinese sausage – a savory delight." },
    { name: "Fish Head Curry", image: "images/fish_head_curry.jpg", description: "A tangy, spicy curry with a whole fish head – a flavorful and unique dish." },
    { name: "Popiah", image: "images/popiah.jpg", description: "A fresh spring roll filled with vegetables, prawns, and peanuts – a healthy and delicious snack." },
    { name: "Carrot Cake (Chai Tow Kway)", image: "images/carrot_cake.jpg", description: "Savory radish cake stir-fried with eggs and preserved radish – a popular hawker food." },
    { name: "Mee Goreng", image: "images/mee_goreng.jpg", description: "Spicy fried noodles with vegetables, meat or seafood, and a fried egg – a hearty meal." },
    { name: "Curry Puff", image: "images/curry_puff.jpg", description: "Deep-fried pastry filled with curried potatoes, chicken, or sardines – a popular snack." },
    { name: "Mee Siam", image: "images/mee_siam.jpg", description: "Thin rice noodles in a tangy, spicy gravy with dried shrimp and vegetables." },
    { name: "Rojak", image: "images/rojak.jpg", description: "A salad of fruits and vegetables tossed in a sweet and spicy peanut sauce." },
    { name: "Cendol", image: "images/cendol.jpg", description: "A refreshing dessert of shaved ice, coconut milk, pandan jelly, and palm sugar." },
    { name: "Bandung", image: "images/bandung.jpg", description: "A sweet, milky drink flavored with rose syrup and evaporated milk." },
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


window.initMap = initMap; // Make initMap available globally