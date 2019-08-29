export const fetchSongs = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/songs',
    })
};

export const fetchSong = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/songs/${id}`
    })
};

// export const recieveSongForPlaylist = (songId) => {
//     return $.ajax({
//         method: 'POST',
//         url: `/api/songs/${id}`,
//         data: { songId }
//     })
// }