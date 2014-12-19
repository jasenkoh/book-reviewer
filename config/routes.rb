Rails.application.routes.draw do
  get 'finished_books/index'

    resources :books
    resources :finished_books
end
