"use client";
import Link from "next/link";
// import ProductsNotFound from "@/components/NoProductsFound/page";
export default function NotFound() {

  return (
        <div>
                404 - Page Not Found
                <Link href="/"> 
                Go Home
                </Link>
        </div>
//     <ProductsNotFound category="Your Search"/>
  );
}