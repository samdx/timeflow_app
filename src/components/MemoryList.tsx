import React from 'react';
import MemoryItem from './MemoryItem';

interface MemoryListProps {
  memories: { text: string; date: string }[];
}

const MemoryList: React.FC<MemoryListProps> = ({ memories }) => {
  return (
    <div className="mt-6">
      {memories.map((memory, index) => (
        <MemoryItem key={index} memory={memory} />
      ))}
    </div>
  );
};

export default MemoryList;
