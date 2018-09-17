require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get energie_renouvelable" do
    get pages_energie_renouvelable_url
    assert_response :success
  end

  test "should get eau_chaude_sanitaires" do
    get pages_eau_chaude_sanitaires_url
    assert_response :success
  end

  test "should get chauffage" do
    get pages_chauffage_url
    assert_response :success
  end

  test "should get climatisation" do
    get pages_climatisation_url
    assert_response :success
  end

  test "should get contact" do
    get pages_contact_url
    assert_response :success
  end

end
