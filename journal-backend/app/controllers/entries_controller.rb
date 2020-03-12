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
        # @entry = Entry.new
        # if @entry.save

        render json: @entry, status: 200
    end

    def update
        @entry = Entry.find(params[:id])
        @entry.update(entry_params)
        # if @entry.update 
        render json: @entry, status: 200
        # else render error
    end

    def destroy
        @entry = Entry.find(params[:id])
        @entry.delete

        render json:{entryId: @entry.id}
    end

    private
        def entry_params
            params.requre(:entry).permit(:body)
        end
end




