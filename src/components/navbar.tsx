"use client";

import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";

const translations: { [key: string]: { [key: string]: string } } = {
    Hindi: {
        home: "मुख्य पृष्ठ",
        helpGuide: "सहायता गाइड",
        steps: "योजनाए",
        documents: "दस्तावेज़",
      },
      English: {
        home: "Home",
        helpGuide: "Help Guide",
        steps: "Steps",
        documents: "Documents",
      },
      Tamil: {
        home: "முகப்பு",
        helpGuide: "உதவி வழிகாட்டி",
        steps: "அடிகள்",
        documents: "ஆவணங்கள்",
      },
      Telugu: {
        home: "ముఖ్య పేజీ",
        helpGuide: "సహాయం మార్గదర్శి",
        steps: "అడుగులు",
        documents: "పత్రాలు",
      },
      Bengali: {
        home: "প্রধান পৃষ্ঠা",
        helpGuide: "সাহায্য নির্দেশিকা",
        steps: "পদক্ষেপ",
        documents: "নথি",
      },
      Gujarati: {
        home: "મુખ્ય પૃષ્ઠ",
        helpGuide: "સહાય માર્ગદર્શિકા",
        steps: "કદમો",
        documents: "દસ્તાવેજો",
      },
      Kannada: {
        home: "ಮುಖಪುಟ",
        helpGuide: "ಸಹಾಯ ಮಾರ್ಗದರ್ಶಿ",
        steps: "ಹಂತಗಳು",
        documents: "ಆವಶ್ಯಕತೆಗಳು",
      },
      Malayalam: {
        home: "മുഖ്യ പേജ്",
        helpGuide: "സഹായ മാർഗ്ഗരേഖ",
        steps: "നടപടികൾ",
        documents: "പ്രമാണങ്ങൾ",
      },
      Marathi: {
        home: "मुख्य पृष्ठ",
        helpGuide: "सहाय्य मार्गदर्शक",
        steps: "पायऱ्या",
        documents: "कागदपत्रे",
      },
      Punjabi: {
        home: "ਮੁੱਖ ਸਫ਼ਾ",
        helpGuide: "ਸਹਾਇਤਾ ਗਾਈਡ",
        steps: "ਕਦਮ",
        documents: "ਦਸਤਾਵੇਜ਼",
      },
      Odia: {
        home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
        helpGuide: "ସାହାଯ୍ୟ ଗାଇଡ୍",
        steps: "ପଦକ୍ଷେପ",
        documents: "ଦଳିଲ",
      },
      Urdu: {
        home: "مرکزی صفحہ",
        helpGuide: "رہنما",
        steps: "اقدامات",
        documents: "دستاویزات",
      },
      Assamese: {
        home: "মুখ্য পৃষ্ঠা",
        helpGuide: "সহায়ক গাইড",
        steps: "ধাপ",
        documents: "নথি-পত্ৰ",
      },
      Sanskrit: {
        home: "मुख्य पृष्ठ",
        helpGuide: "सहायता गाइड",
        steps: "चरण",
        documents: "दस्तावेज़",
      },
    };

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md absoulte top-0">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="w-12 h-12 mr-4 rounded-full" />
        <h1 className="text-xl font-bold text-gray-800">योजना साथी</h1>
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/">
          <p className="text-gray-800 hover:text-blue-500">
            {translations[selectedLanguage].home}
          </p>
        </Link>
        <Link href="/help">
          <p className="text-gray-800 hover:text-blue-500">
            {translations[selectedLanguage].helpGuide}
          </p>
        </Link>
        <Link href="/scheme">
          <p className="text-gray-800 hover:text-blue-500">
            {translations[selectedLanguage].steps}
          </p>
        </Link>
        <Link href="/documents">
          <p className="text-gray-800 hover:text-blue-500">
            {translations[selectedLanguage].documents}
          </p>
        </Link>
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="text-gray-800 bg-white border border-gray-300 rounded px-2 py-1"
        >
          <option value="Hindi">हिंदी</option>
          <option value="English">English</option>
          <option value="Tamil">தமிழ்</option>
          <option value="Telugu">తెలుగు</option>
          <option value="Bengali">বাংলা</option>
          <option value="Gujarati">ગુજરાતી</option>
          <option value="Kannada">ಕನ್ನಡ</option>
          <option value="Malayalam">മലയാളം</option>
          <option value="Marathi">मराठी</option>
          <option value="Punjabi">ਪੰਜਾਬੀ</option>
          <option value="Odia">ଓଡ଼ିଆ</option>
          <option value="Urdu">اردو</option>
          <option value="Assamese">অসমীয়া</option>
          <option value="Sanskrit">संस्कृत</option>
        </select>
      </div>
    </nav>
  );
}
