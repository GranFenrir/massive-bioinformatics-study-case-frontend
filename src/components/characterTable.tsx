import React from 'react';
import { Character } from '../api/rickAndMortyApi';

interface CharacterTableProps {
    characters: Character[];
    onCharacterClick: (character: Character) => void;

}


const CharacterTable: React.FC<CharacterTableProps> = ({ characters, onCharacterClick }) => {

    return (

        <table className="w-full table-auto">
            <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Species</th>
            </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
            {characters.map((character) => (
                <tr key={character.id} onClick={() => onCharacterClick(character)}
                    className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                            <span className="font-medium">{character.name}</span>
                        </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                        <span className="font-medium">{character.status}</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                        <span className="font-medium">{character.species}</span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}


export default CharacterTable