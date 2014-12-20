require 'test_helper'

class CreatingBooksTest < ActionDispatch::IntegrationTest
  setup do
    @genre = Genre.create!(name: 'SF')
  end

  test 'create new book with valid data' do
    post '/api/books', { book: {
      title: 'Pragmatic programmer',
      rating: 5,
      author: 'Dave',
      genre_id: @genre.id,
      review: 'Excellent one',
      amazon_id: '123123'
      }}.to_json,
      { 'Accept' => 'application/json',
        'Content-Type' => 'application/json' }

    assert_equal 201, response.status
    assert_equal Mime::JSON, response.content_type
    book = json(response.body)
    assert_equal api_book_url(book[:id]), response.location

    assert_equal 'Pragmatic programmer', book[:title]
    assert_equal 5, book[:rating].to_i
    assert_equal 'Dave', book[:author]
    assert_equal @genre.id, book[:genre_id]
    assert_equal 'Excellent one', book[:review]
    assert_equal '123123', book[:amazon_id]
  end


  test 'does not create new book with invalid data' do
    post '/api/books', { book: {
      title: nil,
      rating: 5
      }}.to_json,
      { 'Accept' => 'application/json',
        'Content-Type' => 'application/json' }
    assert_equal 422, response.status
  end
end
