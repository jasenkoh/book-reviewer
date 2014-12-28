class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  belongs_to :user_type

  validates :email, uniqueness: true
end
