import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Zumba from './components/Zumba';
import ScheduleLocation from './components/ScheduleLocation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen font-sans selection:bg-red-600/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <Zumba />
        <ScheduleLocation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

