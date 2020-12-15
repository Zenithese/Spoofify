require 'open-uri'

class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render("api/songs/index.json.jbuilder")
    end

    def create
        @song = Song.find_by(:spotify_id => params["song"]["spotify_id"])

        if @song
            render('api/songs/show.json.jbuilder') 
        else
            @song = Song.create!(song_params)
            # @song.track.attach(io: EzDownload.open(params[:song][:trackUrl]), filename: params[:song][:title])
            # @song.photo.attach(io: EzDownload.open(params[:song][:imageUrl]), filename: params[:song][:title])
            render('api/songs/show.json.jbuilder')
        end
    end

    def show
        @song = Song.find(params[:id])
        render("api/songs/show.json.jbuilder")
    end

    private

    def song_params
        params.require(:song).permit(:title, :artist_name, :kind, :spotify_id, :track_url, :image_url)
    end
end
