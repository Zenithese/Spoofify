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

export const createSong = (song) => {
    return $.ajax({
        method: 'POST',
        url: `/api/songs`,
        data: { song }
    })
};