class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  belongs_to :user_type

  validates :email, uniqueness: true
  validates :user_type, presence: true
end
