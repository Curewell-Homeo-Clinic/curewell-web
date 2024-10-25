import DoctorProfile from "./_components/doctor-profile";
import Footer from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { CallNowFooter } from "./_components/sticky-footer";
import HomeopathicTreatments from "./_components/treatments";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeopathicTreatments />
      <DoctorProfile />
      <Footer />

      <CallNowFooter />
    </main>
  );
}
