import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

export const metadata = {
  title: 'Contact Manish Jha - Get In Touch',
  description: 'Contact Manish Jha, Executive Editor at TV9 Bharatvarsh. Reach out for inquiries, collaborations, or speaking engagements.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactForm />
      <Footer />
    </main>
  )
}
