import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Your Bio, Your Storefront</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Turn your social bio into a sleek, shoppable hub with Lnkshop.xyz. Connect your audience directly to your
            products, services, and content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link href="/signup">Join the Beta</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-teal-600"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Layouts</h3>
                  <p className="text-muted-foreground">
                    Choose list, grid, or carousel layouts to showcase your products in the most engaging way possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-teal-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Previews</h3>
                  <p className="text-muted-foreground">
                    Auto-generate rich previews of your products with images, titles, and descriptions pulled directly
                    from your links.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-teal-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Click Analytics</h3>
                  <p className="text-muted-foreground">
                    See which links are driving traffic and optimize your storefront based on real user engagement data.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-600 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Smarter?</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Join our private beta and be the first to transform your social bio into a powerful sales channel.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-muted-foreground text-center">
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Pricing
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          <span>© 2025 Lnkshop.xyz</span>
        </div>
      </footer>
    </main>
  )
}

