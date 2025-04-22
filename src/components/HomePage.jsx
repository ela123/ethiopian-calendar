import React, { useRef } from 'react';
import Header from './Header';
import Home from './Home';
import History from './History';
import Calendar from './Calendar';
import Footer from './Footer';
import Learn from './Learn';
import Historynew from './Historynew';

function HomePage() {
  const homeRef = useRef(null);
  const historyRef = useRef(null);
  const calendarRef = useRef(null);
  const learnRef = useRef(null);
  const historynewRef = useRef(null);

  const scrollToSection = {
    home: () => homeRef.current?.scrollIntoView({ behavior: 'smooth' }),
    history: () => historyRef.current?.scrollIntoView({ behavior: 'smooth' }),
    calendar: () => calendarRef.current?.scrollIntoView({ behavior: 'smooth' }),
    historynew: () => historynewRef.current?.scrollIntoView({ behavior: 'smooth' }),
    learn: () => learnRef.current?.scrollIntoView({ behavior: 'smooth' }),
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      
      <main className="flex flex-col">
        <section ref={homeRef}><Home /></section>
        <section ref={historyRef}><History /></section>
        <section ref={calendarRef}><Calendar /></section>
        <section ref={historynewRef}><Historynew /></section>
        <section ref={learnRef}><Learn /></section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
