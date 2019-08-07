require 'open-uri'

class Playlist < ApplicationRecord
    validates :title, presence: true
    after_initialize :ensure_default_photo

    belongs_to :user

    has_many :follows

    has_many :playlist_song,
        foreign_key: :playlist_id

    has_many :songs,
        through: :playlist_song,
        source: :song

    has_one_attached :photo

    private

    def ensure_default_photo
        unless self.photo.attached?
            file = open('https://seedie.s3.amazonaws.com/Sun.jpg')
            self.photo.attach(io: file, filename: 'Sun.jpg')
        end
    end
end
