class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all.includes(:songs, :playlist_song)
        render :index
    end

    def show
        @playlist = Playlist.includes(:songs, :playlist_song).find(params[:id])
        render :show
    end

    def create
        @playlist = Playlist.includes(:song, :artist_name).new(playlist_params)
        @playlist.user_id = current_user.id
        if @playlist.save
            render :show
        else
            render json: @playliset.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlist = Playlist.includes(:songs, :playlist_song).find(params[:id])
        @playlist.destroy
        render :show
    end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end

end
