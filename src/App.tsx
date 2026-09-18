import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Zumba } from './components/Zumba';
import { Schedule } from './components/Schedule';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-200 font-sans selection:bg-red-600/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <Zumba />
        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <Schedule />
              <Location />
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
