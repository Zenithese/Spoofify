class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render("api/songs/index.json.jbuilder")
    end

    def show
        @song = Song.find(params[:id])
        render("api/songs/show.json.jbuilder")
    end

    private

    def song_params
        params.require(:song).permit(:title, :artist_name, :kind)
    end
end
