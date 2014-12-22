class Book < ActiveRecord::Base
  has_many :book_genres
  has_many :genres, :through => :book_genres

  accepts_nested_attributes_for  :genres

  scope :finished, -> { where('finished_at IS NOT NULL') }

  validates :title, presence: true
end
