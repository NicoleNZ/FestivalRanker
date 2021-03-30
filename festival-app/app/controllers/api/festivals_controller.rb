class Api::FestivalsController < ApplicationController
    def index
        render json: Festival.all
    end

    def create
        festival = Festival.create(
            festival_name: params[:festival_name],
            location: params[:location],
            duration: params[:duration],
            description: params[:description],
            link: params[:link]
        )
        festival_valid = festival.valid?
        p festival
        p festival_valid
        if festival_valid
            render json: {message: 'Successfully created new festival record!'}, status: 200
        else
            render json: {message: 'Sorry - unable to create new festival record'}, status: 400
        end
    end
    
    def show
        p params[:id]
        render json: Festival.find(params[:id])
    end
    
    def update
        festival = Festival.find(params[:id])
        festival.update(
            festival_name: params[:festival_name],
            location: params[:location],
            duration: params[:duration],
            description: params[:description],
            link: params[:link]
        )
        render json: {type: 'Successfully updated festival!'}
    end
    
    def destroy
        Festival.destroy(params[:id])
        render json: {message: 'This festival has been deleted'}
    end
end