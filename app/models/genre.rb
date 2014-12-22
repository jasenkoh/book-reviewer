class Genre < ActiveRecord::Base
  has_many :book_genre
  has_many :books, :through => :book_genre
end
