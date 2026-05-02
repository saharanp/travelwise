/* TravelWise – Entity ID Mapping & Data Layer Helpers
   ─────────────────────────────────────────────────────
   ENTITY_MAP: canonical slug → TF-DEST-XXX / TF-HOTEL-XXX IDs
   window.travelwise: helper namespace consumed by app.js router
   and (later) by Adobe Launch rules that read window.digitalData.

   DO NOT add Adobe Target / Launch code here.
   These helpers only build the data layer and expose utility fns. */

/* ── Slug → Entity ID mapping ── */
const ENTITY_MAP = {
  destinations: {
    'goa':          'TF-DEST-001',
    'manali':       'TF-DEST-002',
    'kerala':       'TF-DEST-003',
    'rajasthan':    'TF-DEST-004',
    'kashmir':      'TF-DEST-005',
    'andaman':      'TF-DEST-006',
    'ladakh':       'TF-DEST-007',
    'mussoorie':    'TF-DEST-008',
    'shimla':       'TF-DEST-009',
    'darjeeling':   'TF-DEST-010',
    'bali':         'TF-DEST-011',
    'maldives':     'TF-DEST-012',
    'thailand':     'TF-DEST-013',
    'singapore':    'TF-DEST-014',
    'dubai':        'TF-DEST-015',
    'paris':        'TF-DEST-016',
    'switzerland':  'TF-DEST-017',
    'london':       'TF-DEST-018',
    'greece':       'TF-DEST-019',
    'new-york':     'TF-DEST-020'
  },
  hotels: {
    'taj-exotica-goa':             'TF-HOTEL-001',
    'park-hyatt-goa':              'TF-HOTEL-002',
    'span-resort-manali':          'TF-HOTEL-003',
    'solang-valley-resort':        'TF-HOTEL-004',
    'kumarakom-lake-resort':       'TF-HOTEL-005',
    'coconut-lagoon-kerala':       'TF-HOTEL-006',
    'rambagh-palace-jaipur':       'TF-HOTEL-007',
    'taj-lake-palace-udaipur':     'TF-HOTEL-008',
    'vivanta-dal-view-srinagar':   'TF-HOTEL-009',
    'taj-exotica-andaman':         'TF-HOTEL-010',
    'barefoot-havelock':           'TF-HOTEL-011',
    'the-grand-dragon-ladakh':     'TF-HOTEL-012',
    'jw-marriott-mussoorie':       'TF-HOTEL-013',
    'wildflower-hall-shimla':      'TF-HOTEL-014',
    'mayfair-darjeeling':          'TF-HOTEL-015',
    'four-seasons-bali':           'TF-HOTEL-016',
    'alaya-resort-ubud':           'TF-HOTEL-017',
    'soneva-jani-maldives':        'TF-HOTEL-018',
    'amanpuri-phuket':             'TF-HOTEL-019',
    'anantara-riverside-bangkok':  'TF-HOTEL-020',
    'marina-bay-sands-singapore':  'TF-HOTEL-021',
    'burj-al-arab-dubai':          'TF-HOTEL-022',
    'atlantis-the-palm-dubai':     'TF-HOTEL-023',
    'le-bristol-paris':            'TF-HOTEL-024',
    'badrutt-palace-stmoritz':     'TF-HOTEL-025',
    'victoria-jungfrau-interlaken':'TF-HOTEL-026',
    'the-savoy-london':            'TF-HOTEL-027',
    'canaves-oia-santorini':       'TF-HOTEL-028',
    'the-plaza-new-york':          'TF-HOTEL-029',
    'the-high-line-hotel-nyc':     'TF-HOTEL-030'
  }
};

/* ── window.travelwise namespace ── */
window.travelwise = window.travelwise || {};

/* Returns the TF-DEST-XXX or TF-HOTEL-XXX entity ID for the current path.
   Returns null on non-detail pages. Used in pagechange event detail. */
window.travelwise.getEntityId = function(path) {
  if (path.startsWith('/destinations/')) {
    const slug = path.replace('/destinations/', '').replace(/\/$/, '');
    return ENTITY_MAP.destinations[slug] || null;
  }
  if (path.startsWith('/hotels/')) {
    const slug = path.replace('/hotels/', '').replace(/\/$/, '');
    return ENTITY_MAP.hotels[slug] || null;
  }
  return null;
};

/* Returns a stable page-type string for every route.
   Adobe Launch rules use this value to scope activities. */
