/* ==========================================================================
   NAADHA - PREMIUM TAMIL MUSIC PLAYER SCRIPT ENGINE
   ========================================================================== */

// --- 50 TAMIL SONGS DATABASE ---
const TAMIL_SONGS_DATABASE = [
    {
        id: 1,
        title: "Enjoy Enjaami",
        artist: "Dhee ft. Arivu",
        album: "Enjoy Enjaami - Single",
        duration: "4:13",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Kadhaippoma",
        artist: "Sid Sriram",
        album: "Oh My Kadavule",
        duration: "4:32",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Kaattu Payale",
        artist: "Dhee",
        album: "Soorarai Pottru",
        duration: "4:06",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Rowdy Baby",
        artist: "Dhanush & Dhee",
        album: "Maari 2",
        duration: "4:43",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Vaseegara",
        artist: "Bombay Jayashri",
        album: "Minnale",
        duration: "5:02",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 6,
        title: "Maruvarthai",
        artist: "Sid Sriram",
        album: "Enai Noki Paayum Thota",
        duration: "5:10",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 7,
        title: "Kannazhaga",
        artist: "Dhanush & Shruti Haasan",
        album: "3",
        duration: "3:28",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 8,
        title: "Neeyum Naanum Anbe",
        artist: "Sid Sriram",
        album: "Imaikkaa Nodigal",
        duration: "4:45",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 9,
        title: "Aalaporan Thamizhan",
        artist: "Kailash Kher & Sathya Prakash",
        album: "Mersal",
        duration: "5:48",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 10,
        title: "Tum Tum",
        artist: "Sri Vardhini",
        album: "Enemy",
        duration: "3:48",
        cover: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 11,
        title: "Arabic Kuthu",
        artist: "Anirudh Ravichander & Jonita Gandhi",
        album: "Beast",
        duration: "4:40",
        cover: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 12,
        title: "Ranjithame",
        artist: "Vijay & Manasi",
        album: "Varisu",
        duration: "4:47",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 13,
        title: "Naattu Koothu",
        artist: "Rahul Sipligunj",
        album: "RRR (Tamil)",
        duration: "3:36",
        cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 14,
        title: "Mehabooba",
        artist: "Ananya Bhat",
        album: "KGF Chapter 2",
        duration: "2:43",
        cover: "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 15,
        title: "Oo Solriya",
        artist: "Andrea Jeremiah",
        album: "Pushpa (Tamil)",
        duration: "3:45",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 16,
        title: "Karka Karka",
        artist: "Devan Ekambaram",
        album: "Vettaiyaadu Vilaiyaadu",
        duration: "5:08",
        cover: "https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 17,
        title: "Un Vizhigalil",
        artist: "Haricharan",
        album: "Man Karate",
        duration: "4:12",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 18,
        title: "Anbil Avan",
        artist: "Devan & Chinmayi",
        album: "Vinnaithaandi Varuvaayaa",
        duration: "3:52",
        cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 19,
        title: "Nenjukkul Peidhidum",
        artist: "Hariharan & Devan",
        album: "Vaaranam Aayiram",
        duration: "6:10",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 20,
        title: "Pala Palakkura",
        artist: "Hariharan",
        album: "Ayan",
        duration: "5:23",
        cover: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 21,
        title: "Vizhiyil Un Vizhiyil",
        artist: "Chinmayi",
        album: "Kireedam",
        duration: "4:35",
        cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 22,
        title: "New York Nagaram",
        artist: "A.R. Rahman",
        album: "Sillunu Oru Kaadhal",
        duration: "6:15",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 23,
        title: "Munbe Vaa",
        artist: "Shreya Ghoshal",
        album: "Sillunu Oru Kaadhal",
        duration: "5:58",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 24,
        title: "Hosanna",
        artist: "Vijay Prakash & Blaaze",
        album: "Vinnaithaandi Varuvaayaa",
        duration: "5:31",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 25,
        title: "Mannipaaya",
        artist: "A.R. Rahman & Shreya Ghoshal",
        album: "Vinnaithaandi Varuvaayaa",
        duration: "6:58",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 26,
        title: "Adiye",
        artist: "Sid Sriram",
        album: "Kadal",
        duration: "5:03",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 27,
        title: "Aathangara Orathil",
        artist: "G.V. Prakash",
        album: "Yaan",
        duration: "4:34",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 28,
        title: "Pookkale Sattru Oyivedungal",
        artist: "Haricharan & Shreya Ghoshal",
        album: "I",
        duration: "5:08",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 29,
        title: "Neeye Neeye",
        artist: "K.K.",
        album: "M. Kumaran S/O Mahalakshmi",
        duration: "5:35",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 30,
        title: "Ennamo Yeadho",
        artist: "Aalaap Raju",
        album: "Ko",
        duration: "5:12",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 31,
        title: "Adada Mazhaida",
        artist: "Rahul Nambiar",
        album: "Paiyaa",
        duration: "4:21",
        cover: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 32,
        title: "Thuli Thuli",
        artist: "Haricharan",
        album: "Paiyaa",
        duration: "4:47",
        cover: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 33,
        title: "En Kadhal Solla",
        artist: "Yuvan Shankar Raja",
        album: "Paiyaa",
        duration: "4:50",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 34,
        title: "Venmegam Pennaga",
        artist: "Hariharan",
        album: "Yaaradi Nee Mohini",
        duration: "4:33",
        cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 35,
        title: "Oru Kal Oru Kannadi",
        artist: "Yuvan Shankar Raja",
        album: "Siva Manasula Sakthi",
        duration: "5:10",
        cover: "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 36,
        title: "Vaseegara (Unplugged)",
        artist: "Acoustic Cover",
        album: "Melodic Tones Volume 1",
        duration: "3:45",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 37,
        title: "Kanja Poovu Kannala",
        artist: "Sid Sriram",
        album: "Viruman",
        duration: "4:18",
        cover: "https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 38,
        title: "Chilla Chilla",
        artist: "Anirudh Ravichander",
        album: "Thunivu",
        duration: "3:45",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 39,
        title: "Hukum - Alappara",
        artist: "Anirudh Ravichander",
        album: "Jailer",
        duration: "3:27",
        cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 40,
        title: "Kaavala",
        artist: "Shilpa Rao & Anirudh",
        album: "Jailer",
        duration: "3:10",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 41,
        title: "Naa Ready",
        artist: "Vijay & Anirudh",
        album: "Leo",
        duration: "4:08",
        cover: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 42,
        title: "Badass",
        artist: "Anirudh Ravichander",
        album: "Leo",
        duration: "3:49",
        cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 43,
        title: "Anbbae Anbbae",
        artist: "Sid Sriram",
        album: "Darling",
        duration: "4:20",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 44,
        title: "Guleba",
        artist: "Anirudh & Mervin Solomon",
        album: "Gulaebaghaavali",
        duration: "4:42",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 45,
        title: "Sodakku",
        artist: "Anthony Daasan",
        album: "Thaanaa Serndha Koottam",
        duration: "4:02",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 46,
        title: "High On Love",
        artist: "Sid Sriram",
        album: "Pyaar Prema Kaadhal",
        duration: "3:55",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 47,
        title: "Chinnamma Chilakkamma",
        artist: "Sukhwinder Singh",
        album: "Karuthamma",
        duration: "4:18",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 48,
        title: "Kadhal Sadugudu",
        artist: "S.P. Charan",
        album: "Alaipayuthey",
        duration: "4:35",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 49,
        title: "Pachai Nirame",
        artist: "Hariharan",
        album: "Alaipayuthey",
        duration: "5:21",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&h=300&fit=crop"
    },
    {
        id: 50,
        title: "Snehidhane",
        artist: "Sadhana Sargam",
        album: "Alaipayuthey",
        duration: "4:55",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=300&fit=crop"
    }
];

