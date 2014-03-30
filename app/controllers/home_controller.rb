class HomeController < ApplicationController
	def index
		@user = User.new
	end
	def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        UserMailer.signup_email(@user).deliver
        flash[:notice] = 'Signup Sucessful!'
        format.html { redirect_to(action: 'index' ) }
        format.json { render json: @user, status: :created, location: @user }
      else
        flash[:error] = 'Oops, someting went wrong!'
        format.json { render json: @user.errors, status: :unprocessable_entity }
        format.html { render action: 'index'}
      end
    end
  end
  def user_params
    params.require(:user).permit(:email)
  end
end

