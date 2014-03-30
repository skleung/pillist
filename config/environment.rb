# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Pillist::Application.initialize!

ActionMailer::Base.smtp_settings = {
  :user_name => 'pillist-mailer',
  :password => 'p1ll2st!',
  :domain => 'pillist.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}