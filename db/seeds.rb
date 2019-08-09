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


ChillingOnADirtRoad = EzDownload.open("https://seedie.s3.amazonaws.com/ChillingOnADirtRoad.jpg")
AntiPop = EzDownload.open("https://seedie.s3.amazonaws.com/AntiPop.jpg")
ChilloutClassics = EzDownload.open("https://seedie.s3.amazonaws.com/ChilloutClassics.jpg")
POLLEN = EzDownload.open("https://seedie.s3.amazonaws.com/POLLEN.jpg")
mintAcoustic = EzDownload.open("https://seedie.s3.amazonaws.com/mintAcoustic.jpg")

Lalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
# Lalalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
# Lalalalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
# Lalalalalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
betteroffalone = EzDownload.open("https://seedie.s3.amazonaws.com/BetterOffAlone.mp3")
ShowMeLove = EzDownload.open("https://seedie.s3.amazonaws.com/ShowMeLove.mp3")
Scatman = EzDownload.open("https://seedie.s3.amazonaws.com/Scatman.mp3")
HowIBeatShaq = EzDownload.open("https://seedie.s3.amazonaws.com/AaronCarter.mp3")

p1 = Playlist.create!(title: "Chilling On A Dirt Road", user_id: 2)
    p1.photo.attach(io: ChillingOnADirtRoad, filename: "dirt.jpg")
p2 = Playlist.create!(title: "Anti Pop", user_id: 2)
    p2.photo.attach(io: AntiPop, filename: "Antipop.jpg")
p3 = Playlist.create!(title: "Chill Out Classics", user_id: 2)
    p3.photo.attach(io: ChilloutClassics, filename: "ChilloutClassics.jpg")
p4 = Playlist.create!(title: "mint Acoustic", user_id: 2)
    p4.photo.attach(io: POLLEN, filename: "POLLEN.jpg")
p5 = Playlist.create!(title: "POLLEN", user_id: 2)
    p5.photo.attach(io: mintAcoustic, filename: "mintAcoustic.jpg")

s1 = Song.create!(title: "Around the World (La La La La La) (Radio Version)", artist_name: "ATC", kind: "Legit")
    s1.track.attach(io: Lalala, filename: "ATC.mp3")
s2 = Song.create!(title: "Better Off Alone", artist_name: "Alice DJ", kind: "Classic")
    s2.track.attach(io: betteroffalone, filename: "BetterOffAlone.mp3")
s3 = Song.create!(title: "Show Me Love", artist_name: "Robin S", kind: "Classic")
    s3.track.attach(io: ShowMeLove, filename: "ShowMeLove.mp3")
s4 = Song.create!(title: "Scatman (Ski Ba Bop Ba Dop Bop)", artist_name: "Scatman", kind: "Scat")
    s4.track.attach(io: Scatman, filename: "Scatman.mp3")
s5 = Song.create!(title: "Aaron Carter - That's How I Beat Shaq", artist_name: "Aaron Carter", kind: "Beats")
    s5.track.attach(io: HowIBeatShaq, filename: "AaronCarter.mp3")


PlaylistSong.create!(playlist_id: p1.id, song_id: s1.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s2.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s3.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s4.id)

PlaylistSong.create!(playlist_id: p2.id, song_id: s1.id)
PlaylistSong.create!(playlist_id: p2.id, song_id: s2.id)
PlaylistSong.create!(playlist_id: p2.id, song_id: s3.id)
PlaylistSong.create!(playlist_id: p2.id, song_id: s4.id)
PlaylistSong.create!(playlist_id: p2.id, song_id: s5.id)

PlaylistSong.create!(playlist_id: p3.id, song_id: s1.id)
PlaylistSong.create!(playlist_id: p3.id, song_id: s2.id)
PlaylistSong.create!(playlist_id: p3.id, song_id: s3.id)
PlaylistSong.create!(playlist_id: p3.id, song_id: s4.id)

PlaylistSong.create!(playlist_id: p4.id, song_id: s1.id)
PlaylistSong.create!(playlist_id: p4.id, song_id: s2.id)
PlaylistSong.create!(playlist_id: p4.id, song_id: s3.id)
PlaylistSong.create!(playlist_id: p4.id, song_id: s4.id)

PlaylistSong.create!(playlist_id: p5.id, song_id: s1.id)
PlaylistSong.create!(playlist_id: p5.id, song_id: s2.id)
PlaylistSong.create!(playlist_id: p5.id, song_id: s3.id)
PlaylistSong.create!(playlist_id: p5.id, song_id: s4.id)