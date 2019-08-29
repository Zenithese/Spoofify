export const createPlaylistsong = playlistsong => {
    return $.ajax({
        method: 'post',
        url: "api/playlistsongs",
        data: { playlistsong }
    })
}


export const deleteSong = id => {
    return $.ajax({
        method: 'delete',
        url: `api/playlistsongs/${id}`,
    })
}