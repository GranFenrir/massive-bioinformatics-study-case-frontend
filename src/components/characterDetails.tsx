import React from 'react';
import { Character } from '../api/rickAndMortyApi';


interface CharacterDetailsProps {
    character: Character | null;
    onClose: () => void;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character, onClose }) => {
  if (!character) {
    return null; // veya bir loading göstergesi
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 w-96" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
        <img src={character.image} alt={character.name} className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
        <p className="mb-1">Status: {character.status}</p>
        <p className="mb-1">Species: {character.species}</p>
        <p className="mb-1">Gender: {character.gender}</p>
        <p className="mb-1">Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
};


export default CharacterDetails;