import Navbar from "@/component/Navbar";
import JobFilter from "@/component/JobFilter";
import JobDiscovery from "@/component/JobDiscovery";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <JobFilter />
      <JobDiscovery />
      <Footer />
    </main>
  );
}
