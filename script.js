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
      id: 'nfl_1',
      league: 'NFL',
      leagueLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nfl.png',
      homeTeam: 'Chicago Bears',
      homeLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png',
      awayTeam: 'New Orleans Saints',
      awayLogo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
      date: 'Oct 19, 2025',
      time: '10:00 PM ET',
      location: 'Soldier Field, Chicago, IL',
      status: 'upcoming',
      embedUrls: [
        'https://topembed.pw/channel/TSN1[Canada]',
        'https://topembed.pw/channel/TSN1[Canada]',
        'https://topembed.pw/channel/TSN1[Canada]',
        'https://topembed.pw/channel/TSN1[Canada]'
      ],
      channelNames: [
        'NFL Channel 1 (HD)',
        'NFL Channel 2 (Backup)',
        'NFL Channel 3 (Mobile)',
        'NFL Channel 4 (Premium)'
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
      time: '10:00 PM ET',
      location: 'Huntington Bank Field, Cleveland, OH',
      status: 'upcoming',
      embedUrls: [
        'https://topembed.pw/channel/FOXSports1[USA]',
        'https://topembed.pw/channel/FOXSports1[USA]',
        'https://lotusgamehd.xyz/lotushd.php?hd=407',
        'https://lotusgamehd.xyz/lotushd.php?hd=408'
      ],
      channelNames: [
        'NFL Dolphins vs Browns 1',
        'NFL Dolphins vs Browns 2',
        'NFL Dolphins vs Browns 3',
        'NFL Dolphins vs Browns 4'
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
      time: '10:00 PM ET',
      location: 'Nissan Stadium, Nashville, TN',
      status: 'upcoming',
      embedUrls: [
        'https://lotusgamehd.xyz/lotushd.php?hd=409',
        'https://lotusgamehd.xyz/lotushd.php?hd=410',
        'https://lotusgamehd.xyz/lotushd.php?hd=411'
      ],
      channelNames: [
        'NFL Titans vs Patriots 1',
        'NFL Titans vs Patriots 2',
        'NFL Titans vs Patriots 3'
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
      time: '10:00 PM ET',
      location: 'GEHA Field at Arrowhead Stadium, Kansas City, MO',
      status: 'upcoming',
      embedUrls: [
        'https://lotusgamehd.xyz/lotushd.php?hd=412',
        'https://lotusgamehd.xyz/lotushd.php?hd=413',
        'https://lotusgamehd.xyz/lotushd.php?hd=414'
      ],
      channelNames: [
        'NFL Chiefs vs Raiders 1',
        'NFL Chiefs vs Raiders 2',
        'NFL Chiefs vs Raiders 3'
      ]
    },
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
        'https://lotusgamehd.xyz/lotushd.php?hd=501',
        'https://lotusgamehd.xyz/lotushd.php?hd=502',
        'https://lotusgamehd.xyz/lotushd.php?hd=503'
      ],
      channelNames: [
        'NBA Cavaliers vs Pistons 1',
        'NBA Cavaliers vs Pistons 2',
        'NBA Cavaliers vs Pistons 3'
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
        'https://lotusgamehd.xyz/lotushd.php?hd=504',
        'https://lotusgamehd.xyz/lotushd.php?hd=505',
        'https://lotusgamehd.xyz/lotushd.php?hd=506'
      ],
      channelNames: [
        'NBA Pelicans vs Rockets 1',
        'NBA Pelicans vs Rockets 2',
        'NBA Pelicans vs Rockets 3'
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
        'https://lotusgamehd.xyz/lotushd.php?hd=507',
        'https://lotusgamehd.xyz/lotushd.php?hd=508',
        'https://lotusgamehd.xyz/lotushd.php?hd=509'
      ],
      channelNames: [
        'NBA Bucks vs Thunder 1',
        'NBA Bucks vs Thunder 2',
        'NBA Bucks vs Thunder 3'
      ]
    },
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
      status: 'upcoming',
      embedUrls: [
        'https://lotusgamehd.xyz/lotushd.php?hd=601',
        'https://lotusgamehd.xyz/lotushd.php?hd=602',
        'https://lotusgamehd.xyz/lotushd.php?hd=603'
      ],
      channelNames: [
        'MLB Brewers vs Dodgers 1',
        'MLB Brewers vs Dodgers 2',
        'MLB Brewers vs Dodgers 3'
      ]
    },
    {
      id: 'nhl_1',
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
        'https://lotusgamehd.xyz/lotushd.php?hd=701',
        'https://lotusgamehd.xyz/lotushd.php?hd=702',
        'https://lotusgamehd.xyz/lotushd.php?hd=703'
      ],
      channelNames: [
        'NHL Canadiens vs Kraken 1',
        'NHL Canadiens vs Kraken 2',
        'NHL Canadiens vs Kraken 3'
      ]
    },
    {
      id: 'nhl_2',
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
        'https://lotusgamehd.xyz/lotushd.php?hd=704',
        'https://lotusgamehd.xyz/lotushd.php?hd=705',
        'https://lotusgamehd.xyz/lotushd.php?hd=706'
      ],
      channelNames: [
        'NHL Islanders vs Oilers 1',
        'NHL Islanders vs Oilers 2',
        'NHL Islanders vs Oilers 3'
      ]
    },
    {
      id: 'soccer_1',
      league: 'Soccer',
      leagueLogo: 'https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-soccer.png&h=80&w=80&scale=crop&cquality=40',
      homeTeam: 'Manchester United',
      homeLogo: 'https://a.espncdn.com/i/teamlogos/soccer/500/manchester_united.png',
      awayTeam: 'Liverpool',
      awayLogo: 'https://a.espncdn.com/i/teamlogos/soccer/500/liverpool.png',
      date: 'Oct 15, 2025',
      time: '3:00 PM ET',
      location: 'Old Trafford',
      status: 'upcoming',
      embedUrls: [
        'https://lotusgamehd.xyz/lotushd.php?hd=801',
        'https://lotusgamehd.xyz/lotushd.php?hd=802',
        'https://lotusgamehd.xyz/lotushd.php?hd=803'
      ],
      channelNames: [
        'Soccer Man Utd vs Liverpool 1',
        'Soccer Man Utd vs Liverpool 2',
        'Soccer Man Utd vs Liverpool 3'
      ]
    },
    {
      id: 'mma_1',
      league: 'MMA',
      leagueLogo: 'https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-mma.png&w=64&h=64&scale=crop&cquality=40&location=origin',
      homeTeam: 'Conor McGregor',
      homeLogo: 'https://a.espncdn.com/i/teamlogos/mma/500/conor_mcgregor.png',
      awayTeam: 'Khabib Nurmagomedov',
      awayLogo: 'https://a.espncdn.com/i/teamlogos/mma/500/khabib_nurmagomedov.png',
      date: 'Oct 16, 2025',
      time: '10:00 PM ET',
      location: 'T-Mobile Arena, Las Vegas',
      status: 'upcoming',
      embedUrls: [
        'https://lotusgamehd.xyz/lotushd.php?hd=901',
        'https://lotusgamehd.xyz/lotushd.php?hd=902',
        'https://lotusgamehd.xyz/lotushd.php?hd=903'
      ],
      channelNames: [
        'MMA McGregor vs Khabib 1',
        'MMA McGregor vs Khabib 2',
        'MMA McGregor vs Khabib 3'
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