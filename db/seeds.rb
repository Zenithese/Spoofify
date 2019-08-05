# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Playlist.destroy_all

Playlist.create!(title: "Chilling On A Dirt Road", user_id: 2)
Playlist.create!(title: "Anti Pop", user_id: 2)
Playlist.create!(title: "Chill Out Classics", user_id: 2)
Playlist.create!(title: "mint Acoustic", user_id: 2)
Playlist.create!(title: "POLLEN", user_id: 2)