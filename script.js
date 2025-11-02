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
    id: 'nfl_1',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Cincinnati Bengals',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png',
    awayTeam: 'Chicago Bears',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'CBS',
    location: 'Paycor Stadium, Cincinnati, OH',
    status: 'upcoming',
    odds: { line: 'CHI -2.5', ou: '51.5' },
    tickets: 'Tickets as low as $98',
    embedUrls: [
      'https://topembed.pw/channel/exnfl1',
      'https://topembed.pw/channel/CBS'
    ]
  },
  {
    id: 'nfl_2',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Detroit Lions',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png',
    awayTeam: 'Minnesota Vikings',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'FOX',
    location: 'Ford Field, Detroit, MI',
    status: 'upcoming',
    odds: { line: 'DET -8.5', ou: '48.5' },
    tickets: 'Tickets as low as $211',
    embedUrls: [
      'https://topembed.pw/channel/exnfl2',
      'https://topembed.pw/channel/FOX'
    ]
  },
  {
    id: 'nfl_3',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Green Bay Packers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png',
    awayTeam: 'Carolina Panthers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'FOX',
    location: 'Lambeau Field, Green Bay, WI',
    status: 'upcoming',
    odds: { line: 'GB -13.5', ou: '43.5' },
    tickets: 'Tickets as low as $106',
    embedUrls: [
      'https://topembed.pw/channel/exnfl3',
      'https://topembed.pw/channel/FOX'
    ]
  },
  {
    id: 'nfl_4',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Tennessee Titans',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png',
    awayTeam: 'Los Angeles Chargers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'CBS',
    location: 'Nissan Stadium, Nashville, TN',
    status: 'upcoming',
    odds: { line: 'LAC -9.5', ou: '43.5' },
    tickets: 'Tickets as low as $18',
    embedUrls: [
      'https://topembed.pw/channel/exnfl4',
      'https://topembed.pw/channel/CBS'
    ]
  },
  {
    id: 'nfl_5',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'New England Patriots',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
    awayTeam: 'Atlanta Falcons',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'CBS',
    location: 'Gillette Stadium, Foxborough, MA',
    status: 'upcoming',
    odds: { line: 'NE -4.5', ou: '45.5' },
    tickets: 'Tickets as low as $132',
    embedUrls: [
      'https://topembed.pw/channel/exnfl5',
      'https://topembed.pw/channel/CBS'
    ]
  },
  {
    id: 'nfl_6',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'New York Giants',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png',
    awayTeam: 'San Francisco 49ers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'CBS',
    location: 'MetLife Stadium, East Rutherford, NJ',
    status: 'upcoming',
    odds: { line: 'SF -2.5', ou: '47.5' },
    tickets: 'Tickets as low as $212',
    embedUrls: [
      'https://topembed.pw/channel/exnfl6',
      'https://topembed.pw/channel/CBS'
    ]
  },
  {
    id: 'nfl_7',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Pittsburgh Steelers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png',
    awayTeam: 'Indianapolis Colts',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'CBS',
    location: 'Acrisure Stadium, Pittsburgh, PA',
    status: 'upcoming',
    odds: { line: 'IND -3.5', ou: '51.5' },
    tickets: 'Tickets as low as $89',
    embedUrls: [
      'https://topembed.pw/channel/exnfl7',
      'https://topembed.pw/channel/CBS'
    ]
  },
  {
    id: 'nfl_8',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Houston Texans',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png',
    awayTeam: 'Denver Broncos',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png',
    date: 'Oct 26, 2025',
    time: '11:00 PM ET',
    channel: 'FOX',
    location: 'NRG Stadium, Houston, TX',
    status: 'upcoming',
    odds: { line: 'HOU -2.5', ou: '40.5' },
    tickets: 'Tickets as low as $82',
    embedUrls: [
      'https://topembed.pw/channel/exnfl8',
      'https://topembed.pw/channel/FOX'
    ]
  },
  {
    id: 'nfl_9',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Las Vegas Raiders',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png',
    awayTeam: 'Jacksonville Jaguars',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png',
    date: 'Oct 27, 2025',
    time: '2:05 AM ET',
    channel: 'FOX',
    location: 'Allegiant Stadium, Las Vegas, NV',
    status: 'upcoming',
    odds: { line: 'JAX -2.5', ou: '43.5' },
    tickets: 'Tickets as low as $70',
    embedUrls: [
      'https://topembed.pw/channel/exnfl9',
      'https://topembed.pw/channel/FOX'
    ]
  },
  {
    id: 'nfl_10',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Los Angeles Rams',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png',
    awayTeam: 'New Orleans Saints',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
    date: 'Oct 27, 2025',
    time: '2:05 AM ET',
    channel: 'FOX',
    location: 'SoFi Stadium, Inglewood, CA',
    status: 'upcoming',
    odds: { line: 'LAR -14.5', ou: '43.5' },
    tickets: 'Tickets as low as $43',
    embedUrls: [
      'https://topembed.pw/channel/exnfl10',
      'https://topembed.pw/channel/FOX'
    ]
  },
  {
    id: 'nfl_11',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Buffalo Bills',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png',
    awayTeam: 'Kansas City Chiefs',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
    date: 'Oct 27, 2025',
    time: '2:25 AM ET',
    channel: 'CBS',
    location: 'Highmark Stadium, Orchard Park, NY',
    status: 'upcoming',
    odds: { line: 'KC -1.5', ou: '52.5' },
    tickets: 'Tickets as low as $254',
    embedUrls: [
      'https://topembed.pw/channel/exnfl11',
      'https://topembed.pw/channel/CBS'
    ]
  },
  {
    id: 'nfl_12',
    league: 'NFL',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
    homeTeam: 'Washington Commanders',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png',
    awayTeam: 'Seattle Seahawks',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png',
    date: 'Oct 27, 2025',
    time: '6:20 AM ET',
    channel: 'NBC',
    location: 'Northwest Stadium, Landover, MD',
    status: 'upcoming',
    odds: { line: 'SEA -2.5', ou: '—' },
    tickets: 'Tickets as low as $61',
    embedUrls: [
      'https://topembed.pw/channel/exnfl12',
      'https://topembed.pw/channel/NBC'
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