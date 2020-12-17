class PlaylistSong < ApplicationRecord
    validates :song_id, uniqueness: { scope: :playlist_id }

    belongs_to :playlist,
        foreign_key: :playlist_id
    belongs_to :song
end