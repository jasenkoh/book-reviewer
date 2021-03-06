require 'test_helper'

class ListUserTypesTest < ActionDispatch::IntegrationTest
  test "list user types" do
    get '/api/user_types'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    userTypes = json(response.body)
    assert_equal 2, userTypes.size
  end
end