// --- ROYALTY FREE MP3 AUDIOS FOR MULTI-TRACK SEAMLESS LISTENING ---
const TEST_AUDIO_SOURCES = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
];

// Add direct audio URL assignments round-robin to all 50 tracks
TAMIL_SONGS_DATABASE.forEach((song, idx) => {
    song.audioUrl = TEST_AUDIO_SOURCES[idx % TEST_AUDIO_SOURCES.length];
});

// --- STATE MANAGEMENT ---
let playerState = {
    isPlaying: false,
    currentTrackIndex: 0, // Starts at track 0
    isShuffle: false,
    repeatMode: 0, // 0 = no repeat, 1 = repeat playlist, 2 = repeat single song
    volume: 0.8,
    isMuted: false,
    favorites: JSON.parse(localStorage.getItem("naadha_favorites")) || [],
    recentlyPlayed: JSON.parse(localStorage.getItem("naadha_recent")) || [],
    activeView: "home", // "home", "search", "favorites"
    historyIndex: 0,
    historyStack: [0],
    playlistFiltered: [...TAMIL_SONGS_DATABASE]
};

// --- DOM ELEMENTS CACHE ---
const audio = document.getElementById("audio-element");
const playlistTracksContainer = document.getElementById("playlist-tracks");
const playlistCountEl = document.getElementById("playlist-count");
const playlistSearchInput = document.getElementById("playlist-search");
const clearSearchBtn = document.getElementById("clear-search-btn");

// Global Search
const globalSearchContainer = document.getElementById("global-search-container");
const globalSearchInput = document.getElementById("global-search");

// Navigation tabs
const navHome = document.getElementById("nav-home");
const navSearchTab = document.getElementById("nav-search-tab");
const navFavorites = document.getElementById("nav-favorites");
const favCountBadge = document.getElementById("fav-count");

// Views
const viewHome = document.getElementById("view-home");
const viewSearch = document.getElementById("view-search");
const viewFavorites = document.getElementById("view-favorites");

// Home content loaders
const recentlyPlayedGrid = document.getElementById("recently-played-grid");
const trendingGrid = document.getElementById("trending-grid");

