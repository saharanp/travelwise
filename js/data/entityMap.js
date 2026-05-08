/* TravelWise – Data Layer Helpers
   ─────────────────────────────────────────────────────
   ENTITY_MAP, getEntityId, and getPageType are defined in an inline
   <head> script in index.html so they are available before at.js fires.
   This file only contains updateDataLayer, which depends on the data
   arrays (destinations, hotels) loaded via separate body scripts.

   DO NOT add Adobe Target / Launch code here. */

/* ── window.travelwise namespace (already created in <head>) ── */
window.travelwise = window.travelwise || {};

/* Builds and writes window.digitalData for the current route.
   Call this BEFORE dispatching the pagechange event so Launch
   always reads an up-to-date data layer. */
window.travelwise.updateDataLayer = function(path) {
  path = path || window.location.pathname;
  const pageType = window.travelwise.getPageType(path);

  /* ── subCategory ── */
  let subCategory = 'info';
  if (pageType === 'home')                                              subCategory = 'home';
  if (pageType === 'destinations-listing' || pageType === 'destination-detail') subCategory = 'destinations';
  if (pageType === 'hotels-listing'       || pageType === 'hotel-detail')       subCategory = 'hotels';

  /* ── Page name ── */
  const pageNames = {
    'home':                 'TravelWise Home',
    'destinations-listing': 'Destinations',
    'hotels-listing':       'Hotels',
    'about':                'About TravelWise',
    'contact':              'Contact TravelWise'
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
