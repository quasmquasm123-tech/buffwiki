// Global Variables
let currentSection = 'home';
let allEvents = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function () {
  console.log('🚀 SportStreams App Starting...');
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  setupLeagueSidebar();
  loadEventsFromAPI();
  loadSectionFromURL();
}

function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.getAttribute('data-section');
      navigateToSection(section);
    });
  });
}

function setupLeagueSidebar() {
  const leagueItems = document.querySelectorAll('.league-item');

  leagueItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section');
      navigateToSection(section);
    });
  });
}

function updateLeagueSidebar(section) {
  const leagueItems = document.querySelectorAll('.league-item');
  leagueItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-section') === section) {
      item.classList.add('active');
    }
  });
}

// Navigation function
function navigateToSection(sectionId) {
  showSection(sectionId);
  updateLeagueSidebar(sectionId);

  // Update URL properly
  const newUrl = window.location.origin + window.location.pathname + (sectionId === 'home' ? '' : `?league=${sectionId}`);
  window.history.replaceState({ section: sectionId }, '', newUrl);
}

// URL se league load karna
function loadSectionFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const leagueParam = urlParams.get('league');

  const validSections = ['home', 'nfl', 'nba', 'mlb', 'nhl', 'soccer', 'mma'];

  if (leagueParam && validSections.includes(leagueParam)) {
    navigateToSection(leagueParam);
  } else {
    navigateToSection('home');
  }
}

// Load Events from ESPN API
async function loadEventsFromAPI() {
  try {
    console.log('📡 Loading events from ESPN API...');
    loadManualEvents();
  } catch (error) {
    console.error('❌ Error loading events from API:', error);
    loadManualEvents();
  }
}

// Manual Events Data
function loadManualEvents() {
  console.log('📥 Loading manual events...');

  allEvents = [
      {
    id: 'nhl_1',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'Toronto Maple Leafs',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tor.png',
    awayTeam: 'Nashville Predators',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nsh.png',
    date: 'Oct 14, 2025',
    time: '7:00 PM ET',
    location: 'Scotiabank Arena',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=246',
      'https://lotusgamehd.xyz/lotushd.php?hd=247'
    ]
  },
  {
    id: 'nhl_2',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'Montreal Canadiens',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png',
    awayTeam: 'Seattle Kraken',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sea.png',
    date: 'Oct 14, 2025',
    time: '7:00 PM ET',
    location: 'Bell Centre',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=248',
      'https://lotusgamehd.xyz/lotushd.php?hd=249'
    ]
  },
  {
    id: 'nhl_3',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'New York Islanders',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png',
    awayTeam: 'Edmonton Oilers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/edm.png',
    date: 'Oct 14, 2025',
    time: '7:00 PM ET',
    location: 'UBS Arena',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=250',
      'https://lotusgamehd.xyz/lotushd.php?hd=251'
    ]
  },
  {
    id: 'nhl_4',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'Washington Capitals',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/wsh.png',
    awayTeam: 'Tampa Bay Lightning',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png',
    date: 'Oct 14, 2025',
    time: '7:00 PM ET',
    location: 'Capital One Arena',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=252',
      'https://lotusgamehd.xyz/lotushd.php?hd=253'
    ]
  },
  {
    id: 'nhl_5',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'Calgary Flames',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png',
    awayTeam: 'Vegas Golden Knights',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/vgs.png',
    date: 'Oct 15, 2025',
    time: '9:00 PM ET',
    location: 'Scotiabank Saddledome',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=254',
      'https://lotusgamehd.xyz/lotushd.php?hd=255'
    ]
  },
  {
    id: 'nhl_6',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'Dallas Stars',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/dal.png',
    awayTeam: 'Minnesota Wild',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/min.png',
    date: 'Oct 15, 2025',
    time: '9:30 PM ET',
    location: 'American Airlines Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=256',
      'https://lotusgamehd.xyz/lotushd.php?hd=257'
    ]
  },
  {
    id: 'nhl_7',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'San Jose Sharks',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sj.png',
    awayTeam: 'Carolina Hurricanes',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/car.png',
    date: 'Oct 15, 2025',
    time: '10:00 PM ET',
    location: 'SAP Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=258',
      'https://lotusgamehd.xyz/lotushd.php?hd=259'
    ]
  },
  {
    id: 'nhl_8',
    league: 'NHL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
    homeTeam: 'Anaheim Ducks',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/ana.png',
    awayTeam: 'Pittsburgh Penguins',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/pit.png',
    date: 'Oct 15, 2025',
    time: '10:30 PM ET',
    location: 'Honda Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=260',
      'https://lotusgamehd.xyz/lotushd.php?hd=261'
    ]
  } ,
    {
    id: 'nba_1',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Cleveland Cavaliers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/cle.png',
    awayTeam: 'Detroit Pistons',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/det.png',
    date: 'Oct 14, 2025',
    time: '4:00 AM ET',
    location: 'Rocket Mortgage FieldHouse',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=301',
      'https://lotusgamehd.xyz/lotushd.php?hd=302'
    ]
  },
  {
    id: 'nba_2',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'New Orleans Pelicans',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/no.png',
    awayTeam: 'Houston Rockets',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/hou.png',
    date: 'Oct 14, 2025',
    time: '5:00 AM ET',
    location: 'Smoothie King Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=303',
      'https://lotusgamehd.xyz/lotushd.php?hd=304'
    ]
  },
  {
    id: 'nba_3',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Milwaukee Bucks',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/mil.png',
    awayTeam: 'Oklahoma City Thunder',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png',
    date: 'Oct 14, 2025',
    time: '5:00 AM ET',
    location: 'Fiserv Forum',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=305',
      'https://lotusgamehd.xyz/lotushd.php?hd=306'
    ]
  },
  {
    id: 'nba_4',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Denver Nuggets',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/den.png',
    awayTeam: 'Chicago Bulls',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/chi.png',
    date: 'Oct 14, 2025',
    time: '6:00 AM ET',
    location: 'Ball Arena',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=307',
      'https://lotusgamehd.xyz/lotushd.php?hd=308'
    ]
  },
  {
    id: 'nba_5',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Portland Trail Blazers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/por.png',
    awayTeam: 'Golden State Warriors',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/gs.png',
    date: 'Oct 14, 2025',
    time: '7:00 AM ET',
    location: 'Moda Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=309',
      'https://lotusgamehd.xyz/lotushd.php?hd=310'
    ]
  },
  {
    id: 'nba_6',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Phoenix Suns',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/phx.png',
    awayTeam: 'Los Angeles Lakers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/lal.png',
    date: 'Oct 14, 2025',
    time: '7:00 AM ET',
    location: 'Footprint Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=311',
      'https://lotusgamehd.xyz/lotushd.php?hd=312'
    ]
  } ,
  
      {
    id: 'mlb_1',
    league: 'MLB',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png',
    homeTeam: 'Milwaukee Brewers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/mlb/500/mil.png',
    awayTeam: 'Los Angeles Dodgers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/mlb/500/lad.png',
    date: 'Oct 14, 2025',
    time: '5:08 AM ET',
    location: 'American Family Field',
    pitchingMatchup: 'Yoshinobu Yamamoto vs Freddy Peralta',
    tv: ['TBS', 'truTV', 'HBO Max'],
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=401',
      'https://lotusgamehd.xyz/lotushd.php?hd=402'
    ]
  },

  ];

  console.log(`✅ Loaded ${allEvents.length} events`);
  filterEventsByDate();
}

