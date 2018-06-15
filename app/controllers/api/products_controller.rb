class Api::ProductsController < Api::ApiController
    before_action :set_product, only: [:show, :update, :destroy]
  
    def index
      render json: Product.all
    end
  
    def show
      render json: @product
    end
  
    def create
      product = Product.new(product_params)
  
      if product.save
        render json: product
      else
        render_error(product)
      end
    end
  
    def update
      if @product.update(product_params)
        render json: @product
      else
        render_error(@product)
      end
    end
  
    def destroy
      @product.destroy
    end
  
    private
      def set_product
        @product = Product.find(params[:id])
      end
  
      def product_params
        params.require(:product).permit(:name, :description, :price, :department)
      end
  
  
    
  
  
  
  
  
  end
  