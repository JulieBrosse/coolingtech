class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.file.attach(contact_params[:file])
    if @contact.save
      NotifierAdmin.with(contact: @contact).notify_new_contact.deliver_now
    	redirect_to root_path, notice: "Votre demande a bien été envoyée"
  	else
  		render :new
  	end
  end

  private

  def contact_params
    params.require(:contact).permit(:fullname, :email, :phone_number, :message, :file)
  end
end
