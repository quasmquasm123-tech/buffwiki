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
  id: 'mlb_1',
  league: 'MLB',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png',
  homeTeam: 'Toronto Blue Jays',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tor.png',
  awayTeam: 'Los Angeles Dodgers',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/mlb/500/lad.png',
  date: 'Oct 26, 2025',
  time: '8:00 PM ET',
  channel: 'FOX',
  location: 'Rogers Centre, Toronto, ON',
  status: 'upcoming',
  pitchingMatchup: 'Max Scherzer (TOR) vs TBD (LAD)',
  odds: { line: 'LAD -148', ou: '8.5' },
  tickets: 'Tickets as low as $105',
  embedUrls: [
    'https://topembed.pw/channel/exxpl26477',
    'https://topembed.pw/channel/ex8849541'
  ]
},
[
  {
    id: 'nba_1',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Milwaukee Bucks',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/mil.png',
    awayTeam: 'Sacramento Kings',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/sac.png',
    date: 'Oct 26, 2025',
    time: '2:00 AM ET',
    channel: '—',
    location: 'Fiserv Forum, Milwaukee, WI',
    status: 'upcoming',
    odds: { line: 'MIL -5.5', ou: '232.5' },
    tickets: 'Tickets as low as $24',
    embedUrls: [
      'https://topembed.pw/channel/SkySportsMainEvent[UK]'
    ]
  },
  {
    id: 'nba_2',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Charlotte Hornets',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/cha.png',
    awayTeam: 'Minnesota Timberwolves',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/min.png',
    date: 'Oct 26, 2025',
    time: '3:00 AM ET',
    channel: '—',
    location: 'Spectrum Center, Charlotte, NC',
    status: 'upcoming',
    odds: { line: 'MIN -5.5', ou: '230.5' },
    tickets: 'Tickets as low as $18',
    embedUrls: [
      'https://topembed.pw/channel/ESPNDeportes[USA]'
    ]
  },
  {
    id: 'nba_3',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Indiana Pacers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/ind.png',
    awayTeam: 'Golden State Warriors',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/gs.png',
    date: 'Oct 26, 2025',
    time: '4:00 AM ET',
    channel: 'NBA TV',
    location: 'Gainbridge Fieldhouse, Indianapolis, IN',
    status: 'upcoming',
    odds: { line: 'GS -10.5', ou: '230.5' },
    tickets: 'Tickets as low as $32',
    embedUrls: [
      'https://topembed.pw/channel/NBATV[USA]',
      'https://topembed.pw/channel/NBATV[USA]'
    ]
  },
  {
    id: 'nba_4',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Washington Wizards',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/was.png',
    awayTeam: 'Orlando Magic',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/orl.png',
    date: 'Oct 26, 2025',
    time: '4:00 AM ET',
    channel: '—',
    location: 'Capital One Arena, Washington, DC',
    status: 'upcoming',
    odds: { line: 'ORL -9.5', ou: '234.5' },
    tickets: 'Tickets as low as $16',
    embedUrls: [
      'https://topembed.pw/channel/FanDuelSportsFlorida[USA]'
    ]
  },
  {
    id: 'nba_5',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Boston Celtics',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/bos.png',
    awayTeam: 'Houston Rockets',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/hou.png',
    date: 'Oct 26, 2025',
    time: '5:00 AM ET',
    channel: '—',
    location: 'TD Garden, Boston, MA',
    status: 'upcoming',
    odds: { line: 'HOU -5.5', ou: '225.5' },
    tickets: 'Tickets as low as $64',
    embedUrls: [
      'https://topembed.pw/channel/NBCSBoston[USA]'
    ]
  },
  {
    id: 'nba_6',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Detroit Pistons',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/det.png',
    awayTeam: 'Dallas Mavericks',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/dal.png',
    date: 'Oct 26, 2025',
    time: '7:00 AM ET',
    channel: 'Peacock',
    location: 'Little Caesars Arena, Detroit, MI',
    status: 'upcoming',
    odds: { line: '—', ou: '—' },
    tickets: 'Tickets as low as $—',
    embedUrls: [
      'https://topembed.pw/channel/ESPN1[Netherlands]',
      'https://topembed.pw/channel/SkySportsMainEvent[UK]'
    ]
  },
]



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