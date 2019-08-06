class Song < ApplicationRecord
    validates :title, :artist_name, :kind , presence: true

    has_many :playlist_songs

    has_many :playlists,
     through: :playlist_song,
     source: :playlist

    # has_one_attached :photo
end
