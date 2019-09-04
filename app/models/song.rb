require 'open-uri'

class Song < ApplicationRecord
    validates :title, :artist_name, :kind , presence: true
    # after_intialize :ensure_default_track

    has_many :playlist_songs

    has_many :likes

    has_many :playlists,
     through: :playlist_song,
     source: :playlist

    has_one_attached :photo

    has_one_attached :track

    private

    # def ensure_default_track
    #     unless self.track.attached?
    #         AllAroundTheWorld = open('https://seedie.s3.amazonaws.com/ATC.mp3')
    #         self.track.attach(io: AllAroundTheWorld, filename: 'ATC.mp3')
    #     end
    # end
end
