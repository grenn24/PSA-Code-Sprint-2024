const map = L.map('map').setView([1.3521, 103.8198], 4); // Center on Singapore

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

const points = [
    { id: "Singapore", lat: 1.2393982989524186, lng: 103.61609321647471 },  // PSA Tuas Port
    { id: "Vietnam", lat: 10.56687095, lng: 107.0240468 },  // SP - PSA International Port
    { id: "Indonesia", lat: -6.09480388, lng: 106.9233488 } // New Priok Container Terminal One (NPCT1)

];

const routes = [
    { from: "Singapore", to: "Vietnam" },
    { from: "Singapore", to: "Indonesia" },
];

// Draw points
points.forEach(point => {
    L.marker([point.lat, point.lng]).addTo(map).bindPopup(point.id);
});

// Link routes
routes.forEach(route => {
    const fromPoint = points.find(p => p.id === route.from);
    const toPoint = points.find(p => p.id === route.to);

    L.polyline([
        [fromPoint.lat, fromPoint.lng],
        [toPoint.lat, toPoint.lng]
    ], { color: 'red', weight: 2 }).addTo(map);
});