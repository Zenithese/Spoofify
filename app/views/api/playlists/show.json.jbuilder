json.playlist do
    json.extract! @playlist, :id, :title
    json.song_ids @playlist.songs.pluck(:id)
end 

json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :artist_name, :kind
    end
  end
end