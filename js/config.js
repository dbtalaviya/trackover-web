// Trackover web client config. Edit these values for your environment.
// This file is loaded before any page-specific script and exposes one global: window.TrackoverConfig.
window.TrackoverConfig = {
    // tracking-service base URL — include the /trackingService prefix
    // local dev: "http://localhost:6960/trackingService"
    // prod (when deployed): your API origin
    API_BASE: "http://localhost:6960/trackingService",

    // How often to ask the API for the latest location, in milliseconds.
    // Per techspec: producer updates every ~10s, consumer visibility target <5s.
    // 3000ms = 3s is a sensible default; bump for slower-moving fleets.
    POLL_INTERVAL_MS: 3000,

    // Clerk frontend config — both values come from the Clerk Dashboard
    // (Developers → API Keys → Show API Keys → "Publishable key" and "Frontend API URL")
    CLERK_PUBLISHABLE_KEY: "pk_test_c3dlZXBpbmctbGVlY2gtMTUuY2xlcmsuYWNjb3VudHMuZGV2JA",
    CLERK_DOMAIN: "sweeping-leech-15.clerk.accounts.dev",

    MAP: {
        DEFAULT_ZOOM: 16,
        FALLBACK_CENTER: [20.5937, 78.9629], // geographic center of India
        TILE_URL: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        TILE_ATTRIBUTION:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
}
