class PagesController < ApplicationController
  def energie_renouvelable
  end

  def eau_chaude_sanitaires
  end

  def chauffage
  end

  def climatisation
  end

  def contact
    @contact = Contact.new
  end

  def about
  end
end
