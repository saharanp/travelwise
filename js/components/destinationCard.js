/* TravelWise – Destination Card component */

function renderDestinationCard(dest) {
  const stars = renderStars(dest.rating);
  const price = dest.startingPrice.toLocaleString('en-IN');

  return `
    <article class="dest-card fade-in-up" onclick="navigateTo('/destinations/${dest.slug}')" role="button" tabindex="0" aria-label="View ${dest.name}">
      <div class="dest-card-img">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
        <div class="dest-card-badge">
          <span class="badge ${dest.region === 'Domestic' ? 'badge-green' : 'badge-primary'}">${dest.region}</span>
        </div>
      </div>
      <div class="dest-card-body">
        <div class="dest-card-header">
          <div>
            <div class="dest-card-title">${dest.name}</div>
            <div class="dest-card-subtitle">${dest.country} · ${dest.type}</div>
          </div>
          <div class="dest-card-rating">
            <span style="color:#f59e0b;">★</span>
            ${dest.rating}
          </div>
        </div>
        <p class="dest-card-desc">${dest.description.substring(0, 110)}...</p>
        <div class="dest-card-footer">
          <div class="dest-card-price">
            From <strong>₹${price}</strong>
          </div>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();navigateTo('/destinations/${dest.slug}')">
            Explore →
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
