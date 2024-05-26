let map;
async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 1.3521, lng: 103.8198 }, // Centered on Singapore
  });
  map.markers = []; // Initialize markers array
}

function addMarkers(locations) {
  locations.forEach(location => {
    const marker = new google.maps.Marker({
      position: location,
      map: map // Explicitly set the map property
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div><strong><span class="math-inline">${location.name}</strong\><br\></span><strong>Address </strong>${location.address}<br><strong>Budget </strong>${location.budget}<br><strong>Cuisine </strong>${location.cuisine}</div>`,
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
    map.markers.push(marker);
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
  { name: "Burnt Ends", address: "20 Teck Lim Rd, Singapore 088391", lat: 1.2819, lng: 103.8461, cuisine: "Western", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Candlenut", address: "17A Dempsey Rd, Singapore 249676", lat: 1.3098, lng: 103.8027, cuisine: "Peranakan", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: false },
  { name: "Artichoke", address: "161 Middle Rd, Singapore 188978", lat: 1.3028, lng: 103.8549, cuisine: "Middle Eastern", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Odette", address: "1 Saint Andrew's Rd, 01-04 National Gallery Singapore, Singapore 178957", lat: 1.2945, lng: 103.8519, cuisine: "French", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Corner House", address: "1 Cluny Rd, E J H Corner House Singapore Botanic Gardens, Singapore 259569", lat: 1.3194, lng: 103.8158, cuisine: "European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: false },
  { name: "Tippling Club", address: "38 Tanjong Pagar Rd, Singapore 088461", lat: 1.2782, lng: 103.8465, cuisine: "European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Labyrinth", address: "8 Raffles Ave, #02-23 Esplanade Mall, Singapore 039802", lat: 1.2909, lng: 103.8548, cuisine: "Local", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "The Dempsey Cookhouse & Bar", address: "17D Dempsey Rd, Singapore 249676", lat: 1.3096, lng: 103.8021, cuisine: "European", budget: "$$$", location: "Central", mealType: "Brunch", publicTransport: false },
  { name: "PS. Cafe", address: "28B Harding Rd, Singapore 249549", lat: 1.3074, lng: 103.8043, cuisine: "Western", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: false },
  { name: "Wild Honey", address: "333A Orchard Rd, 03-02 Mandarin Gallery, Singapore 238897", lat: 1.3040, lng: 103.8323, cuisine: "All-Day Breakfast", budget: "$$", location: "Central", mealType: "Breakfast", publicTransport: true },
  { name: "Atlas", address: "600 North Bridge Rd, Parkview Square, Singapore 188778", lat: 1.2975, lng: 103.8533, cuisine: "European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Cloudstreet", address: "84 Amoy St, Singapore 069903", lat: 1.2802, lng: 103.8466, cuisine: "Western", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Les Amis", address: "1 Scotts Rd, #01-16 Shaw Centre, Singapore 228208", lat: 1.3024, lng: 103.8346, cuisine: "French", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Thevar", address: "9 Keong Saik Rd., Singapore 089117", lat: 1.2808, lng: 103.8453, cuisine: "Indian", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Meta Restaurant", address: "1 Keong Saik Rd., #01-02, Singapore 089109", lat: 1.2801, lng: 103.8449, cuisine: "Asian", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Sushi Kimura", address: "390 Orchard Rd, #01-07 Palais Renaissance, Singapore 238871", lat: 1.3050, lng: 103.8317, cuisine: "Japanese", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Luke's Oyster Bar & Chop House", address: "22 Gemmill Ln, Singapore 069253", lat: 1.2825, lng: 103.8480, cuisine: "American", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Bar-Roque Grill", address: "165 Tanjong Pagar Rd, #01-00, Singapore 088539", lat: 1.2782, lng: 103.8455, cuisine: "French", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Merci Marcel (Club St)", address: "7-9 Club St, Singapore 069403", lat: 1.2817, lng: 103.8448, cuisine: "French", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: true },
  { name: "Kith Cafe (Robertson Quay)", address: "80 Mohamed Sultan Rd, #01-01, Singapore 239013", lat: 1.2897, lng: 103.8276, cuisine: "Western", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: false },
  { name: "A-One Claypot House", address: "1 Sengkang Square, #03-15 Compass One, Singapore 545078", lat: 1.3925, lng: 103.8956, cuisine: "Chinese", budget: "$$", location: "North-East", mealType: "Dinner", publicTransport: true },
  { name: "Chimichanga", address: "36 Dunlop Street, Singapore 209364", lat: 1.3044, lng: 103.8523, cuisine: "Mexican", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "PS.Cafe", address: "28B Harding Road, Singapore 249549", lat: 1.3048, lng: 103.8148, cuisine: "Western", budget: "$$$", location: "Central", mealType: "Brunch", publicTransport: true },
  { name: "Little India Arcade", address: "48 Serangoon Road, Singapore 217959", lat: 1.3068, lng: 103.8522, cuisine: "Indian", budget: "$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Haidilao Hot Pot", address: "313 Orchard Road, #04-23 313@Somerset, Singapore 238895", lat: 1.3008, lng: 103.8395, cuisine: "Chinese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Marché Mövenpick", address: "3 Temasek Boulevard, #01-612/613 Suntec City Mall, Singapore 038983", lat: 1.2949, lng: 103.8585, cuisine: "European", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Violet Oon Singapore", address: "881 Bukit Timah Road, Singapore 279893", lat: 1.3250, lng: 103.7862, cuisine: "Peranakan", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Tuk Tuk Cha", address: "3 Gateway Drive, #02-08/09 Westgate, Singapore 608532", lat: 1.3345, lng: 103.7435, cuisine: "Thai", budget: "$", location: "West", mealType: "Tea-time", publicTransport: true },
  { name: "Korio", address: "135 Amoy Street, #01-03 Far East Square, Singapore 049964", lat: 1.2800, lng: 103.8465, cuisine: "American", budget: "$", location: "Central", mealType: "Breakfast", publicTransport: true },
  { name: "MTR Singapore", address: "438 Serangoon Road, Singapore 218133", lat: 1.3127, lng: 103.8544, cuisine: "Indian", budget: "$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "No Signboard Seafood", address: "414 Geylang Road, Singapore 389392", lat: 1.3120, lng: 103.8787, cuisine: "Local", budget: "$$$", location: "East", mealType: "Dinner", publicTransport: true },
  { name: "Poulet", address: "68 Orchard Road, #03-12/13 Plaza Singapura, Singapore 238839", lat: 1.3000, lng: 103.8450, cuisine: "French", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Lime Restaurant", address: "3 Upper Pickering Street, Singapore 058289", lat: 1.2861, lng: 103.8460, cuisine: "Asian", budget: "$$$", location: "Central", mealType: "Brunch", publicTransport: true },
  { name: "Chatterbox", address: "333 Orchard Road, Level 5 Hilton Singapore Orchard, Singapore 238867", lat: 1.3041, lng: 103.8345, cuisine: "Local", budget: "$$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Little House of Dreams", address: "6 Eu Tong Sen Street, #01-207/208 The Central, Singapore 059817", lat: 1.2875, lng: 103.8461, cuisine: "Western", budget: "$$", location: "Central", mealType: "Tea-time", publicTransport: true },
  { name: "FOC Restaurant", address: "40 Hongkong Street, Singapore 059679", lat: 1.2877, lng: 103.8467, cuisine: "European", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Geylang Claypot Rice", address: "639 Geylang Road, Singapore 389570", lat: 1.3127, lng: 103.8844, cuisine: "Chinese", budget: "$$", location: "East", mealType: "Dinner", publicTransport: true },
  { name: "Suprette", address: "383 Jalan Besar, Kam Leng Hotel, Singapore 209001", lat: 1.3102, lng: 103.8598, cuisine: "Western", budget: "$$", location: "Central", mealType: "Brunch", publicTransport: true },
  { name: "Mellben Seafood", address: "232 Ang Mo Kio Avenue 3, #01-1222, Singapore 560232", lat: 1.3691, lng: 103.8450, cuisine: "Local", budget: "$$$", location: "North", mealType: "Dinner", publicTransport: true },
  { name: "Jaan by Kirk Westaway", address: "2 Stamford Road, Level 70 Equinox Complex, Singapore 178882", lat: 1.2932, lng: 103.8539, cuisine: "French", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Song Fa Bak Kut Teh", address: "11 New Bridge Road, #01-01, Singapore 059383", lat: 1.2882, lng: 103.8474, cuisine: "Local", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Long Chim", address: "10 Bayfront Avenue, #02-02, The Shoppes at Marina Bay Sands, Singapore 018956", lat: 1.2853, lng: 103.8595, cuisine: "Thai", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Din Tai Fung", address: "290 Orchard Road, #B1-03 Paragon, Singapore 238859", lat: 1.3041, lng: 103.8325, cuisine: "Chinese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Vatos Urban Tacos", address: "36 Beach Road, #01-03, South Beach Quarter, Singapore 189766", lat: 1.2959, lng: 103.8552, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Bistrot Du Sommelier", address: "53 Armenian Street, #01-01, Singapore 179940", lat: 1.2956, lng: 103.8498, cuisine: "French", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Luke's Oyster Bar & Chop House", address: "22 Gemmill Lane, Singapore 069257", lat: 1.2802, lng: 103.8475, cuisine: "American", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Candlenut", address: "17A Dempsey Road, Singapore 249676", lat: 1.3046, lng: 103.8124, cuisine: "Peranakan", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "The Black Swan", address: "19 Cecil Street, Singapore 049704", lat: 1.2825, lng: 103.8493, cuisine: "European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Thevar", address: "9 Keong Saik Road, Singapore 089117", lat: 1.2808, lng: 103.8415, cuisine: "Indian", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Wild Honey", address: "333A Orchard Road, #03-02/03 Mandarin Gallery, Singapore 238897", lat: 1.3037, lng: 103.8356, cuisine: "Western", budget: "$$$", location: "Central", mealType: "Brunch", publicTransport: true },
  { name: "Jumbo Seafood", address: "20 Upper Circular Road, #B1-48/49 The Riverwalk, Singapore 058416", lat: 1.2875, lng: 103.8470, cuisine: "Local", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Ah Loy Thai", address: "100 Beach Road, #01-39/40/41 Shaw Tower, Singapore 189702", lat: 1.2986, lng: 103.8563, cuisine: "Thai", budget: "$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "The Naked Finn", address: "39 Malan Road, Gillman Barracks, Singapore 109442", lat: 1.2768, lng: 103.8031, cuisine: "Western", budget: "$$$$", location: "South", mealType: "Dinner", publicTransport: true },
  { name: "Lao Beijing", address: "200 Victoria Street, #02-28 Bugis Junction, Singapore 188021", lat: 1.2983, lng: 103.8555, cuisine: "Chinese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Le Bistrot Du Sommelier", address: "53 Armenian Street, #01-04, Singapore 179940", lat: 1.2956, lng: 103.8498, cuisine: "French", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Blue Label Pizza & Wine", address: "28 Ann Siang Road, #01-02, Singapore 069708", lat: 1.2812, lng: 103.8455, cuisine: "American", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Hawker Chan", address: "78 Smith Street, Singapore 058972", lat: 1.2821, lng: 103.8434, cuisine: "Local", budget: "$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Manhattan Bar", address: "1 Cuscaden Road, Regent Singapore, Singapore 249715", lat: 1.3044, lng: 103.8281, cuisine: "Western", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Roland Restaurant", address: "89 Marine Parade Central, #06-750, Singapore 440089", lat: 1.3033, lng: 103.9058, cuisine: "Local", budget: "$$", location: "East", mealType: "Dinner", publicTransport: true },
  { name: "Alma by Juan Amador", address: "22 Scotts Road, Goodwood Park Hotel, Singapore 228221", lat: 1.3088, lng: 103.8323, cuisine: "European", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Rakuzen", address: "20 Lorong Mambong, Singapore 277679", lat: 1.3111, lng: 103.7941, cuisine: "Japanese", budget: "$$$", location: "West", mealType: "Dinner", publicTransport: true },
  { name: "Tatsuya", address: "22 Scotts Road, Goodwood Park Hotel, Singapore 228221", lat: 1.3088, lng: 103.8323, cuisine: "Japanese", budget: "$$$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Teppei", address: "1 Tras Link, #01-18 Orchid Hotel, Singapore 078867", lat: 1.2764, lng: 103.8447, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Tonkatsu by Ma Maison", address: "2 Handy Road, #B1-33/34 The Cathay, Singapore 229233", lat: 1.3006, lng: 103.8476, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "En Sushi", address: "112 Middle Road, #01-00B Midland House, Singapore 188970", lat: 1.2983, lng: 103.8551, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Itacho Sushi", address: "181 Orchard Road, #B2-18/19 Orchard Central, Singapore 238896", lat: 1.3013, lng: 103.8398, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Kinki Restaurant + Bar", address: "70 Collyer Quay, #02-02 Customs House, Singapore 049323", lat: 1.2802, lng: 103.8545, cuisine: "Japanese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Shin Kushiya", address: "26 Sentosa Gateway, #01-087/088/089, Singapore 098138", lat: 1.2542, lng: 103.8236, cuisine: "Japanese", budget: "$$$", location: "South", mealType: "Dinner", publicTransport: true },
  { name: "Sabar", address: "100 Tras Street, #01-02, 100AM, Singapore 079027", lat: 1.2764, lng: 103.8458, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Nobu", address: "1 Fullerton Road, #02-00, One Fullerton, Singapore 049213", lat: 1.2862, lng: 103.8545, cuisine: "Japanese", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Man Man Japanese Unagi Restaurant", address: "1 Keong Saik Road, #01-01, Singapore 089109", lat: 1.2808, lng: 103.8415, cuisine: "Japanese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Aoki Restaurant", address: "1 Scotts Road, #02-17 Shaw Centre, Singapore 228208", lat: 1.3050, lng: 103.8326, cuisine: "Japanese", budget: "$$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Chikuwa Tei", address: "9 Mohamed Sultan Road, #01-01, Singapore 238959", lat: 1.2938, lng: 103.8418, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Hajime Tonkatsu & Ramen", address: "10 Tampines Central 1, #01-43/44 Tampines 1, Singapore 529536", lat: 1.3541, lng: 103.9438, cuisine: "Japanese", budget: "$$", location: "East", mealType: "Lunch", publicTransport: true },
  { name: "Keisuke Tonkotsu King", address: "1 Tras Link, #01-19 Orchid Hotel, Singapore 078867", lat: 1.2763, lng: 103.8447, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Sushiro", address: "23 Serangoon Central, #B1-29/30 NEX, Singapore 556083", lat: 1.3502, lng: 103.8726, cuisine: "Japanese", budget: "$$", location: "North-East", mealType: "Lunch", publicTransport: true },
  { name: "Yakiniku Like", address: "313 Orchard Road, #B3-28/29 313@Somerset, Singapore 238895", lat: 1.3008, lng: 103.8395, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Genki Sushi", address: "2 Orchard Turn, #B2-09 ION Orchard, Singapore 238801", lat: 1.3039, lng: 103.8318, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Ginza Kuroson", address: "30 Victoria Street, #01-10/11 CHIJMES, Singapore 187996", lat: 1.2966, lng: 103.8513, cuisine: "Japanese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Tamaya Dining", address: "138 Telok Ayer Street, Singapore 068603", lat: 1.2805, lng: 103.8483, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Sumiya", address: "181 Orchard Road, #12-02 Orchard Central, Singapore 238896", lat: 1.3006, lng: 103.8403, cuisine: "Japanese", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Shunjuu Izakaya", address: "30 Robertson Quay, #01-15, Singapore 238251", lat: 1.2904, lng: 103.8417, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Hakata Ikkousha Ramen", address: "7 Tanjong Pagar Plaza, #01-104B, Singapore 081007", lat: 1.2762, lng: 103.8437, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Kazoku Japanese Cuisine", address: "140 Upper Bukit Timah Road, #01-13 Beauty World Centre, Singapore 588176", lat: 1.3426, lng: 103.7759, cuisine: "Japanese", budget: "$$", location: "West", mealType: "Dinner", publicTransport: true },
  { name: "Ichiban Boshi", address: "23 Serangoon Central, #02-18 NEX, Singapore 556083", lat: 1.3502, lng: 103.8726, cuisine: "Japanese", budget: "$$", location: "North-East", mealType: "Lunch", publicTransport: true },
  { name: "Ootoya Japanese Restaurant", address: "391 Orchard Road, #08-12 Takashimaya, Singapore 238872", lat: 1.3034, lng: 103.8320, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Ramen Nagi", address: "200 Victoria Street, #01-01 Bugis Junction, Singapore 188021", lat: 1.2983, lng: 103.8555, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Sakae Sushi", address: "302 Tiong Bahru Road, #02-10 Tiong Bahru Plaza, Singapore 168732", lat: 1.2868, lng: 103.8265, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Sushido", address: "10 Sinaran Drive, #02-68 Square 2, Singapore 307506", lat: 1.3208, lng: 103.8445, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "The Sushi Bar", address: "333A Orchard Road, #03-31 Mandarin Gallery, Singapore 238897", lat: 1.3037, lng: 103.8356, cuisine: "Japanese", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Swee Choon Tim Sum Restaurant", address: "183/185/187/189, Jln Besar, 191/193", lat: 1.3091, lng: 103.8552, cuisine: "Chinese", budget: "$$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "89.7 Supper Club", address: "1016 Geylang East Ave 3, #01-165", lat: 1.3247, lng: 103.8927, cuisine: "Local", budget: "$$", location: "East", mealType: "Supper", publicTransport: true },
  { name: "Al-Azhar Eating Restaurant", address: "11 Cheong Chin Nam Rd", lat: 1.2986, lng: 103.8317, cuisine: "Indian", budget: "$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "The Ramen Stall", address: "787 North Bridge Road", lat: 1.3043, lng: 103.8508, cuisine: "Japanese", budget: "$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Kko Kko Nara", address: "68 Tanjong Pagar Road", lat: 1.2800, lng: 103.8443, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Beach Road Scissors Cut Curry Rice", address: "229 Jalan Besar", lat: 1.3091, lng: 103.8575, cuisine: "Local", budget: "$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Sin Hoi Sai Eating House", address: "Block 52 Tiong Bahru Road, #01-37", lat: 1.2848, lng: 103.8287, cuisine: "Chinese", budget: "$$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Spize", address: "Multiple Locations (River Valley, Simpang Bedok, Rifle Range)", lat: 1.2919, lng: 103.8343, cuisine: "Local", budget: "$$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Dim Sum Haus", address: "57 Jalan Besar", lat: 1.3094, lng: 103.8549, cuisine: "Chinese", budget: "$$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Zam Zam Restaurant", address: "697 North Bridge Road", lat: 1.3046, lng: 103.8510, cuisine: "Indian", budget: "$", location: "Central", mealType: "Supper", publicTransport: true },
  { name: "Kimchi Korean Restaurant", address: "1 Harbourfront Walk, #03-03 VivoCity, Singapore 098585", lat: 1.2647, lng: 103.822, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Seoul Garden Korean Restaurant", address: "200 Victoria Street, #02-47 Bugis Junction, Singapore 188021", lat: 1.3004, lng: 103.854, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "8 Korean BBQ", address: "6 Eu Tong Sen Street, #02-79/90 The Central, Singapore 059817", lat: 1.2889, lng: 103.846, cuisine: "Korean", budget: "$$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Bornga", address: "1 Harbourfront Walk, #02-123/124 VivoCity, Singapore 098585", lat: 1.2647, lng: 103.822, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Togi Korean Restaurant", address: "11 Mosque Street, #01-01, Singapore 059491", lat: 1.2845, lng: 103.845, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Nanta BBQ", address: "100 Tras Street, 100AM, #03-10/12, Singapore 079027", lat: 1.2754, lng: 103.845, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Super Star K Korean BBQ", address: "75 Tanjong Pagar Road, Singapore 088496", lat: 1.2761, lng: 103.844, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Ajumma's Korean Restaurant", address: "5001 Beach Road, #01-66 Golden Mile Complex, Singapore 199588", lat: 1.3013, lng: 103.864, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Wang Dae Bak Korean BBQ", address: "22 Cross Street, #01-64 China Square Central, Singapore 048421", lat: 1.2847, lng: 103.848, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Dinner", publicTransport: true },
  { name: "Bibigo", address: "1 Kim Seng Promenade, #01-26/27 Great World, Singapore 237994", lat: 1.2938, lng: 103.830, cuisine: "Korean", budget: "$$", location: "Central", mealType: "Lunch", publicTransport: true },
  { name: "Swensen's", address: "1 Jurong West Central 2, #B1-64 Jurong Point, Singapore 648886", lat: 1.3393, lng: 103.707, cuisine: "Western", budget: "$$", location: "West", mealType: "Dinner", publicTransport: true },
  { name: "Ichiban Sushi", address: "1 Jurong West Central 2, #03-37/38 Jurong Point, Singapore 648886", lat: 1.3395, lng: 103.707, cuisine: "Japanese", budget: "$$", location: "West", mealType: "Lunch", publicTransport: true },
  { name: "KFC", address: "1 Jurong West Central 2, #03-48/49 Jurong Point, Singapore 648886", lat: 1.3394, lng: 103.707, cuisine: "American", budget: "$", location: "West", mealType: "Lunch", publicTransport: true },
  { name: "Astons Specialities", address: "1 Jurong West Central 2, #01-05 Jurong Point, Singapore 648886", lat: 1.3394, lng: 103.707, cuisine: "Western", budget: "$$", location: "West", mealType: "Dinner", publicTransport: true },
  { name: "Long John Silver's", address: "1 Jurong West Central 2, #02-21 Jurong Point, Singapore 648886", lat: 1.3394, lng: 103.707, cuisine: "American", budget: "$", location: "West", mealType: "Lunch", publicTransport: true },
  { name: "Burger King", address: "1 Jurong West Central 2, #B1-01 Jurong Point, Singapore 648886", lat: 1.3394, lng: 103.707, cuisine: "American", budget: "$", location: "West", mealType: "Tea-time", publicTransport: true },
  { name: "Swatow Seafood Restaurant", address: "181 Lorong 4 Toa Payoh, #02-602, Singapore 310181", lat: 1.3349, lng: 103.849, cuisine: "Chinese", budget: "$$", location: "West", mealType: "Dinner", publicTransport: true },
  { name: "Tea Valley", address: "Bukit Timah Plaza, 1 Jalan Anak Bukit, #B1-07/08, Singapore 588996", lat: 1.3386, lng: 103.777, cuisine: "Chinese", budget: "$", location: "West", mealType: "Tea-time", publicTransport: true },
  { name: "Kopitiam", address: "1 Jurong West Central 2, #B1-36/37/38/39 Jurong Point, Singapore 648886", lat: 1.3394, lng: 103.707, cuisine: "Local", budget: "$", location: "West", mealType: "Lunch", publicTransport: true },
  { name: "Han's Cafe & Cake House", address: "930 Yishun Avenue 2, #01-12/13 Northpoint City, Singapore 769098", lat: 1.4296, lng: 103.835, cuisine: "Local", budget: "$", location: "North", mealType: "Lunch", publicTransport: true },
  { name: "Punggol Nasi Lemak", address: "371 Sembawang Road, Singapore 758395", lat: 1.3985, lng: 103.822, cuisine: "Local", budget: "$", location: "North", mealType: "Dinner", publicTransport: true },
  { name: "Seoul Yummy", address: "1 Northpoint Drive, #B1-181/182 Northpoint City, Singapore 768019", lat: 1.4286, lng: 103.835, cuisine: "Korean", budget: "$$", location: "North", mealType: "Lunch", publicTransport: true },
  { name: "Eighteen Chefs", address: "1 Woodlands Square, #02-06 Causeway Point, Singapore 738099", lat: 1.4362, lng: 103.786, cuisine: "Western", budget: "$$", location: "North", mealType: "Dinner", publicTransport: true },
  { name: "Ajisen Ramen", address: "1 Woodlands Square, #04-02 Causeway Point, Singapore 738099", lat: 1.4359, lng: 103.786, cuisine: "Japanese", budget: "$$", location: "North", mealType: "Lunch", publicTransport: true },
  { name: "Jollibee", address: "930 Yishun Avenue 2, #B1-155/156/157 Northpoint City, Singapore 769098", lat: 1.4297, lng: 103.835, cuisine: "American", budget: "$", location: "North", mealType: "Lunch", publicTransport: true },
  { name: "Hai Xian Zhu Zhou 海鲜煮粥", address: "453A Ang Mo Kio Avenue 10, #01-01 Cheng San Centre, Singapore 560453", lat: 1.3664, lng: 103.853, cuisine: "Chinese", budget: "$", location: "North", mealType: "Breakfast", publicTransport: true },
  { name: "McDonald's", address: "51 Yishun Central 1, #01-01 Yishun 10 Cinema Cineplex, Singapore 768794", lat: 1.4296, lng: 103.835, cuisine: "American", budget: "$", location: "North", mealType: "Tea-time", publicTransport: true },
  { name: "The Coffee Bean & Tea Leaf", address: "1 Northpoint Drive, #01-157 Northpoint City, Singapore 768019", lat: 1.4294, lng: 103.835, cuisine: "Western", budget: "$$", location: "North", mealType: "Tea-time", publicTransport: true },
  { name: "Old Street Bak Kut Teh", address: "930 Yishun Avenue 2, #B1-170/171 Northpoint City, Singapore 769098", lat: 1.4296, lng: 103.835, cuisine: "Chinese", budget: "$$", location: "North", mealType: "Dinner", publicTransport: true },
];
  
  
// Function to dynamically populate select options
function populateDropdowns() {
  const filters = ["cuisine", "budget", "location", "mealType", "publicTransport"];

  // Commented out to avoid error for now
  // filters.forEach(filterId => {
  //   const select = document.getElementById(filterId);
  //   // Get existing options
  //   const existingOptions = Array.from(select.options).map(option => option.value);
  //   const uniqueOptions = [...new Set(recommendations.map(location => location[filterId]))];
  //   uniqueOptions.forEach(option => {
  //     if (!existingOptions.includes(option)) { // Add only if not already present
  //       const optionElement = document.createElement("option");
  //       optionElement.value = option;
  //       optionElement.text = option;
  //       select.appendChild(optionElement);
  //     }
  //   });
  // });
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
    const publicTransportMatch = 
    publicTransportFilter === "Any" || 
    location.publicTransport === publicTransportFilter ||
    !publicTransportFilter;
    
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

  document.getElementById("results").innerHTML = `${randomLocation.name}<br/>${randomLocation.address}`;

  // Clear existing markers before adding new ones
  if (map.markers) {
    map.markers.forEach(marker => marker.setMap(null));
    map.markers = [];
  }

  addMarkers([randomLocation]); // Add a marker for the single recommendation
}

// Call populateDropdowns when the page loads
populateDropdowns();

window.initMap = initMap;

// require('dotenv').config();

// Now you can access the environment variables like this:
const apiKey = 'AIzaSyC5hG-Od1EKfzGYf0f9qLD7uc5H1suZSt0';

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
    { name: "Vegetarian Laksa", image: "Images/VegetarianLaksa.jpg", description: "A fragrant, flavorful laksa made with a rich coconut milk broth, tofu puffs, vegetables, and sometimes mock seafood. A satisfying meat-free alternative to the classic dish." },
    { name: "Vegetable Dum Biryani", image: "Images/DumBiryani.jpg", description: "A flavorful rice dish cooked with fragrant basmati rice, mixed vegetables, and aromatic spices. Often served with raita (yogurt dip) and papadum." },
    { name: "Mushroom Rendang", image: "Images/MushroomRendang.jpg", description: "A rich and creamy curry originating from Indonesia, featuring tender mushrooms cooked in a blend of coconut milk, spices, and herbs." },
    { name: "Thosai", image: "Images/Thosai.jpg", description: "A thin and crispy crepe made from fermented rice and lentil batter, usually served with sambar (a lentil-based vegetable stew) and chutney." },
    { name: "Roti Prata with Dal and Vegetable Curry", image: "Images/RotiPrataDal.jpg", description: "A popular Indian flatbread, roti prata, served with dal (lentil soup) and a flavorful vegetable curry. A delicious and hearty vegetarian option." },
    { name: "Gado-Gado", image: "Images/GadoGado.jpg", description: "An Indonesian salad of blanched vegetables, tofu, tempeh, and hard-boiled eggs, tossed in a creamy peanut sauce." },
    { name: "Omakase Sushi", image: "Images/OmakaseSushi.jpg", description: "A multi-course sushi meal where the chef selects the freshest ingredients and prepares each piece with precision. Experience this culinary art at Shinji by Kanesaka (2 Michelin stars)." },
    { name: "Wagyu Beef", image: "Images/WagyuBeef.jpg", description: "Indulge in the world-renowned marbling and buttery tenderness of Japanese Wagyu beef, expertly grilled or prepared in various styles at CUT by Wolfgang Puck (1 Michelin star)." },
    { name: "Truffle Pasta", image: "Images/TrufflePasta.jpg", description: "Savor the earthy aroma and luxurious flavor of truffles shaved over handmade pasta at  Braci (1 Michelin star), known for its innovative Italian cuisine." },
    { name: "Peking Duck", image: "Images/PekingDuck.jpg", description: "A classic Chinese dish featuring crispy roasted duck with thin pancakes, scallions, cucumber, and hoisin sauce. Enjoy it at Imperial Treasure Super Peking Duck Restaurant (1 Michelin star)." },
    { name: "Lobster Thermidor", image: "Images/LobsterThermidor.jpg", description: "A decadent French dish of lobster meat cooked in a creamy mustard-infused sauce and topped with grated cheese. Find it at elegant establishments like db Bistro & Oyster Bar by Daniel Boulud." },
    { name: "Massaman Curry", image: "Images/MassamanCurry.jpg", description: "A rich and flavorful Thai curry with tender chunks of meat, potatoes, peanuts, and spices. Popular at many Thai restaurants in Singapore, including Michelin Bib Gourmand recipient, Nahm." },
    { name: "Nasi Lemak with Fried Chicken", image: "Images/NasiLemak.jpg", description: "Fragrant rice cooked in coconut milk and pandan leaf, served with crispy fried chicken, sambal, ikan bilis (anchovies), peanuts, and cucumber. A classic Singaporean dish elevated at The Coconut Club (Bib Gourmand)." },
    { name: "Chwee Kueh", image: "Images/ChweeKueh.jpg", description: "Steamed rice cakes topped with preserved radish, offering a simple yet flavorful taste of Singapore. Find it at Bedok Chwee Kueh (Bib Gourmand)." },
    { name: "Soya Sauce Chicken Rice", image: "Images/SoyaSauceChickenRice.jpg", description: "Tender chicken with a glossy, flavorful soya sauce glaze, served with fragrant rice and a side of soup. A Michelin-starred dish from Liao Fan Hong Kong Soya Sauce Chicken Rice & Noodle." },
    { name: "Bak Chor Mee (Minced Pork Noodles)", image: "Images/BakChorMee.jpg", description: "A savory and satisfying bowl of noodles with minced pork, pork liver, mushrooms, and other ingredients, tossed in a flavorful sauce. Another Michelin-starred hawker dish from Hill Street Tai Hwa Pork Noodle." },
    { name: "Big Prawn Hor Fun", image: "Images/BigPrawnHorFun.jpg", description: "Flat rice noodles wok-fried with succulent prawns and a delicious sauce. A signature dish at Kok Sen Restaurant (Bib Gourmand)." },
    { name: "Pizza", image: "Images/Pizza.jpg", description: "A classic favorite for kids of all ages! Choose from a variety of toppings like pepperoni, cheese, or Hawaiian, and enjoy it in various styles, from thin crust to deep dish." },
    { name: "Fish and Chips", image: "Images/FishChips.jpg", description: "Crispy battered fish and golden fries – a fun and tasty combination that kids love. Look for options with smaller portions for younger children." },
    { name: "Pasta", image: "Images/Pasta.jpg", description: "Choose from a variety of pasta shapes and sauces, like spaghetti bolognese or macaroni and cheese. A versatile dish that can be tailored to a child's preferences." },
    { name: "Chicken Nuggets", image: "Images/ChickenNuggets.jpg", description: "Bite-sized pieces of breaded chicken that are easy for kids to eat and enjoy. Often served with dipping sauces like ketchup or barbecue sauce." },
    { name: "Ice Cream", image: "Images/IceCream.jpg", description: "A sweet treat that is always a hit with kids! Choose from classic flavors like vanilla and chocolate, or try more adventurous options like durian or teh tarik." }
  ];
  

  // // Event listener for "Feeling Lucky" button
  // document.getElementById("feelingLuckyBtn").addEventListener("click", displayFeaturedItems);

  // Event listener for "Feeling Lucky" button
  window.onload = function () {
    document.getElementById("feelingLuckyBtn").addEventListener("click", displayFeaturedItems);
  };
  
  // Function to display random featured items
  function displayFeaturedItems() {
    console.log("FUNCTION IS CALLED ON CLICK")
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

  // Initial display of featured items on page load
  displayFeaturedItems();


window.initMap = initMap; // Make initMap available globally