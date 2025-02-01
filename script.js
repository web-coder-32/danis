// Sample video data
const videos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Never Gonna Give You Up',
        channel: 'Rick Astley',
        channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZTZFGgqEwGANXhGzO0Oq4k_M1MUzGxB7IOhcWR4=s176-c-k-c0x00ffffff-no-rj',
        views: '1.2B views',
        timestamp: '14 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
        title: 'Learn JavaScript - Full Course for Beginners',
        channel: 'freeCodeCamp.org',
        channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZQHv8wB8ORhYgzf_uth0PGgHRPx_4IEJrHxhGpx=s176-c-k-c0x00ffffff-no-rj',
        views: '12M views',
        timestamp: '4 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/yXS8iNKqsCM/maxresdefault.jpg',
        title: 'Planet Earth II: Official Extended Trailer',
        channel: 'BBC Earth',
        channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZRGKFQYhEHbqsZVGEXoBpKnpqtD7yBJgHsJsNSS=s176-c-k-c0x00ffffff-no-rj',
        views: '15M views',
        timestamp: '6 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/hZBu9coLb24/maxresdefault.jpg',
        title: 'Most Beautiful Places in the World',
        channel: 'National Geographic',
        channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZTGwDZZrgmGTaUXOPdTUHYfA4wKZkaYHhi-_2Bv=s176-c-k-c0x00ffffff-no-rj',
        views: '5M views',
        timestamp: '2 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/BHY0FxzoKZE/maxresdefault.jpg',
        title: 'Gordon Ramsay\'s Ultimate Guide To Quick & Easy Dinners',
        channel: 'Gordon Ramsay',
        channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZQEQJfXhZ_Gj7ZuXV3RpK5lJ4YClwB3zH0eqw=s176-c-k-c0x00ffffff-no-rj',
        views: '8M views',
        timestamp: '1 year ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/UItWltVZZmE/maxresdefault.jpg',
        title: '30 MIN FULL BODY WORKOUT - Beginner Friendly',
        channel: 'POPSUGAR Fitness',
        channelIcon: 'https://yt3.googleusercontent.com/ytc/AIf8zZSLuDz8ItOt9999h5lk_OoN8jWZtqGOIejZ2Q=s176-c-k-c0x00ffffff-no-rj',
        views: '25M views',
        timestamp: '3 years ago'
    }
];

// Function to create video cards
function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    
    videoCard.innerHTML = `
        <a href="video.html" class="video-link">
            <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
            <div class="video-info">
                <img src="${video.channelIcon}" alt="${video.channel}" class="channel-icon">
                <div class="video-details">
                    <h3>${video.title}</h3>
                    <p>${video.channel}</p>
                    <p>${video.views} • ${video.timestamp}</p>
                </div>
            </div>
        </a>
    `;
    
    return videoCard;
}

// Populate video grid
const videoGrid = document.getElementById('videoGrid');
if (videoGrid) {
    videos.forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
    });
}

// Create overlay for mobile sidebar
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

// Toggle sidebar
const menuBtn = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');
const videosContainer = document.querySelector('.videos-container');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('show');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('show');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Search functionality
const searchForm = document.querySelector('.search-bar');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchForm.querySelector('input').value.toLowerCase();
        
        const filteredVideos = videos.filter(video => 
            video.title.toLowerCase().includes(searchTerm) || 
            video.channel.toLowerCase().includes(searchTerm)
        );
        
        if (videoGrid) {
            videoGrid.innerHTML = '';
            filteredVideos.forEach(video => {
                videoGrid.appendChild(createVideoCard(video));
            });
        }
    });
}
