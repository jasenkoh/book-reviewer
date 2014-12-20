Rails.application.routes.draw do
  root to: 'home#index'
  get '*path' => 'home#index'
  get 'finished_books/index'

  namespace :api do
    resources :books
    resources :genres
    resources :finished_books
  end
end
