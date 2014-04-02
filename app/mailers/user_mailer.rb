class UserMailer < ActionMailer::Base
  default from: "info@pillist.com"
  def signup_email(user)
    @user = user
    mail(to: user.email, subject: 'Hello from Pillist!')
  end
end
