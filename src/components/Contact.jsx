import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      }).then(() => {
        toast.success("Your message was successfully sent!")
        form.current.reset();
      },(error) => {
        toast.error('FAILED...', error.text)
      }
    );
  };
  
  return ( 
    <section id="contact" className="w-full px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-[32px] md:text-[48px] text-center">Contact Me</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Have a project or just want to say hi? Let’s connect the dots together!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Name</legend>
          <input
            type="text"
            name="user_name"
            placeholder="Type your name"
            className="input input-bordered w-full"
            required
          />
        </fieldset>
       
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Subject</legend>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input input-bordered w-full"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email Address</legend>
          <input
            type="email"
            name="user_email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Message</legend>
          <textarea
            name="message"
            placeholder="Type your message here..."
            className="textarea textarea-bordered w-full min-h-[120px]"
            required
          />
        </fieldset>

        <div className="text-center pt-2">
          <button type="submit" className="btn bg-orange-400 hover:bg-orange-500 text-white px-8">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
 
export default Contact;