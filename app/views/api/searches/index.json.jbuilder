json.songs do
    if @songs
        @songs.each do |song| 
            json.set! song.id do
                json.extract! song, :id, :title, :artist_name, :kind
                json.trackUrl url_for(song.track)
                # json.photoUrl url_for(song.photo)
            end
        end
    end
end

json.playlists do
    if @playlists
        @playlists.each do |playlist| 
            json.set! playlist.id do
                json.extract! playlist, :id, :title, :user_id
                json.song_ids playlist.songs.pluck(:id)
                json.photoUrl url_for(playlist.photo)
            end
        end
    end
end