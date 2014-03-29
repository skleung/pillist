class UserMailer < ActionMailer::Base
  default from: "sherman@pillist.com"
  def signup_email(user)
    @user = user
    @type = user.type
    mail(to: "sherman@pillist.com", subject: 'Pillist Signup')
  end
end