// Favorites page elements
const favoritesListTable = document.getElementById("favorites-list-table");
const favoritesStatsText = document.getElementById("favorites-stats-text");
const favoritesEmptyState = document.getElementById("favorites-empty-state");
const favPlayAllBtn = document.getElementById("fav-play-all-btn");

// Now playing sidebar panel
const nowPlayingPane = document.getElementById("now-playing-pane");
const btnTogglePane = document.getElementById("btn-toggle-pane");
const closePanelBtn = document.getElementById("close-panel-btn");
const paneSongArt = document.getElementById("pane-song-art");
const paneSongTitle = document.getElementById("pane-song-title");
const paneSongArtist = document.getElementById("pane-song-artist");
const paneSongAlbum = document.getElementById("pane-song-album");
const paneFavBtn = document.getElementById("pane-fav-btn");
const visualizerContainer = document.getElementById("visualizer-container");
const vinylDisc = document.getElementById("vinyl-disc");

// Player Bar (Bottom) controls
const playerArt = document.getElementById("player-art");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerFavBtn = document.getElementById("player-fav-btn");

const btnPlayPause = document.getElementById("btn-play-pause");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnShuffle = document.getElementById("btn-shuffle");
const btnRepeat = document.getElementById("btn-repeat");

// Seek Timeline
const timeCurrent = document.getElementById("time-current");
const timeTotal = document.getElementById("time-total");
const progressSlider = document.getElementById("progress-slider");
const progressFill = document.getElementById("progress-fill");

// System Utilities
const btnVolumeMute = document.getElementById("btn-volume-mute");
const volumeSlider = document.getElementById("volume-slider");
const volumeFill = document.getElementById("volume-fill");

// Error indicators
const errorBanner = document.getElementById("error-banner");
const errorMessage = document.getElementById("error-message");
const errorClose = document.getElementById("error-close");

// Navigation history controls
const arrowPrev = document.getElementById("arrow-prev");
const arrowNext = document.getElementById("arrow-next");

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial State Sync
    syncFavoritesBadge();
    
    // 2. Render Initial UI Content
    renderPlaylist(TAMIL_SONGS_DATABASE);
    renderTrendingHits();
    renderRecentlyPlayed();
    
    // 3. Load First Track (without playing)
    loadTrack(playerState.currentTrackIndex, false);
    
    // 4. Set Initial Volume
    audio.volume = playerState.volume;
    updateVolumeUI(playerState.volume * 100);
    
    // 5. Register All Events
    registerEventListeners();
});

// --- AUDIO PLAYBACK CORE LOGIC ---

// Load Track details into players
function loadTrack(index, autoplay = true) {
    if (index < 0 || index >= TAMIL_SONGS_DATABASE.length) return;
    
    playerState.currentTrackIndex = index;
    const track = TAMIL_SONGS_DATABASE[index];
    
    // Set Audio Source
    audio.src = track.audioUrl;
    audio.load();
    
    // Update Document Title
    document.title = `${track.title} - Naadha Tamil Player`;
    
    // Update Bottom Player UI
    playerArt.src = track.cover;
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    
    // Update Right Panel UI
    paneSongArt.src = track.cover;
    paneSongTitle.textContent = track.title;
    paneSongArtist.textContent = track.artist;
    paneSongAlbum.textContent = track.album;
    
    // Sync Heart/Fav Button active state
    updateFavButtons(track.id);
    
    // Reset timelines
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = track.duration;
    progressSlider.value = 0;
    progressSlider.style.setProperty('--slider-percent', '0%');
    progressFill.style.width = '0%';
    
    // Highlight track in sidebar playlist
    highlightActiveTrackInPlaylist();
    
    // Handle autoplay state
    if (autoplay) {
        playTrack();
    } else {
        pauseTrack();
    }
    
    // Log to recently played
    addToRecentlyPlayed(track.id);
}

// Trigger audio play
function playTrack() {
    audio.play()
        .then(() => {
            playerState.isPlaying = true;
            btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
            btnPlayPause.classList.add("paused");
            
            // Trigger Visualizer and Art spins
            visualizerContainer.classList.add("playing");
            paneSongArt.classList.add("playing");
            vinylDisc.style.animationPlayState = "running";
            
            const activeDisc = document.querySelector(".logo-icon");
            if (activeDisc) activeDisc.style.animationPlayState = "running";
        })
        .catch(err => {
            console.warn("Autoplay block or loading error:", err);
            // Handle loading errors gracefully (CORS, network)
            showErrorMessage("Unable to fetch audio stream. Playing in visual mock mode.");
            
            // Visual play indicator anyway for demonstration purposes
            playerState.isPlaying = true;
            btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
            visualizerContainer.classList.add("playing");
            paneSongArt.classList.add("playing");
            vinylDisc.style.animationPlayState = "running";
        });
}

