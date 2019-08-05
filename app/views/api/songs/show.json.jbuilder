json.song do
  json.extract! song, :id, :title, :artist_name, :kind
#   json.trackUrl url_for(song.track)
end