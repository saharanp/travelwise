/* TravelWise – Hotels data (30 hotels, 1-2 per destination) */

const hotels = [
  /* ===== GOA ===== */
  {
    id: 'TF-HOTEL-001',
    slug: 'taj-exotica-goa',
    name: 'Taj Exotica Resort & Spa',
    destinationSlug: 'goa',
    destinationName: 'Goa',
    starRating: 5,
    pricePerNight: 18500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    amenities: ['Private Pool', 'Spa', 'Free Wifi', 'Fine Dining', 'Beach Access', 'Gym', 'Water Sports'],
    description: 'A luxury beachfront resort set amid 56 acres of gardens on Benaulim Beach, the Taj Exotica offers unparalleled Goan elegance. The award-winning spa, signature Goan seafood restaurant, and private beach cabanas create an immersive paradise experience.',
    reviews: [
      { author: 'Priya Sharma', rating: 5, comment: 'Absolutely breathtaking! The private beach, world-class spa, and impeccable service made our anniversary unforgettable. Will definitely be back.', date: '2024-11-20' },
      { author: 'Rohan Mehta', rating: 5, comment: 'Every detail was perfect. The sunset views from our villa, the Goan cuisine at Epicure restaurant – pure luxury at its finest.', date: '2024-10-05' },
      { author: 'Sarah Johnson', rating: 4, comment: 'Beautiful property with excellent service. The beach area was stunning. Only minor gripe was the long walk between buildings.', date: '2024-09-14' }
    ]
  },
  {
    id: 'TF-HOTEL-002',
    slug: 'park-hyatt-goa',
    name: 'Park Hyatt Goa Resort',
    destinationSlug: 'goa',
    destinationName: 'Goa',
    starRating: 5,
    pricePerNight: 14000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80',
    amenities: ['Pool', 'Spa', 'Free Wifi', 'Restaurant', 'Gym', 'Tennis Court', 'Kids Club'],
    description: 'Inspired by Indo-Portuguese heritage, the Park Hyatt Goa spans 45 acres of lush tropical gardens overlooking Arossim Beach. Its stunning infinity pool, three restaurants, and holistic Sereno Spa make it a perennial favourite for families and couples alike.',
    reviews: [
      { author: 'Anika Patel', rating: 5, comment: 'The infinity pool is stunning and the kids club kept our children entertained all day. Amazing family vacation!', date: '2024-12-01' },
      { author: 'James Wilson', rating: 4, comment: 'Great property, beautiful architecture blending Indian and Portuguese styles. Food at the restaurant was excellent.', date: '2024-08-22' }
    ]
  },

  /* ===== MANALI ===== */
  {
    id: 'TF-HOTEL-003',
    slug: 'span-resort-manali',
    name: 'SPAN Resort & Spa',
    destinationSlug: 'manali',
    destinationName: 'Manali',
    starRating: 5,
    pricePerNight: 12000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80',
    amenities: ['Heated Pool', 'Spa', 'Free Wifi', 'River View Restaurant', 'Bonfire Area', 'Adventure Desk'],
    description: 'Perched on the banks of the Beas River with spectacular Himalayan peaks as a backdrop, SPAN Resort is Manali\'s most celebrated luxury property. Glass-fronted rooms facing the river, a heated infinity pool at altitude, and direct access to adventure activities define the experience.',
    reviews: [
      { author: 'Vikram Singh', rating: 5, comment: 'Waking up to the sound of the Beas River with Himalayan peaks outside the window – nothing short of magical. The heated pool with mountain views is incredible.', date: '2024-12-10' },
      { author: 'Meera Nair', rating: 5, comment: 'The spa treatments here are absolutely divine. The mountain backdrop while getting a massage is surreal. Perfect honeymoon destination!', date: '2024-11-05' }
    ]
  },
  {
    id: 'TF-HOTEL-004',
    slug: 'solang-valley-resort',
    name: 'Solang Valley Resort',
    destinationSlug: 'manali',
    destinationName: 'Manali',
    starRating: 4,
    pricePerNight: 7500,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    amenities: ['Free Wifi', 'Restaurant', 'Ski Storage', 'Bonfire', 'Airport Shuttle', 'Tour Desk'],
    description: 'Ideally located near Solang Valley\'s ski slopes, this resort is every adventure enthusiast\'s dream base. The cedar-panelled rooms with mountain views, hearty Himachali meals, and helpful adventure guides make this a go-to for both skiers and trekkers.',
    reviews: [
      { author: 'Arjun Kapoor', rating: 4, comment: 'Great location for skiing. Staff very helpful with equipment and slope guidance. Rooms are comfortable with great mountain views.', date: '2025-01-15' },
      { author: 'Laura Chen', rating: 5, comment: 'Loved the cozy atmosphere, the bonfire evenings with other travellers were a highlight. Perfect base for Himalayan adventures.', date: '2024-10-20' }
    ]
  },

  /* ===== KERALA ===== */
  {
    id: 'TF-HOTEL-005',
    slug: 'kumarakom-lake-resort',
    name: 'Kumarakom Lake Resort',
    destinationSlug: 'kerala',
    destinationName: 'Kerala',
    starRating: 5,
    pricePerNight: 22000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    amenities: ['Private Pool Villas', 'Ayurveda Spa', 'Free Wifi', 'Lake Dining', 'Houseboat', 'Yoga', 'Gym'],
    description: 'Set on the banks of Vembanad Lake with heritage-style Kerala architecture, this award-winning resort is a sanctuary of Ayurvedic healing and backwater beauty. Its private pool villas, authentic Keralan cuisine, and traditional houseboat excursions are simply incomparable.',
    reviews: [
      { author: 'Sunita Pillai', rating: 5, comment: 'This is pure paradise. The Ayurveda treatments genuinely rejuvenated my body and mind. The lake views at golden hour are something I\'ll never forget.', date: '2024-11-30' },
      { author: 'Michael Brown', rating: 5, comment: 'One of the best hotels I\'ve ever stayed at globally. The heritage architecture, warm hospitality, and sublime food create a perfect escape.', date: '2024-09-08' }
    ]
  },
  {
    id: 'TF-HOTEL-006',
    slug: 'coconut-lagoon-kerala',
    name: 'Coconut Lagoon by CGH Earth',
    destinationSlug: 'kerala',
    destinationName: 'Kerala',
    starRating: 4,
    pricePerNight: 9500,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    amenities: ['Pool', 'Ayurveda', 'Free Wifi', 'Restaurant', 'Canoe', 'Bird Watching', 'Yoga'],
    description: 'Accessible only by boat, Coconut Lagoon is an eco-resort carved from an ancient tharavadu (traditional Kerala home) transported stone by stone. Surrounded by coconut palms and Vembanad Lake, it offers an intimate connection with Kerala\'s backwater culture.',
    reviews: [
      { author: 'Deepa Krishnan', rating: 5, comment: 'Arriving by boat already sets the magical tone. The heritage cottages, birdwatching, and traditional Kerala meals made this a truly immersive experience.', date: '2024-08-14' },
      { author: 'Tom Walker', rating: 4, comment: 'Fantastic eco-friendly resort. The canoe rides through the backwaters at dawn were unforgettable. Food could be more varied but quality is excellent.', date: '2024-07-22' }
    ]
  },

  /* ===== RAJASTHAN ===== */
  {
    id: 'TF-HOTEL-007',
    slug: 'rambagh-palace-jaipur',
    name: 'Rambagh Palace',
    destinationSlug: 'rajasthan',
    destinationName: 'Rajasthan',
    starRating: 5,
    pricePerNight: 35000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    amenities: ['Royal Pool', 'Spa', 'Free Wifi', 'Fine Dining', 'Polo Ground', 'Peacock Lawn', 'Butler Service'],
    description: 'Once the residence of the Maharaja of Jaipur, Rambagh Palace is the jewel in the crown of India\'s palace hotels. With 47 acres of manicured Mughal gardens, royal suites adorned with handcrafted jali work, and butler service, it is nothing short of living history.',
    reviews: [
      { author: 'Kavya Reddy', rating: 5, comment: 'Living like royalty is not a cliché here – it\'s reality. The palace suites, candlelit dinner in the garden, peacocks wandering the lawns – pure magic.', date: '2025-01-02' },
      { author: 'David Thompson', rating: 5, comment: 'The most unique hotel stay of my life. Historic grandeur meets impeccable modern service. The polo ground experience was extraordinary.', date: '2024-12-18' }
    ]
  },
  {
    id: 'TF-HOTEL-008',
    slug: 'taj-lake-palace-udaipur',
    name: 'Taj Lake Palace Udaipur',
    destinationSlug: 'rajasthan',
    destinationName: 'Rajasthan',
    starRating: 5,
    pricePerNight: 40000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    amenities: ['Pool', 'Spa', 'Free Wifi', 'Lake View Dining', 'Boat Transfers', 'Cultural Shows', 'Yoga'],
    description: 'Floating like a dream on Lake Pichola since 1746, the Taj Lake Palace is widely considered one of the world\'s most romantic hotels. Accessible only by boat, its marble courtyards, lotus ponds, and lake-view suites offer a fairy-tale escape amid Udaipur\'s City of Lakes.',
    reviews: [
      { author: 'Priyanka Joshi', rating: 5, comment: 'Arriving by royal boat to this white marble palace on the lake – my wedding backdrop was absolutely flawless. Taj has outdone themselves.', date: '2024-10-28' },
      { author: 'Emma Clarke', rating: 5, comment: 'Worth every penny. The lake views, the heritage décor, the cultural performances by the pool – genuinely the most romantic place I\'ve ever been.', date: '2024-09-30' }
    ]
  },

  /* ===== KASHMIR ===== */
  {
    id: 'TF-HOTEL-009',
    slug: 'vivanta-dal-view-srinagar',
    name: 'Vivanta Dal View',
    destinationSlug: 'kashmir',
    destinationName: 'Kashmir',
    starRating: 5,
    pricePerNight: 16000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    amenities: ['Pool', 'Spa', 'Free Wifi', 'Multi-cuisine Restaurant', 'Dal Lake View', 'Shikara Rides', 'Gym'],
    description: 'Commanding sweeping views over Dal Lake and the snow-crowned Himalayan range, Vivanta Dal View is Srinagar\'s most distinguished luxury hotel. Its award-winning Jiva Spa, authentic Wazwan cuisine, and complimentary Shikara rides combine for a memorable Kashmir experience.',
    reviews: [
      { author: 'Nasreen Ahmad', rating: 5, comment: 'The view of Dal Lake from our room at sunset was the most beautiful thing I\'ve ever seen. The Wazwan dinner was an absolute feast.', date: '2024-09-12' },
      { author: 'Chris Martin', rating: 4, comment: 'Stunning location and great service. The Shikara ride at dawn was worth waking up early for. Staff exceptionally warm and knowledgeable.', date: '2024-08-05' }
    ]
  },

  /* ===== ANDAMAN ===== */
  {
    id: 'TF-HOTEL-010',
    slug: 'taj-exotica-andaman',
    name: 'Taj Exotica Andaman',
    destinationSlug: 'andaman',
    destinationName: 'Andaman Islands',
    starRating: 5,
    pricePerNight: 28000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    amenities: ['Private Beach', 'Spa', 'Free Wifi', 'Reef View Dining', 'Dive Center', 'Snorkeling', 'Pool'],
    description: 'Nestled on Havelock Island along Radhanagar Beach – Asia\'s finest beach – Taj Exotica Andaman is a rainforest-meets-beach luxury escape. The resort\'s private dive centre, overwater decks, and coral reef snorkeling put the Andamans\' marine wonders right at your feet.',
    reviews: [
      { author: 'Suresh Kumar', rating: 5, comment: 'Radhanagar Beach right outside the resort door – I never needed to go anywhere else! The dive centre staff were exceptional guides.', date: '2024-11-08' },
      { author: 'Olivia Reed', rating: 5, comment: 'Totally off-the-grid luxury. The bioluminescent water at night was magical. Pristine, eco-conscious, and absolutely breathtaking.', date: '2024-10-15' }
    ]
  },
  {
    id: 'TF-HOTEL-011',
    slug: 'barefoot-havelock',
    name: 'Barefoot at Havelock',
    destinationSlug: 'andaman',
    destinationName: 'Andaman Islands',
    starRating: 4,
    pricePerNight: 8500,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    amenities: ['Beach Access', 'Dive Centre', 'Free Wifi', 'Restaurant', 'Kayaking', 'Eco Cottages'],
    description: 'Barefoot at Havelock is an eco-luxury retreat tucked within a lush forest, just footsteps from the turquoise waters of Beach No. 5. Teak-and-bamboo cottages, PADI dive training, and forest yoga sessions attract nature lovers seeking an authentic island escape.',
    reviews: [
      { author: 'Ritu Agarwal', rating: 4, comment: 'Perfect eco-retreat. The bamboo cottages have a real back-to-nature feel. Kayaking through the mangroves was a highlight I\'ll remember forever.', date: '2024-09-25' },
      { author: 'Jake Morrison', rating: 5, comment: 'Best diving I\'ve ever done and the staff at Dive India (within the resort) are world-class. Magical place.', date: '2024-07-18' }
    ]
  },

  /* ===== LADAKH ===== */
  {
    id: 'TF-HOTEL-012',
    slug: 'the-grand-dragon-ladakh',
    name: 'The Grand Dragon Ladakh',
    destinationSlug: 'ladakh',
    destinationName: 'Ladakh',
    starRating: 5,
    pricePerNight: 14000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80',
    amenities: ['Free Wifi', 'Restaurant', 'Oxygen Lounge', 'Spa', 'Roof Terrace', 'Tour Desk', 'Helipad'],
    description: 'Perched at 3,505 metres in Leh with panoramic views of the Stok Kangri mountain range, The Grand Dragon is Ladakh\'s leading luxury hotel. Its oxygen lounge (essential at altitude), rooftop stargazing, and Ladakhi heritage décor make it the ideal high-altitude luxury base.',
    reviews: [
      { author: 'Sameer Bhat', rating: 5, comment: 'The oxygen lounge was a godsend after flying straight to Leh. Stunning views, warm staff, and the rooftop dinner under a sky full of stars is unbeatable.', date: '2024-08-20' },
      { author: 'Hannah Schmidt', rating: 5, comment: 'Breathtaking in every sense. The mountain views from the restaurant are spectacular and the staff helped plan a perfect Ladakh itinerary.', date: '2024-07-30' }
    ]
  },

  /* ===== MUSSOORIE ===== */
  {
    id: 'TF-HOTEL-013',
    slug: 'jw-marriott-mussoorie',
    name: 'JW Marriott Mussoorie',
    destinationSlug: 'mussoorie',
    destinationName: 'Mussoorie',
    starRating: 5,
    pricePerNight: 19000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
    amenities: ['Infinity Pool', 'Spa', 'Free Wifi', 'Valley View Restaurant', 'Bonfire', 'Gym', 'Kids Area'],
    description: 'Built as a Victorian estate on the ridge of Mussoorie, the JW Marriott offers breathtaking 180-degree views of the Doon Valley and snow-capped Himalayan peaks. Its heated infinity pool against mountain scenery, three gourmet restaurants, and indulgent spa set a new standard for Uttarakhand luxury.',
    reviews: [
      { author: 'Tanvi Desai', rating: 5, comment: 'The valley views from the pool are insane! Watching clouds drift below us while swimming is an experience unlike anything else. Loved every minute.', date: '2025-01-20' },
      { author: 'Robert Hughes', rating: 4, comment: 'Excellent mountain resort. Rooms are beautiful, food is superb, and the staff incredibly attentive. A bit pricey but worth it for the views.', date: '2024-12-05' }
    ]
  },

  /* ===== SHIMLA ===== */
  {
    id: 'TF-HOTEL-014',
    slug: 'wildflower-hall-shimla',
    name: 'Wildflower Hall',
    destinationSlug: 'shimla',
    destinationName: 'Shimla',
    starRating: 5,
    pricePerNight: 24000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80',
    amenities: ['Heated Pool', 'Spa', 'Free Wifi', 'Fine Dining', 'Cedar Forest', 'Library', 'Jacuzzi'],
    description: 'Set 8,250 feet above sea level in dense cedar forests above Shimla, Wildflower Hall is a former Commander-in-Chief residence transformed into one of Asia\'s great mountain resorts. Its cedar-panelled suites, spectacular snow views, and world-class Oberoi spa draw discerning travellers year-round.',
    reviews: [
      { author: 'Aditi Sharma', rating: 5, comment: 'Simply the most beautiful hotel I\'ve ever seen. Waking up to snow-covered mountains surrounded by cedar forest is pure bliss. Spa is extraordinary.', date: '2025-01-10' },
      { author: 'William Barnes', rating: 5, comment: 'Heritage, luxury, and nature combined flawlessly. The library with its fireplace is perfect on winter evenings. An absolute treasure.', date: '2024-11-18' }
    ]
  },

  /* ===== DARJEELING ===== */
  {
    id: 'TF-HOTEL-015',
    slug: 'mayfair-darjeeling',
    name: 'Mayfair Darjeeling',
    destinationSlug: 'darjeeling',
    destinationName: 'Darjeeling',
    starRating: 5,
    pricePerNight: 11000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
    amenities: ['Spa', 'Free Wifi', 'Himalayan View Restaurant', 'Tea Lounge', 'Garden', 'Helipad', 'Heritage Rooms'],
    description: 'Dating back to 1925, the Mayfair Darjeeling is a grand colonial mansion set amid immaculate gardens with direct views of Kanchenjunga. The elegantly appointed rooms, curated Darjeeling tea experiences, and old-world charm make it the undisputed queen of Darjeeling hospitality.',
    reviews: [
      { author: 'Smriti Roy', rating: 5, comment: 'The Kanchenjunga views from the dining room at breakfast are absolutely magical. The tea lounge with different Darjeeling flushes was a highlight.', date: '2024-10-22' },
      { author: 'Alex Turner', rating: 4, comment: 'Beautiful colonial property with a genuine sense of history. The evening tea ceremony and staff knowledge about Darjeeling tea was very impressive.', date: '2024-09-05' }
    ]
  },

  /* ===== BALI ===== */
  {
    id: 'TF-HOTEL-016',
    slug: 'four-seasons-bali',
    name: 'Four Seasons Bali at Sayan',
    destinationSlug: 'bali',
    destinationName: 'Bali',
    starRating: 5,
    pricePerNight: 55000,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    amenities: ['Infinity Pool', 'Spa', 'Free Wifi', 'Jungle Dining', 'Yoga Pavilion', 'Cooking Class', 'Meditation'],
    description: 'Suspended above the sacred Ayung River gorge amid Ubud\'s jungle canopy, Four Seasons Bali at Sayan is a transcendent experience. Private pool villas sit in terraced rice paddies, the restaurant serves farm-to-table Balinese cuisine, and sunrise yoga on the river deck is transformative.',
    reviews: [
      { author: 'Natasha Iyer', rating: 5, comment: 'The most beautiful hotel on Earth, full stop. Waking up to jungle sounds, the river below, and breakfast floating in a water garden – pure heaven.', date: '2024-12-20' },
      { author: 'Daniel Park', rating: 5, comment: 'The rice terrace villa was beyond any expectation. Cooking class with the chef was the highlight. Will be back for our next anniversary.', date: '2024-11-14' }
    ]
  },
  {
    id: 'TF-HOTEL-017',
    slug: 'alaya-resort-ubud',
    name: 'Alaya Resort Ubud',
    destinationSlug: 'bali',
    destinationName: 'Bali',
    starRating: 4,
    pricePerNight: 18000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1518602164578-cd0074062767?w=800&q=80',
    amenities: ['Pool', 'Spa', 'Free Wifi', 'Rice Field Restaurant', 'Yoga', 'Bicycle Rental', 'Temple Tour'],
    description: 'Beautifully positioned amid Ubud\'s rolling rice terraces, Alaya Resort offers modern Balinese luxury at a more accessible price point. The rice field-facing restaurant, traditional healing spa, and guided rice terrace walks connect guests deeply with authentic Ubud life.',
    reviews: [
      { author: 'Chloe Martin', rating: 5, comment: 'Breakfast overlooking the rice fields with the sound of roosters and gamelan music – I could have stayed forever. Beautiful, peaceful, magical.', date: '2024-08-28' },
      { author: 'Ben Nakamura', rating: 4, comment: 'Excellent mid-luxury option in Ubud. Great pool, helpful staff, amazing food. The cycling tour to local temples was superb.', date: '2024-07-15' }
    ]
  },

  /* ===== MALDIVES ===== */
  {
    id: 'TF-HOTEL-018',
    slug: 'soneva-jani-maldives',
    name: 'Soneva Jani',
    destinationSlug: 'maldives',
    destinationName: 'Maldives',
    starRating: 5,
    pricePerNight: 120000,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80',
    amenities: ['Private Pool', 'Overwater Villa', 'Spa', 'Free Wifi', 'Observatory', 'Snorkeling', 'Seaplane'],
    description: 'On the secluded Noonu Atoll, Soneva Jani is the definitive Maldives ultra-luxury escape. Overwater villas with retractable roofs for stargazing, an underground cave restaurant, a resident astronomer, and a House of Imagination for children define a benchmark in bespoke luxury hospitality.',
    reviews: [
      { author: 'Isha Patel', rating: 5, comment: 'The most exceptional holiday of our lives. Sliding open the bedroom roof to stargaze from the bed, swimming with sharks from our deck – truly once-in-a-lifetime.', date: '2024-12-28' },
      { author: 'François Leblanc', rating: 5, comment: 'Soneva Jani is beyond luxury – it is a completely different category of travel. The personal butler, stargazing session, and marine biologist guide were extraordinary.', date: '2024-11-22' }
    ]
  },

  /* ===== THAILAND ===== */
  {
    id: 'TF-HOTEL-019',
    slug: 'amanpuri-phuket',
    name: 'Amanpuri Phuket',
    destinationSlug: 'thailand',
    destinationName: 'Thailand',
    starRating: 5,
    pricePerNight: 75000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    amenities: ['Private Pool', 'Spa', 'Free Wifi', 'Beach Club', 'Water Sports', 'Yacht Charter', 'Fine Dining'],
    description: 'Aman\'s very first resort, Amanpuri stands on a private peninsula on Phuket\'s west coast in a sea of coconut palms. Its Thai pavilion architecture, fleet of luxury boats, and an extraordinary spa drawing on ancient Thai healing traditions make it the timeless standard of Thai luxury.',
    reviews: [
      { author: 'Sophie Anderson', rating: 5, comment: 'Aman delivers perfection as always. The private beach pavilion, the exceptional Thai spa, the intimate dining – no detail is too small for them.', date: '2024-10-10' },
      { author: 'George Li', rating: 5, comment: 'The yacht charter to Phang Nga Bay was the experience of a lifetime. Amanpuri is for those who want the very best of Thailand.', date: '2024-09-20' }
    ]
  },
  {
    id: 'TF-HOTEL-020',
    slug: 'anantara-riverside-bangkok',
    name: 'Anantara Riverside Bangkok',
    destinationSlug: 'thailand',
    destinationName: 'Thailand',
    starRating: 5,
    pricePerNight: 18000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
    amenities: ['Pool', 'Spa', 'Free Wifi', 'River Dining', 'Thai Cooking Class', 'Shuttle Boat', 'Gym'],
    description: 'Set on the west bank of the Chao Phraya River with stunning views of Bangkok\'s skyline, Anantara Riverside is a tropical garden resort within the city. The award-winning Mandara Spa, riverside restaurants, and complimentary shuttle boats to the city\'s key attractions are standout features.',
    reviews: [
      { author: 'Jessica Wong', rating: 4, comment: 'Perfect balance of tranquillity and city access. The river ferry to the Grand Palace is so convenient. Pool and gardens are beautiful.', date: '2024-08-30' },
      { author: 'Marco Rossi', rating: 5, comment: 'The Thai cooking class was brilliant and the river-view dinner was spectacular. Great hotel to decompress between temple visits.', date: '2024-07-25' }
    ]
  },

  /* ===== SINGAPORE ===== */
  {
    id: 'TF-HOTEL-021',
    slug: 'marina-bay-sands-singapore',
    name: 'Marina Bay Sands',
    destinationSlug: 'singapore',
    destinationName: 'Singapore',
    starRating: 5,
    pricePerNight: 55000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    amenities: ['Infinity Pool', 'Casino', 'Free Wifi', 'Celebrity Restaurants', 'SkyPark', 'Gym', 'Spa'],
    description: 'An iconic triple-tower architectural marvel crowned by the world-famous SkyPark and its 150-metre infinity pool. Marina Bay Sands is less a hotel and more a city-within-a-city, housing celebrity-chef restaurants by Wolfgang Puck and Daniel Boulud, luxury shopping, and unparalleled views of Singapore.',
    reviews: [
      { author: 'Pradeep Kumar', rating: 5, comment: 'The infinity pool on the 57th floor overlooking the Singapore skyline is bucket-list material. The hotel is incredible on every level.', date: '2025-01-08' },
      { author: 'Claire Dupont', rating: 4, comment: 'Spectacular views and an iconic experience. The pool is everything you imagine. Pricey but worth doing at least once in your life.', date: '2024-12-12' }
    ]
  },

  /* ===== DUBAI ===== */
  {
    id: 'TF-HOTEL-022',
    slug: 'burj-al-arab-dubai',
    name: 'Burj Al Arab Jumeirah',
    destinationSlug: 'dubai',
    destinationName: 'Dubai',
    starRating: 5,
    pricePerNight: 150000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80',
    amenities: ['Private Butler', 'Helipad', 'Free Wifi', 'Underwater Restaurant', 'Private Beach', 'Rolls Royce', 'Spa'],
    description: 'The only 7-star hotel in the world, the Burj Al Arab stands on its own man-made island off Dubai\'s coast as the ultimate symbol of Arabian luxury. Duplex suites with personal butlers, a submarine-themed restaurant Al Mahara, and Rolls-Royce transfers define an experience without equal.',
    reviews: [
      { author: 'Siddharth Malhotra', rating: 5, comment: 'The most extraordinary hotel stay imaginable. Every superlative falls short. The underwater restaurant, the butler service, the gold-plated everything – truly surreal.', date: '2024-12-25' },
      { author: 'Christine Mueller', rating: 5, comment: 'A once-in-a-lifetime splurge fully justified. Waking up to the Arabian Gulf in a two-storey suite with a butler is an experience I\'ll treasure forever.', date: '2024-11-10' }
    ]
  },
  {
    id: 'TF-HOTEL-023',
    slug: 'atlantis-the-palm-dubai',
    name: 'Atlantis The Palm',
    destinationSlug: 'dubai',
    destinationName: 'Dubai',
    starRating: 5,
    pricePerNight: 35000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    amenities: ['Aquaventure Waterpark', 'Private Beach', 'Free Wifi', 'Aquarium', 'Kids Club', 'Spa', 'Casino'],
    description: 'Dubai\'s legendary resort on the Palm Jumeirah is a world unto itself. The Lost Chambers Aquarium, Aquaventure Waterpark, 17 restaurants and bars, and 800 metres of private beach make Atlantis the definitive family and adventure resort in the Middle East.',
    reviews: [
      { author: 'Neha Goyal', rating: 5, comment: 'Kids had the time of their lives at Aquaventure! Adults loved the beach and the incredible restaurants. This place simply has everything.', date: '2025-01-05' },
      { author: 'Ryan O\'Brien', rating: 4, comment: 'Massive resort that delivers on the hype. The waterpark is world-class. Can feel crowded during peak times but staff manage it well.', date: '2024-12-08' }
    ]
  },

  /* ===== PARIS ===== */
  {
    id: 'TF-HOTEL-024',
    slug: 'le-bristol-paris',
    name: 'Le Bristol Paris',
    destinationSlug: 'paris',
    destinationName: 'Paris',
    starRating: 5,
    pricePerNight: 95000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    amenities: ['Rooftop Pool', 'Spa', 'Free Wifi', '3-Michelin Star Restaurant', 'Garden', 'Concierge', 'Art Collection'],
    description: 'On the prestigious Rue du Faubourg Saint-Honoré, Le Bristol Paris is one of the grande dames of Parisian palace hotels. Épicure, its three-Michelin-star restaurant, the rooftop garden pool overlooking Paris rooftops, and rooms furnished with 18th-century French antiques define timeless Parisian excellence.',
    reviews: [
      { author: 'Anjali Mehta', rating: 5, comment: 'Dining at Épicure was a religious experience. The service throughout is genuinely the best I\'ve encountered anywhere in the world. Paris in excelsis.', date: '2024-10-18' },
      { author: 'Antoine Moreau', rating: 5, comment: 'The epitome of Parisian luxury. The rooftop pool with Montmartre views, the extraordinary concierge, the art throughout – flawless.', date: '2024-09-02' }
    ]
  },

  /* ===== SWITZERLAND ===== */
  {
    id: 'TF-HOTEL-025',
    slug: 'badrutt-palace-stmoritz',
    name: "Badrutt's Palace Hotel",
    destinationSlug: 'switzerland',
    destinationName: 'Switzerland',
    starRating: 5,
    pricePerNight: 110000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    amenities: ['Ski In/Out', 'Spa', 'Free Wifi', 'Ice Rink', 'Lake View', 'Fine Dining', 'Curling Club'],
    description: 'Towering above the glacier lake of St. Moritz since 1896, Badrutt\'s Palace is the birthplace of winter tourism. This iconic Swiss palace offers ski-in/ski-out access to the Engadin slopes, a private ice rink, legendary King\'s Club nightclub, and seven restaurants of global distinction.',
    reviews: [
      { author: 'Rohit Kapoor', rating: 5, comment: 'The definition of luxury alpine living. Skiing out of the hotel door, the ice rink, the gourmet dining – this is why St. Moritz is legendary.', date: '2025-01-18' },
      { author: 'Isabella Ferrari', rating: 5, comment: 'We\'ve been coming every winter for five years. Badrutt\'s consistency is remarkable. The spa after skiing is absolute heaven.', date: '2024-12-30' }
    ]
  },
  {
    id: 'TF-HOTEL-026',
    slug: 'victoria-jungfrau-interlaken',
    name: 'Victoria-Jungfrau Grand Hotel',
    destinationSlug: 'switzerland',
    destinationName: 'Switzerland',
    starRating: 5,
    pricePerNight: 65000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    amenities: ['Spa', 'Free Wifi', 'Eiger View Pool', 'Fine Dining', 'Tennis', 'Golf', 'Helicopter Excursions'],
    description: 'A 19th-century grand hotel facing the iconic Eiger, Mönch, and Jungfrau peaks in Interlaken, the Victoria-Jungfrau is the heart of Swiss mountain hospitality. Its 3,600 sq m spa, Belle Époque architecture, and position as the gateway to the Jungfraujoch make it legendary.',
    reviews: [
      { author: 'Pooja Verma', rating: 5, comment: 'The view of the Jungfrau from the breakfast table is staggering. Historic grandeur and modern comfort in perfect balance. The spa is enormous and wonderful.', date: '2024-11-28' },
      { author: 'Peter Hoffmann', rating: 4, comment: 'Wonderful historic property. The Belle Époque architecture is stunning. Spa is exceptional. One of Switzerland\'s finest addresses.', date: '2024-10-12' }
    ]
  },

  /* ===== LONDON ===== */
  {
    id: 'TF-HOTEL-027',
    slug: 'the-savoy-london',
    name: 'The Savoy London',
    destinationSlug: 'london',
    destinationName: 'London',
    starRating: 5,
    pricePerNight: 80000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    amenities: ['Pool', 'Spa', 'Free Wifi', 'Gordon Ramsay Restaurant', 'Thames View', 'Art Deco Bar', 'Butlers'],
    description: 'Since 1889, The Savoy has been London\'s most iconic address — an Art Deco and Edwardian masterpiece where Winston Churchill, Frank Sinatra, and Marilyn Monroe once stayed. Gordon Ramsay\'s restaurant, the legendary American Bar, and Thames-view suites continue its incomparable legacy.',
    reviews: [
      { author: 'Pooja Krishnan', rating: 5, comment: 'A piece of living history. Afternoon Tea at the Savoy is the quintessential London experience. Gordon Ramsay\'s restaurant exceeded all expectations.', date: '2024-11-15' },
      { author: 'Callum Fraser', rating: 4, comment: 'The Art Deco design is genuinely breathtaking. The American Bar makes the best martini in London. Worth every penny for a special occasion.', date: '2024-09-18' }
    ]
  },

  /* ===== GREECE ===== */
  {
    id: 'TF-HOTEL-028',
    slug: 'canaves-oia-santorini',
    name: 'Canaves Oia Suites',
    destinationSlug: 'greece',
    destinationName: 'Greece',
    starRating: 5,
    pricePerNight: 65000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    amenities: ['Infinity Pool', 'Spa', 'Free Wifi', 'Caldera View Dining', 'Private Terrace', 'Wine Cave', 'Butler'],
    description: 'Carved into the volcanic caldera cliffs of Oia, Canaves Oia Suites offers the most celebrated views in Santorini. Its infinity pools appear to merge with the sapphire Aegean below, while cave wine dinners, private terraces, and the legendary Santorini sunset create the ultimate Greek island romance.',
    reviews: [
      { author: 'Riya Bose', rating: 5, comment: 'The caldera view from our suite terrace took our breath away every single morning. The sunset from the infinity pool is simply the most beautiful sight on Earth.', date: '2024-09-22' },
      { author: 'Lucas Fernandez', rating: 5, comment: 'The wine cave dinner was one of the most romantic experiences of my life. Cave suites are surprisingly spacious. An absolute dream hotel.', date: '2024-08-15' }
    ]
  },

  /* ===== NEW YORK ===== */
  {
    id: 'TF-HOTEL-029',
    slug: 'the-plaza-new-york',
    name: 'The Plaza New York',
    destinationSlug: 'new-york',
    destinationName: 'New York City',
    starRating: 5,
    pricePerNight: 85000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1576354302919-96748cb8299e?w=800&q=80',
    amenities: ['Spa', 'Free Wifi', 'Central Park View', 'Todd English Food Hall', 'Concierge', 'Gym', 'Butler'],
    description: 'Anchoring the southeast corner of Central Park since 1907, The Plaza is New York\'s most legendary address. Its French Renaissance architecture, the iconic Palm Court afternoon tea, Central Park-view suites, and proximity to 5th Avenue define the pinnacle of New York luxury.',
    reviews: [
      { author: 'Asha Nambiar', rating: 5, comment: 'The Plaza is New York in one hotel. Central Park from our suite window, the Palm Court tea, shopping on 5th Avenue steps away – classic perfection.', date: '2024-12-22' },
      { author: 'Steven Brooks', rating: 5, comment: 'Staying at The Plaza is a New York rite of passage. The history, the elegance, the incomparable location – everything exceeded our expectations.', date: '2024-11-06' }
    ]
  },
  {
    id: 'TF-HOTEL-030',
    slug: 'the-high-line-hotel-nyc',
    name: 'The High Line Hotel',
    destinationSlug: 'new-york',
    destinationName: 'New York City',
    starRating: 4,
    pricePerNight: 35000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80',
    amenities: ['Garden Courtyard', 'Free Wifi', 'Café Integral', 'Concierge', 'Bicycle Rental', 'Gothic Architecture'],
    description: 'Housed in a landmarked 1895 Gothic-Revival seminary building alongside New York\'s celebrated High Line park in Chelsea, The High Line Hotel is a boutique gem beloved by the creative set. Its cobblestone courtyard, original stained glass, and proximity to NYC\'s gallery district make it uniquely New York.',
    reviews: [
      { author: 'Karan Shah', rating: 4, comment: 'Such a unique property – the Gothic seminary architecture with exposed brick and original stained glass is incredibly cool. Great Chelsea location for art lovers.', date: '2024-10-08' },
      { author: 'Amy Johnson', rating: 5, comment: 'My favourite hotel in NYC for character. The courtyard garden is magical and the High Line is right outside. Genuinely special and different.', date: '2024-09-12' }
    ]
  }
];
