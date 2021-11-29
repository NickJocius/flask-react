import React, {useState} from 'react';
import Form from './components/Form';
import Longest from './components/Longest';

function App() {
  const [longest, setLongest] = useState([]);
  return (
    <main className={`min-h-screen bg-purple-400 flex flex-col md:flex-row justify-evenly items-center`}>
      <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-8 z-0 transform rotate-45 hidden md:block">
      </div>
      <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-6 right-6 transform rotate-12 hidden lg:block">
      </div>
      <Form setLongest={setLongest}/>
      {longest.length > 0 && (
        <Longest longest={longest}/>
      )}
    </main>
  );
}

export default App;
