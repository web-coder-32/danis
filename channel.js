// Sample channel videos data
const channelVideos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
        title: 'Learn JavaScript - Full Course for Beginners',
        views: '12M views',
        timestamp: '4 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/yXS8iNKqsCM/maxresdefault.jpg',
        title: 'Planet Earth II: Official Extended Trailer',
        views: '15M views',
        timestamp: '6 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/hZBu9coLb24/maxresdefault.jpg',
        title: 'Most Beautiful Places in the World',
        views: '5M views',
        timestamp: '2 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/BHY0FxzoKZE/maxresdefault.jpg',
        title: 'Gordon Ramsay's Ultimate Guide To Quick & Easy Dinners',
        views: '8M views',
        timestamp: '1 year ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/UItWltVZZmE/maxresdefault.jpg',
        title: '30 MIN FULL BODY WORKOUT - Beginner Friendly',
        views: '25M views',
        timestamp: '3 years ago'
    }
];

// Function to create channel video card
function createChannelVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    
    videoCard.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
        <div class="video-info">
            <h3>${video.title}</h3>
            <p>${video.views} • ${video.timestamp}</p>
        </div>
    `;
    
    return videoCard;
}

// Populate channel videos
const channelVideosGrid = document.getElementById('channelVideos');
channelVideos.forEach(video => {
    channelVideosGrid.appendChild(createChannelVideoCard(video));
});

// Channel navigation functionality
const navLinks = document.querySelectorAll('.channel-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Subscribe button functionality
const subscribeBtn = document.querySelector('.subscribe-btn');
let isSubscribed = false;

subscribeBtn.addEventListener('click', () => {
    isSubscribed = !isSubscribed;
    if (isSubscribed) {
        subscribeBtn.textContent = 'Subscribed';
        subscribeBtn.style.backgroundColor = '#606060';
    } else {
        subscribeBtn.textContent = 'Subscribe';
        subscribeBtn.style.backgroundColor = '#cc0000';
    }
});
