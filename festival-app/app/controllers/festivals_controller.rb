class FestivalsController < ApplicationController
    def index
        render json: Festival.all
    end
end