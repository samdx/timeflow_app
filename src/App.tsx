import React, { useState, useContext } from 'react';
import AddMemoryForm from './components/AddMemoryForm';
import MemoryList from './components/MemoryList';
import { BookOpen } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [memories, setMemories] = useState<{ text: string; date: string }[]>([
    {
      text: 'Started learning a new language today! Feeling excited.',
      date: '2024-01-15',
    },
    {
      text: 'Had a great time hiking with friends. The views were amazing.',
      date: '2024-01-22',
    },
    {
      text: 'Finished reading a fascinating book. Highly recommend it!',
      date: '2024-02-05',
    },
  ]);

  const addMemory = (memory: { text: string; date: string }) => {
    setMemories([...memories, memory]);
  };


  return (
      <ThemeProvider>
          <AppContent memories={memories} addMemory={addMemory} />
      </ThemeProvider>

  );
}

const AppContent: React.FC = ({ memories, addMemory }) => {
    const { theme } = useContext(ThemeContext);

    // Sort memories by date (newest first)
    const sortedMemories = [...memories].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-900' : 'bg-gray-100 text-gray-900'} py-6 flex flex-col justify-center sm:py-12`}>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="flex items-center justify-center mb-6">
                        <BookOpen className={`mr-2 ${theme === "dark" ? 'text-sky-300' : 'text-sky-500'}`} size={30} />
                        <h1 className="text-2xl font-semibold">TimeFlow</h1>
                    </div>
                    <AddMemoryForm onAddMemory={addMemory} />
                    <MemoryList memories={sortedMemories} />
                </div>
            </div>
            <ThemeToggle />
        </div>
    )
}

export default App;
