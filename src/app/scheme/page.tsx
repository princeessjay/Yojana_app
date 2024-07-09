"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SchemeCard from "./schemeCard";
import { schemes } from "./data";
import Link from "next/link";

export default function SchemePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSchemes, setFilteredSchemes] = useState(schemes);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        const results = schemes.filter((scheme) =>
          scheme.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSchemes(results);
      } else {
        setFilteredSchemes(schemes);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-orange-200">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-row items-center justify-center w-full p-4">
          <input
            type="text"
            placeholder="योजना खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 w-1/4 p-2 border border-gray-300 rounded "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSchemes.map((scheme, index) => (
            <Link href={`/scheme/${scheme.id}`} key={index}>
              <SchemeCard key={index} title={scheme.title} description={scheme.description} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
