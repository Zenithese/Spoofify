class Api::PlaylistsongsController < ApplicationController
  def create
    debugger
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.save
   end

   def playlist_song_params
    params.require(:playlistsong).permit(:playlist_id, :song_id)
   end
end