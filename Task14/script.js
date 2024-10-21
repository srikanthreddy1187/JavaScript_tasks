// Select elements
const fullTimestampDisplay = document.getElementById('full-timestamp');
const relativeTimestampDisplay = document.getElementById('relative-timestamp');
const createPostButton = document.getElementById('createPost');

// Function to format time as dd/mm/yyyy
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}.${minutes}.${seconds}`;
}
function getRelativeTime(pastDate) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    const seconds = diffInSeconds;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 30) {
        return `${days} days ago`;
    } else {
        return `${months} months ago`;
    }
}
function updateTimestampDisplay() {
    const now = new Date();
    fullTimestampDisplay.textContent = `${formatDate(now)} ${formatTime(now)}`;
    relativeTimestampDisplay.textContent = getRelativeTime(now);
}

createPostButton.addEventListener('click', () => {
    const postTime = new Date();
    fullTimestampDisplay.textContent = `${formatDate(postTime)} ${formatTime(postTime)}`;

    setInterval(() => {
        relativeTimestampDisplay.textContent = getRelativeTime(postTime);
    }, 1000);
});
