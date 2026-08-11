import Link from "next/link";
import { ArrowLeft, BedDouble, Frown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="site-container py-24 md:py-32">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-bmist">
          <Frown className="size-12 text-bblue" strokeWidth={2} />
        </div>

        <h1 className="display-heading text-4xl sm:text-5xl">Page Not Found</h1>
        <p className="section-copy mt-4 max-w-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
          been moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/rooms">
              <BedDouble className="size-4" />
              Browse Rooms
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 border-t border-bline pt-10">
        <h2 className="mb-6 text-center text-xl font-black text-bnavy">
          Looking for something else?
        </h2>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <Card className="hotel-card-hover">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <BedDouble className="mb-4 size-8 text-bblue" />
              <h3 className="mb-2 font-black text-bnavy">View Our Rooms</h3>
              <p className="text-sm text-bink/70">
                Explore our range of comfortable rooms and rates.
              </p>
              <Link href="/rooms" className="mt-4 text-sm font-bold text-bred">
                See rooms
              </Link>
            </CardContent>
          </Card>

          <Card className="hotel-card-hover">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Phone className="mb-4 size-8 text-bblue" />
              <h3 className="mb-2 font-black text-bnavy">Get in Touch</h3>
              <p className="text-sm text-bink/70">
                Have a question? Our team is here to help.
              </p>
              <Link href="/contact" className="mt-4 text-sm font-bold text-bred">
                Contact us
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
