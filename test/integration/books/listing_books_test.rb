require 'test_helper'

class ListingBooksTest < ActionDispatch::IntegrationTest
  setup do
    @scifi = Genre.create!(name: 'SF')

    @book = Book.create!(title: 'Star trek', rating: 5, genres: [@scifi])
    @book2 = Book.create!(title: "Ender's Game", rating: 3, genres: [@scifi])
  end

  test 'listing books' do
    get '/api/books'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    books = json(response.body)
    assert_equal Book.count, books.size

    # book = Book.find(books.first[:id])
    # assert_equal @scifi.id, book.genre.id
  end

  test 'lists top rated books' do
    get '/api/books?rating=5'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    assert_equal 1, json(response.body).size
  end
end
