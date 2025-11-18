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

// Manual Events Data with Individual Channels
function loadManualEvents() {
  console.log('📥 Loading manual events with individual channels...');

  allEvents = [
    {
  id: 'nba_1',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Orlando Magic',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/orl.png',
  awayTeam: 'Golden State Warriors',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/gs.png',
  date: 'Today',
  time: '5:00 AM',
  location: 'Orlando, FL',
  status: 'upcoming',
  tickets: 'Tickets as low as $82',
  odds: {
    line: 'GS -3.5',
    overUnder: '223.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NBA1',
    'https://topembed.pw/channel/NBA1',
    'https://topembed.pw/channel/NBA1',
    'https://topembed.pw/channel/NBA1'
  ],
  channelNames: [
    'NBA Channel 1 (HD)',
    'NBA Channel 2 (Backup)',
    'NBA Channel 3 (Mobile)',
    'NBA Channel 4 (Premium)'
  ]
},
{
  id: 'nba_2',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Brooklyn Nets',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/bkn.png',
  awayTeam: 'Boston Celtics',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/bos.png',
  date: 'Today',
  time: '5:30 AM',
  location: 'Brooklyn, NY',
  status: 'upcoming',
  tickets: 'Tickets as low as $40',
  odds: {
    line: 'BOS -10.5',
    overUnder: '223.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NBA2',
    'https://topembed.pw/channel/NBA2',
    'https://topembed.pw/channel/NBA2',
    'https://topembed.pw/channel/NBA2'
  ],
  channelNames: [
    'NBA Channel 1 (HD)',
    'NBA Channel 2 (Backup)',
    'NBA Channel 3 (Mobile)',
    'NBA Channel 4 (Premium)'
  ]
},
{
  id: 'nba_3',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Atlanta Hawks',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/atl.png',
  awayTeam: 'Detroit Pistons',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/det.png',
  date: 'Today',
  time: '5:30 AM',
  location: 'Atlanta, GA',
  status: 'upcoming',
  tickets: 'Tickets as low as $41',
  odds: {
    line: 'ATL -1.5',
    overUnder: '229.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NBA3',
    'https://topembed.pw/channel/NBA3',
    'https://topembed.pw/channel/NBA3',
    'https://topembed.pw/channel/NBA3'
  ],
  channelNames: [
    'NBA Channel 1 (HD)',
    'NBA Channel 2 (Backup)',
    'NBA Channel 3 (Mobile)',
    'NBA Channel 4 (Premium)'
  ]
},
{
  id: 'nba_4',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'San Antonio Spurs',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/sa.png',
  awayTeam: 'Memphis Grizzlies',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/mem.png',
  date: 'Today',
  time: '6:00 AM',
  location: 'San Antonio, TX',
  status: 'upcoming',
  tickets: 'Tickets as low as $15',
  odds: {
    line: 'SA -5.5',
    overUnder: '231.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NBA4',
    'https://topembed.pw/channel/NBA4',
    'https://topembed.pw/channel/NBA4',
    'https://topembed.pw/channel/NBA4'
  ],
  channelNames: [
    'NBA Channel 1 (HD)',
    'NBA Channel 2 (Backup)',
    'NBA Channel 3 (Mobile)',
    'NBA Channel 4 (Premium)'
  ]
},
{
  id: 'nba_5',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Los Angeles Lakers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/lal.png',
  awayTeam: 'Utah Jazz',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/utah.png',
  date: 'Today',
  time: '8:30 AM',
  location: 'Los Angeles, CA',
  status: 'upcoming',
  tickets: 'Tickets as low as $61',
  odds: {
    line: 'LAL -12.5',
    overUnder: '238.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NBA5',
    'https://topembed.pw/channel/NBA5',
    'https://topembed.pw/channel/NBA5',
    'https://topembed.pw/channel/NBA5'
  ],
  channelNames: [
    'NBA Channel 1 (HD)',
    'NBA Channel 2 (Backup)',
    'NBA Channel 3 (Mobile)',
    'NBA Channel 4 (Premium)'
  ]
},
{
  id: 'nba_6',
  league: 'NBA',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png',
  homeTeam: 'Portland Trail Blazers',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/por.png',
  awayTeam: 'Phoenix Suns',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nba/500/phx.png',
  date: 'Today',
  time: '9:00 AM',
  location: 'Portland, OR',
  status: 'upcoming',
  tickets: 'Tickets as low as $13',
  odds: {
    line: 'POR -2.5',
    overUnder: '236.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NBA6',
    'https://topembed.pw/channel/NBA6',
    'https://topembed.pw/channel/NBA6',
    'https://topembed.pw/channel/NBA6'
  ],
  channelNames: [
    'NBA Channel 1 (HD)',
    'NBA Channel 2 (Backup)',
    'NBA Channel 3 (Mobile)',
    'NBA Channel 4 (Premium)'
  ]
}

{
  id: 'nhl_1',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Toronto Maple Leafs',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tor.png',
  awayTeam: 'St. Louis Blues',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/stl.png',
  date: 'Today',
  time: '5:00 AM',
  location: 'Toronto, Canada',
  status: 'upcoming',
  tickets: 'Tickets as low as $66',
  tv: ['ESPN+'],
  odds: {
    line: 'TOR -125',
    overUnder: '5.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL1',
    'https://topembed.pw/channel/NHL1',
    'https://topembed.pw/channel/NHL1',
    'https://topembed.pw/channel/NHL1'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_2',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Detroit Red Wings',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/det.png',
  awayTeam: 'Seattle Kraken',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sea.png',
  date: 'Today',
  time: '5:00 AM',
  location: 'Detroit, MI',
  status: 'upcoming',
  tickets: 'Tickets as low as $13',
  tv: ['ESPN+'],
  odds: {
    line: 'DET -170',
    overUnder: '5.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL2',
    'https://topembed.pw/channel/NHL2',
    'https://topembed.pw/channel/NHL2',
    'https://topembed.pw/channel/NHL2'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_3',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Tampa Bay Lightning',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png',
  awayTeam: 'New Jersey Devils',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nj.png',
  date: 'Today',
  time: '5:00 AM',
  location: 'Tampa Bay, FL',
  status: 'upcoming',
  tickets: 'Tickets as low as $19',
  tv: ['NHL Net'],
  odds: {
    line: 'TB -165',
    overUnder: '5.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL3',
    'https://topembed.pw/channel/NHL3',
    'https://topembed.pw/channel/NHL3',
    'https://topembed.pw/channel/NHL3'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_4',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Dallas Stars',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/dal.png',
  awayTeam: 'New York Rangers',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png',
  date: 'Today',
  time: '6:00 AM',
  location: 'Dallas, TX',
  status: 'upcoming',
  tickets: 'Tickets as low as $22',
  tv: ['ESPN+'],
  odds: {
    line: 'DAL -165',
    overUnder: '6.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL4',
    'https://topembed.pw/channel/NHL4',
    'https://topembed.pw/channel/NHL4',
    'https://topembed.pw/channel/NHL4'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_5',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Winnipeg Jets',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png',
  awayTeam: 'Columbus Blue Jackets',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/cls.png',
  date: 'Today',
  time: '6:00 AM',
  location: 'Winnipeg, Canada',
  status: 'upcoming',
  tickets: 'Tickets as low as $26',
  tv: ['ESPN+'],
  odds: {
    line: 'WPG -195',
    overUnder: '6.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL5',
    'https://topembed.pw/channel/NHL5',
    'https://topembed.pw/channel/NHL5',
    'https://topembed.pw/channel/NHL5'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_6',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Chicago Blackhawks',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/chi.png',
  awayTeam: 'Calgary Flames',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png',
  date: 'Today',
  time: '6:30 AM',
  location: 'Chicago, IL',
  status: 'upcoming',
  tickets: 'Tickets as low as $30',
  tv: ['ESPN+'],
  odds: {
    line: 'CHI -110',
    overUnder: '5.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL6',
    'https://topembed.pw/channel/NHL6',
    'https://topembed.pw/channel/NHL6',
    'https://topembed.pw/channel/NHL6'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_7',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'Vegas Golden Knights',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/vgk.png',
  awayTeam: 'New York Islanders',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png',
  date: 'Today',
  time: '8:00 AM',
  location: 'Las Vegas, NV',
  status: 'upcoming',
  tickets: 'Tickets as low as $33',
  tv: ['ESPN+'],
  odds: {
    line: 'VGK -140',
    overUnder: '6.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL7',
    'https://topembed.pw/channel/NHL7',
    'https://topembed.pw/channel/NHL7',
    'https://topembed.pw/channel/NHL7'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
},
{
  id: 'nhl_8',
  league: 'NHL',
  leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nhl.png',
  homeTeam: 'San Jose Sharks',
  homeLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sj.png',
  awayTeam: 'Utah Hockey Club',
  awayLogo: 'https://a.espncdn.com/i/teamlogos/nhl/500/uta.png',
  date: 'Today',
  time: '8:00 AM',
  location: 'San Jose, CA',
  status: 'upcoming',
  tickets: 'Tickets as low as $19',
  tv: ['ESPN+'],
  odds: {
    line: 'UTA -140',
    overUnder: '6.5'
  },
  embedUrls: [
    'https://topembed.pw/channel/NHL8',
    'https://topembed.pw/channel/NHL8',
    'https://topembed.pw/channel/NHL8',
    'https://topembed.pw/channel/NHL8'
  ],
  channelNames: [
    'NHL Channel 1 (HD)',
    'NHL Channel 2 (Backup)',
    'NHL Channel 3 (Mobile)',
    'NHL Channel 4 (Premium)'
  ]
}


  ];

  console.log(`✅ Loaded ${allEvents.length} events with individual channels`);
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
        <div class="match-teams-container">
            <div class="match-team">
                <img src="${event.homeLogo}" alt="${event.homeTeam}" class="team-logo">
                <span class="team-name">${event.homeTeam}</span>
            </div>
            <span class="match-vs">VS</span>
            <div class="match-team">
                <img src="${event.awayLogo}" alt="${event.awayTeam}" class="team-logo">
                <span class="team-name">${event.awayTeam}</span>
            </div>
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

// Open Stream with Multiple Channels
function openStream(event) {
  // Create channel data string
  const channelData = {
    embedUrls: event.embedUrls || ['https://lotusgamehd.xyz/lotushd.php?hd=246'],
    channelNames: event.channelNames || ['Channel 1 (HD)'],
    eventTitle: event.awayTeam + ' vs ' + event.homeTeam,
    league: event.league
  };

  const channelDataString = encodeURIComponent(JSON.stringify(channelData));
  const streamUrl = `stream.html?channels=${channelDataString}&league=${encodeURIComponent(event.league)}&title=${encodeURIComponent(event.awayTeam + ' vs ' + event.homeTeam)}`;
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