class AddUrlsToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :track_url, :string
    add_column :songs, :image_url, :string
  end
end