// Trigger audio pause
function pauseTrack() {
    audio.pause();
    playerState.isPlaying = false;
    btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>';
    btnPlayPause.classList.remove("paused");
    
    // Halt animations
    visualizerContainer.classList.remove("playing");
    paneSongArt.classList.remove("playing");
    vinylDisc.style.animationPlayState = "paused";
    
    const activeDisc = document.querySelector(".logo-icon");
    if (activeDisc) activeDisc.style.animationPlayState = "paused";
}

// Toggle play state
function togglePlay() {
    if (playerState.isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

// Play next track (Shuffle / Repeat aware)
function nextTrack() {
    // If Repeat Single Track is active and next is clicked, still load next song
    if (playerState.isShuffle) {
        playRandomTrack();
    } else {
        let nextIdx = playerState.currentTrackIndex + 1;
        if (nextIdx >= TAMIL_SONGS_DATABASE.length) {
            nextIdx = 0; // Wrap around to first track
        }
        loadTrack(nextIdx);
    }
}

// Play previous track (Shuffle / Repeat aware)
function prevTrack() {
    // If track is more than 3 seconds in, restart the track instead
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    
    if (playerState.isShuffle) {
        playRandomTrack();
    } else {
        let prevIdx = playerState.currentTrackIndex - 1;
        if (prevIdx < 0) {
            prevIdx = TAMIL_SONGS_DATABASE.length - 1; // Wrap around to end
        }
        loadTrack(prevIdx);
    }
}

// Select random track index
function playRandomTrack() {
    let randIndex;
    do {
        randIndex = Math.floor(Math.random() * TAMIL_SONGS_DATABASE.length);
    } while (randIndex === playerState.currentTrackIndex && TAMIL_SONGS_DATABASE.length > 1);
    
    loadTrack(randIndex);
}

// Shuffle mode toggle
function toggleShuffle() {
    playerState.isShuffle = !playerState.isShuffle;
    btnShuffle.classList.toggle("active", playerState.isShuffle);
}

// Repeat mode cycle
function toggleRepeat() {
    // 0 = Off, 1 = Repeat Playlist, 2 = Repeat One
    playerState.repeatMode = (playerState.repeatMode + 1) % 3;
    
    const icon = btnRepeat.querySelector("i");
    btnRepeat.classList.remove("active");
    
    if (playerState.repeatMode === 0) {
        icon.className = "fa-solid fa-repeat";
        btnRepeat.title = "Repeat Off (R)";
    } else if (playerState.repeatMode === 1) {
        btnRepeat.classList.add("active");
        icon.className = "fa-solid fa-repeat";
        btnRepeat.title = "Repeat Playlist (R)";
    } else if (playerState.repeatMode === 2) {
        btnRepeat.classList.add("active");
        icon.className = "fa-solid fa-arrows-spin"; // visual cue for single loop
        btnRepeat.title = "Repeat One (R)";
    }
}

// --- SECKBAR AND TIMELINE ADJUSTMENTS ---

// Format seconds into MM:SS format
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Handle progress timeline update
function handleTimeUpdate() {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressSlider.value = percent;
        
        // Update slider fills dynamically (Clipped color logic)
        progressFill.style.width = `${percent}%`;
        progressSlider.style.setProperty('--slider-percent', `${percent}%`);
        
        // Update time readouts
        timeCurrent.textContent = formatTime(audio.currentTime);
        timeTotal.textContent = formatTime(audio.duration);
    } else {
        // If audio link fails, simulate timeline progress if player is active
        if (playerState.isPlaying) {
            let val = parseFloat(progressSlider.value) + 0.15;
            if (val >= 100) {
                val = 0;
                nextTrack();
            }
            progressSlider.value = val;
            progressFill.style.width = `${val}%`;
            progressSlider.style.setProperty('--slider-percent', `${val}%`);
            
            // Sim duration
            const mockDur = 240; // 4:00 mock
            const mockCur = (val / 100) * mockDur;
            timeCurrent.textContent = formatTime(mockCur);
            timeTotal.textContent = formatTime(mockDur);
        }
    }
}

// Seek directly to percentage in audio track
function seekTo(value) {
    if (audio.duration) {
        const seekTime = (value / 100) * audio.duration;
        audio.currentTime = seekTime;
    } else {
        // Update visually if simulated
        progressFill.style.width = `${value}%`;
        progressSlider.style.setProperty('--slider-percent', `${value}%`);
    }
}

// --- VOLUME LOGIC ---

// Set volume scale (0.0 to 1.0)
function setVolume(value) {
    playerState.volume = value / 100;
    audio.volume = playerState.volume;
    
    // Handle automatic unmute on volume move
    if (playerState.volume > 0 && playerState.isMuted) {
        toggleMute();
    }
    
    updateVolumeUI(value);
}

// Update Volume Icon and Bars
function updateVolumeUI(percentage) {
    volumeSlider.value = percentage;
    volumeFill.style.width = `${percentage}%`;
    volumeSlider.style.setProperty('--slider-percent', `${percentage}%`);
    
    const icon = btnVolumeMute.querySelector("i");
    
    if (percentage == 0 || playerState.isMuted) {
        icon.className = "fa-solid fa-volume-xmark";
    } else if (percentage < 40) {
        icon.className = "fa-solid fa-volume-low";
    } else {
        icon.className = "fa-solid fa-volume-high";
    }
}

// Toggle mute state
function toggleMute() {
    playerState.isMuted = !playerState.isMuted;
    
    if (playerState.isMuted) {
        audio.muted = true;
        updateVolumeUI(0);
    } else {
        audio.muted = false;
        updateVolumeUI(playerState.volume * 100);
    }
}

// --- FAVORITES & LIBRARY MANAGEMENT ---

// Toggle Song Favorite Status
function toggleFavorite(songId) {
    const idx = playerState.favorites.indexOf(songId);
    
    if (idx === -1) {
        playerState.favorites.push(songId);
    } else {
        playerState.favorites.splice(idx, 1);
    }
    
    // Save to LocalStorage
    localStorage.setItem("naadha_favorites", JSON.stringify(playerState.favorites));
    
    // Sync UI Badges and icons
    syncFavoritesBadge();
    updateFavButtons(songId);
    
    // If active view is Favorites page, reload table immediately
    if (playerState.activeView === "favorites") {
        renderFavoritesPage();
    }
}

// Sync Sidebar Heart Counts
function syncFavoritesBadge() {
    const count = playerState.favorites.length;
    favCountBadge.textContent = count;
    favCountBadge.style.display = count > 0 ? "inline-block" : "none";
}

// Highlight Heart icons when active track changes
function updateFavButtons(songId) {
    const isFav = playerState.favorites.includes(songId);
    
    // Toggle active classes on Now playing pane heart
    if (TAMIL_SONGS_DATABASE[playerState.currentTrackIndex].id === songId) {
        paneFavBtn.classList.toggle("liked", isFav);
        paneFavBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart" style="color:#FF2E93;"></i>' : '<i class="fa-regular fa-heart"></i>';
        
        playerFavBtn.classList.toggle("liked", isFav);
        playerFavBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart" style="color:#FF2E93;"></i>' : '<i class="fa-regular fa-heart"></i>';
    }
}

// Add Track to Recently Played array
function addToRecentlyPlayed(songId) {
    // Remove if already in array (to push to front)
    const existingIdx = playerState.recentlyPlayed.indexOf(songId);
    if (existingIdx !== -1) {
        playerState.recentlyPlayed.splice(existingIdx, 1);
    }
    
    // Add to top of list
    playerState.recentlyPlayed.unshift(songId);
    
    // Cap at 6 entries
    if (playerState.recentlyPlayed.length > 6) {
        playerState.recentlyPlayed.pop();
    }
    
    // Store
    localStorage.setItem("naadha_recent", JSON.stringify(playerState.recentlyPlayed));
    
    // Rerender dashboard items if on home
    if (playerState.activeView === "home") {
        renderRecentlyPlayed();
    }
}

// --- DYNAMIC RENDERING FUNCTIONS ---

// Render 50 Song sidebar playlist
function renderPlaylist(songs) {
    playlistTracksContainer.innerHTML = "";
    
    if (songs.length === 0) {
        playlistTracksContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-music"></i>
                <p style="font-size:12px; color:var(--text-muted);">No songs found</p>
            </div>
        `;
        return;
    }
    
    songs.forEach((song, index) => {
        // Find overall index from database
        const databaseIndex = TAMIL_SONGS_DATABASE.findIndex(s => s.id === song.id);
        const isCurrentlyPlaying = databaseIndex === playerState.currentTrackIndex;
        
        const trackDiv = document.createElement("div");
        trackDiv.className = `playlist-item ${isCurrentlyPlaying ? 'active' : ''}`;
        trackDiv.setAttribute("data-index", databaseIndex);
        
        trackDiv.innerHTML = `
            <span class="track-index">${isCurrentlyPlaying && playerState.isPlaying ? '<i class="fa-solid fa-volume-high" style="font-size:10px;"></i>' : index + 1}</span>
            <div class="track-art-container">
                <img src="${song.cover}" alt="${song.title}">
                <div class="track-item-play-overlay">
                    <i class="fa-solid ${isCurrentlyPlaying && playerState.isPlaying ? 'fa-pause' : 'fa-play'}"></i>
                </div>
            </div>
            <div class="track-item-details">
                <h4 class="track-item-title">${song.title}</h4>
                <p class="track-item-artist">${song.artist}</p>
            </div>
            <span class="track-item-duration">${song.duration}</span>
        `;
        
        // Register list click event
        trackDiv.addEventListener("click", () => {
            if (isCurrentlyPlaying) {
                togglePlay();
            } else {
                loadTrack(databaseIndex);
            }
        });
        
        playlistTracksContainer.appendChild(trackDiv);
    });
    
    playlistCountEl.textContent = `${songs.length} Song${songs.length !== 1 ? 's' : ''}`;
}

// Highlight currently playing sidebar song
function highlightActiveTrackInPlaylist() {
    const items = playlistTracksContainer.querySelectorAll(".playlist-item");
    items.forEach(item => {
        const itemIdx = parseInt(item.getAttribute("data-index"));
        const isActive = itemIdx === playerState.currentTrackIndex;
        
        item.classList.toggle("active", isActive);
        
        const indexSpan = item.querySelector(".track-index");
        const playIcon = item.querySelector(".track-item-play-overlay i");
        
        if (isActive) {
            if (playerState.isPlaying) {
                indexSpan.innerHTML = '<i class="fa-solid fa-volume-high" style="font-size:10px;"></i>';
                playIcon.className = "fa-solid fa-pause";
            } else {
                indexSpan.textContent = parseInt(itemIdx) + 1;
                playIcon.className = "fa-solid fa-play";
            }
        } else {
            // Find its position index inside the current rendered list
            const indexLabel = Array.from(items).indexOf(item) + 1;
            indexSpan.textContent = indexLabel;
            playIcon.className = "fa-solid fa-play";
        }
    });
}

// Render home grid trending section
function renderTrendingHits() {
    trendingGrid.innerHTML = "";
    
    // Pick 8 songs as trending (e.g. tracks 10 to 17)
    const trendingItems = TAMIL_SONGS_DATABASE.slice(10, 18);
    
    trendingItems.forEach(song => {
        const dbIdx = TAMIL_SONGS_DATABASE.findIndex(s => s.id === song.id);
        const card = document.createElement("div");
        card.className = "music-card";
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${song.cover}" alt="${song.title}">
                <button class="play-hover-btn">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        `;
        
        // play trigger on click
        card.addEventListener("click", (e) => {
            if (e.target.closest(".play-hover-btn")) {
                loadTrack(dbIdx);
                return;
            }
            loadTrack(dbIdx);
        });
        
        trendingGrid.appendChild(card);
    });
}

