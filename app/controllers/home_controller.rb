class HomeController < ApplicationController
	def index
		@user = User.new
	end
	def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        UserMailer.signup_email(@user).deliver
        format.html { redirect_to(@user, notice: 'Email saved') }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
        format.html { render controller: 'home', action: 'index' }
      end
    end
  end
  def user_params
    params.require(:user).permit(:email)
  end
end

