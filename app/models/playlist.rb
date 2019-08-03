class Playlist < ApplicationRecord
    validates :title, presence: true

    belongs_to :user

    has_many :follows

    has_one :playlist_id,
        foreign_key: :playlist_id

    has_many :songs,
        through: :playlist_id,
        source: :song
end
