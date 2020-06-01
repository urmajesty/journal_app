class EntriesController < ApplicationController
    def index
        @entries = Entry.all

        render json: @entries, status: 200
    end
    
    def show
        @entry = Entry.find(params[:id])

        render json: @entry, status: 200
    end

    def create
        @entry = Entry.create(entry_params)
        # @user = User.find_by(user: params[:user])
        # @entry = Entry.new
        # if @entry.save

        render json: @entry, status: 200
    end

    def update
        @entry = Entry.find_by(params[:id])
        @entry.likes << Like.new
        render json: {likes_count: @entry.likes.length}
      
    end


    def destroy
        @entry = Entry.find(params[:id])
        @entry.delete
    end

    private
        def entry_params
            params.require(:entry).permit(:body, :likes)
        end
end




