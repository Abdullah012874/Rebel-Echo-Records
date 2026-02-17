'use client';
import { useRef, useState, useEffect } from "react";

// Define types for track
interface Track {
  title: string;
  artist: string;
  src: string;
  thumbnail: string;
}

export default function Page() {
  // 🔥 ONLY EDIT HERE — PUT YOUR SONG URLs
  const tracks: Track[] = [
    {
      title: "Hanging Up The Orange Apron",
      artist: "J'Soul",
      src: "/Songs/sng1.mp3",
      thumbnail: "/images/sng1.PNG",
    },
    {
      title: "Butterflies and Second Chances",
      artist: "J'Soul",
      src: "/Songs/song2.mp3",
      thumbnail: "/images/Picture7.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      {/* Header - Fixed positioning to ensure it's always visible */}
      {/* Header */}
      {/* Header - Always visible when scrolling */}
      {/* Header - Always visible when scrolling */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#B8860B]/20 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
              {/* Larger Logo image */}
              <img
                src="/images/Picture1.jpg"
                alt="Rebel Echo Records Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ring-2 ring-[#B8860B]/50 shadow-lg shadow-[#B8860B]/20 flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight truncate">
                  Rebel Echo Records
                </span>
                <span className="text-xs sm:text-sm text-[#B8860B] uppercase tracking-wider hidden sm:block truncate">
                  Home of Gospel-Core & Poetic Metal
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-4 md:gap-6 ml-2 sm:ml-0 flex-shrink-0">
              <a
                href="#features"
                className="text-xs sm:text-sm font-medium text-gray-300 transition-colors whitespace-nowrap hover:text-[#B8860B] px-2 sm:px-0"
              >
                Albums
              </a>
              <a
                href="#benefits"
                className="text-xs sm:text-sm font-medium text-gray-300 transition-colors whitespace-nowrap hover:text-[#B8860B] px-2 sm:px-0"
              >
                Tracks
              </a>
              <a
                href="#footer"
                className="text-xs sm:text-sm font-medium text-gray-300 transition-colors whitespace-nowrap hover:text-[#B8860B] px-2 sm:px-0"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button (3 dots) - Only visible on mobile */}
            <div className="relative md:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#B8860B]/10 transition-colors"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) {
                    menu.classList.toggle('hidden');
                  }
                }}
              >
                <svg className="w-6 h-6 text-[#B8860B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>

              {/* Mobile Navigation Menu */}
              <div
                id="mobile-menu"
                className="hidden absolute right-0 mt-2 w-48 py-2 bg-[#0A0A0A] border border-[#B8860B]/20 rounded-lg shadow-xl"
              >
                <a
                  href="#features"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#B8860B]/10 hover:text-[#B8860B] transition-colors"
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    if (menu) {
                      menu.classList.add('hidden');
                    }
                  }}
                >
                  Albums
                </a>
                <a
                  href="#benefits"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#B8860B]/10 hover:text-[#B8860B] transition-colors"
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    if (menu) {
                      menu.classList.add('hidden');
                    }
                  }}
                >
                  Tracks
                </a>
                <a
                  href="#footer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#B8860B]/10 hover:text-[#B8860B] transition-colors"
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    if (menu) {
                      menu.classList.add('hidden');
                    }
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add this spacer to prevent content from hiding under the fixed header */}
      <div className="h-20 w-full"></div>
      {/* Spacer div to push content below fixed header */}


      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080]"></div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title - Significantly increased */}
            <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-bold tracking-tight text-white mt-7 sm:mt-8 md:mt-10 lg:mt-8 mb-4">
              Rebel Echo Records
            </h1>
            <br />

            {/* Subtitle - Adjusted proportionally */}

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 text-center">
              <span className="font-semibold text-[#B8860B]">Rebel Echo Records (RER)</span> is an independent label rooted in conviction, resilience, and artistic truth.

              Home of <span className="font-semibold text-[#800080]">J'Soul</span>, featuring new and upcoming artists, including <span className="font-semibold text-[#B8860B]">Judy Briggs</span>.

              RER exists at the intersection of faith, fire, vulnerability, and strength. We build music that confronts, restores, and refuses to compromise.
            </p>

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
                        <div className="aspect-[3/4] relative">
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
              <AudioCard key={index} track={track} index={index} />
            ))}
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full scroll-mt-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          {/* Email Contacts Section */}
          <div className="border-t border-[#B8860B]/20 pt-6 sm:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm text-gray-400">
                General / Artist Contact:{" "}
                <a href="jsoul@rebelechrecords.com"target="blank" className="text-[#B8860B] hover:underline transition-colors">
                  jsoul@rebelechrecords.com
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Artist Contact – Judy Briggs:{" "}
                <a href="judy@rebelechrecords.com" target="blank"className="text-[#800080] hover:underline transition-colors">
                  judy@rebelechrecords.com
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Business & Strategy:{" "}
                <a href="vox@rebelechrecords.com"target="blank" className="text-[#B8860B] hover:underline transition-colors">
                  vox@rebelechrecords.com
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Sales & Engagement:{" "}
                <a href="sales@rebelechrecords.com" target="blank"className="text-[#800080] hover:underline transition-colors">
                  sales@rebelechrecords.com
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Digital & Social Media:{" "}
                <a href="emily@rebelechrecords.com" target="blank" className="text-[#B8860B] hover:underline transition-colors">
                  emily@rebelechrecords.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   🎵 PROFESSIONAL AUDIO CARD COMPONENT - FULLY RESPONSIVE
