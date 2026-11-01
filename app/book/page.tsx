import type { Metadata } from "next";
import { NightShell } from "../components/NightShell";
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
    <NightShell current="/book">
      <section className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="max-w-[960px] w-full">
          <h1 className="font-display font-extrabold text-[clamp(48px,6vw,76px)] leading-[0.98] tracking-[-0.03em] mb-8">
            Book a Meeting
          </h1>
          <p className="text-xl text-bone-2 mb-16 leading-relaxed max-w-[640px]">
            A clear message beats a meeting. If we meet, it is to decide
            something - so come with the purpose in one line. Times are shown in
            your time zone.
          </p>

          <BookingPicker />
        </div>
      </section>
    </NightShell>
  );
}
