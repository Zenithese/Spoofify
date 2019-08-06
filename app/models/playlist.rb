class Playlist < ApplicationRecord
    validates :title, presence: true

    belongs_to :user

    has_many :follows

    has_many :playlist_songs

    has_many :songs,
        through: :playlist_song,
        source: :song

    # has_one_attached :photo
end
