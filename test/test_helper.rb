ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  def json(body)
    #symbolize_names: true)
    # {'name' => 'foo'}
    # {:name => 'foo'}
    JSON.parse(body, symbolize_names: true)
  end

  # Add more helper methods to be used by all tests here...
end