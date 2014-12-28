module Api
  class UserTypesController < ApplicationController
    def index
      render json: UserType.all, status: 200
    end
  end
end
