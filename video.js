// Sample suggested videos data
const suggestedVideos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
        title: 'Learn JavaScript - Full Course for Beginners',
        channel: 'freeCodeCamp.org',
        views: '12M views',
        timestamp: '4 years ago',
        duration: '3:26:42'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/yXS8iNKqsCM/maxresdefault.jpg',
        title: 'Planet Earth II: Official Extended Trailer',
        channel: 'BBC Earth',
        views: '15M views',
        timestamp: '6 years ago',
        duration: '2:54'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/hZBu9coLb24/maxresdefault.jpg',
        title: 'Most Beautiful Places in the World',
        channel: 'National Geographic',
        views: '5M views',
        timestamp: '2 years ago',
        duration: '10:15'
    }
];

// Function to create suggested video card
function createSuggestedVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'suggested-video-card';
    
    videoCard.innerHTML = `
        <div class="thumbnail-container">
            <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
            <span class="duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <h3>${video.title}</h3>
            <p>${video.channel}</p>
            <p>${video.views} • ${video.timestamp}</p>
        </div>
    `;
    
    // Add click event to navigate to video
    videoCard.addEventListener('click', () => {
        // In a real app, this would navigate to the specific video
        window.location.reload();
    });
    
    return videoCard;
}

// Populate suggested videos
const suggestedVideosList = document.getElementById('suggestedVideosList');
if (suggestedVideosList) {
    suggestedVideos.forEach(video => {
        suggestedVideosList.appendChild(createSuggestedVideoCard(video));
    });
}

// Show more description functionality
const showMoreBtn = document.querySelector('.show-more');
const videoDescription = document.querySelector('.video-description p');

if (videoDescription && showMoreBtn) {
    const fullDescription = videoDescription.textContent;
    const maxLength = 200;

    if (fullDescription.length > maxLength) {
        const shortDescription = fullDescription.substring(0, maxLength) + '...';
        videoDescription.textContent = shortDescription;
        
        showMoreBtn.addEventListener('click', () => {
            if (videoDescription.textContent === shortDescription) {
                videoDescription.textContent = fullDescription;
                showMoreBtn.textContent = 'Show less';
            } else {
                videoDescription.textContent = shortDescription;
                showMoreBtn.textContent = 'Show more';
            }
        });
    } else {
        showMoreBtn.style.display = 'none';
    }
}

// Like/Dislike functionality
const likeBtn = document.querySelector('.actions button:first-child');
const dislikeBtn = document.querySelector('.actions button:nth-child(2)');

if (likeBtn && dislikeBtn) {
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('active');
        if (dislikeBtn.classList.contains('active')) {
            dislikeBtn.classList.remove('active');
        }
        updateLikeCount(likeBtn);
    });

    dislikeBtn.addEventListener('click', () => {
        dislikeBtn.classList.toggle('active');
        if (likeBtn.classList.contains('active')) {
            likeBtn.classList.remove('active');
            updateLikeCount(likeBtn);
        }
    });
}

function updateLikeCount(button) {
    const countSpan = button.querySelector('span');
    if (countSpan) {
        let count = parseInt(countSpan.textContent.replace(/[^0-9]/g, ''));
        if (button.classList.contains('active')) {
            count++;
        } else {
            count--;
        }
        countSpan.textContent = formatCount(count);
    }
}

function formatCount(count) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
}

// Subscribe button functionality
const subscribeBtn = document.querySelector('.subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        subscribeBtn.classList.toggle('subscribed');
        if (subscribeBtn.classList.contains('subscribed')) {
            subscribeBtn.textContent = 'Subscribed';
        } else {
            subscribeBtn.textContent = 'Subscribe';
        }
    });
}

// Share button functionality
const shareBtn = document.querySelector('.actions button:nth-child(3)');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: document.querySelector('.video-title').textContent,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback: Copy to clipboard
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            alert('Link copied to clipboard!');
        }
    });
}
