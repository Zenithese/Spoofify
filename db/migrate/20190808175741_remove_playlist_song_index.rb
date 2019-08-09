class RemovePlaylistSongIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlist_songs, :song_id
  end
end
