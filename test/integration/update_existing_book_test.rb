require 'test_helper'

class UpdateExistingBookTest < ActionDispatch::IntegrationTest
  setup do
    @genre = Genre.create!(name: 'SF')
    @genre1 = Genre.create!(name: 'Adventure')
    @book = Book.create!(title: 'In the Garden of Beasts', rating: 5, genres: [@genre])
  end

  test 'update existing book' do
    put "/api/books/#{@book.id}", {
      title: 'The Devil in the White City',
      rating: 5,
      author: 'Dave',
      review: 'Excellent one',
      amazon_id: '123123'
      }.to_json,
      { 'Accept' => 'application/json',
        'Content-Type' => 'application/json' }

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    book = json(response.body)

    assert_equal 'The Devil in the White City', book[:title]
    assert_equal @book.id, book[:id]

    genre = book[:genres][0]
    assert_equal @genre.id, genre[:id]
    assert_equal @genre.name, genre[:name]
  end

  test 'add genres to existing book' do
    put "/api/books/#{@book.id}", {
      title: 'The Devil in the White City',
      rating: 5,
      author: 'Dave',
      review: 'Excellent one',
      amazon_id: '123123',
      genre_ids: [@genre.id, @genre1.id]
      }.to_json,
      { 'Accept' => 'application/json',
        'Content-Type' => 'application/json' }

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    book = json(response.body)
    assert_equal 'The Devil in the White City', book[:title]
    assert_equal @book.id, book[:id]
    assert_equal 2, book[:genres].size

    genre = book[:genres][1]
    assert_equal @genre1.id, genre[:id]
    assert_equal @genre1.name, genre[:name]
  end
end
