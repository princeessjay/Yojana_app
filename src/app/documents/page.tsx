"use client";

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const DocumentPage = () => {
  const [documents, setDocuments] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setDocuments([...documents, file.name]);
      setFile(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-200">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">अपलोड किए गए दस्तावेज़</h1>
        <ul className="list-disc pl-6 mb-8">
          {documents.map((doc, index) => (
            <li key={index} className="mb-2">{doc}</li>
          ))}
        </ul>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">नए दस्तावेज़ अपलोड करें</h2>
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            अपलोड करें
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentPage;
