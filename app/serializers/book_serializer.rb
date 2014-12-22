class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :author, :review, :amazon_id

  has_many :genres
end
