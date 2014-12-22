class RemoveGenreIdFromBooks < ActiveRecord::Migration
  def change
    remove_column :books, :genre_id, :integer
  end
end
