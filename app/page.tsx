'use client';
import { useRef, useState, useEffect } from "react";

// Define types for track
interface Track {
  title: string;
  artist: string;
  spotifyUrl: string;
  thumbnail: string;
}

// Countdown Component - SMALLER VERSION
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-10T00:01:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 mb-2">
      {/* Countdown Header - Smaller */}
      <div className="text-center mb-2">
        <span className="text-[10px] sm:text-xs font-bold text-[#B8860B] uppercase tracking-[0.2em]">
          Album Releases In
        </span>
      </div>

      {/* Countdown Timer - Smaller Cards */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="relative group"
          >
            {/* Background glow effect - Subtle */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>

            {/* Time card - Smaller padding and text */}
            <div className="relative bg-[#111111] border border-[#B8860B]/20 rounded-lg p-2 text-center hover:border-[#B8860B]/40 transition-all duration-300">
              <div className="text-base sm:text-lg md:text-xl font-bold text-white mb-0 font-mono">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar - Smaller */}
      <div className="mt-3 w-full h-0.5 bg-[#111111] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-full transition-all duration-1000"
          style={{
            width: `${100 - (timeLeft.days / 365) * 100}%`,
            opacity: 0.7
          }}
        ></div>
      </div>

      {/* Release date - Smaller */}
      <p className="text-[8px] sm:text-[10px] text-gray-500 text-center mt-2">
        March 10, 2026 • 12:01 AM
      </p>
    </div>
  );
}

