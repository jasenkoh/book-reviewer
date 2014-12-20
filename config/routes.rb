Rails.application.routes.draw do
  get 'finished_books/index'

  namespace :api do
    resources :books
    resources :genres
    resources :finished_books
  end
end
