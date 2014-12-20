class BooksController < ApplicationController
  def index
      books = Book.all
      if rating = params[:rating]
        books = books.where(rating: rating)
      end
      render json: books, status: 200
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: book, status: 201, location: book
    else
      render json: book.errors, status: 422
    end
  end

  def destroy
    book = Book.find_by_id(params[:id])
    if book
      book.destroy!
      render nothing: true, status: 204
    else
      render nothing: true, status: 404
    end
  end

  def book_params
    #implement strong params in separate method
    params.require(:book).permit([:title, :rating])
  end
end
