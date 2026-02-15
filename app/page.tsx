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
      title: "Backroads and Butterflies",
      artist: "J'Soul",
      src: "/Songs/song1.mpeg",
      thumbnail: "/images/picture6.png",
    },
    {
      title: "Butterflies and Second Chances",
      artist: "J'Soul",
      src: "/Songs/song2.mp3",
      thumbnail: "/images/picture7.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]"> {/* Dark cinematic base - near black */}
      {/* Header */}
      {/* Header */}
<header className="sticky top-0 z-50 w-full border-b border-[#B8860B]/20 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-20 items-center justify-between"> {/* Increased height from h-16 to h-20 */}
      <div className="flex items-center gap-4"> {/* Increased gap from gap-3 to gap-4 */}
        {/* Logo image - Larger and more prominent */}
        <img 
          src="/images/Picture1.jpg" 
          alt="Rebel Echo Records Logo"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-[#B8860B]/50 shadow-lg shadow-[#B8860B]/20" /* Increased from h-8 w-8 */
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white tracking-tight"> {/* Increased from text-xl */}
            Rebel Echo Records
          </span>
          <span className="text-xs text-[#B8860B] uppercase tracking-wider"> {/* Added tagline */}
            Home of Gospel-Core & Poetic Metal
          </span>
        </div>
      </div>
      <nav className="hidden gap-8 md:flex">
        <a href="#features" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">
          Albums
        </a>
        <a href="#benefits" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">
          Tracks
        </a>
        <a href="#footer" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">
          Contact
        </a>
      </nav>
    </div>
  </div>
</header>

    {/* Hero Section */}
<section className="relative w-full overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20" style={{ backgroundColor: '#0A0A0A' }}>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080]"></div> {/* Gold to purple gradient */}
    </div>
  </div>
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div className="text-center">
      <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2">
        Rebel Echo Records
      </h1>
      <p className="text-2xl sm:text-3xl text-[#B8860B] mb-4">
        Home of Gospel-Core and Poetic Metal
      </p>
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center gap-6 mb-2">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {/* J'Soul Logo - INCREASED SIZE */}
          <div className="flex flex-col items-center">
            <img 
              src="/images/Picture3-removebg-preview.png" 
              alt="J'Soul Logo"
              className="h-32 w-32 object-contain md:h-30 md:w-30 filter drop-shadow-[0_0_15px_rgba(184,134,11,0.3)]" /* Increased from h-20 w-20 */
            />
          </div>
        </div>
      </div>
      {/* Subtext with J'Soul */}
      <div className="mt-4 space-y-2">
        <p className="text-2xl sm:text-3xl font-semibold text-[#B8860B]"> {/* Gold accent */}
          Home of J'Soul
        </p>
        <p className="text-xl text-gray-300">
          Featuring new and upcoming artists: Judy Briggs
        </p>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => {
            document.getElementById('benefits')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          className="rounded-lg bg-[#B8860B] px-8 py-3 text-base font-semibold text-black transition-all hover:bg-[#DAA520]"
        >
          Listen To Track
        </button>
        <button 
          onClick={() => {
            document.getElementById('features')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          className="rounded-lg border-2 border-[#800080] px-8 py-3 text-base font-semibold text-white transition-all hover:border-[#B8860B] hover:bg-white/10"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

    {/* Features Section */}
<section id="features" className="w-full py-20 sm:py-28 bg-[#0A0A0A]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Label Overview - Now side by side with image */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
      {/* Left side - Text Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          REBEL ECHO RECORDS
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mb-8">
          Home of Gospel-Core and Poetic Metal
        </p>
        
        {/* Overview Card */}
        <div className="bg-gradient-to-r from-[#800080]/10 to-transparent p-8 rounded-2xl border border-[#B8860B]/20">
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold text-[#B8860B]">Rebel Echo Records (RER)</span> is an independent label rooted in conviction, resilience, and artistic truth.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Home of <span className="font-semibold text-[#800080]">J'Soul</span>, featuring new and upcoming artists, including <span className="font-semibold text-[#B8860B]">Judy Briggs</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            RER exists at the intersection of faith, fire, vulnerability, and strength. We build music that confronts, restores, and refuses to compromise.
          </p>
        </div>
      </div>

      {/* Right side - Artist Image Section - J'Soul */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative max-w-2xl w-full">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-3xl transform -rotate-1 scale-105 blur-sm opacity-20"></div>
          
          {/* Main image container */}
          <div className="relative bg-gradient-to-br from-[#B8860B] to-[#800080] p-1 rounded-2xl shadow-2xl">
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                {/* Image placeholder - J'Soul professional artist photo */}
                <img 
                  src="/images/Picture2.png" 
                  alt="J'Soul - Artist at Rebel Echo Records"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
                
                {/* Artist name overlay */}
                
              </div>
              
              {/* Quick artist bio */}
              
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Press Release Section */}
    <div className="mb-16">
      <div className="bg-[#111111] border border-[#B8860B]/20 rounded-2xl p-8 md:p-10">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-[#800080]/20 text-[#B8860B] font-semibold rounded-full text-sm mb-4">
            FOR IMMEDIATE RELEASE
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            J'Soul Announces "Poetic Metal" – A Genre-Defying Testament of Faith, Resilience, and Family
          </h3>
        </div>
        
        <div className="space-y-6 text-gray-300 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-[#B8860B]">Rebel Echo Records</span> proudly announces the upcoming release of <span className="font-semibold text-[#800080]">Poetic Metal</span>, arriving <span className="font-semibold text-[#B8860B]">March 10, 2026</span>.
          </p>
          
          <p className="leading-relaxed">
            Blending Christian metal, poetic lyricism, rap influence, and emotionally grounded storytelling, Poetic Metal explores endurance in relationships, spiritual guidance through adversity, mental health recovery, and unwavering family bonds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="bg-[#0A0A0A] p-5 rounded-xl border border-[#800080]/30">
              <span className="block text-lg font-semibold text-[#B8860B] mb-2">"Enigma"</span>
              <p className="text-sm text-gray-400">honors quiet brilliance</p>
            </div>
            <div className="bg-[#0A0A0A] p-5 rounded-xl border border-[#800080]/30">
              <span className="block text-lg font-semibold text-[#B8860B] mb-2">"The Devil Dealt Me Aces"</span>
              <p className="text-sm text-gray-400">celebrates earned victory</p>
            </div>
            <div className="bg-[#0A0A0A] p-5 rounded-xl border border-[#800080]/30">
              <span className="block text-lg font-semibold text-[#B8860B] mb-2">"The Cost of Staying"</span>
              <p className="text-sm text-gray-400">examines devotion under strain</p>
            </div>
            <div className="bg-[#0A0A0A] p-5 rounded-xl border border-[#800080]/30">
              <span className="block text-lg font-semibold text-[#B8860B] mb-2">"Premeditated"</span>
              <p className="text-sm text-gray-400">dedicated to mental health professionals, including the team at the Canadian Mental Health Association</p>
            </div>
          </div>
          
          <p className="leading-relaxed">
            Releasing on March 10, a date of personal significance, Poetic Metal is a declaration of strength, accountability, and purpose.
          </p>
        </div>
        
        {/* Divider */}
        <div className="my-8 border-t border-[#B8860B]/20"></div>
        
        {/* AI & Innovation Section - Expanded with new content */}
        <div className="space-y-6">
          {/* Suno Acknowledgment */}
          <div className="bg-gradient-to-r from-[#800080]/10 to-transparent p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl text-[#B8860B]">🎵</span> Suno Acknowledgment
            </h4>
            <div className="space-y-3 text-gray-400 italic">
              <p>
                This album was brought to life with the assistance of AI tools, including Suno.
              </p>
              <p>
                As a songwriter, I found in this technology a way to translate written conviction into fully realized soundscapes. The words, stories, and direction are mine. AI did not replace my voice. It helped bring it to life.
              </p>
              <p className="font-medium text-[#B8860B] not-italic">
                Innovation does not replace artistry. It amplifies it. I am proud to stand at the intersection of creativity and technology.
              </p>
            </div>
          </div>

          {/* AI Statement - Bold & Direct */}
          <div className="bg-[#111111] border-l-4 border-[#B8860B] p-6 rounded-r-xl">
            <p className="text-xl font-semibold text-white mb-2">AI</p>
            <p className="text-gray-300 mb-3">
              Because that's the truth. A piano doesn't make someone a composer. A studio doesn't make someone a producer. A tool does not erase authorship.
            </p>
            <p className="text-gray-300 font-medium">
              You are not hiding behind AI. You are wielding it.
            </p>
          </div>

          {/* On Innovation and Authorship */}
          <div className="bg-gradient-to-r from-[#B8860B]/10 to-transparent p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-3">
              On Innovation and Authorship
            </h4>
            <div className="space-y-3 text-gray-400">
              <p>
                Poetic Metal was created using modern creative tools, including Suno. I am transparent about that because I believe artistry evolves with technology. The words, themes, and direction are mine. AI did not replace my voice. It helped bring it to life.
              </p>
              <p>
                Every era has its instruments. Some artists choose analog tape. Some choose digital production. I chose to explore the frontier.
              </p>
              <p>
                If that challenges tradition, that's part of progress.
              </p>
              <p className="font-semibold text-[#B8860B] text-lg not-italic pt-2">
                The music stands on its own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Benefits Section - Featured Tracks - PROFESSIONAL REDESIGN */}
{/* Benefits Section - Judy Briggs Featured Tracks */}
<section id="benefits" className="w-full py-16 sm:py-20 bg-[#0A0A0A]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
  
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Introducing Judy Briggs
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        A fresh voice joining the Rebel Echo Records family — experience her debut tracks
      </p>
    </div>

    {/* Artist Introduction Card */}
    

    {/* Judy Briggs Tracks Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
      {tracks.map((track, index) => (
        <AudioCard key={index} track={track} index={index}  />
      ))}
    </div>

    {/* Additional info */}
    <div className="mt-12 text-center">
      <div className="inline-flex items-center gap-3 p-4 bg-[#111111] rounded-xl border border-[#B8860B]/30">
        <span className="text-[#B8860B]">🎵</span>
        <p className="text-gray-300">
          <span className="font-semibold text-[#B8860B]">Coming Soon:</span> Full album "Poetic Metal" available March 10, 2026
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer id="footer" className="w-full" style={{ backgroundColor: '#0A0A0A' }}>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    
    
    {/* Email Contacts Section */}
    <div className="border-t border-[#B8860B]/20 pt-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-gray-400 text-sm">@rebelechrecords.com</p>
        <p className="text-gray-400 text-sm">General / Artist Contact: <span className="text-[#B8860B]">jsoul@…</span></p>
        <p className="text-gray-400 text-sm">Artist Contact – Judy Briggs: <span className="text-[#800080]">judy@…</span></p>
        <p className="text-gray-400 text-sm">Business & Strategy: <span className="text-[#B8860B]">vox@…</span></p>
        <p className="text-gray-400 text-sm">Sales & Engagement: <span className="text-[#800080]">sales@…</span></p>
        <p className="text-gray-400 text-sm">Digital & Social Media: <span className="text-[#B8860B]">emily@…</span></p>
      </div>
    </div>
    
   
  </div>
</footer>
    </div>
  );
}

/* =========================================================
   🎵 PROFESSIONAL AUDIO CARD COMPONENT - REDESIGNED
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
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-[#B8860B]">0{index + 1}</span>
            <div className="w-12 h-px bg-gradient-to-r from-[#B8860B] to-transparent"></div>
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Single</span>
        </div>

        <div className="p-6 pt-2">
          <div className="flex items-start gap-5">
            {/* Album Art with Play Button Overlay */}
            <div className="relative w-24 h-24 flex-shrink-0 group/image">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080] rounded-xl blur-sm opacity-50"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-[#800080]/30">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B] flex items-center justify-center">
                    <span className="text-black text-xs">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white mb-1 truncate">
                {track.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {track.artist}
              </p>

              {/* Progress Bar */}
              <div
                ref={progressRef}
                onClick={handleSeek}
                className="relative h-1.5 bg-[#800080]/20 rounded-full overflow-hidden cursor-pointer group/progress mb-3"
              >
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-full transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#B8860B] rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"
                  style={{ left: `calc(${progressPercent}% - 6px)` }}
                />
              </div>

              {/* Time Display */}
              <div className="flex justify-between text-xs text-gray-500 mb-3">
                <span>{formatTime(current)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-[#B8860B] to-[#800080] text-white flex items-center justify-center hover:shadow-lg hover:shadow-[#B8860B]/20 transition-all transform hover:scale-105"
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>

                <button
                  onClick={stopAudio}
                  className="w-9 h-9 rounded-full bg-[#222222] text-gray-400 hover:text-white hover:bg-[#333333] transition-colors flex items-center justify-center"
                >
                  ⏹
                </button>

                <div className="relative">
                  <button
                    onClick={toggleMute}
                    onMouseEnter={() => setShowVolumeControl(true)}
                    onMouseLeave={() => setShowVolumeControl(false)}
                    className="w-9 h-9 rounded-full bg-[#222222] text-gray-400 hover:text-white hover:bg-[#333333] transition-colors flex items-center justify-center"
                  >
                    {isMuted ? "🔇" : volume > 0.7 ? "🔊" : volume > 0.3 ? "🔉" : "🔈"}
                  </button>
                  
                  {/* Volume Slider Popup */}
                  {showVolumeControl && (
                    <div 
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-[#222222] rounded-lg border border-[#B8860B]/30 shadow-xl"
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
                        className="w-20 h-1 bg-[#800080]/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#B8860B]"
                      />
                    </div>
                  )}
                </div>

                {/* Waveform indicator when playing */}
                {isPlaying && (
                  <div className="ml-auto flex items-center gap-0.5">
                    <div className="w-0.5 h-3 bg-[#B8860B] animate-pulse"></div>
                    <div className="w-0.5 h-4 bg-[#800080] animate-pulse delay-75"></div>
                    <div className="w-0.5 h-2 bg-[#B8860B] animate-pulse delay-150"></div>
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