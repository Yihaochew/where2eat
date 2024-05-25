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