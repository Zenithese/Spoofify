class PlaylistSong < ApplicationRecord
    # validates :song_id, :playlist_id, precense: true

    belongs_to :playlist,
    belongs_to :song,
end
