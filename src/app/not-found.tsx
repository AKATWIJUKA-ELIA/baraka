"use client";
import Link from "next/link"
import { Search, ArrowLeft, Frown, House,Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {

  return (
        <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="h-48 w-48 mb-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Frown className="h-24 w-24 text-gray-300 " strokeWidth={2} />
          </div>
         
        </div>

        <h1 className="text-3xl text-dark font-bold mb-4">No Matches Found for your search</h1>
        <p className="text-gray-600 max-w-lg mb-8">
          We couldn&apos;t find any  matches for your search criteria. Try adjusting your filters or search terms.
        </p>

        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/rooms">
              <House className="mr-2 h-4 w-4" />
              Browse rooms
            </Link>
          </Button>
        </div>
      </div>


      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Need Help Finding Something?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Filter className="h-8 w-8 mb-4 text-gray-500" />
              <h3 className="font-medium mb-2">Adjust Your Filters</h3>
              <p className="text-sm text-gray-500">Try removing some filters to see more products</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Search className="h-8 w-8 mb-4 text-gray-500" />
              <h3 className="font-medium mb-2">Check Your Spelling</h3>
              <p className="text-sm text-gray-500">Make sure all words are spelled correctly</p>
            </CardContent>
          </Card>
        </div>
      </div>
     
    </div>
    
  );
}