Rails.application.routes.draw do
  get 'finished_books/index'
    resources :books
    resources :genres
    resources :finished_books
end
