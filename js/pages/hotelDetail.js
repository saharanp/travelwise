/* TravelWise – Hotel Detail page */

function renderHotelDetail(slug) {
  const hotel = hotels.find(h => h.slug === slug);

  if (!hotel) {
    render404('hotel');
    return;
  }

  document.title = `${hotel.name} – TravelWise`;

  const price    = hotel.pricePerNight.toLocaleString('en-IN');
  const starStr  = '★'.repeat(hotel.starRating) + '☆'.repeat(5 - hotel.starRating);
  const dest     = destinations.find(d => d.slug === hotel.destinationSlug);

  const amenityIcons = {
    'Pool': '🏊', 'Spa': '💆', 'Free Wifi': '📶', 'Restaurant': '🍽',
    'Fine Dining': '🍽', 'Gym': '💪', 'Beach Access': '🏖', 'Private Beach': '🏖',
    'Water Sports': '🚣', 'Kids Club': '🧸', 'Tennis Court': '🎾', 'Golf': '⛳',
    'Bar': '🍸', 'Butler Service': '🛎', 'Helipad': '🚁', 'Ski In/Out': '⛷',
    'Casino': '🎰', 'Observatory': '🔭', 'Yoga': '🧘', 'Meditation': '🕯',
    'Cooking Class': '👨‍🍳', 'Bicycle Rental': '🚲', 'Tour Desk': '🗺',
    'Airport Shuttle': '🚌', 'Overwater Villa': '🛖', 'Seaplane': '✈',
    'Private Pool': '🏊', 'Infinity Pool': '🏊', 'Rooftop Pool': '🏊',
    'Heated Pool': '🌡', 'Lake View': '🏞', 'River View Restaurant': '🍽',
    'Cave Dining': '🕯', 'Wine Cave': '🍷', 'Concierge': '🛎',
    'Dive Centre': '🤿', 'Snorkeling': '🐠', 'Kayaking': '🛶', 'Eco Cottages': '🌿',
    'Bonfire': '🔥', 'Bonfire Area': '🔥', 'Heritage Rooms': '🏛', 'Library': '📚',
    'Art Collection': '🖼', 'Jacuzzi': '🛁', 'Curling Club': '🥌',
    'Houseboat': '⛵', 'Bird Watching': '🦜', 'Canoe': '🛶',
    'Cultural Shows': '🎭', 'Boat Transfers': '⛵', 'Yacht Charter': '⛵',
    'Underwater Restaurant': '🐟', 'Rolls Royce': '🚗', 'Polo Ground': '🐎',
    'Peacock Lawn': '🦚', 'Lake View Dining': '🍽', 'Reef View Dining': '🐠',
    'River Dining': '🍽', 'Oxygen Lounge': '💨', 'Roof Terrace': '🌅',
    'Cedar Forest': '🌲', 'Garden': '🌳', 'Himalayan View Restaurant': '🏔',
    'Tea Lounge': '🍵', 'Thai Cooking Class': '🍜', 'Shuttle Boat': '⛵',
    'Ski Storage': '⛷', 'Adventure Desk': '🧗', 'Dive Center': '🤿',
    'Temple Tour': '⛩', 'Ice Rink': '⛸', 'Helicopter Excursions': '🚁',
    'Caldera View Dining': '🌋', 'Private Terrace': '🌅', 'Thames View': '🌊',
    'Art Deco Bar': '🍸', 'Butlers': '🛎', 'SkyPark': '🌇', 'Celebrity Restaurants': '🍽',
    'Central Park View': '🌳', '3-Michelin Star Restaurant': '⭐', 'Aquaventure Waterpark': '🎢',
    'Aquarium': '🐠', 'Jungle Dining': '🌿', 'Yoga Pavilion': '🧘',
    'Gordon Ramsay Restaurant': '🍽', 'Mandara Spa': '💆', 'River View': '🏞',
    'Beach Club': '🏖', 'Ayurveda Spa': '💆', 'Lake Dining': '🍽',
    'Shikara Rides': '⛵', 'Dal Lake View': '🏞', 'Ayurveda': '🌿',
    'Multi-cuisine Restaurant': '🍽', 'Holistic Spa': '💆'
  };

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Hero -->
    <div class="hotel-detail-hero">
      <img src="${hotel.image}" alt="${hotel.name}" />
      <div class="hotel-detail-overlay"></div>
      <div class="hotel-detail-info">
        <div class="container">
          <div class="hotel-name-row">
            <h1>${hotel.name}</h1>
          </div>
          <div class="hotel-star-display">${starStr}</div>
          <div class="detail-hero-meta" style="margin-top:.75rem;">
            <span>📍 ${hotel.destinationName}</span>
            <span>★ ${hotel.rating} Guest Rating</span>
            <span>₹${price} / night</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="hotel-detail-body">
      <div class="container">

        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-link>Home</a>
          <span class="sep">›</span>
          <a href="/hotels" data-link>Hotels</a>
          <span class="sep">›</span>
          ${dest ? `<a href="/destinations/${dest.slug}" data-link>${hotel.destinationName}</a>` : `<span>${hotel.destinationName}</span>`}
          <span class="sep">›</span>
          <span>${hotel.name}</span>
        </nav>

        <div class="hotel-detail-grid">
          <!-- Main -->
          <div>

            <div class="detail-section">
              <h2>About This Hotel</h2>
              <p style="line-height:1.85;">${hotel.description}</p>
            </div>

            <div class="detail-section">
              <h2>Amenities</h2>
              <div class="amenities-grid">
                ${hotel.amenities.map(a => `
                  <div class="amenity-item">
                    <span class="icon">${amenityIcons[a] || '✓'}</span>
                    ${a}
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="detail-section">
              <h2>Guest Reviews</h2>
              <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
                <div style="background:var(--color-primary);color:#fff;border-radius:var(--radius-md);padding:.75rem 1.25rem;text-align:center;">
                  <div style="font-size:2rem;font-weight:800;line-height:1;">${hotel.rating}</div>
                  <div style="font-size:.75rem;opacity:.85;">/ 5.0</div>
                </div>
                <div>
                  <div style="display:flex;gap:2px;color:#f59e0b;font-size:1.2rem;">${'★'.repeat(Math.round(hotel.rating))}</div>
                  <div style="font-size:.875rem;color:var(--color-text-light);margin-top:.25rem;">${hotel.reviews.length} verified review${hotel.reviews.length !== 1 ? 's' : ''}</div>
                </div>
              </div>
              <div class="reviews-list">
                ${hotel.reviews.map(r => `
                  <div class="review-card">
                    <div class="review-header">
                      <div>
                        <div class="review-author">${r.author}</div>
                        <div style="color:#f59e0b;font-size:.85rem;">${'★'.repeat(r.rating)}</div>
                      </div>
                      <div class="review-date">${formatDate(r.date)}</div>
                    </div>
                    <p class="review-text">${r.comment}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            ${dest ? `
            <div class="detail-section">
              <h3>Located in ${hotel.destinationName}</h3>
              <p style="margin-bottom:1rem;">${dest.description.substring(0, 140)}...</p>
              <button class="btn btn-outline" onclick="navigateTo('/destinations/${dest.slug}')">
                Explore ${hotel.destinationName} →
              </button>
            </div>
            ` : ''}

          </div>

          <!-- Sidebar / Booking Card -->
          <div>
            <div class="booking-card">
              <div class="booking-price">
                <span class="price-amount">₹${price}</span>
                <span class="per-night"> / night</span>
              </div>
              <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:1.25rem;">
                <span style="color:#f59e0b;">★</span>
                <strong>${hotel.rating}</strong>
                <span style="color:var(--color-text-light);font-size:.85rem;">(${hotel.reviews.length} reviews)</span>
              </div>
              <form class="booking-form" onsubmit="handleBookingSubmit(event)">
                <div class="form-row">
                  <div class="form-field">
                    <label for="check-in">Check In</label>
                    <input type="date" id="check-in" required min="${getTodayDate()}" />
                  </div>
                  <div class="form-field">
                    <label for="check-out">Check Out</label>
                    <input type="date" id="check-out" required min="${getTomorrowDate()}" />
                  </div>
                </div>
                <div class="form-field">
                  <label for="guests">Guests</label>
                  <select id="guests">
                    <option>1 Guest</option>
                    <option selected>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="rooms">Rooms</label>
                  <select id="rooms">
                    <option selected>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                  </select>
                </div>
                <button class="btn-book" type="submit">Book Now – ₹${price}/night</button>
              </form>
              <p style="text-align:center;font-size:.75rem;color:var(--color-text-light);margin-top:.75rem;">
                Free cancellation · No hidden fees
              </p>
            </div>
          </div>

        </div><!-- /hotel-detail-grid -->
      </div>
    </div>

    <!-- Similar Hotels (Adobe Target) -->
    <section class="similar-hotels-section" style="padding: 4rem 1rem; background: linear-gradient(to bottom, #f9fafb, #ffffff); border-top: 1px solid #e5e7eb;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 0.75rem; color: #1a1a1a; text-align: left;">Similar Hotels</h2>
        <p style="color: #6b7280; font-size: 1rem; margin-bottom: 2rem;">Explore more properties like this one</p>
        <div id="similar-hotels-container" style="min-height: 280px; position: relative;"></div>
      </div>
    </section>
  `;
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const checkIn  = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;

  if (!checkIn || !checkOut) return;
  if (checkOut <= checkIn) {
    document.getElementById('check-out').style.borderColor = 'var(--color-error)';
    return;
  }

  const btn = e.target.querySelector('.btn-book');
  btn.textContent = '✓ Request Received!';
  btn.style.background = 'var(--color-success)';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Book Now';
    btn.style.background = '';
    btn.disabled = false;
  }, 4000);
}

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

function getTomorrowDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
