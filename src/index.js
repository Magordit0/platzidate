function getTimestamp() {
    return Date.now();
}

function getLongTime(locate = 'es-ES'){
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
    }
    return new Date().toLocaleString(locate, options);
}

module.exports = {
    getTimestamp,
    getLongTime
}