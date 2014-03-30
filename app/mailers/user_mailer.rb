class UserMailer < ActionMailer::Base
  default from: "sherman@pillist.com"
  def signup_email(user)
    @user = user
    mail(to: user.email, subject: 'Hello from Pillist!')
  end
end
