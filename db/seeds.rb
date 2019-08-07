# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Playlist.destroy_all
Song.destroy_all
PlaylistSong.destroy_all

p1 = Playlist.create!(title: "Chilling On A Dirt Road", user_id: 2)
# ChillingOnADirtRoad = "https://active-storage-aa-spoofify-dev.s3.amazonaws.com/ChillingOnADirtRoad"
# p1.attach.photo(io: ChillingOnADirtRoad, filename: "dirt.jpeg")
p2 = Playlist.create!(title: "Anti Pop", user_id: 2)
p3 = Playlist.create!(title: "Chill Out Classics", user_id: 2)
p4 = Playlist.create!(title: "mint Acoustic", user_id: 2)
p5 = Playlist.create!(title: "POLLEN", user_id: 2)

s1 = Song.create!(title: "testing456", artist_name: "whatever", kind: "music")
s2 = Song.create!(title: "testing123", artist_name: "whatevs", kind: "podcast")
s3 = Song.create!(title: "testing567", artist_name: "what", kind: "live")
s4 = Song.create!(title: "testing789", artist_name: "ever", kind: "live")

PlaylistSong.create!(playlist_id: p1.id, song_id: s1.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s2.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s3.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s4.id)