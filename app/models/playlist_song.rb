class PlaylistSong < ApplicationRecord

    belongs_to :playlist,
        foreign_key: :playlist_id
    belongs_to :song
end
