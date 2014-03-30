class User < ActiveRecord::Base
	validates_format_of :email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	validates_presence_of :email
end
