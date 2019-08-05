export const fetchSongs = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlists',
    })
};

export const fetchSong = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlists/${id}`
    })
};