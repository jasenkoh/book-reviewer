Rails.application.routes.draw do
  root to: 'home#index'
  mount_devise_token_auth_for 'User', at: '/api/auth'
  namespace :api do
    resources :books
    resources :genres
    resources :finished_books
  end
end
