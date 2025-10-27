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
    id: 'nba_1',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Detroit Pistons',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/det.png',
    awayTeam: 'Cleveland Cavaliers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/cle.png',
    date: 'Oct 26, 2025',
    time: '4:00 AM ET',
    channel: 'Peacock',
    location: 'Little Caesars Arena, Detroit, MI',
    status: 'upcoming',
    odds: { line: 'CLE -2.5', ou: '231.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba1',
      'https://topembed.pw/channel/Peacock'
    ]
  },
  {
    id: 'nba_2',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Philadelphia 76ers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/phi.png',
    awayTeam: 'Orlando Magic',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/orl.png',
    date: 'Oct 26, 2025',
    time: '4:00 AM ET',
    channel: 'NBA TV',
    location: 'Wells Fargo Center, Philadelphia, PA',
    status: 'upcoming',
    odds: { line: 'ORL -6.5', ou: '227.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba2',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_3',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Chicago Bulls',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/chi.png',
    awayTeam: 'Atlanta Hawks',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/atl.png',
    date: 'Oct 26, 2025',
    time: '5:00 AM ET',
    channel: 'NBA TV',
    location: 'United Center, Chicago, IL',
    status: 'upcoming',
    odds: { line: 'ATL -2.5', ou: '242.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba3',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_4',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Houston Rockets',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/hou.png',
    awayTeam: 'Brooklyn Nets',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/bkn.png',
    date: 'Oct 26, 2025',
    time: '5:00 AM ET',
    channel: 'NBA TV',
    location: 'Toyota Center, Houston, TX',
    status: 'upcoming',
    odds: { line: 'HOU -15.5', ou: '224.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba4',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_5',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'New Orleans Pelicans',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/no.png',
    awayTeam: 'Boston Celtics',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/bos.png',
    date: 'Oct 26, 2025',
    time: '5:00 AM ET',
    channel: 'NBA TV',
    location: 'Smoothie King Center, New Orleans, LA',
    status: 'upcoming',
    odds: { line: 'BOS -1.5', ou: '230.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba5',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_6',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'San Antonio Spurs',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/sa.png',
    awayTeam: 'Toronto Raptors',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/tor.png',
    date: 'Oct 26, 2025',
    time: '5:00 AM ET',
    channel: 'NBA TV',
    location: 'Frost Bank Center, San Antonio, TX',
    status: 'upcoming',
    odds: { line: 'SA -4.5', ou: '232.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba6',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_7',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Dallas Mavericks',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/dal.png',
    awayTeam: 'Oklahoma City Thunder',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png',
    date: 'Oct 26, 2025',
    time: '5:30 AM ET',
    channel: 'NBA TV',
    location: 'American Airlines Center, Dallas, TX',
    status: 'upcoming',
    odds: { line: 'OKC -9.5', ou: '226.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba7',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_8',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Utah Jazz',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/uta.png',
    awayTeam: 'Phoenix Suns',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/phx.png',
    date: 'Oct 26, 2025',
    time: '6:00 AM ET',
    channel: 'NBA TV',
    location: 'Delta Center, Salt Lake City, UT',
    status: 'upcoming',
    odds: { line: 'UTAH -1.5', ou: '231.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba8',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_9',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Minnesota Timberwolves',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/min.png',
    awayTeam: 'Denver Nuggets',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/den.png',
    date: 'Oct 26, 2025',
    time: '6:30 AM ET',
    channel: 'Peacock',
    location: 'Target Center, Minneapolis, MN',
    status: 'upcoming',
    odds: { line: 'DEN -6.5', ou: '229.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba9',
      'https://topembed.pw/channel/Peacock'
    ]
  },
  {
    id: 'nba_10',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Golden State Warriors',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/gs.png',
    awayTeam: 'Memphis Grizzlies',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/mem.png',
    date: 'Oct 26, 2025',
    time: '7:00 AM ET',
    channel: 'NBA TV',
    location: 'Chase Center, San Francisco, CA',
    status: 'upcoming',
    odds: { line: 'GS -8.5', ou: '239.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba10',
      'https://topembed.pw/channel/NBATV'
    ]
  },
  {
    id: 'nba_11',
    league: 'NBA',
    leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
    homeTeam: 'Los Angeles Lakers',
    homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/lal.png',
    awayTeam: 'Portland Trail Blazers',
    awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/por.png',
    date: 'Oct 26, 2025',
    time: '7:30 AM ET',
    channel: 'NBA TV',
    location: 'Crypto.com Arena, Los Angeles, CA',
    status: 'upcoming',
    odds: { line: 'LAL -3.5', ou: '233.5' },
    embedUrls: [
      'https://topembed.pw/channel/exnba11',
      'https://topembed.pw/channel/NBATV'
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