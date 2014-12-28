class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User

  validates :email, uniqueness: true
end
