import React, { useState } from 'react';

interface AddMemoryFormProps {
  onAddMemory: (memory: { text: string; date: string }) => void;
}

const AddMemoryForm: React.FC<AddMemoryFormProps> = ({ onAddMemory }) => {
  const [memoryText, setMemoryText] = useState('');
  const [memoryDate, setMemoryDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (memoryText.trim() && memoryDate) {
      onAddMemory({ text: memoryText, date: memoryDate });
      setMemoryText(''); // Clear input after submission
      setMemoryDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="memoryDate" className="sr-only">
          Date
        </label>
        <input
          type="date"
          id="memoryDate"
          value={memoryDate}
          onChange={(e) => setMemoryDate(e.target.value)}
          className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label htmlFor="memoryText" className="sr-only">
          Memory
        </label>
        <textarea
          id="memoryText"
          value={memoryText}
          onChange={(e) => setMemoryText(e.target.value)}
          placeholder="Write your memory here..."
          className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 dark:bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-blue-400"
      >
        Add Memory
      </button>
    </form>
  );
};

export default AddMemoryForm;
