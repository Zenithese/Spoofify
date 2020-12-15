json.song do
  json.extract! @song, :id, :title, :artist_name, :kind, :spotify_id, :track_url, :image_url
  # json.trackUrl url_for(song.track)
  # json.photoUrl url_for(song.photo)
end