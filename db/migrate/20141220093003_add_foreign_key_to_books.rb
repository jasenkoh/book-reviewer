class AddForeignKeyToBooks < ActiveRecord::Migration
  def change
    add_foreign_key :books, :genres, on_delete: :cascade
  end
end
