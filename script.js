// Initialize and add the map
async function initMap() {
    // ... (map initialization code as before) ...
  
    //Data of locations based on filters
  const locations = {
    cuisine: {
      Japanese: ["Sushi Tei", "Ichiban Boshi", "Tampopo", "Ramen Keisuke Tonkotsu King"],
      Chinese: ["Din Tai Fung", "Crystal Jade", "Imperial Treasure", "The Soup Spoon"],
      Korean: ["NamNam Noodle Bar"],
      Vietnamese: ["So Pho"],
      Local: ["Song Fa Bak Kut Teh", "Tian Tian Hainanese Chicken Rice", "Hawker Chan", "Maxwell Food Centre", "Amoy Street Food Centre", "Lau Pa Sat", "Hong Lim Food Centre", "Old Chang Kee"],
      Indian: ["Komala Vilas"],
      Western: ["Astons Specialities", "Five Star Hainanese Chicken Rice"]
      // ... (Add other cuisines and their locations)
    },
    budget: {
      "$": ["Hawker Chan", "Tian Tian Hainanese Chicken Rice", "Maxwell Food Centre", "Amoy Street Food Centre", "Lau Pa Sat", "Hong Lim Food Centre", "Old Chang Kee"],
      "$$": ["Sushi Tei", "Ichiban Boshi", "Tampopo", "Jumbo Seafood", "Putien", "Long Beach Seafood", "The Soup Spoon", "NamNam Noodle Bar", "So Pho", "Astons Specialities", "Five Star Hainanese Chicken Rice"],
      "$$$": ["Din Tai Fung", "Crystal Jade", "Imperial Treasure"],
      // ... (Add other budgets and their locations)
    },
    location: {
      North: ["Causeway Point", "Northpoint City", "Sembawang", "Woodlands Ave 2"],
      East: ["Tampines Mall", "Changi Airport", "East Coast Park", "Eunos Rd 8", "East Coast Rd"],
      // ... (Add other locations and their locations)
      Central: ["Tras Link", "Orchard Rd", "New Bridge Rd", "Serangoon Rd", "Kadayanallur St"],
      West: ["Jurong Gateway Rd", "Gateway Dr"],
      South: ["Harbourfront Walk"]
    },
    mealType: {
      Breakfast: ["Ya Kun Kaya Toast", "Killiney Kopitiam", "Toast Box"],
      Lunch: ["Amoy Street Food Centre", "Lau Pa Sat", "Hong Lim Food Centre", "Maxwell Food Centre"],
      Dinner: ["Sushi Tei", "Ichiban Boshi", "Tampopo", "Jumbo Seafood", "Putien", "Long Beach Seafood", "Din Tai Fung", "Crystal Jade", "Imperial Treasure", "The Soup Spoon", "NamNam Noodle Bar", "So Pho", "Song Fa Bak Kut Teh", "Astons Specialities", "Five Star Hainanese Chicken Rice", "Komala Vilas"],
      // ... (Add other meal types and their locations)
    },
    publicTransport: {
      Yes: ["All locations near MRT stations"], // You'll need to fill this in manually
      No: [], // You'll need to fill this in manually, this is generally for location without public transport.
    },
  };
  
    // Function to filter locations
    function filterLocations() {
      const cuisineFilters = Array.from(document.querySelectorAll("#cuisine input[type=checkbox]:checked")).map(el => el.value);
      const budgetFilters = Array.from(document.querySelectorAll("#budget input[type=checkbox]:checked")).map(el => el.value);
      const locationFilters = Array.from(document.querySelectorAll("#location input[type=checkbox]:checked")).map(el => el.value);
      const mealTypeFilters = Array.from(document.querySelectorAll("#meal-type input[type=checkbox]:checked")).map(el => el.value);
      const publicTransportFilters = Array.from(document.querySelectorAll("#public-transport input[type=checkbox]:checked")).map(el => el.value);
  
      const filtered = recommendations.filter(location =>
        (!cuisineFilters.length || cuisineFilters.some(cuisine => locations.cuisine[cuisine].includes(location.name))) &&
        (!budgetFilters.length || budgetFilters.some(budget => locations.budget[budget].includes(location.name))) &&
        (!locationFilters.length || locationFilters.some(loc => locations.location[loc].includes(location.address))) && // Filter by full address
        (!mealTypeFilters.length || mealTypeFilters.some(mealType => locations.mealType[mealType].includes(location.name))) &&
        (!publicTransportFilters.length || publicTransportFilters.includes('Yes')) // If 'Yes' is selected, assume all locations have public transport
      );
      return filtered;
    }
  
    function generateRecommendations() {
      // ... (your existing filter logic) ...
      
      const filtered = filterLocations();
  
      // If no matching locations are found
      if (filtered.length === 0) {
        document.getElementById("results").innerHTML = "<p>No recommendations found for your selection.</p>";
        return;
      }
      
      // ... (shuffle, slice, and display results on map as before) ...
    }
  }
  
  window.initMap = initMap; // Make initMap available globally