window.travelwise.getPageType = function(path) {
  if (path === '/' || path === '/index.html') return 'home';
  if (path === '/destinations')               return 'destinations-list';
  if (path.startsWith('/destinations/'))      return 'destination-detail';
  if (path === '/hotels')                     return 'hotels-list';
  if (path.startsWith('/hotels/'))            return 'hotel-detail';
  if (path === '/about')                      return 'about';
  if (path === '/contact')                    return 'contact';
  return 'unknown';
};

/* Builds and writes window.digitalData for the current route.
   Call this BEFORE dispatching the pagechange event so Launch
   always reads an up-to-date data layer. */
window.travelwise.updateDataLayer = function() {
  const path     = window.location.pathname;
  const pageType = window.travelwise.getPageType(path);

  /* ── subCategory ── */
  let subCategory = 'info';
  if (pageType === 'home')                                      subCategory = 'home';
  if (pageType === 'destinations-list' || pageType === 'destination-detail') subCategory = 'destinations';
  if (pageType === 'hotels-list'       || pageType === 'hotel-detail')       subCategory = 'hotels';

  /* ── Page name ── */
  const pageNames = {
    'home':              'TravelWise Home',
    'destinations-list': 'Destinations',
    'hotels-list':       'Hotels',
    'about':             'About TravelWise',
    'contact':           'Contact TravelWise'
  };
  let pageName = pageNames[pageType] || 'TravelWise';

  /* ── Destination context (populated on detail pages only) ── */
  let destinationData = {
    id: null, slug: null, name: null,
    region: null, type: null, price: null, rating: null
  };
  if (pageType === 'destination-detail') {
    const slug = path.replace('/destinations/', '').replace(/\/$/, '');
    const dest = (typeof destinations !== 'undefined')
      ? destinations.find(d => d.slug === slug)
      : null;
    if (dest) {
      destinationData = {
        id:     ENTITY_MAP.destinations[slug] || null,
        slug:   dest.slug,
        name:   dest.name,
        region: dest.region,
        type:   dest.type,
        price:  dest.startingPrice,
        rating: dest.rating
      };
      pageName = 'Destination Detail - ' + dest.name;
    }
  }

  /* ── Hotel context (populated on detail pages only) ── */
  let hotelData = {
    id: null, slug: null, name: null,
    destinationSlug: null, starRating: null, pricePerNight: null, rating: null
  };
  if (pageType === 'hotel-detail') {
    const slug = path.replace('/hotels/', '').replace(/\/$/, '');
    const hotel = (typeof hotels !== 'undefined')
      ? hotels.find(h => h.slug === slug)
      : null;
    if (hotel) {
      hotelData = {
        id:              ENTITY_MAP.hotels[slug] || null,
        slug:            hotel.slug,
        name:            hotel.name,
        destinationSlug: hotel.destinationSlug,
        starRating:      hotel.starRating,
        pricePerNight:   hotel.pricePerNight,
        rating:          hotel.rating
      };
      pageName = 'Hotel Detail - ' + hotel.name;
    }
  }

  /* ── User context from sessionStorage ── */
  let userData = {
    isLoggedIn: false, userId: null, name: null,
    loyaltyTier: null, memberSince: null,
    totalBookings: null, favoriteDestination: null
  };
  try {
    if (sessionStorage.getItem('travelwise_logged_in') === 'true') {
      const stored = JSON.parse(sessionStorage.getItem('travelwise_user') || 'null');
      if (stored) {
        userData = {
          isLoggedIn:          true,
          userId:              stored.userId,
          name:                stored.name,
          loyaltyTier:         stored.tier,
          memberSince:         stored.memberSince,
          totalBookings:       stored.totalBookings,
          favoriteDestination: stored.favoriteDestination
        };
      }
    }
  } catch (e) { /* sessionStorage unavailable */ }

  /* ── Write the full digital data layer ── */
  window.digitalData = {
    page: {
      pageInfo: {
        pageType:  pageType,
        pageName:  pageName,
        pageURL:   window.location.href,
        pagePath:  path,
        pageTitle: document.title,
        timestamp: new Date().toISOString()
      },
      category: {
        primaryCategory: 'travel',
        subCategory:     subCategory
      }
    },
    user:        userData,
    destination: destinationData,
    hotel:       hotelData,
    site: {
      siteName:    'TravelWise',
      environment: 'production'
    }
  };
};
