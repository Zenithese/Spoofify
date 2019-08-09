@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :artist_name, :kind
        json.trackUrl url_for(song.track)
        json.photoUrl url_for(song.photo)
    end
end