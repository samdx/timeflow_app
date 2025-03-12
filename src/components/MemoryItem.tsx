import React from 'react';

interface MemoryItemProps {
  memory: { text: string; date: string };
}

const MemoryItem: React.FC<MemoryItemProps> = ({ memory }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 mb-4 shadow">
      <p className="text-gray-800 dark:text-gray-200">{memory.text}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{memory.date}</p>
    </div>
  );
};

export default MemoryItem;
