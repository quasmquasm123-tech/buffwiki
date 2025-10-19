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
  homeTeam: 'Chicago Bears',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png',
  awayTeam: 'New Orleans Saints',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
  date: 'Oct 19, 2025',
  time: '10:00 PM',
  tv: 'FOX',
  tickets: 'Tickets as low as $165',
  location: 'Soldier Field, Chicago, IL',
  odds: 'Line: CHI -3.5 | O/U: 43.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=401',
    'https://lotusgamehd.xyz/lotushd.php?hd=402'
  ]
},
{
  id: 'nfl_2',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Cleveland Browns',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png',
  awayTeam: 'Miami Dolphins',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png',
  date: 'Oct 19, 2025',
  time: '10:00 PM',
  tv: 'CBS',
  tickets: 'Tickets as low as $8',
  location: 'Huntington Bank Field, Cleveland, OH',
  odds: 'Line: CLE -2.5 | O/U: 35.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=403',
    'https://lotusgamehd.xyz/lotushd.php?hd=404'
  ]
},
{
  id: 'nfl_3',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Tennessee Titans',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png',
  awayTeam: 'New England Patriots',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
  date: 'Oct 19, 2025',
  time: '10:00 PM',
  tv: 'CBS',
  tickets: 'Tickets as low as $12',
  location: 'Nissan Stadium, Nashville, TN',
  odds: 'Line: NE -6.5 | O/U: 41.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=405',
    'https://lotusgamehd.xyz/lotushd.php?hd=406'
  ]
},
{
  id: 'nfl_4',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Kansas City Chiefs',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
  awayTeam: 'Las Vegas Raiders',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png',
  date: 'Oct 19, 2025',
  time: '10:00 PM',
  tv: 'CBS',
  tickets: 'Tickets as low as $142',
  location: 'GEHA Field at Arrowhead Stadium, Kansas City, MO',
  odds: 'Line: KC -12.5 | O/U: 44.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=407',
    'https://lotusgamehd.xyz/lotushd.php?hd=408'
  ]
},
{
  id: 'nfl_5',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Minnesota Vikings',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png',
  awayTeam: 'Philadelphia Eagles',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png',
  date: 'Oct 19, 2025',
  time: '10:00 PM',
  tv: 'FOX',
  tickets: 'Tickets as low as $83',
  location: 'U.S. Bank Stadium, Minneapolis, MN',
  odds: 'Line: PHI -2.5 | O/U: 43.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=409',
    'https://lotusgamehd.xyz/lotushd.php?hd=410'
  ]
},
{
  id: 'nfl_6',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'New York Giants',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png',
  awayTeam: 'Carolina Panthers',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png',
  date: 'Oct 19, 2025',
  time: '10:00 PM',
  tv: 'FOX',
  tickets: 'Tickets as low as $56',
  location: 'MetLife Stadium, East Rutherford, NJ',
  odds: 'Line: CAR -1.5 | O/U: 39.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=411',
    'https://lotusgamehd.xyz/lotushd.php?hd=412'
  ]
},
{
  id: 'nfl_7',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Denver Broncos',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png',
  awayTeam: 'New York Jets',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png',
  date: 'Oct 20, 2025',
  time: '1:05 AM',
  tv: 'CBS',
  tickets: 'Tickets as low as $251',
  location: 'Empower Field at Mile High, Denver, CO',
  odds: 'Line: DEN -7.5 | O/U: 40.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=413',
    'https://lotusgamehd.xyz/lotushd.php?hd=414'
  ]
},
{
  id: 'nfl_8',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Los Angeles Chargers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
  awayTeam: 'Indianapolis Colts',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png',
  date: 'Oct 20, 2025',
  time: '1:05 AM',
  tv: 'CBS',
  tickets: 'Tickets as low as $27',
  location: 'SoFi Stadium, Inglewood, CA',
  odds: 'Line: LAC -2.5 | O/U: 48.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=415',
    'https://lotusgamehd.xyz/lotushd.php?hd=416'
  ]
},
{
  id: 'nfl_9',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Dallas Cowboys',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png',
  awayTeam: 'Washington Commanders',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png',
  date: 'Oct 20, 2025',
  time: '1:25 AM',
  tv: 'FOX',
  tickets: 'Tickets as low as $21',
  location: 'AT&T Stadium, Arlington, TX',
  odds: 'Line: DAL -1.5 | O/U: 54.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=417',
    'https://lotusgamehd.xyz/lotushd.php?hd=418'
  ]
},
{
  id: 'nfl_10',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'Arizona Cardinals',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png',
  awayTeam: 'Green Bay Packers',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png',
  date: 'Oct 20, 2025',
  time: '1:25 AM',
  tv: 'FOX',
  tickets: 'Tickets as low as $95',
  location: 'State Farm Stadium, Glendale, AZ',
  odds: 'Line: GB -6.5 | O/U: 44.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=419',
    'https://lotusgamehd.xyz/lotushd.php?hd=420'
  ]
},
{
  id: 'nfl_11',
  league: 'NFL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
  homeTeam: 'San Francisco 49ers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
  awayTeam: 'Atlanta Falcons',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png',
  date: 'Oct 20, 2025',
  time: '5:20 AM',
  tv: 'NBC',
  tickets: 'Tickets as low as $93',
  location: "Levi's Stadium, Santa Clara, CA",
  odds: 'Line: SF -1.5 | O/U: 46.5',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=421',
    'https://lotusgamehd.xyz/lotushd.php?hd=422'
  ]
}
 ,

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