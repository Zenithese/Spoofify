class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :song_id

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :song_id
  end
end
