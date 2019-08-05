class Song < ApplicationRecord
    validates :title, :artist_name, :kind , presence: true

    has_many :playlist,
     foreign_key: :song_id

    # has_one_attached :photo
end
