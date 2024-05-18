// API_TypeCard.jsx

const fetchTypesOnFrontPage = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      const types = await Promise.all(data.results.map(async (type) => {
          const typeResponse = await fetch(type.url);
          const typeData = await typeResponse.json();
          return {
            id: typeData.id,
            name: typeData.name,
          };
        })
      );
      return types;
    } catch (error) {
      console.error("Error fetching Pokemon types:", error);
      throw error;
    }
  };
  
  export default fetchTypesOnFrontPage;