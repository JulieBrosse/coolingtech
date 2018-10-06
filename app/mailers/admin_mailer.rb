class AdminMailer < ActionMailer::Base
  default from: 'juliebrosse31@hotmail.fr'

  def notify_new_contact
    @contact = params[:contact]
    mail(to: 'juliebrosse31@hotmail.fr, samia.dahmouni@escen.fr', subject: 'Vous avez reçu une nouvelle demande de contact')
  end
end
