require 'test_helper'

class GetBookByIdTest < ActionDispatch::IntegrationTest
  setup do
    @book = Book.create!(title: 'Pragmatic programmer', rating: 5)
  end

  test 'get book by id' do
    get "/api/books/#{@book.id}"

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    book = json(response.body)
    assert_equal 'Pragmatic programmer', book[:title]
  end

  test 'get book with bad id' do
    get '/api/books/555'

    assert_equal 404, response.status
  end
end
