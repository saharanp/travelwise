/* TravelWise – Demo users for login simulator (30 users)
   Any password is accepted (demo only).
   User state is persisted in sessionStorage after login.
   Tiers: Silver (10) · Gold (10) · Platinum (10) */

const TRAVELWISE_USERS = [

  /* ═══════════════════════════════
     SILVER TIER  (USR_SILVER_001–010)
     ═══════════════════════════════ */
  {
    userId: 'USR_SILVER_001',
    name: 'Rahul Kumar',
    tier: 'Silver',
    memberSince: '2024-03-15',
    totalBookings: 2,
    lifetimeSpend: 15000,
    homeCity: 'Delhi',
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_SILVER_002',
    name: 'Priya Sharma',
    tier: 'Silver',
    memberSince: '2024-08-22',
    totalBookings: 1,
    lifetimeSpend: 8000,
    homeCity: 'Mumbai',
    favoriteDestination: 'Mountain'
  },
  {
    userId: 'USR_SILVER_003',
    name: 'Kiran Rao',
    tier: 'Silver',
    memberSince: '2024-01-10',
    totalBookings: 3,
    lifetimeSpend: 22000,
    homeCity: 'Chennai',
    favoriteDestination: 'City'
  },
  {
    userId: 'USR_SILVER_004',
    name: 'Arjun Nair',
    tier: 'Silver',
    memberSince: '2024-05-20',
    totalBookings: 2,
    lifetimeSpend: 17500,
    homeCity: 'Kochi',
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_SILVER_005',
    name: 'Deepa Iyer',
    tier: 'Silver',
    memberSince: '2024-09-14',
    totalBookings: 1,
    lifetimeSpend: 9500,
    homeCity: 'Hyderabad',
    favoriteDestination: 'Mountain'
  },
  {
    userId: 'USR_SILVER_006',
    name: 'Rohan Gupta',
    tier: 'Silver',
    memberSince: '2023-11-05',
    totalBookings: 4,
    lifetimeSpend: 28000,
    homeCity: 'Jaipur',
    favoriteDestination: 'Adventure'
  },
  {
    userId: 'USR_SILVER_007',
    name: 'Sneha Mishra',
    tier: 'Silver',
    memberSince: '2024-07-18',
    totalBookings: 2,
    lifetimeSpend: 13000,
    homeCity: 'Kolkata',
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_SILVER_008',
    name: 'Aditya Joshi',
    tier: 'Silver',
    memberSince: '2025-02-28',
    totalBookings: 1,
    lifetimeSpend: 7500,
    homeCity: 'Pune',
    favoriteDestination: 'City'
  },
  {
    userId: 'USR_SILVER_009',
    name: 'Pooja Singh',
    tier: 'Silver',
    memberSince: '2024-04-12',
    totalBookings: 3,
    lifetimeSpend: 19000,
    homeCity: 'Lucknow',
    favoriteDestination: 'Mountain'
  },
  {
    userId: 'USR_SILVER_010',
    name: 'Manish Tiwari',
    tier: 'Silver',
    memberSince: '2024-06-30',
    totalBookings: 2,
    lifetimeSpend: 14500,
    homeCity: 'Bhopal',
    favoriteDestination: 'Beach'
  },

  /* ═══════════════════════════════
     GOLD TIER  (USR_GOLD_001–010)
     ═══════════════════════════════ */
  {
    userId: 'USR_GOLD_001',
    name: 'Amit Verma',
    tier: 'Gold',
    memberSince: '2022-11-10',
    totalBookings: 5,
    lifetimeSpend: 54000,
    homeCity: 'Bangalore',
    favoriteDestination: 'Luxury'
  },
  {
    userId: 'USR_GOLD_002',
    name: 'Sneha Patel',
    tier: 'Gold',
    memberSince: '2023-02-05',
    totalBookings: 4,
    lifetimeSpend: 38000,
    homeCity: 'Pune',
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_GOLD_003',
    name: 'Neha Kapoor',
    tier: 'Gold',
    memberSince: '2022-08-15',
    totalBookings: 7,
    lifetimeSpend: 72000,
    homeCity: 'Delhi',
    favoriteDestination: 'International'
  },
  {
    userId: 'USR_GOLD_004',
    name: 'Suresh Reddy',
    tier: 'Gold',
    memberSince: '2023-04-22',
    totalBookings: 6,
    lifetimeSpend: 65000,
    homeCity: 'Hyderabad',
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_GOLD_005',
    name: 'Kavita Menon',
    tier: 'Gold',
    memberSince: '2022-06-10',
    totalBookings: 8,
    lifetimeSpend: 88000,
    homeCity: 'Bangalore',
    favoriteDestination: 'Mountain'
  },
  {
    userId: 'USR_GOLD_006',
    name: 'Rajesh Pillai',
    tier: 'Gold',
    memberSince: '2023-07-18',
    totalBookings: 5,
    lifetimeSpend: 52000,
    homeCity: 'Chennai',
    favoriteDestination: 'City'
  },
  {
    userId: 'USR_GOLD_007',
    name: 'Ananya Bose',
    tier: 'Gold',
    memberSince: '2022-03-25',
    totalBookings: 9,
    lifetimeSpend: 95000,
    homeCity: 'Kolkata',
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_GOLD_008',
    name: 'Vikash Kumar',
    tier: 'Gold',
    memberSince: '2023-01-14',
    totalBookings: 6,
    lifetimeSpend: 68000,
    homeCity: 'Patna',
    favoriteDestination: 'Adventure'
  },
  {
    userId: 'USR_GOLD_009',
    name: 'Meera Nambiar',
    tier: 'Gold',
    memberSince: '2022-10-08',
    totalBookings: 7,
    lifetimeSpend: 76000,
    homeCity: 'Thiruvananthapuram',
    favoriteDestination: 'Mountain'
  },
  {
    userId: 'USR_GOLD_010',
    name: 'Sanjay Sharma',
    tier: 'Gold',
    memberSince: '2023-09-30',
    totalBookings: 5,
    lifetimeSpend: 58000,
    homeCity: 'Ahmedabad',
    favoriteDestination: 'International'
  },

  /* ═══════════════════════════════════
     PLATINUM TIER  (USR_PLATINUM_001–010)
     ═══════════════════════════════════ */
  {
    userId: 'USR_PLATINUM_001',
    name: 'Vikram Singh',
    tier: 'Platinum',
    memberSince: '2020-06-18',
    totalBookings: 12,
    lifetimeSpend: 180000,
    homeCity: 'Mumbai',
    favoriteDestination: 'International'
  },
  {
    userId: 'USR_PLATINUM_002',
    name: 'Anita Desai',
    tier: 'Platinum',
    memberSince: '2019-09-03',
    totalBookings: 15,
    lifetimeSpend: 225000,
    homeCity: 'Delhi',
    favoriteDestination: 'Luxury'
  },
  {
    userId: 'USR_PLATINUM_003',
    name: 'Rajan Malhotra',
    tier: 'Platinum',
    memberSince: '2019-03-12',
    totalBookings: 18,
    lifetimeSpend: 285000,
    homeCity: 'Mumbai',
    favoriteDestination: 'International'
  },
  {
    userId: 'USR_PLATINUM_004',
    name: 'Sunita Agarwal',
    tier: 'Platinum',
    memberSince: '2020-01-25',
    totalBookings: 14,
    lifetimeSpend: 210000,
    homeCity: 'Delhi',
    favoriteDestination: 'Luxury'
  },
  {
    userId: 'USR_PLATINUM_005',
    name: 'Karthik Subramanian',
    tier: 'Platinum',
    memberSince: '2018-11-07',
    totalBookings: 22,
    lifetimeSpend: 380000,
    homeCity: 'Bangalore',
    favoriteDestination: 'International'
  },
  {
    userId: 'USR_PLATINUM_006',
    name: 'Divya Krishnaswamy',
    tier: 'Platinum',
    memberSince: '2019-06-20',
    totalBookings: 16,
    lifetimeSpend: 260000,
    homeCity: 'Chennai',
    favoriteDestination: 'Luxury'
  },
  {
    userId: 'USR_PLATINUM_007',
    name: 'Ashok Mehta',
    tier: 'Platinum',
    memberSince: '2018-04-15',
    totalBookings: 25,
    lifetimeSpend: 420000,
    homeCity: 'Mumbai',
    favoriteDestination: 'International'
  },
  {
    userId: 'USR_PLATINUM_008',
    name: 'Prerna Saxena',
    tier: 'Platinum',
    memberSince: '2019-12-10',
    totalBookings: 19,
    lifetimeSpend: 310000,
    homeCity: 'Delhi',
    favoriteDestination: 'Luxury'
  },
  {
    userId: 'USR_PLATINUM_009',
    name: 'Naresh Choudhary',
    tier: 'Platinum',
    memberSince: '2018-08-22',
    totalBookings: 20,
    lifetimeSpend: 345000,
    homeCity: 'Jaipur',
    favoriteDestination: 'International'
  },
  {
    userId: 'USR_PLATINUM_010',
    name: 'Lakshmi Venkatesh',
    tier: 'Platinum',
    memberSince: '2020-03-05',
    totalBookings: 17,
    lifetimeSpend: 275000,
    homeCity: 'Bangalore',
    favoriteDestination: 'Luxury'
  }
];
