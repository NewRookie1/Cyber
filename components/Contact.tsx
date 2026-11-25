import Form from './Form'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-12">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Get in touch</h2>
        <Form endpoint="/api/contact" submitLabel="Send message" successMessage="Thanks! We'll get back to you soon."
          fields={[{ name: 'name', label: 'Name' }, { name: 'email', label: 'Email', type: 'email' }, { name: 'body', label: 'Message', textarea: true }]} />
      </div>
    </section>
  )
}
