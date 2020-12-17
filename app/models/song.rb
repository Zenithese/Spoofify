require 'open-uri'

class Song < ApplicationRecord
    validates :title, :artist_name, :kind , presence: true
    validates_uniqueness_of :track_url

    has_many :playlist_songs
    has_many :likes
    has_many :playlists,
     through: :playlist_song,
     source: :playlist
end
