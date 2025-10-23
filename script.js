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
  homeTeam: 'Los Angeles Chargers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
  awayTeam: 'Minnesota Vikings',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png',
  date: 'Oct 26, 2025',
  time: '5:15 AM ET',
  location: 'SoFi Stadium, Inglewood, CA',
  status: 'upcoming',
  embedUrls: [
    'https://topembed.pw/channel/TSN1[Canada]',
    'https://topembed.pw/channel/TSN4[Canada]'
  ]
} ,
 
    
    
    {
  id: 'nba_1',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Indiana Pacers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/ind.png',
  awayTeam: 'Oklahoma City Thunder',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png',
  date: 'Oct 19, 2025',
  time: '4:30 AM ET',
  location: 'Gainbridge Fieldhouse, Indianapolis, IN',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=501',
    'https://lotusgamehd.xyz/lotushd.php?hd=502'
  ]
},
{
  id: 'nba_2',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Golden State Warriors',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/gs.png',
  awayTeam: 'Denver Nuggets',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/den.png',
  date: 'Oct 19, 2025',
  time: '7:00 AM ET',
  location: 'Chase Center, San Francisco, CA',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=503',
    'https://lotusgamehd.xyz/lotushd.php?hd=504'
  ]
},

{
  id: 'nhl_3',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Tampa Bay Lightning',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png',
  awayTeam: 'Chicago Blackhawks',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/chi.png',
  date: 'Oct 19, 2025',
  time: '3:45 AM ET',
  location: 'Amalie Arena',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=310',
    'https://lotusgamehd.xyz/lotushd.php?hd=311'
  ]
},
{
  id: 'nhl_4',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Boston Bruins',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/bos.png',
  awayTeam: 'Anaheim Ducks',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/ana.png',
  date: 'Oct 19, 2025',
  time: '4:00 AM ET',
  location: 'TD Garden',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=312',
    'https://lotusgamehd.xyz/lotushd.php?hd=313'
  ]
},
{
  id: 'nhl_5',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Ottawa Senators',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/ott.png',
  awayTeam: 'Philadelphia Flyers',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/phi.png',
  date: 'Oct 19, 2025',
  time: '4:00 AM ET',
  location: 'Canadian Tire Centre',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=314',
    'https://lotusgamehd.xyz/lotushd.php?hd=315'
  ]
},
{
  id: 'nhl_6',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Florida Panthers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/fla.png',
  awayTeam: 'Pittsburgh Penguins',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/pit.png',
  date: 'Oct 19, 2025',
  time: '4:00 AM ET',
  location: 'Amerant Bank Arena',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=316',
    'https://lotusgamehd.xyz/lotushd.php?hd=317'
  ]
},
{
  id: 'nhl_7',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'New York Islanders',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png',
  awayTeam: 'Detroit Red Wings',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/det.png',
  date: 'Oct 19, 2025',
  time: '4:00 AM ET',
  location: 'UBS Arena',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=318',
    'https://lotusgamehd.xyz/lotushd.php?hd=319'
  ]
},
{
  id: 'nhl_8',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'New York Rangers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png',
  awayTeam: 'San Jose Sharks',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sjs.png',
  date: 'Oct 19, 2025',
  time: '4:00 AM ET',
  location: 'Madison Square Garden',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=320',
    'https://lotusgamehd.xyz/lotushd.php?hd=321'
  ]
},
{
  id: 'nhl_9',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'St. Louis Blues',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/stl.png',
  awayTeam: 'Utah Hockey Club',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/utah.png',
  date: 'Oct 19, 2025',
  time: '5:00 AM ET',
  location: 'Enterprise Center',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=322',
    'https://lotusgamehd.xyz/lotushd.php?hd=323'
  ]
},
{
  id: 'nhl_10',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Nashville Predators',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nsh.png',
  awayTeam: 'Vancouver Canucks',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/van.png',
  date: 'Oct 19, 2025',
  time: '5:00 AM ET',
  location: 'Bridgestone Arena',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=324',
    'https://lotusgamehd.xyz/lotushd.php?hd=325'
  ]
},
{
  id: 'nhl_11',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Winnipeg Jets',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png',
  awayTeam: 'Seattle Kraken',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sea.png',
  date: 'Oct 19, 2025',
  time: '5:00 AM ET',
  location: 'Canada Life Centre',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=326',
    'https://lotusgamehd.xyz/lotushd.php?hd=327'
  ]
},
{
  id: 'nhl_12',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Dallas Stars',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/dal.png',
  awayTeam: 'Los Angeles Kings',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/la.png',
  date: 'Oct 19, 2025',
  time: '6:00 AM ET',
  location: 'American Airlines Center',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=328',
    'https://lotusgamehd.xyz/lotushd.php?hd=329'
  ]
},
{
  id: 'nhl_13',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Colorado Avalanche',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/col.png',
  awayTeam: 'Carolina Hurricanes',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/car.png',
  date: 'Oct 19, 2025',
  time: '6:00 AM ET',
  location: 'Ball Arena',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=330',
    'https://lotusgamehd.xyz/lotushd.php?hd=331'
  ]
},
{
  id: 'nhl_14',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Edmonton Oilers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/edm.png',
  awayTeam: 'Montreal Canadiens',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png',
  date: 'Oct 19, 2025',
  time: '6:00 AM ET',
  location: 'Rogers Place',
  status: 'upcoming',
  embedUrls: [
    'https://lotusgamehd.xyz/lotushd.php?hd=332',
    'https://lotusgamehd.xyz/lotushd.php?hd=333'
  ]
} ,

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