class AdminMailer < ActionMailer::Base
  default from: 'coolingtech31@gmail.com'

  def notify_new_contact
    @contact = params[:contact]
    mail(to: 'juliebrosse31@gmail.com, coolingtech31@gmail.com', subject: 'Vous avez reçu une nouvelle demande de contact')
  end
end
