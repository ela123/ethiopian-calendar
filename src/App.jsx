import { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import History from './components/History';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import './App.css';
import Learn from './components/Learn';
import Historynew from './components/Historynew';

function App() {
  // Section references
  const homeRef = useRef("/Home");
  const historyRef = useRef("/History");
  const calendarRef = useRef("/Calendar");
  const learnRef = useRef(null);
  const historynewRef = useRef(null);

  return (
    <>
      <Header
        scrollToSection={{
          home: () => homeRef.current?.scrollIntoView({ behavior: 'smooth' }),
          history: () => historyRef.current?.scrollIntoView({ behavior: 'smooth' }),
          calendar: () => calendarRef.current?.scrollIntoView({ behavior: 'smooth' }),
          learn: () => learnRef.current?.scrollIntoView({ behavior: 'smooth' }),
          historynew: () => historynewRef.current?.scrollIntoView({ behavior: 'smooth' }),
          
        }}
      />

      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={historyRef}>
        <History />
      </div>

      <div ref={calendarRef}>
        <Calendar />
      </div>

      <div ref={learnRef}>
  <Learn />
</div>
        <div ref={historynewRef}>
  <Historynew />
</div>


      <Footer />
    </>
  );
}

export default App;
