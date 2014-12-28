class UserType < ActiveRecord::Base
  validates :type, uniqueness: true, presence: true
  self.inheritance_column = 'type_inherit'
end
