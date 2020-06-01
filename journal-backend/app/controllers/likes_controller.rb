class LikesController < ApplicationController

    def index
        @entries = Entry.all

        render json: @entries, status: 200
    end


    def new
        @likes = Like.new 

    end

    def create 
        @likes = Like.create(like_params)

    end

    def update       
        @likes = Like.find(params[:id])

    end

end

