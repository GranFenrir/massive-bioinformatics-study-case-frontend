import { useEffect, useState } from "react";
import { getAllCharacters, Character } from "./api/rickAndMortyApi"; 
import Filters from "./components/Filters";
import CharacterTable from "./components/characterTable";
import CharacterDetails from "./components/characterDetails";
import Pagination from "./components/pagination";

function App() {
  // inherit edilecek typelar (character array olarak cekilecek)
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 20;


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const allCharacters = await getAllCharacters();
        setCharacters(allCharacters)
        setFilteredCharacters(allCharacters);
      } catch (error) {
        setError("Error fetching characters.");
        console.error(error);

      } finally {
        setIsLoading(false);
      }


    }
    fetchCharacters();


  }, [])

  useEffect(() => {
    const filtered = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        character.status.toLowerCase().includes(statusFilter.toLowerCase()) &&
        character.species.toLowerCase().includes(speciesFilter.toLowerCase())
      );
    });
    setFilteredCharacters(filtered);
    setCurrentPage(0); 
  }, [nameFilter, statusFilter, speciesFilter, characters]);


  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    console.log(character);
  };

  const handleCloseDetails = () => {
    setSelectedCharacter(null);
  };
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    console.log(selectedItem.selected);
};



  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredCharacters.slice(offset, offset + itemsPerPage);  const pageCount = Math.ceil(filteredCharacters.length / itemsPerPage);

  




  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Rick and Morty Characters</h1>
      {/* get set ayarları */}
      <Filters
        nameFilter={nameFilter}
        statusFilter={statusFilter}
        speciesFilter={speciesFilter}
        onNameFilterChange={setNameFilter}
        onStatusFilterChange={setStatusFilter}
        onSpeciesFilterChange={setSpeciesFilter}
      /> 
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!isLoading && !error && filteredCharacters.length === 0 && (
        <p className="text-center">No characters found.</p>
      )}


      {!isLoading && !error && filteredCharacters.length > 0 && (
        <>

          <CharacterTable characters={currentPageData} onCharacterClick={handleCharacterClick} />

          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </>


      )}

      <CharacterDetails character={selectedCharacter} onClose={handleCloseDetails} />

    </div>
  )
}

export default App;