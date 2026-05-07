/* TravelWise – Hotels listing page */

function renderHotels() {
  document.title = 'Hotels – TravelWise';

  const params = new URLSearchParams(window.location.search);
  const initStars = params.get('stars') || 'All';
  const initPrice = params.get('price') || 'All';
  const initSort  = params.get('sort')  || 'rating';

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Luxury Hotels</h1>
        <p>Browse 30 handpicked hotels across our destinations — from intimate eco-retreats to iconic five-star palaces.</p>
        <div id="offer-banner-slot"></div>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="container filter-inner" style="flex-wrap:wrap;gap:1rem;">
        <div class="filter-group">
          <span class="filter-label">Stars:</span>
          ${['All', '5', '4', '3'].map(s => `
            <button class="filter-btn ${s === initStars ? 'active' : ''}"
              data-filter-stars="${s}"
              onclick="setHotelFilter('stars','${s}')">
              ${s === 'All' ? 'All' : s + '★'}
            </button>
          `).join('')}
        </div>
        <div class="filter-group">
          <span class="filter-label">Budget:</span>
          ${[
            { val: 'All',    label: 'Any Price' },
            { val: '0-15000',  label: 'Under ₹15K' },
            { val: '15000-40000', label: '₹15K–₹40K' },
            { val: '40000+',  label: '₹40K+' }
          ].map(p => `
            <button class="filter-btn ${p.val === initPrice ? 'active' : ''}"
              data-filter-price="${p.val}"
              onclick="setHotelFilter('price','${p.val}')">
              ${p.label}
            </button>
          `).join('')}
        </div>
        <div class="filter-group" style="margin-left:auto;align-items:center;gap:.75rem;">
          <span class="filter-label">Sort:</span>
          <select class="sort-select" id="hotel-sort" onchange="setHotelSort(this.value)">
            <option value="rating"    ${initSort==='rating'    ? 'selected':''}>Top Rated</option>
            <option value="price-asc" ${initSort==='price-asc' ? 'selected':''}>Price: Low to High</option>
            <option value="price-desc"${initSort==='price-desc'? 'selected':''}>Price: High to Low</option>
            <option value="name"      ${initSort==='name'      ? 'selected':''}>Name A–Z</option>
          </select>
          <span class="results-count" id="hotel-count"></span>
        </div>
      </div>
    </div>

    <!-- Hotels Grid -->
    <section class="section-sm">
      <div class="container">
        <div class="hotel-grid" id="hotel-grid"></div>
        <div id="hotel-empty" style="display:none;text-align:center;padding:4rem 1rem;">
          <div style="font-size:3rem;">🏨</div>
          <h3 style="margin:1rem 0 .5rem;">No hotels found</h3>
          <p>Try adjusting your filters.</p>
          <button class="btn btn-primary" style="margin-top:1.25rem;" onclick="clearHotelFilters()">Clear Filters</button>
        </div>
      </div>
    </section>
  `;

  window._hotelFilters = { stars: initStars, price: initPrice, sort: initSort };
  filterHotels();
}

function setHotelFilter(dimension, value) {
  if (!window._hotelFilters) window._hotelFilters = { stars: 'All', price: 'All', sort: 'rating' };
  window._hotelFilters[dimension] = value;

  document.querySelectorAll(`[data-filter-${dimension}]`).forEach(btn => {
    const key = `filter${dimension.charAt(0).toUpperCase()+dimension.slice(1)}`;
    btn.classList.toggle('active', btn.dataset[key] === value);
  });

  filterHotels();
}

function setHotelSort(value) {
  if (!window._hotelFilters) window._hotelFilters = { stars: 'All', price: 'All', sort: 'rating' };
  window._hotelFilters.sort = value;
  filterHotels();
}

function filterHotels() {
  const f = window._hotelFilters || { stars: 'All', price: 'All', sort: 'rating' };

  let filtered = hotels.filter(h => {
    const starsOk = f.stars === 'All' || h.starRating === parseInt(f.stars);
    let priceOk = true;
    if (f.price !== 'All') {
      if (f.price === '0-15000')       priceOk = h.pricePerNight < 15000;
      else if (f.price === '15000-40000') priceOk = h.pricePerNight >= 15000 && h.pricePerNight <= 40000;
      else if (f.price === '40000+')   priceOk = h.pricePerNight > 40000;
    }
    return starsOk && priceOk;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (f.sort === 'rating')      return b.rating - a.rating;
    if (f.sort === 'price-asc')   return a.pricePerNight - b.pricePerNight;
    if (f.sort === 'price-desc')  return b.pricePerNight - a.pricePerNight;
    if (f.sort === 'name')        return a.name.localeCompare(b.name);
    return 0;
  });

  const grid  = document.getElementById('hotel-grid');
  const empty = document.getElementById('hotel-empty');
  const count = document.getElementById('hotel-count');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    if (count) count.innerHTML = '';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = filtered.map(h => renderHotelCard(h)).join('');
    if (count) count.innerHTML = `<strong>${filtered.length}</strong> hotel${filtered.length !== 1 ? 's' : ''}`;
  }
}

function clearHotelFilters() {
  window._hotelFilters = { stars: 'All', price: 'All', sort: 'rating' };

  document.querySelectorAll('[data-filter-stars]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filterStars === 'All');
  });
  document.querySelectorAll('[data-filter-price]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filterPrice === 'All');
  });
  const sortEl = document.getElementById('hotel-sort');
  if (sortEl) sortEl.value = 'rating';

  filterHotels();
}
