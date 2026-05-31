// Data Destinasi Indonesia Terstruktur
const destinations = [
    { name: "Bali Island", location: "Provinsi Bali", rating: "4.9", price: "Nature", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800" },
    { name: "Bromo Mountain", location: "Jawa Timur", rating: "4.8", price: "Adventure", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" },
    { name: "Lake Toba", location: "Sumatera Utara", rating: "4.7", price: "Culture", img: "https://images.unsplash.com/photo-1626490333256-4654924a4f89?w=800" }
];

const travelersChoice = [
    { name: "Borobudur Temple", info: "Candi Budha terbesar yang masuk dalam warisan budaya UNESCO.", rating: "5.0", img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?w=600" },
    { name: "Labuan Bajo", info: "Gerbang utama menuju Pulau Komodo dengan pemandangan sunset menakjubkan.", rating: "4.9", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600" },
    { name: "Prambanan", info: "Kompleks candi Hindu megah yang penuh dengan relief sejarah Ramayana.", rating: "4.8", img: "https://images.unsplash.com/photo-1625472433061-002f232cc629?w=600" },
    { name: "Ijen Crater", info: "Pesona Blue Fire dan danau asam di puncak Gunung Ijen yang mendunia.", rating: "4.8", img: "https://images.unsplash.com/photo-1541410965313-5996e56678b5?w=600" }
];

// Load Data ke HTML
function initApp() {
    const popularGrid = document.getElementById('popularGrid');
    const choiceGrid = document.getElementById('choiceGrid');

    destinations.forEach(d => {
        popularGrid.innerHTML += `
            <div class="pop-card">
                <img src="${d.img}" alt="${d.name}">
                <div class="pop-info">
                    <h4>${d.name}</h4>
                    <p>⭐ ${d.rating} | ${d.location}</p>
                </div>
            </div>
        `;
    });

    travelersChoice.forEach(c => {
        choiceGrid.innerHTML += `
            <div class="choice-card">
                <img src="${c.img}" alt="${c.name}">
                <div class="choice-body">
                    <h4>${c.name}</h4>
                    <p style="font-size: 13px; color: #666; margin: 10px 0;">${c.info}</p>
                    <div style="color: #f39c12; font-weight: bold;">⭐ ${c.rating}</div>
                </div>
            </div>
        `;
    });
}

// Modal Logic
function openLogin() { document.getElementById('loginModal').style.display = 'block'; }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }

// Filter Sederhana
function filterDestinations() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    // Logika filter bisa dikembangkan di sini
}

initApp();
