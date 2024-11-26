import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <div className="border-gray-700 max-w-md mx-auto">
        <div>
          <div className="flex items-center justify-center">
            <Mail className="mr-2" /> Email
          </div>
        </div>
        <div className="text-center">
          <p className="mb-4">hardikkubavat0110@gmail.com</p>
          <button asChild>
            <a href="mailto:hardikkubavat0110@gmail.com" className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>Send Email</a>
          </button>
        </div>
      </div>
    </section>
  )
}

