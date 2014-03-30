class UserMailer < ActionMailer::Base
  default from: "sherman@pillist.com"
  def signup_email(user)
    @user = user
    mail(to: "sherman@pillist.com", subject: 'Pillist - new email signup')
  end
end
