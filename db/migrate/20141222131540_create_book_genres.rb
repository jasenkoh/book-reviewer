class CreateBookGenres < ActiveRecord::Migration
  def change
    create_table :book_genres do |t|
      t.belongs_to :genre, index: true
      t.belongs_to :book, index: true
    end
    add_foreign_key :book_genres, :books, on_delete: :cascade
    add_foreign_key :book_genres, :genres, on_delete: :cascade
  end
end
