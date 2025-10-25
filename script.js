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
    id: 'mma_1',
    league: 'MMA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-mma.png&w=64&h=64&scale=crop&cquality=40&location=origin',
    homeTeam: 'Tom Aspinall',
    homeLogo: 'https://ufc.com/images/styles/event_fight_card_upper_body_of_standing_athlete/s3/2025-10/ASPINALL_TOM_L_BELT_10-25.png?itok=taePyxPV',
    awayTeam: 'Ciryl Gane',
    awayLogo: 'https://ufc.com/images/styles/event_fight_card_upper_body_of_standing_athlete/s3/2025-10/GANE_CIRYL_R_10-25.png?itok=-K434ntZ',
    date: 'Oct 25, 2025',
    time: '10:00 AM ET',
    location: 'Amway Center',
    status: 'upcoming',
    embedUrls: [
      'https://topembed.pw/channel/TNTSports4[UK]',
      'https://topembed.pw/channel/CosmoteSport8[Greece]'
    ]
  },  
    
    
    {
    id: 'nba_1',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Orlando Magic',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/orl.png',
    awayTeam: 'Chicago Bulls',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/chi.png',
    date: 'Oct 25, 2025',
    time: '4:00 AM ET',
    location: 'Amway Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=401',
      'https://lotusgamehd.xyz/lotushd.php?hd=402'
    ]
  },
  {
    id: 'nba_2',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Atlanta Hawks',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/atl.png',
    awayTeam: 'Oklahoma City Thunder',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png',
    date: 'Oct 25, 2025',
    time: '4:30 AM ET',
    location: 'State Farm Arena',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=403',
      'https://lotusgamehd.xyz/lotushd.php?hd=404'
    ]
  },
  {
    id: 'nba_3',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Philadelphia 76ers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/phi.png',
    awayTeam: 'Charlotte Hornets',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/cha.png',
    date: 'Oct 25, 2025',
    time: '4:30 AM ET',
    location: 'Wells Fargo Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=405',
      'https://lotusgamehd.xyz/lotushd.php?hd=406'
    ]
  },
  {
    id: 'nba_4',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Memphis Grizzlies',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/mem.png',
    awayTeam: 'Indiana Pacers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/ind.png',
    date: 'Oct 25, 2025',
    time: '5:00 AM ET',
    location: 'FedExForum',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=407',
      'https://lotusgamehd.xyz/lotushd.php?hd=408'
    ]
  },
  {
    id: 'nba_5',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Denver Nuggets',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/den.png',
    awayTeam: 'Phoenix Suns',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/phx.png',
    date: 'Oct 25, 2025',
    time: '6:00 AM ET',
    location: 'Ball Arena',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=409',
      'https://lotusgamehd.xyz/lotushd.php?hd=410'
    ]
  },
  {
    id: 'nba_6',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'San Antonio Spurs',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/sa.png',
    awayTeam: 'Brooklyn Nets',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/bkn.png',
    date: 'Oct 25, 2025',
    time: '11:00 PM ET',
    location: 'Frost Bank Center',
    status: 'upcoming',
    embedUrls: [
      'https://lotusgamehd.xyz/lotushd.php?hd=411',
      'https://lotusgamehd.xyz/lotushd.php?hd=412'
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
  const defaultEmbedUrl = event.embedUrls ? event.embedUrls[0] : 'https://topembed.pw/channel/TNTSports4[UK]';
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