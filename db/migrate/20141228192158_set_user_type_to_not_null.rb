class SetUserTypeToNotNull < ActiveRecord::Migration
  def up
    UserType.create!(type: 'Reviewer')
    UserType.create!(type: 'Author')

    User.all.each do |user|
      user.user_type_id = UserType.first.id
      user.save!
    end

    change_column_null :users, :user_type_id, false
  end

  def down
    change_column_null :users, :user_type_id, true
  end
end
