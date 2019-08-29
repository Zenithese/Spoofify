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

#playlistPic
ChillingOnADirtRoad = EzDownload.open("https://seedie.s3.amazonaws.com/ChillingOnADirtRoad.jpg")
AntiPop = EzDownload.open("https://seedie.s3.amazonaws.com/AntiPop.jpg")
ChilloutClassics = EzDownload.open("https://seedie.s3.amazonaws.com/ChilloutClassics.jpg")
POLLEN = EzDownload.open("https://seedie.s3.amazonaws.com/POLLEN.jpg")
mintAcoustic = EzDownload.open("https://seedie.s3.amazonaws.com/mintAcoustic.jpg")

# SongPic
ATC = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.jpg")
DeeJay = EzDownload.open("https://seedie.s3.amazonaws.com/dj.jpg")
ShowmeLove = EzDownload.open("https://seedie.s3.amazonaws.com/robinS.jpg")
scatMan = EzDownload.open("https://seedie.s3.amazonaws.com/scatman.jpg")
aaron = EzDownload.open("https://seedie.s3.amazonaws.com/arron.jpg")
EagleImage = EzDownload.open("https://seedie.s3.amazonaws.com/EagleImage.jpg")
DeepPurple = EzDownload.open("https://seedie.s3.amazonaws.com/DeepPurple.jpg")
JohnnyCash = EzDownload.open("https://seedie.s3.amazonaws.com/JohnnyCash.jpg")
born2beWild = EzDownload.open("https://seedie.s3.amazonaws.com/born2beWild.jpg")
JimiHendrix = EzDownload.open("https://seedie.s3.amazonaws.com/jimi-hendrix.jpg")

# songs
Lalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
# Lalalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
# Lalalalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
# Lalalalalala = EzDownload.open("https://seedie.s3.amazonaws.com/ATC.mp3")
betteroffalone = EzDownload.open("https://seedie.s3.amazonaws.com/BetterOffAlone.mp3")
ShowMeLove = EzDownload.open("https://seedie.s3.amazonaws.com/ShowMeLove.mp3")
Scatman = EzDownload.open("https://seedie.s3.amazonaws.com/Scatman.mp3")
HowIBeatShaq = EzDownload.open("https://seedie.s3.amazonaws.com/AaronCarter.mp3")
CrosstownTraffic = EzDownload.open("https://seedie.s3.amazonaws.com/CrosstownTraffic.mp3")
BornToBeWild = EzDownload.open("https://seedie.s3.amazonaws.com/BornToBeWild.mp3")
FurtherOnUpTheRoad = EzDownload.open("https://seedie.s3.amazonaws.com/FurtherOnUpTheRoad.mp3")
HighwayStar = EzDownload.open("https://seedie.s3.amazonaws.com/HighwayStar.mp3")
LifeintheFastLane = EzDownload.open("https://seedie.s3.amazonaws.com/LifeintheFastLane.mp3")

p1 = Playlist.create!(title: "Chillin' On A Dirt Road", user_id: 1)
    p1.photo.attach(io: ChillingOnADirtRoad, filename: "dirt.jpg")
p2 = Playlist.create!(title: "Anti Pop", user_id: 1)
    p2.photo.attach(io: AntiPop, filename: "Antipop.jpg")
p3 = Playlist.create!(title: "Chill Out Classics", user_id: 1)
    p3.photo.attach(io: ChilloutClassics, filename: "ChilloutClassics.jpg")
p4 = Playlist.create!(title: "mint Acoustic", user_id: 1)
    p4.photo.attach(io: POLLEN, filename: "POLLEN.jpg")
p5 = Playlist.create!(title: "POLLEN", user_id: 1)
    p5.photo.attach(io: mintAcoustic, filename: "mintAcoustic.jpg")

s1 = Song.create!(title: "Around the World (La La La La La) (Radio Version)", artist_name: "ATC", kind: "Legit")
    s1.track.attach(io: Lalala, filename: "ATC.mp3")
    s1.photo.attach(io: ATC, filename: "ATC.jpg")
s2 = Song.create!(title: "Better Off Alone", artist_name: "Alice DJ", kind: "Classic")
    s2.track.attach(io: betteroffalone, filename: "BetterOffAlone.mp3")
    s2.photo.attach(io: DeeJay, filename: "TheAliceDj")
s3 = Song.create!(title: "Show Me Love", artist_name: "Robin S", kind: "Classic")
    s3.track.attach(io: ShowMeLove, filename: "ShowMeLove.mp3")
    s3.photo.attach(io: ShowmeLove, filename: "ShowMeLove.jpg")
s4 = Song.create!(title: "Scatman (Ski Ba Bop Ba Dop Bop)", artist_name: "Scatman", kind: "Scat")
    s4.track.attach(io: Scatman, filename: "Scatman.mp3")
    s4.photo.attach(io: scatMan, filename: "scatMan.jpg")
s5 = Song.create!(title: "Aaron Carter - That's How I Beat Shaq", artist_name: "Aaron Carter", kind: "Beats")
    s5.track.attach(io: HowIBeatShaq, filename: "AaronCarter.mp3")
    s5.photo.attach(io: aaron, filename: "aaron.jpg")

s6 = Song.create!(title: "Crosstwon Traffic", artist_name: "Jimi Hendrix", kind: "Legit")
    s6.track.attach(io: CrosstownTraffic, filename: "CrosstownTraffic.mp3")
    s6.photo.attach(io: JimiHendrix, filename: "JimiHendrix.jpg")
s7 = Song.create!(title: "Born To Be Wild", artist_name: "Steppenwolf", kind: "Classic Rock")
    s7.track.attach(io: BornToBeWild, filename: "BornToBeWild.mp3")
    s7.photo.attach(io: born2beWild, filename: "born2beWild.jpg")
s8 = Song.create!(title: "Further On Up The Road", artist_name: "Johnny Cash", kind: "Classic Rock")
    s8.track.attach(io: FurtherOnUpTheRoad, filename: "FurtherOnUpTheRoad.mp3")
    s8.photo.attach(io: JohnnyCash, filename: "JohnnyCash.jpg")
s9 = Song.create!(title: "Highway Star", artist_name: "Deep Purple", kind: "Classic Rock")
    s9.track.attach(io: HighwayStar, filename: "HighwayStar.mp3")
    s9.photo.attach(io: DeepPurple, filename: "DeepPurple.jpg")
s10 = Song.create!(title: "Life in the Fast Lane", artist_name: "Eagles", kind: "Classic Rock")
    s10.track.attach(io: LifeintheFastLane, filename: "LifeintheFastLane.mp3")
    s10.photo.attach(io: EagleImage, filename: "EagleImage.jpg")

PlaylistSong.create!(playlist_id: p1.id, song_id: s6.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s7.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s8.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s9.id)
PlaylistSong.create!(playlist_id: p1.id, song_id: s10.id)

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

