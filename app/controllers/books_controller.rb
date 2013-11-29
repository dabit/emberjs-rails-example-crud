class BooksController < ApplicationController
  def index
    render json: Book.all
  end

  def show
    render json: Book.find(params[:id])
  end

  def create
    render json: Book.create(book)
  end

  def update
    render json: Book.find(params[:id]).tap { |b| b.update_attributes(book) }
  end

  def destroy
    render json: Book.find(params[:id]).destroy
  end

  protected
  def book
    params[:book].permit(:title, :description)
  end
end
