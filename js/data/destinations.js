/* TravelWise – Destinations data (20 destinations: 10 domestic, 10 international) */

const destinations = [
  /* ===== DOMESTIC (India) ===== */
  {
    id: 'TF-DEST-001',
    slug: 'goa',
    name: 'Goa',
    country: 'India',
    region: 'Domestic',
    type: 'Beach',
    startingPrice: 15000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    description: 'Goa is India\'s smallest state and biggest beach destination, famed for its golden coastline, Portuguese colonial churches, and vibrant nightlife. Whether you seek lazy days on sun-drenched beaches or thrilling water sports, Goa delivers an unforgettable tropical escape.',
    thingsToDo: [
      'Sunbathing at Baga & Calangute Beach',
      'Exploring Old Goa\'s UNESCO Heritage Churches',
      'Water Sports at Anjuna Beach',
      'Night Market Shopping at Arpora',
      'Spice Plantation Tours',
      'Dolphin Spotting Boat Trips'
    ]
  },
  {
    id: 'TF-DEST-002',
    slug: 'manali',
    name: 'Manali',
    country: 'India',
    region: 'Domestic',
    type: 'Mountain',
    startingPrice: 12000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    description: 'Nestled in the Kullu Valley of Himachal Pradesh, Manali is a high-altitude Himalayan resort town blessed with snow-capped peaks, cedar forests, and the roaring Beas River. It is the gateway to the legendary Rohtang Pass and a paradise for adventure seekers.',
    thingsToDo: [
      'Skiing & Snowboarding at Solang Valley',
      'River Rafting on the Beas',
      'Trekking to Hampta Pass',
      'Visiting the Ancient Hadimba Temple',
      'Paragliding over Kullu Valley',
      'Day Trip to Rohtang Pass'
    ]
  },
  {
    id: 'TF-DEST-003',
    slug: 'kerala',
    name: 'Kerala',
    country: 'India',
    region: 'Domestic',
    type: 'Beach',
    startingPrice: 18000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    description: 'Known as "God\'s Own Country," Kerala enchants visitors with its tranquil backwaters, lush tea estates, and pristine beaches. The state offers a unique blend of Ayurvedic wellness retreats, houseboat cruises through serene lagoons, and diverse wildlife sanctuaries.',
    thingsToDo: [
      'Houseboat Cruise on Alleppey Backwaters',
      'Ayurvedic Spa & Wellness Retreat',
      'Tea Estate Tour in Munnar',
      'Wildlife Safari at Periyar Tiger Reserve',
      'Kathakali Dance Performance',
      'Beach Relaxation at Kovalam'
    ]
  },
  {
    id: 'TF-DEST-004',
    slug: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    region: 'Domestic',
    type: 'City',
    startingPrice: 20000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    description: 'The "Land of Kings" beckons with its majestic forts, opulent palaces, and shimmering desert dunes. From the Pink City of Jaipur to the Blue City of Jodhpur and the golden sands of Jaisalmer, Rajasthan is a kaleidoscope of royal heritage and vibrant culture.',
    thingsToDo: [
      'Amber Fort & Jaipur City Palace Tour',
      'Camel Safari in the Thar Desert',
      'Mehrangarh Fort in Jodhpur',
      'Lake Palace Boat Ride in Udaipur',
      'Traditional Rajasthani Cuisine Experience',
      'Pushkar Camel Fair (Seasonal)'
    ]
  },
  {
    id: 'TF-DEST-005',
    slug: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    region: 'Domestic',
    type: 'Mountain',
    startingPrice: 22000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80',
    description: 'Often described as "Paradise on Earth," the Kashmir Valley stuns visitors with its emerald meadows, saffron fields, and the mirror-like Dal Lake surrounded by snow-dusted Himalayan peaks. A shikara ride at sunset is an experience unlike any other in the world.',
    thingsToDo: [
      'Shikara Ride on Dal Lake',
      'Staying in Traditional Houseboat',
      'Gulmarg Gondola & Skiing',
      'Trekking through Pahalgam Meadows',
      'Tulip Garden Visit (Spring)',
      'Kashmiri Wazwan Feast'
    ]
  },
  {
    id: 'TF-DEST-006',
    slug: 'andaman',
    name: 'Andaman Islands',
    country: 'India',
    region: 'Domestic',
    type: 'Beach',
    startingPrice: 25000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    description: 'The Andaman and Nicobar Islands are an archipelago of 572 islands in the Bay of Bengal, renowned for their pristine coral reefs, crystal-clear turquoise waters, and dense tropical rainforests. Radhanagar Beach regularly ranks among Asia\'s best beaches.',
    thingsToDo: [
      'Scuba Diving at Elephant Beach',
      'Sea Walk at North Bay Island',
      'Radhanagar Beach Sunset',
      'Cellular Jail Light & Sound Show',
      'Snorkeling at Jolly Buoy Island',
      'Glass-Bottom Boat Ride'
    ]
  },
  {
    id: 'TF-DEST-007',
    slug: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    region: 'Domestic',
    type: 'Adventure',
    startingPrice: 28000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    description: 'Ladakh is a high-altitude cold desert landscape that feels like a moonscape — dramatic barren mountains, ancient Buddhist monasteries perched on clifftops, and the impossibly blue Pangong Lake. This remote Himalayan region rewards intrepid travelers with scenes of breathtaking solitude.',
    thingsToDo: [
      'Pangong Lake Road Trip',
      'Nubra Valley & Bactrian Camel Safari',
      'Thiksey & Hemis Monastery Visit',
      'Magnetic Hill & Zanskar Valley',
      'Mountain Biking on Khardung La Pass',
      'Rafting on the Indus & Zanskar Rivers'
    ]
  },
  {
    id: 'TF-DEST-008',
    slug: 'mussoorie',
    name: 'Mussoorie',
    country: 'India',
    region: 'Domestic',
    type: 'Mountain',
    startingPrice: 10000,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Perched at 2,005 metres in the lower Himalayas, Mussoorie is the "Queen of the Hills" — a charming hill station of colonial-era architecture, misty forests, and sweeping views over the Doon Valley. Gun Hill and Kempty Falls are among its most beloved landmarks.',
    thingsToDo: [
      'Cable Car Ride to Gun Hill',
      'Kempty Falls Picnic',
      'Camel\'s Back Road Sunrise Walk',
      'Mall Road & Landour Heritage Walk',
      'Trekking to Benog Hill',
      'George Everest Estate Visit'
    ]
  },
  {
    id: 'TF-DEST-009',
    slug: 'shimla',
    name: 'Shimla',
    country: 'India',
    region: 'Domestic',
    type: 'Mountain',
    startingPrice: 11000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800&q=80',
    description: 'The former summer capital of British India, Shimla is a picturesque hill station adorned with Victorian architecture, pine and rhododendron forests, and panoramic Himalayan vistas. A ride on the UNESCO-listed Kalka–Shimla toy train is an experience unto itself.',
    thingsToDo: [
      'Toy Train Ride from Kalka to Shimla',
      'The Mall & Ridge Promenade',
      'Jakhoo Temple Trek',
      'Ice Skating at Asia\'s Oldest Rink',
      'Chadwick Falls Nature Walk',
      'Kufri Snow Activities (Winter)'
    ]
  },
  {
    id: 'TF-DEST-010',
    slug: 'darjeeling',
    name: 'Darjeeling',
    country: 'India',
    region: 'Domestic',
    type: 'Mountain',
    startingPrice: 13000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    description: 'Darjeeling, the "Queen of the Himalayas," is world-famous for its tea gardens, stunning Kanchenjunga views, and the beloved Darjeeling Himalayan Railway toy train. Dawn visits to Tiger Hill for the sunrise silhouette of Everest are legendary among travellers.',
    thingsToDo: [
      'Tiger Hill Sunrise over Mt. Everest',
      'Darjeeling Himalayan Railway Joyride',
      'Happy Valley Tea Estate Tour',
      'Himalayan Mountaineering Institute',
      'Peace Pagoda & Batasia Loop',
      'Shopping Tibetan Crafts at Chowrasta'
    ]
  },

  /* ===== INTERNATIONAL ===== */
  {
    id: 'TF-DEST-011',
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'International',
    type: 'Beach',
    startingPrice: 45000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    description: 'Bali, the "Island of the Gods," is Indonesia\'s crown jewel — a mesmerising blend of jungle-clad volcanic mountains, terraced rice paddies, world-class surf breaks, and ancient Hindu temples. Its spiritual energy and warm hospitality make it one of the world\'s most beloved destinations.',
    thingsToDo: [
      'Sunrise Trek to Mount Batur',
      'Ubud Monkey Forest & Rice Terraces',
      'Tanah Lot Temple at Sunset',
      'Surfing at Kuta & Seminyak',
      'Balinese Cooking Class',
      'Sacred Tirta Empul Water Temple'
    ]
  },
  {
    id: 'TF-DEST-012',
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'International',
    type: 'Beach',
    startingPrice: 90000,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    description: 'The Maldives is the world\'s most dispersed island nation — 1,192 coral islets scattered across the Indian Ocean like jewels, each ringed by powdery white beaches and impossibly turquoise lagoons. Overwater bungalows, bioluminescent bays, and the world\'s largest concentration of marine life await.',
    thingsToDo: [
      'Overwater Bungalow Stay',
      'Snorkeling with Manta Rays',
      'Sunset Dolphin Cruise',
      'Underwater Restaurant Dining',
      'Scuba Diving at Maaya Thila',
      'Sandbank Picnic at Private Island'
    ]
  },
  {
    id: 'TF-DEST-013',
    slug: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    region: 'International',
    type: 'Beach',
    startingPrice: 35000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    description: 'Thailand dazzles with its mix of ornate Buddhist temples, exhilarating street food scenes, and paradise islands with emerald waters. From the buzzing streets of Bangkok to the serene temples of Chiang Mai and the iconic limestone karsts of Krabi, every corner of Thailand captivates.',
    thingsToDo: [
      'Grand Palace & Wat Pho in Bangkok',
      'Phi Phi Islands Island Hopping',
      'Elephant Sanctuary in Chiang Mai',
      'Thai Street Food Tour',
      'Snorkeling at Similan Islands',
      'Traditional Thai Massage'
    ]
  },
  {
    id: 'TF-DEST-014',
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'International',
    type: 'City',
    startingPrice: 55000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
    description: 'Singapore is a gleaming city-state that seamlessly blends East and West — futuristic skyscrapers stand alongside colonial-era districts, and hawker centers serve some of Asia\'s best street food. Gardens by the Bay, Marina Bay Sands, and Sentosa Island make it an endlessly rewarding destination.',
    thingsToDo: [
      'Gardens by the Bay & Supertree Grove',
      'Marina Bay Sands SkyPark',
      'Hawker Centre Food Crawl',
      'Universal Studios Singapore',
      'Chinatown & Little India Walk',
      'Night Safari at Singapore Zoo'
    ]
  },
  {
    id: 'TF-DEST-015',
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    region: 'International',
    type: 'City',
    startingPrice: 65000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description: 'Dubai is the city of superlatives — home to the world\'s tallest building, largest mall, and most luxurious hotels. This dazzling metropolis in the Arabian Desert offers thrilling desert safaris, glitzy shopping, world-class dining, and architectural marvels at every turn.',
    thingsToDo: [
      'Burj Khalifa Observation Deck',
      'Desert Safari & Camel Ride',
      'Dubai Mall & Dubai Fountain',
      'Luxury Dhow Cruise Dinner',
      'Ski Dubai at Mall of the Emirates',
      'Palm Jumeirah & Atlantis Visit'
    ]
  },
  {
    id: 'TF-DEST-016',
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'International',
    type: 'City',
    startingPrice: 85000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    description: 'The "City of Light" is the world\'s most visited destination — an intoxicating blend of iconic landmarks, world-class art, haute cuisine, and effortless Parisian chic. From the Eiffel Tower\'s glittering lights to strolling along the Seine, Paris is the eternal standard of romance.',
    thingsToDo: [
      'Eiffel Tower Summit at Sunset',
      'Louvre Museum & Mona Lisa',
      'Montmartre & Sacré-Cœur',
      'Versailles Palace & Gardens',
      'Seine River Dinner Cruise',
      'Parisian Café & Croissant Walk'
    ]
  },
  {
    id: 'TF-DEST-017',
    slug: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    region: 'International',
    type: 'Mountain',
    startingPrice: 100000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
    description: 'Switzerland is nature\'s masterpiece — a small country packed with the Alps\' most dramatic scenery, mirror-like lakes, medieval villages, and some of Europe\'s finest ski resorts. Whether you\'re watching the Matterhorn glow at dawn in Zermatt or gliding on Jungfrau\'s glaciers, Switzerland is extraordinary.',
    thingsToDo: [
      'Jungfraujoch "Top of Europe" Rail Journey',
      'Skiing in Zermatt near the Matterhorn',
      'Lake Geneva Scenic Cruise',
      'Swiss Chocolate & Cheese Factory Tour',
      'Interlaken Paragliding',
      'Lucerne Chapel Bridge & Old Town'
    ]
  },
  {
    id: 'TF-DEST-018',
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    region: 'International',
    type: 'City',
    startingPrice: 90000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    description: 'London is one of history\'s great world cities — a dynamic, multi-cultural metropolis where red double-decker buses pass centuries-old palaces. World-class museums, vibrant theatre, diverse cuisine, and iconic landmarks like Big Ben and Tower Bridge make London endlessly captivating.',
    thingsToDo: [
      'Buckingham Palace & Changing of the Guard',
      'Tower of London & Crown Jewels',
      'British Museum & National Gallery',
      'Thames Cruise & Tower Bridge',
      'West End Theatre Show',
      'Borough Market & Camden Town'
    ]
  },
  {
    id: 'TF-DEST-019',
    slug: 'greece',
    name: 'Greece',
    country: 'Greece',
    region: 'International',
    type: 'Beach',
    startingPrice: 80000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    description: 'Greece is the cradle of Western civilisation and one of the world\'s most photogenic destinations. Sun-bleached white-and-blue villages cascading down volcanic cliffs, azure Aegean waters, ancient ruins glowing in golden light — Santorini and Mykonos are bucket-list icons for good reason.',
    thingsToDo: [
      'Santorini Caldera Sunset in Oia',
      'Acropolis & Parthenon in Athens',
      'Mykonos Windmills & Little Venice',
      'Greek Island Ferry Hopping',
      'Delphi Oracle Archaeological Site',
      'Traditional Taverna Feast'
    ]
  },
  {
    id: 'TF-DEST-020',
    slug: 'new-york',
    name: 'New York City',
    country: 'USA',
    region: 'International',
    type: 'City',
    startingPrice: 95000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    description: 'New York City is the ultimate urban adventure — five boroughs bursting with iconic landmarks, world-class art, diverse neighborhoods, and an energy unlike anywhere else on Earth. From the neon blaze of Times Square to the serene paths of Central Park, NYC is a city that never stops inspiring.',
    thingsToDo: [
      'Top of the Rock / Empire State Building',
      'Central Park Walk & Strawberry Fields',
      'Statue of Liberty & Ellis Island',
      'Metropolitan Museum of Art',
      'Brooklyn Bridge & DUMBO',
      'Broadway Show in Times Square'
    ]
  }
];