// Render home grid recently played section
function renderRecentlyPlayed() {
    recentlyPlayedGrid.innerHTML = "";
    
    if (playerState.recentlyPlayed.length === 0) {
        recentlyPlayedGrid.innerHTML = '<p class="empty-state-text">Tracks you play will show up here.</p>';
        return;
    }
    
    playerState.recentlyPlayed.forEach(songId => {
        const song = TAMIL_SONGS_DATABASE.find(s => s.id === songId);
        if (!song) return;
        
        const dbIdx = TAMIL_SONGS_DATABASE.findIndex(s => s.id === songId);
        const card = document.createElement("div");
        card.className = "recent-card";
        
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="recent-card-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <button class="play-hover-btn">
                <i class="fa-solid fa-play"></i>
            </button>
        `;
        
        card.addEventListener("click", (e) => {
            loadTrack(dbIdx);
        });
        
        recentlyPlayedGrid.appendChild(card);
    });
}

// Render favorites table view
function renderFavoritesPage() {
    favoritesListTable.innerHTML = "";
    
    if (playerState.favorites.length === 0) {
        favoritesEmptyState.classList.remove("hidden");
        favoritesStatsText.textContent = "0 songs";
        return;
    }
    
    favoritesEmptyState.classList.add("hidden");
    favoritesStatsText.textContent = `${playerState.favorites.length} Song${playerState.favorites.length !== 1 ? 's' : ''}`;
    
    playerState.favorites.forEach((songId, index) => {
        const song = TAMIL_SONGS_DATABASE.find(s => s.id === songId);
        if (!song) return;
        
        const dbIdx = TAMIL_SONGS_DATABASE.findIndex(s => s.id === songId);
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="width: 40px; text-align: center; color: var(--text-muted);">${index + 1}</td>
            <td>
                <div class="table-row-title-col">
                    <img src="${song.cover}" alt="${song.title}">
                    <div class="table-track-details">
                        <h4>${song.title}</h4>
                        <p>${song.artist}</p>
                    </div>
                </div>
            </td>
            <td class="table-row-album">${song.album}</td>
            <td class="table-row-duration">${song.duration}</td>
            <td class="table-action-cell">
                <button class="remove-fav-btn" data-id="${song.id}">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </td>
        `;
        
        // Row clicks load song
        row.addEventListener("click", (e) => {
            // Avoid trigger if clicking the remove icon button
            if (e.target.closest(".remove-fav-btn")) return;
            loadTrack(dbIdx);
        });
        
        // Remove button click handler
        row.querySelector(".remove-fav-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(song.id);
        });
        
        favoritesListTable.appendChild(row);
    });
}

