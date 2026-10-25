import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { BookingPicker } from "./BookingPicker";

const description =
  "Book a meeting with Sharon Shineberg: a 20-minute intro, a 45-minute working session, or a Reef TRH diagnosis scoping call.";

export const metadata: Metadata = {
  title: "Book a Meeting | Sharon Shineberg",
  description,
  openGraph: {
    title: "Book a Meeting | Sharon Shineberg",
    description,
    url: "https://shineberg.com/book",
  },
};

export default function Book() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      <Nav />

      <section className="px-6 md:px-8 py-24 flex justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            Book a Meeting
          </h1>
          <p className="text-xl text-body text-center mb-16 leading-relaxed max-w-2xl mx-auto">
            A clear message beats a meeting. If we meet, it is to decide
            something - so come with the purpose in one line. Times are shown in
            your time zone.
          </p>

          <BookingPicker />
        </div>
      </section>

      <Footer />
    </div>
  );
}
