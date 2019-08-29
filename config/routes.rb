Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { formats: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:index, :show, :create]
    resources :searches, only: [:index]
    resources :playlistsongs, only: [:create, :destroy]

  end

  root to: "static_pages#root"
end
