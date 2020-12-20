@likes.each do |like|
    if like.user_id === current_user[:id]
        json.set! like.song_id do
            json.extract! like, :id, :user_id, :song_id
        end
    end
end