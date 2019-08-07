class Api::SongPlaylistsController < ApplicationController
  def create
     @playlist_song = PlaylistSong.new(playlist_song_params)
     @playlist_song.save
   end

   def playlist_song_params
     params.require(:playlist_song).permit(:playlist_id, :song_id)
   end
end