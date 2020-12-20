@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :artist_name, :kind, :spotify_id, :track_url, :image_url
    end
    if song.spotify_id
        json.set! song.spotify_id do
            json.extract! song, :id, :title, :artist_name, :kind, :spotify_id, :track_url, :image_url
        end
    # else
    #     json.set! song.id do
    #         json.extract! song, :id, :title, :artist_name, :kind, :spotify_id, :track_url, :image_url
    #     end
    end
end