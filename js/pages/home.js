/* TravelWise – Home page */

function renderHome() {
  document.title = 'TravelWise – Discover Your Next Adventure';

  const featured = destinations.slice(0, 6);
  const popularHotels = hotels
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-eyebrow">✈ Over 20 Destinations Worldwide</div>
          <h1>Travel <span>Smarter</span>,<br>Experience More</h1>
          <p>From the snow-capped peaks of Kashmir to the sun-soaked shores of the Maldives — TravelWise curates extraordinary journeys tailored just for you.</p>
          <div class="hero-actions">
            <button class="btn btn-secondary btn-lg" onclick="navigateTo('/destinations')">
              Explore Destinations
            </button>
            <button class="btn btn-outline btn-lg" style="color:#fff;border-color:rgba(255,255,255,0.6);" onclick="navigateTo('/hotels')">
              Browse Hotels
            </button>
          </div>

          <!-- Search Box -->
          <div class="hero-search">
            <div class="search-field">
              <label for="search-dest">Destination</label>
              <input type="text" id="search-dest" placeholder="Where do you want to go?" list="dest-list" />
              <datalist id="dest-list">
                ${destinations.map(d => `<option value="${d.name}">`).join('')}
              </datalist>
            </div>
            <div class="search-divider"></div>
            <div class="search-field">
              <label for="search-type">Travel Type</label>
              <select id="search-type">
                <option value="">Any Type</option>
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
                <option value="City">City</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div class="search-divider"></div>
            <div class="search-field">
              <label for="search-region">Region</label>
              <select id="search-region">
                <option value="">All Regions</option>
                <option value="Domestic">India (Domestic)</option>
                <option value="International">International</option>
              </select>
            </div>
            <button class="search-submit" onclick="handleHeroSearch()">Search 🔍</button>
          </div>

          <!-- Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="number">20+</div>
              <div class="label">Destinations</div>
            </div>
            <div class="hero-stat">
              <div class="number">30+</div>
              <div class="label">Luxury Hotels</div>
            </div>
            <div class="hero-stat">
              <div class="number">50K+</div>
              <div class="label">Happy Travellers</div>
            </div>
            <div class="hero-stat">
              <div class="number">4.8★</div>
              <div class="label">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURED DESTINATIONS ===== -->
    <section class="section featured-section">
      <div class="container">
        <div class="section-header">
          <h2>Featured Destinations</h2>
          <p>Handpicked destinations offering unforgettable experiences — from tropical beaches to Himalayan peaks.</p>
        </div>
        <div class="dest-grid">
          ${featured.map(d => renderDestinationCard(d)).join('')}
        </div>
        <div style="text-align:center;margin-top:2.5rem;">
          <button class="btn btn-outline btn-lg" onclick="navigateTo('/destinations')">
            View All 20 Destinations →
          </button>
        </div>
      </div>
    </section>

    <!-- ===== POPULAR HOTELS ===== -->
    <section class="section" style="background:#fff;">
      <div class="container">
        <div class="section-header">
          <h2>Top-Rated Hotels</h2>
          <p>Award-winning properties where world-class service meets breathtaking settings.</p>
        </div>
        <div class="hotel-grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr));">
          ${popularHotels.map(h => renderHotelCard(h)).join('')}
        </div>
        <div style="text-align:center;margin-top:2.5rem;">
          <button class="btn btn-outline btn-lg" onclick="navigateTo('/hotels')">
            Browse All 30 Hotels →
          </button>
        </div>
      </div>
    </section>

    <!-- ===== WHY CHOOSE US ===== -->
    <section class="section why-section">
      <div class="container">
        <div class="section-header">
          <h2>Why Travellers Choose TravelWise</h2>
          <p>We go beyond bookings — we craft journeys that turn into lifelong memories.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Curated Excellence</h3>
            <p>Every destination and hotel on our platform is personally vetted by our travel experts. We only feature properties that meet our rigorous quality standards.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Best Price Guarantee</h3>
            <p>We work directly with hotels and operators to bring you the most competitive rates. Found a better price? We'll match it, no questions asked.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛎</div>
            <h3>24/7 Concierge Support</h3>
            <p>Our dedicated travel concierge team is available round the clock to handle any request — from visa advice to last-minute itinerary changes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== DESTINATIONS BY TYPE ===== -->
    <section class="section" style="background:var(--color-background);">
      <div class="container">
        <div class="section-header">
          <h2>Explore by Travel Style</h2>
          <p>Whatever your idea of the perfect trip, we have a destination for you.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem;">
          ${[
            { type: 'Beach', icon: '🏖', count: destinations.filter(d=>d.type==='Beach').length, color: '#0ea5e9' },
            { type: 'Mountain', icon: '⛰', count: destinations.filter(d=>d.type==='Mountain').length, color: '#10b981' },
            { type: 'City', icon: '🏙', count: destinations.filter(d=>d.type==='City').length, color: '#8b5cf6' },
            { type: 'Adventure', icon: '🧗', count: destinations.filter(d=>d.type==='Adventure').length, color: '#f97316' }
          ].map(t => `
            <div onclick="navigateTo('/destinations?type=${t.type}')"
              style="background:#fff;border-radius:var(--radius-lg);padding:2rem;text-align:center;cursor:pointer;border:1px solid var(--color-border);transition:var(--transition-slow);"
              onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-lg)'"
              onmouseout="this.style.transform='';this.style.boxShadow=''">
              <div style="font-size:2.5rem;margin-bottom:0.75rem;">${t.icon}</div>
              <h3 style="color:${t.color};margin-bottom:0.25rem;">${t.type}</h3>
              <p style="font-size:0.85rem;">${t.count} destinations</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ===== NEWSLETTER ===== -->
    <section class="newsletter-section">
      <div class="container newsletter-inner">
        <div class="newsletter-text">
          <h2>Get Travel Inspiration Weekly</h2>
          <p>Join 50,000+ travellers who receive curated deals, destination guides, and exclusive offers.</p>
        </div>
        <form class="newsletter-signup-form" onsubmit="handleNewsletterSubmit(event)">
          <input type="email" placeholder="Enter your email address" required aria-label="Email address" id="home-newsletter-email" />
          <button type="submit" class="btn btn-secondary btn-lg">Subscribe Free</button>
        </form>
      </div>
    </section>
  `;
}

function handleHeroSearch() {
  const dest = document.getElementById('search-dest').value.trim();
  const type = document.getElementById('search-type').value;
  const region = document.getElementById('search-region').value;

  const params = new URLSearchParams();
  if (dest) params.set('q', dest);
  if (type) params.set('type', type);
  if (region) params.set('region', region);

  navigateTo('/destinations' + (params.toString() ? '?' + params.toString() : ''));
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('home-newsletter-email');
  if (input) {
    const btn = e.target.querySelector('button');
    btn.textContent = '✓ Subscribed!';
    btn.disabled = true;
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Subscribe Free';
      btn.disabled = false;
    }, 4000);
  }
}
