class Api::LikesController < ApplicationController
    def index
        @likes = Like.all
        render("api/likes/index.json.jbuilder")
    end

    def create
        @like = Like.new(like_params)
        @like.save
        render("api/likes/show.json.jbuilder")
    end

    def destroy
        
        @like = current_user.likes.find_by(song_id: params[:id])
        @like.destroy
        render("api/likes/show.json.jbuilder")
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :song_id)
    end

end