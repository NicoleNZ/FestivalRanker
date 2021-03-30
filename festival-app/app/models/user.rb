class User < ApplicationRecord
    has_secure_password
    has_many :festivals

    validates :name, uniqueness: {message: "user already exists"}
end