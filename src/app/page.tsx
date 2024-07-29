import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center gap-2">
      <h1>HealthPlaning</h1>
      <Link href="/auth" className="p-3 rounded-md bg-primary text-secondary">
        Login
      </Link>
      <Link href="/app" className="p-3 rounded-md bg-primary text-secondary">
        Aplicação
      </Link>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="bg-primary text-primary-foreground py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Health Scheduler</h1>
              <p className="text-sm">Streamline your healthcare practice</p>
            </div>
            <nav className="hidden md:flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Features
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Testimonials
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <section id="features" className="py-12 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
                  <p className="text-muted-foreground mb-8">
                    Health Scheduler offers a comprehensive set of features to
                    streamline your healthcare practice.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Appointment Scheduling
                      </h3>
                      <p className="text-muted-foreground">
                        Easily manage your patient appointments with our
                        intuitive scheduling system.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Patient Management
                      </h3>
                      <p className="text-muted-foreground">
                        Keep track of your patients' information and medical
                        history in one place.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Reporting and Analytics
                      </h3>
                      <p className="text-muted-foreground">
                        Generate detailed reports and analytics to optimize your
                        practice\'s performance.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Secure Data Storage
                      </h3>
                      <p className="text-muted-foreground">
                        Keep your patients' data safe and secure with our
                        state-of-the-art data storage solution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="550"
                    alt="Features"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="bg-muted py-12 md:py-24">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-background rounded-lg p-6 shadow-md">
                  <blockquote className="mb-4">
                    "Health Scheduler has been a game-changer for our
                    practice.\n The appointment scheduling and patient
                    management features\n have saved us so much time and
                    effort."
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">Dr. Jane Doe</p>
                      <p className="text-muted-foreground">
                        Family Medicine Clinic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-md">
                  <blockquote className="mb-4">
                    "I highly recommend Health Scheduler to any healthcare\n
                    provider looking to streamline their practice. The
                    reporting\n and analytics features have been invaluable for
                    us."
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">Dr. John Bauer</p>
                      <p className="text-muted-foreground">Pediatric Clinic</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-md">
                  <blockquote className="mb-4">
                    "I've been using Health Scheduler for over a year now, and\n
                    it's been a game-changer for my practice. The customer\n
                    support team is also incredibly responsive and helpful."
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">Dr. Sarah Miller</p>
                      <p className="text-muted-foreground">
                        Dermatology Clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-12 md:py-24">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Get in Touch
              </h2>
              <div className="max-w-md mx-auto">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted text-muted-foreground py-6">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <p className="text-sm">&copy; 2024 Health Scheduler</p>
            <nav className="hidden md:flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Terms of Service
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}
