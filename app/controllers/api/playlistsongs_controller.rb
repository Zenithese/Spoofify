class Api::PlaylistsongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.save
    render('api/playlistsongs/show.json.jbuilder')
   end

   def destroy
    @playlist_song = current_user.playlistsongs.find_by(song_id: params[:id].split(',')[0], playlist_id: params[:id].split(',')[1])
    @playlist_song.destroy
    render('api/playlistsongs/show.json.jbuilder')
   end

   def playlist_song_params
    params.require(:playlistsong).permit(:playlist_id, :song_id)
   end
end