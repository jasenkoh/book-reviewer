require 'test_helper'

class DeleteBookTest < ActionDispatch::IntegrationTest
  setup do
    @book = Book.create!(title: 'Pragmatic programmer', rating: 5)
  end

 test 'delete existing book' do
  delete "/books/#{@book.id}"

  assert_equal 204, response.status
 end

 test 'does not delete missing book' do
  delete '/books/5555'

  assert_equal 404, response.status
 end
end
