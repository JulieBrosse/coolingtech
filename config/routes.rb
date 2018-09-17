Rails.application.routes.draw do
  get 'pages/energie_renouvelable'
  get 'pages/eau_chaude_sanitaires'
  get 'pages/chauffage'
  get 'pages/climatisation'
  get 'pages/contact'
  get 'pages/about'
  root to: 'pages#about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
