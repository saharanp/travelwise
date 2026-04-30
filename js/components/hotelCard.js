/* TravelWise – Hotel Card component */

function renderHotelCard(hotel) {
  const price = hotel.pricePerNight.toLocaleString('en-IN');
  const starStr = '★'.repeat(hotel.starRating);
  const visibleAmenities = hotel.amenities.slice(0, 4);
  const extra = hotel.amenities.length - 4;

  return `
    <article class="hotel-card fade-in-up" onclick="navigateTo('/hotels/${hotel.slug}')" role="button" tabindex="0" aria-label="View ${hotel.name}">
      <div class="hotel-card-img">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" />
        <div class="hotel-card-stars">${starStr} ${hotel.starRating}★</div>
      </div>
      <div class="hotel-card-body">
        <div class="hotel-card-name">${hotel.name}</div>
        <div class="hotel-card-location">
          <span>📍</span>
          <span>${hotel.destinationName}</span>
        </div>
        <div class="hotel-card-amenities">
          ${visibleAmenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
          ${extra > 0 ? `<span class="amenity-tag">+${extra} more</span>` : ''}
        </div>
        <div class="hotel-card-footer">
          <div class="hotel-card-price">
            <strong>₹${price}</strong> / night
          </div>
          <div class="hotel-card-rating">
            <span style="color:#f59e0b;">★</span>
            <span>${hotel.rating}</span>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();navigateTo('/hotels/${hotel.slug}')">
              Book →
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}
