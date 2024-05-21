async function initMap() {
    // ... (map initialization code as before) ...
    
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
  