// Render Search Results Grid
function renderSearchResults(query) {
    const filtered = TAMIL_SONGS_DATABASE.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) || 
        song.artist.toLowerCase().includes(query.toLowerCase()) || 
        song.album.toLowerCase().includes(query.toLowerCase())
    );
    
    const topCard = document.getElementById("top-search-result-card");
    const searchSongsContainer = document.getElementById("search-songs-results");
    const queryText = document.getElementById("search-query-text");
    
    queryText.textContent = query ? `Showing top results for "${query}"` : "Showing trending results";
    searchSongsContainer.innerHTML = "";
    
    if (filtered.length === 0) {
        topCard.innerHTML = `
            <p style="color:var(--text-muted); font-size: 14px;">No results found.</p>
        `;
        searchSongsContainer.innerHTML = `
            <p style="color:var(--text-muted); font-size: 14px; text-align:center; padding: 20px;">Try searching for a different song or artist</p>
        `;
        return;
    }
    
    // 1. Render Top Result (first matching song)
    const topSong = filtered[0];
    const topDbIdx = TAMIL_SONGS_DATABASE.findIndex(s => s.id === topSong.id);
    topCard.innerHTML = `
        <img src="${topSong.cover}" alt="${topSong.title}">
        <h2>${topSong.title}</h2>
        <div class="artist-label">
            <span>${topSong.artist}</span>
            <span class="tag">Song</span>
        </div>
        <button class="play-hover-btn">
            <i class="fa-solid fa-play"></i>
        </button>
    `;
    
    // Register top card playback
    topCard.onclick = () => {
        loadTrack(topDbIdx);
    };
    
    // 2. Render list of matching songs (up to 4)
    filtered.slice(0, 5).forEach(song => {
        const dbIdx = TAMIL_SONGS_DATABASE.findIndex(s => s.id === song.id);
        
        const row = document.createElement("div");
        row.className = "search-song-row";
        
        row.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="search-song-info">
                <div class="search-song-title">${song.title}</div>
                <div class="search-song-artist">${song.artist}</div>
            </div>
            <div class="search-song-album">${song.album}</div>
            <div class="search-song-duration">${song.duration}</div>
        `;
        
        row.addEventListener("click", () => {
            loadTrack(dbIdx);
        });
        
        searchSongsContainer.appendChild(row);
    });
}

// --- VIEW NAVIGATION ENGINE ---

// Switch main workspace sections
function switchView(viewName) {
    // Deactivate all nav items
    navHome.classList.remove("active");
    navSearchTab.classList.remove("active");
    navFavorites.classList.remove("active");
    
    // Hide all view screens
    viewHome.classList.add("hidden");
    viewSearch.classList.add("hidden");
    viewFavorites.classList.add("hidden");
    
    playerState.activeView = viewName;
    
    // Activate target
    if (viewName === "home") {
        navHome.classList.add("active");
        viewHome.classList.remove("hidden");
        renderRecentlyPlayed(); // Sync state
    } else if (viewName === "search") {
        navSearchTab.classList.add("active");
        viewSearch.classList.remove("hidden");
        // default render all search
        renderSearchResults(globalSearchInput.value || "");
        globalSearchInput.focus();
    } else if (viewName === "favorites") {
        navFavorites.classList.add("active");
        viewFavorites.classList.remove("hidden");
        renderFavoritesPage();
    }
    
    // Manage history stack
    if (playerState.historyStack[playerState.historyIndex] !== viewName) {
        // truncate stack if we were mid-history
        playerState.historyStack = playerState.historyStack.slice(0, playerState.historyIndex + 1);
        playerState.historyStack.push(viewName);
        playerState.historyIndex = playerState.historyStack.length - 1;
    }
}

// --- EVENT REGISTRATIONS ---
function registerEventListeners() {
    
    // Play & Pause
    btnPlayPause.addEventListener("click", togglePlay);
    
    // Prev / Next
    btnNext.addEventListener("click", nextTrack);
    btnPrev.addEventListener("click", prevTrack);
    
    // Shuffle / Repeat
    btnShuffle.addEventListener("click", toggleShuffle);
    btnRepeat.addEventListener("click", toggleRepeat);
    
    // Timeline Update & Seeking
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", () => {
        // Track complete behaviors
        if (playerState.repeatMode === 2) {
            // Repeat current track
            loadTrack(playerState.currentTrackIndex);
        } else {
            nextTrack();
        }
    });
    
    // Seek sliders dragging behaviors
    progressSlider.addEventListener("input", (e) => {
        seekTo(e.target.value);
    });
    
    // Volume Control Dragging
    volumeSlider.addEventListener("input", (e) => {
        setVolume(e.target.value);
    });
    
    btnVolumeMute.addEventListener("click", toggleMute);
    
    // Sidebar playlist filter search
    playlistSearchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        clearSearchBtn.style.display = query ? "block" : "none";
        
        const filtered = TAMIL_SONGS_DATABASE.filter(song => 
            song.title.toLowerCase().includes(query.toLowerCase()) || 
            song.artist.toLowerCase().includes(query.toLowerCase())
        );
        renderPlaylist(filtered);
    });
    
    clearSearchBtn.addEventListener("click", () => {
        playlistSearchInput.value = "";
        clearSearchBtn.style.display = "none";
        renderPlaylist(TAMIL_SONGS_DATABASE);
    });
    
    // Global Header Search
    globalSearchInput.addEventListener("input", (e) => {
        // Automatically route to search tab if not there
        if (playerState.activeView !== "search") {
            switchView("search");
        }
        renderSearchResults(e.target.value.trim());
    });
    
    // Tab Navigation bindings
    navHome.addEventListener("click", (e) => {
        e.preventDefault();
        switchView("home");
    });
    
    navSearchTab.addEventListener("click", (e) => {
        e.preventDefault();
        switchView("search");
    });
    
    navFavorites.addEventListener("click", (e) => {
        e.preventDefault();
        switchView("favorites");
    });
    
    // Header Hero Action buttons
    document.getElementById("hero-play-btn").addEventListener("click", () => {
        // Play first track of database
        loadTrack(0);
    });
    
    document.getElementById("hero-fav-btn").addEventListener("click", () => {
        // Favorite the hero track (Enjoy Enjaami)
        toggleFavorite(1);
    });
    
    // Play all button on Favorites tab
    favPlayAllBtn.addEventListener("click", () => {
        if (playerState.favorites.length > 0) {
            // Load the first favorited song
            const firstFavId = playerState.favorites[0];
            const dbIdx = TAMIL_SONGS_DATABASE.findIndex(s => s.id === firstFavId);
            loadTrack(dbIdx);
        }
    });
    
    // Now playing panel toggler (info icon on player-bar)
    btnTogglePane.addEventListener("click", () => {
        nowPlayingPane.classList.toggle("open");
        btnTogglePane.classList.toggle("active");
    });
    
    closePanelBtn.addEventListener("click", () => {
        nowPlayingPane.classList.remove("open");
        btnTogglePane.classList.remove("active");
    });
    
    // Favorites hearts in detail cards toggles
    paneFavBtn.addEventListener("click", () => {
        const activeTrack = TAMIL_SONGS_DATABASE[playerState.currentTrackIndex];
        toggleFavorite(activeTrack.id);
    });
    
    playerFavBtn.addEventListener("click", () => {
        const activeTrack = TAMIL_SONGS_DATABASE[playerState.currentTrackIndex];
        toggleFavorite(activeTrack.id);
    });
    
    // Error Handling banner closers
    errorClose.addEventListener("click", () => {
        errorBanner.classList.add("hidden");
    });
    
    audio.addEventListener("error", (e) => {
        console.warn("HTML5 audio playback error event:", e);
        showErrorMessage("Playback loading failed. The server refused the resource or CORS is blocked. Playing mock visuals.");
    });
    
    // Nav history controls
    arrowPrev.addEventListener("click", () => {
        if (playerState.historyIndex > 0) {
            playerState.historyIndex--;
            const view = playerState.historyStack[playerState.historyIndex];
            switchView(view);
        }
    });
    
    arrowNext.addEventListener("click", () => {
        if (playerState.historyIndex < playerState.historyStack.length - 1) {
            playerState.historyIndex++;
            const view = playerState.historyStack[playerState.historyIndex];
            switchView(view);
        }
    });
    
    // Global Window Keybind listeners
    window.addEventListener("keydown", (e) => {
        // Bypass triggers if typing in input fields
        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
            return;
        }
        
        switch (e.code) {
            case "Space":
                e.preventDefault();
                togglePlay();
                break;
            case "ArrowLeft":
                e.preventDefault();
                seekDelta(-5);
                break;
            case "ArrowRight":
                e.preventDefault();
                seekDelta(5);
                break;
            case "ArrowUp":
                e.preventDefault();
                adjustVolumeDelta(10);
                break;
            case "ArrowDown":
                e.preventDefault();
                adjustVolumeDelta(-10);
                break;
            case "KeyM":
                e.preventDefault();
                toggleMute();
                break;
            case "KeyS":
                e.preventDefault();
                toggleShuffle();
                break;
            case "KeyR":
                e.preventDefault();
                toggleRepeat();
                break;
        }
    });
}

// --- CORE UTILITY HELPER LOGICS ---

// Adjust audio playback timeline delta seconds
function seekDelta(seconds) {
    if (audio.duration) {
        let newTime = audio.currentTime + seconds;
        if (newTime < 0) newTime = 0;
        if (newTime > audio.duration) newTime = audio.duration;
        audio.currentTime = newTime;
    } else {
        // Simulated progress bar delta
        let curVal = parseFloat(progressSlider.value);
        let deltaPercent = (seconds / 240) * 100; // mock 4 min track
        let newVal = Math.max(0, Math.min(100, curVal + deltaPercent));
        progressSlider.value = newVal;
        progressFill.style.width = `${newVal}%`;
        progressSlider.style.setProperty('--slider-percent', `${newVal}%`);
    }
}

// Adjust system volume by delta (0 to 100)
function adjustVolumeDelta(amount) {
    let currentVolPct = playerState.volume * 100;
    let newVolPct = Math.max(0, Math.min(100, currentVolPct + amount));
    setVolume(newVolPct);
}

// Render dynamic user-friendly playback error banners
function showErrorMessage(msg) {
    errorMessage.textContent = msg;
    errorBanner.classList.remove("hidden");
    
    // Hide automatically after 8 seconds
    setTimeout(() => {
        errorBanner.classList.add("hidden");
    }, 8000);
}
