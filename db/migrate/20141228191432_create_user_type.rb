class CreateUserType < ActiveRecord::Migration
  def change
    create_table :user_types do |t|
      t.string :type
      t.text :description
    end
    add_foreign_key :users, :user_types
  end
end
