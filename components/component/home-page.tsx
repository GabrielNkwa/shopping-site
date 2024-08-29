
import Link from "next/link"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="sr-only">Acme Fashion</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="600"
              height="600"
              alt="Hero Product"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Elevate Your Style</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the latest fashion trends and find your perfect look with our curated collection.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our curated selection of the latest fashion essentials.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-start rounded-lg bg-background p-4 shadow-sm transition-all hover:scale-105">
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Product 1"
                  className="mb-4 aspect-square w-full overflow-hidden rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Casual T-Shirt</h3>
                <p className="text-muted-foreground">$29.99</p>
              </div>
              <div className="flex flex-col items-start rounded-lg bg-background p-4 shadow-sm transition-all hover:scale-105">
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Product 2"
                  className="mb-4 aspect-square w-full overflow-hidden rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Denim Jeans</h3>
                <p className="text-muted-foreground">$59.99</p>
              </div>
              <div className="flex flex-col items-start rounded-lg bg-background p-4 shadow-sm transition-all hover:scale-105">
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Product 3"
                  className="mb-4 aspect-square w-full overflow-hidden rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Floral Dress</h3>
                <p className="text-muted-foreground">$49.99</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sustainable Fashion</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Acme Fashion, we believe in creating high-quality, sustainable clothing that is kind to the planet.
                Our eco-friendly fabrics and ethical production practices ensure you can look and feel your best while
                making a positive impact.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Sustainable Fashion"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Fashion. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