export default function Page() {
  // 🔥 ONLY EDIT HERE — PUT YOUR SPOTIFY URLs
  const tracks: Track[] = [
    {
      title: "Hanging Up The Orange Apron",
      artist: "J'Soul",
      spotifyUrl: "https://open.spotify.com/track/72iCJown5g8BuLUqyBteI0",
      thumbnail: "/images/sng1.PNG",
    },
    {
      title: "Butterflies and Second Chances",
      artist: "J'Soul",
      spotifyUrl: "https://open.spotify.com/track/2ny3LLTssio8NNsTuFmSWQ",
      thumbnail: "/images/Picture7.png",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      {/* Header - Fixed positioning to ensure it's always visible */}
      <>
        <header id="header" className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#B8860B]/20 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 sm:h-24 items-center justify-between gap-4">

              {/* Brand Section */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-shrink">
                <img
                  src="/images/Picture1.jpg"
                  alt="Rebel Echo Records Logo"
                  className="h-12 w-12 sm:h-14 md:h-16 sm:w-14 md:w-16 rounded-full object-cover ring-2 ring-[#B8860B]/50 shadow-lg shadow-[#B8860B]/20 flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight truncate leading-tight">
                    Rebel Echo Records
                  </h1>
                  {/* Main Tagline - Adjusted visibility to show on most mobile screens */}
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#B8860B] uppercase tracking-widest block truncate">
                    Home of Gospel-Core & Poetic Metal
                  </p>
                </div>
              </div>

              {/* Desktop Navigation - Switches to Menu at 1024px to prevent overlap */}
              <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-shrink-0">
                <a href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">Home</a>
                <span className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B] cursor-default whitespace-nowrap">Privacy Policy</span>
                <span className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B] cursor-default whitespace-nowrap">Terms of Service</span>
                <span className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B] cursor-default whitespace-nowrap">Shop</span>
                <span className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B] cursor-default whitespace-nowrap">Press kit</span>
                <span className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B] cursor-default whitespace-nowrap">About</span>
              </nav>

              {/* Mobile/Tablet Menu Button */}
              <div className="lg:hidden flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#B8860B] hover:bg-[#B8860B]/10 focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition-colors"
                  onClick={() => {
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) mobileMenu.classList.toggle('hidden');
                  }}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="5" r="2" fill="currentColor" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <circle cx="12" cy="19" r="2" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div id="mobile-menu" className="hidden lg:hidden py-4 border-t border-[#B8860B]/20">
              <nav className="flex flex-col space-y-1">
                <a href="#" className="text-base font-medium text-gray-300 hover:text-[#B8860B] px-4 py-3 rounded-md hover:bg-[#B8860B]/10 transition-colors">Home</a>
                <span className="text-base font-medium text-gray-300 hover:text-[#B8860B] px-4 py-3 rounded-md hover:bg-[#B8860B]/10 transition-colors cursor-default">Privacy Policy</span>
                <span className="text-base font-medium text-gray-300 hover:text-[#B8860B] px-4 py-3 rounded-md hover:bg-[#B8860B]/10 transition-colors cursor-default">Terms of Service</span>
                <span className="text-base font-medium text-gray-300 hover:text-[#B8860B] px-4 py-3 rounded-md hover:bg-[#B8860B]/10 transition-colors cursor-default">Shop</span>
                <span className="text-base font-medium text-gray-300 hover:text-[#B8860B] px-4 py-3 rounded-md hover:bg-[#B8860B]/10 transition-colors cursor-default">Press kit</span>
                <span className="text-base font-medium text-gray-300 hover:text-[#B8860B] px-4 py-3 rounded-md hover:bg-[#B8860B]/10 transition-colors cursor-default">About</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Social Media Bar - Now positioned below fixed header */}
        <div className="w-full bg-[#0A0A0A] border-y border-[#B8860B]/20 mt-[80px] sm:mt-[96px]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center h-16">
      {/* Social Icons - Centered */}
      <div id="social-icons" className="flex items-center gap-6 md:gap-8">
        {/* Spotify - Active */}
        <a
          href="https://open.spotify.com/artist/3IeyA0cRJhNgtF9Jp1HBFN?si=ngY7QIYcT9Oi5CLngTicvw"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-[#1DB954] hover:scale-110 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.14-1.26 9.479-.6 13.14 1.56.42.24.6.84.341 1.26zm.12-3.36c-3.84-2.28-10.14-2.52-13.74-1.38-.6.18-1.26-.18-1.44-.78-.18-.6.18-1.26.78-1.44 4.14-1.26 11.04-1.02 15.36 1.62.54.3.72 1.02.42 1.56-.3.48-1.02.66-1.56.36z" />
          </svg>
        </a>

        {/* YouTube - Active */}
        <a
          href="https://music.youtube.com/channel/UCzcwoWP24YPa2mjmaAlDwvg?si=qLe1r-ZdZTTJNLOt"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-[#FF0000] hover:scale-110 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* Instagram - Inactive */}
        <div className="group relative flex items-center justify-center cursor-not-allowed">
          <svg
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
          </svg>
        </div>

        {/* Facebook - Inactive */}
        <div className="group relative flex items-center justify-center cursor-not-allowed">
          <svg
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0z" />
          </svg>
        </div>

        {/* Apple Music - Inactive */}
        <div className="group relative flex items-center justify-center cursor-not-allowed">
          <svg
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.365 1.43c0 1.14-.42 2.19-1.26 3.15-.87.99-1.92 1.56-3.06 1.47-.12-1.08.39-2.19 1.2-3.12.84-.96 2.04-1.62 3.12-1.5zM20.82 17.1c-.6 1.35-.9 1.95-1.68 3.15-1.08 1.71-2.58 3.84-4.44 3.87-1.65.03-2.07-1.08-4.29-1.08-2.25 0-2.7 1.05-4.35 1.11-1.86.06-3.27-1.92-4.35-3.63C-1.41 14.4.06 6.9 4.14 6.69c1.8-.09 3.51 1.2 4.62 1.2 1.11 0 3.18-1.47 5.37-1.26.9.03 3.42.36 5.04 2.73-4.44 2.43-3.72 8.7 1.65 10.74z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
      </>

      {/* Hero Section */}
      <section id="hero" className="relative w-full overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080]"></div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title - Significantly increased */}
            <br />
            <br />

            {/* Subtitle - Adjusted proportionally */}

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 text-center">
              <span className="font-semibold text-[#B8860B]">Rebel Echo Records (RER)</span> is an independent label rooted in conviction, resilience, and artistic truth.

              Home of <span className="font-semibold text-[#800080]">J'Soul</span>, featuring new and upcoming artists, including <span className="font-semibold text-[#B8860B]">Judy Briggs</span>.

              RER exists at the intersection of faith, fire, vulnerability, and strength. We build music that confronts, restores, and refuses to compromise.
            </p>

            {/* COUNTDOWN TIMER - SMALLER VERSION INSERTED HERE */}


            <br />
            {/* J'Soul section - Larger and more prominent */}
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#B8860B] mb-6">
              Home of J'Soul
            </p>

            {/* Logo Section - Significantly increased */}
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-2">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                  <img
                    src="/images/Picture3-removebg-preview.png"
                    alt="J'Soul Logo"
                    className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 object-contain filter drop-shadow-[0_0_20px_rgba(184,134,11,0.4)] hover:drop-shadow-[0_0_30px_rgba(184,134,11,0.6)] transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Removed empty divs but kept structure clean */}
            <div className="mt-4 space-y-2 px-4">
              {/* Empty div removed - kept for potential future content */}
            </div>

            {/* Buttons section commented out but available if needed */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Label Overview - Now stacks on mobile, side by side on desktop */}
          <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-4xl mx-auto">
              <div className="space-y-8 lg:space-y-12">

                {/* Press Release Section - Top */}
                <div>
                  <div className="bg-[#111111] border border-[#B8860B]/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="text-center mb-6 sm:mb-8">
                      <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#800080]/20 text-[#B8860B] font-semibold rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                        FOR IMMEDIATE RELEASE
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
                        J'Soul Announces "Poetic Metal" – A Genre-Defying Testament of Faith, Resilience, and Family
                      </h3>
                    </div>

                    <div className="space-y-4 sm:space-y-6 text-gray-300 max-w-4xl mx-auto">
                      <p className="text-base sm:text-lg leading-relaxed text-justify">
                        <span className="font-semibold text-[#B8860B]">Rebel Echo Records</span> proudly announces the upcoming release of <span className="font-semibold text-[#800080]">Poetic Metal</span>, arriving <span className="font-semibold text-[#B8860B]">March 10, 2026</span>.
                      </p>

                      <p className="text-sm sm:text-base leading-relaxed text-justify">
                        Blending Christian metal, poetic lyricism, rap influence, and emotionally grounded storytelling, Poetic Metal explores endurance in relationships, spiritual guidance through adversity, mental health recovery, and unwavering family bonds.
                      </p>
                      <CountdownTimer />
                      {/* Spotify Link with Logo */}
                      <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-[#B8860B]/20">
                        {/* PASTE YOUR SPOTIFY LOGO URL BELOW */}
                        <img
                          src="/images/spotify.jpeg"
                          alt="Spotify"
                          className="w-20 h-20 object-contain"
                        />
                        <a
                          href="https://open.spotify.com/artist/3IeyA0cRJhNgtF9Jp1HBFN?si=K0AXhXkLSkqStHqHZb2xqA&nd=1&dlsi=2428ccce79064dd8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1DB954] hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium"
                        >
                          Listen on Spotify →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artist Image Section - Bottom */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full max-w-md lg:max-w-2xl mx-auto">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-3xl transform -rotate-1 scale-105 blur-sm opacity-20"></div>

                    {/* Main image container */}
                    <div className="relative bg-gradient-to-br from-[#B8860B] to-[#800080] p-1 rounded-2xl shadow-2xl">
                      <div className="bg-[#111111] rounded-2xl overflow-hidden">
                        <div className="aspect-[4/4] relative">
                          <img
                            src="/images/Picture2.png"
                            alt="J'Soul - Artist at Rebel Echo Records"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <br />
          <br /><br />
          {/* AI & Innovation Section */}
          <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#B8860B]/20 p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#800080]/20 rounded-full blur-3xl" />

            {/* Simple unified content with headings */}
            <div className="relative space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              {/* Professional image on top */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#B8860B]/30 shadow-xl shadow-[#B8860B]/10 ring-4 ring-[#B8860B]/20">
                  <img
                    src="/images/suno.jpeg"
                    alt="Artist profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#B8860B] mb-3 sm:mb-4 flex items-center gap-2 tracking-wider">
                  <span className="text-[#B8860B]">🎵</span> SUNO ACKNOWLEDGMENT
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                  This album was brought to life with the assistance of AI tools, including Suno. As a songwriter, I found in this technology a way to translate written conviction into fully realized soundscapes. Innovation does not replace artistry—it amplifies it.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#B8860B] mb-3 sm:mb-4 tracking-wider">
                  AI—LET'S TALK ABOUT IT
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                  Because that's the truth. A piano doesn't make someone a composer. A studio doesn't make someone a producer. A tool does not erase authorship.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#B8860B] mb-3 sm:mb-4 tracking-wider">
                  ON INNOVATION AND AUTHORSHIP
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                  Poetic Metal was created using modern creative tools, including Suno. The words, themes, and direction are mine. <span className="text-[#B8860B] font-semibold">The music stands on its own.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Judy Briggs Featured Tracks */}
      <section id="benefits" className="w-full py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Introducing Judy Briggs
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              A fresh voice joining the Rebel Echo Records family — experience her debut tracks
            </p>
          </div>

          {/* Judy Briggs Tracks Grid - Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {tracks.map((track, index) => (
              <SpotifyCard
                key={index}
                track={track}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full scroll-mt-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

          {/* Contacts Heading - No underline */}
          <h2 className="text-xl sm:text-2xl font-semibold text-[#B8860B] mb-6 sm:mb-8 tracking-wide">
            Contacts
          </h2>

          {/* Email Contacts Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="font-bold text-white">Founder & Creative Director:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=james@rebelechorecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                james@rebelechorecords.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="font-bold text-white">General / Artist Contact:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jsoul@rebelechorecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                jsoul@rebelechorecords.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="font-bold text-white">Artist Contact – Judy Briggs:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=judy@rebelechorecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                judy@rebelechorecords.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="font-bold text-white">Business & Strategy:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vox@rebelechorecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                vox@rebelechorecords.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="font-bold text-white">Sales & Engagement:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@rebelechorecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                sales@rebelechorecords.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="font-bold text-white">Digital & Social Media:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=emily@rebelechorecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                emily@rebelechorecords.com
              </a>
            </p>
          </div>
        </div>
        <div className="w-full bg-[#0A0A0A] border-y border-[#B8860B]/20 mt-[80px] sm:mt-[6px]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center h-16">
      {/* Social Icons - Centered */}
      <div id="social-icons" className="flex items-center gap-6 md:gap-8">
        {/* Spotify - Active */}
        <a
          href="https://open.spotify.com/artist/3IeyA0cRJhNgtF9Jp1HBFN?si=ngY7QIYcT9Oi5CLngTicvw"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-[#1DB954] hover:scale-110 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.14-1.26 9.479-.6 13.14 1.56.42.24.6.84.341 1.26zm.12-3.36c-3.84-2.28-10.14-2.52-13.74-1.38-.6.18-1.26-.18-1.44-.78-.18-.6.18-1.26.78-1.44 4.14-1.26 11.04-1.02 15.36 1.62.54.3.72 1.02.42 1.56-.3.48-1.02.66-1.56.36z" />
          </svg>
        </a>

        {/* YouTube - Active */}
        <a
          href="https://music.youtube.com/channel/UCzcwoWP24YPa2mjmaAlDwvg?si=qLe1r-ZdZTTJNLOt"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-[#FF0000] hover:scale-110 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* Instagram - Inactive */}
        <div className="group relative flex items-center justify-center cursor-not-allowed">
          <svg
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
          </svg>
        </div>

        {/* Facebook - Inactive */}
        <div className="group relative flex items-center justify-center cursor-not-allowed">
          <svg
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0z" />
          </svg>
        </div>

        {/* Apple Music - Inactive */}
        <div className="group relative flex items-center justify-center cursor-not-allowed">
          <svg
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.365 1.43c0 1.14-.42 2.19-1.26 3.15-.87.99-1.92 1.56-3.06 1.47-.12-1.08.39-2.19 1.2-3.12.84-.96 2.04-1.62 3.12-1.5zM20.82 17.1c-.6 1.35-.9 1.95-1.68 3.15-1.08 1.71-2.58 3.84-4.44 3.87-1.65.03-2.07-1.08-4.29-1.08-2.25 0-2.7 1.05-4.35 1.11-1.86.06-3.27-1.92-4.35-3.63C-1.41 14.4.06 6.9 4.14 6.69c1.8-.09 3.51 1.2 4.62 1.2 1.11 0 3.18-1.47 5.37-1.26.9.03 3.42.36 5.04 2.73-4.44 2.43-3.72 8.7 1.65 10.74z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Absolute Bottom Copyright */}
        <div className="border-t border-[#B8860B]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <p className="text-xs sm:text-sm text-gray-400 text-center">
              ©️ 2026 - Rebel Echo Records
            </p>
            <p className="text-xs sm:text-sm text-gray-400 text-center mt-2">
              Developed by{' '}
              <a
                href="https://www.fiverr.com/sellers/ahmedbinqamar11/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8860B] hover:text-[#DAA520] transition-colors duration-200"
              >
                Ahmed Bin Qamar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   🎵 SPOTIFY CARD COMPONENT - FULLY RESPONSIVE
========================================================= */

function SpotifyCard({
  track,
  index
}: {
  track: Track;
  index: number;
}) {
  return (
    <div className="group relative">
      {/* Background gradient effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>

      {/* Main card */}
      <div className="relative bg-[#111111] rounded-2xl border border-[#B8860B]/20 overflow-hidden hover:border-[#B8860B]/40 transition-all duration-300">
        {/* Card Header with Track Number */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-1 sm:pb-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-mono text-[#B8860B]">0{index + 1}</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[#B8860B] to-transparent"></div>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Single</span>
        </div>

        <div className="p-4 sm:p-6 pt-1 sm:pt-2">
          <div className="flex flex-col xs:flex-row items-start gap-4 sm:gap-5">
            {/* Album Art */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mx-auto xs:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080] rounded-xl blur-sm opacity-50"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-[#800080]/30">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Track Info with Spotify Link */}
            <div className="flex-1 min-w-0 w-full xs:w-auto">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 truncate text-center xs:text-left">
                {track.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 text-center xs:text-left">
                {track.artist}
              </p>

              {/* Spotify Link Button */}
              <div className="flex justify-center xs:justify-start">
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-white text-sm sm:text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#1DB954]/25"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.14-1.26 9.479-.6 13.14 1.56.42.24.6.84.341 1.26zm.12-3.36c-3.84-2.28-10.14-2.52-13.74-1.38-.6.18-1.26-.18-1.44-.78-.18-.6.18-1.26.78-1.44 4.14-1.26 11.04-1.02 15.36 1.62.54.3.72 1.02.42 1.56-.3.48-1.02.66-1.56.36z" />
                  </svg>
                  <span>Listen on Spotify</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#B8860B]/0 via-[#800080]/50 to-[#B8860B]/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
    </div>
  );
}
