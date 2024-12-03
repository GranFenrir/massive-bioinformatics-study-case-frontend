import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/character?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
};

export const getAllCharacters = async () => {
    try {
        const allCharacters = [];
        let page = 1;
        let morePages = true;

        while(morePages){
            const response = await getCharacters(page);
            allCharacters.push(...response.results)
            morePages = !!response.info.next;
            page++;

        }
      return allCharacters;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
  };

  export interface Character { 
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }