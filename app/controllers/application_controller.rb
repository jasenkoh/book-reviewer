class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters_for_account_update, if: :devise_controller?, only: :update
  before_action :configure_permitted_parameters_for_sign_up, if: :devise_controller?, only: :create

  def default_serializer_options
    { root: false }
  end

  protected

  def configure_permitted_parameters_for_account_update
    devise_parameter_sanitizer.for(:account_update) << [:nickname, :name, :user_type_id]
  end

  def configure_permitted_parameters_for_sign_up
    devise_parameter_sanitizer.for(:sign_up) << [:user_type_id]
  end
end
