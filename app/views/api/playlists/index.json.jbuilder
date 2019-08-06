@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :user_id
        json.song_ids playlist.songs.pluck(:id)
        # json.photoUrl url_for(playlist.photo)
    end
end