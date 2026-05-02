/* TravelWise – Demo users for login simulator
   Used by the login modal to authenticate against userId.
   Any password is accepted (demo only).
   User state is persisted in sessionStorage after login. */

const TRAVELWISE_USERS = [
  /* ── Silver Tier ── */
  {
    userId: 'USR_SILVER_001',
    name: 'Rahul Kumar',
    tier: 'Silver',
    memberSince: '2024-06-15',
    totalBookings: 3,
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_SILVER_002',
    name: 'Priya Sharma',
    tier: 'Silver',
    memberSince: '2024-08-20',
    totalBookings: 2,
    favoriteDestination: 'Mountain'
  },

  /* ── Gold Tier ── */
  {
    userId: 'USR_GOLD_001',
    name: 'Amit Verma',
    tier: 'Gold',
    memberSince: '2023-03-10',
    totalBookings: 12,
    favoriteDestination: 'Beach'
  },
  {
    userId: 'USR_GOLD_002',
    name: 'Sneha Patel',
    tier: 'Gold',
    memberSince: '2023-05-22',
    totalBookings: 15,
    favoriteDestination: 'City'
  },

  /* ── Platinum Tier ── */
  {
    userId: 'USR_PLATINUM_001',
    name: 'Vikram Singh',
    tier: 'Platinum',
    memberSince: '2022-01-15',
    totalBookings: 35,
    favoriteDestination: 'Adventure'
  },
  {
    userId: 'USR_PLATINUM_002',
    name: 'Anita Desai',
    tier: 'Platinum',
    memberSince: '2021-09-08',
    totalBookings: 42,
    favoriteDestination: 'International'
  }
];