// Display Events
function displayLeagueEvents(league, events) {
  const container = document.getElementById(`${league}-events`);
  if (!container) return;

  container.innerHTML = '';

  if (events.length === 0) {
    container.innerHTML = `
            <div class="no-events">
                <h3>No Events Available</h3>
                <p>Check back later for ${league.toUpperCase()} events.</p>
            </div>
        `;
    return;
  }

  // Group events by league
  const eventsByLeague = {};
  events.forEach(event => {
    if (!eventsByLeague[event.league]) {
      eventsByLeague[event.league] = [];
    }
    eventsByLeague[event.league].push(event);
  });

  // Create league sections and match rows
  Object.keys(eventsByLeague).forEach(leagueName => {
    // Add league title
    const leagueTitle = document.createElement('h3');
    leagueTitle.className = 'league-title';
    leagueTitle.innerHTML = `
            <img src="${eventsByLeague[leagueName][0].leagueLogo}" alt="${leagueName}" class="league-logo">
            ${leagueName}
        `;
    container.appendChild(leagueTitle);

    // Add match rows for this league
    eventsByLeague[leagueName].forEach(event => {
      const matchRow = createMatchRow(event);
      container.appendChild(matchRow);
    });
  });
}

function createMatchRow(event) {
  const row = document.createElement('div');
  row.className = 'match-row';

  const statusBadge = event.status === 'live' ? '<span class="live-badge">LIVE</span>' : '';
  const streamCount = event.embedUrls ? event.embedUrls.length : 1;

  row.innerHTML = `
        <img src="${event.leagueLogo}" alt="League Logo" class="league-logo">
        <div class="match-team">
            <img src="${event.homeLogo}" alt="${event.homeTeam}" class="team-logo">
            <span class="team-name">${event.homeTeam}</span>
        </div>
        <span class="match-vs">VS</span>
        <div class="match-team">
            <span class="team-name">${event.awayTeam}</span>
            <img src="${event.awayLogo}" alt="${event.awayTeam}" class="team-logo">
        </div>
        <div class="match-info">
            <div class="match-date">${event.date}</div>
            <div class="match-time">${event.time} ${statusBadge}</div>
            <div class="match-location">${event.location}</div>
            <div class="stream-count">📺 ${streamCount} Streams</div>
        </div>
    `;

  row.addEventListener('click', () => openStream(event));
  return row;
}

// Open Stream Directly
function openStream(event) {
  const defaultEmbedUrl = event.embedUrls ? event.embedUrls[0] : 'https://lotusgamehd.xyz/lotushd.php?hd=246';
  const streamUrl = `stream.html?embed=${encodeURIComponent(defaultEmbedUrl)}&league=${encodeURIComponent(event.league)}&title=${encodeURIComponent(event.awayTeam + ' vs ' + event.homeTeam)}`;
  window.open(streamUrl, "_blank");
}

// Helper Functions
function showSection(sectionId) {
  // Navigation active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-section') === sectionId) {
      item.classList.add('active');
    }
  });

  // Sections hide/show
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  const targetSection = document.getElementById(`${sectionId}-section`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  currentSection = sectionId;
  filterEventsByDate();
}

function filterEventsByDate() {
  if (currentSection === 'home') {
    // Show ALL events on home page
    displayLeagueEvents('home', allEvents);
  } else {
    // Filter by league for other sections
    const leagueEvents = allEvents.filter(event =>
      event.league.toLowerCase().includes(currentSection.toLowerCase())
    );
    displayLeagueEvents(currentSection, leagueEvents);
  }
}

console.log('✅ SportStreams Live Loaded!');