========================================================= */

function AudioCard({ track, index }: { track: Track; index: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const formatTime = (time: number): string => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // load metadata
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrent(audio.currentTime);
    const loaded = () => setDuration(audio.duration);
    const ended = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progress = progressRef.current;
    const audio = audioRef.current;
    if (!progress || !audio || !duration) return;

    const rect = progress.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = percent * duration;
  };

  const progressPercent = duration ? (current / duration) * 100 : 0;

  return (
    <div className="group relative">
      {/* Background gradient effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>

      {/* Main card */}
      <div className="relative bg-[#111111] rounded-2xl border border-[#B8860B]/20 overflow-hidden hover:border-[#B8860B]/40 transition-all duration-300">
        <audio ref={audioRef} src={track.src} preload="metadata" />

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
            {/* Album Art with Play Button Overlay */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 group/image mx-auto xs:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080] rounded-xl blur-sm opacity-50"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-[#800080]/30">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#B8860B] flex items-center justify-center">
                    <span className="text-black text-xs">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="flex-1 min-w-0 w-full xs:w-auto">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 truncate text-center xs:text-left">
                {track.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 text-center xs:text-left">
                {track.artist}
              </p>

              {/* Progress Bar - Touch friendly */}
              <div
                ref={progressRef}
                onClick={handleSeek}
                className="relative h-2 sm:h-1.5 bg-[#800080]/20 rounded-full overflow-hidden cursor-pointer group/progress mb-2 sm:mb-3"
              >
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-full transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[#B8860B] rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"
                  style={{ left: `calc(${progressPercent}% - 4px)` }}
                />
              </div>

              {/* Time Display */}
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                <span>{formatTime(current)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls - Responsive sizing */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center xs:justify-start">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#B8860B] to-[#800080] text-white flex items-center justify-center hover:shadow-lg hover:shadow-[#B8860B]/20 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>

                <button
                  onClick={stopAudio}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#222222] text-gray-400 hover:text-white hover:bg-[#333333] transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  ⏹
                </button>

                <div className="relative">
                  <button
                    onClick={toggleMute}
                    onMouseEnter={() => setShowVolumeControl(true)}
                    onMouseLeave={() => setShowVolumeControl(false)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#222222] text-gray-400 hover:text-white hover:bg-[#333333] transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    {isMuted ? "🔇" : volume > 0.7 ? "🔊" : volume > 0.3 ? "🔉" : "🔈"}
                  </button>

                  {/* Volume Slider Popup - Responsive positioning */}
                  {showVolumeControl && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-1.5 sm:p-2 bg-[#222222] rounded-lg border border-[#B8860B]/30 shadow-xl z-50"
                      onMouseEnter={() => setShowVolumeControl(true)}
                      onMouseLeave={() => setShowVolumeControl(false)}
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-16 sm:w-20 h-1 bg-[#800080]/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 sm:[&::-webkit-slider-thumb]:w-3 sm:[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#B8860B]"
                      />
                    </div>
                  )}
                </div>

                {/* Waveform indicator when playing */}
                {isPlaying && (
                  <div className="ml-auto hidden xs:flex items-center gap-0.5">
                    <div className="w-0.5 h-2 sm:h-3 bg-[#B8860B] animate-pulse"></div>
                    <div className="w-0.5 h-3 sm:h-4 bg-[#800080] animate-pulse delay-75"></div>
                    <div className="w-0.5 h-1.5 sm:h-2 bg-[#B8860B] animate-pulse delay-150"></div>
                  </div>
                )}
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
