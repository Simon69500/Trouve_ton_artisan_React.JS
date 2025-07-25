const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function fetchFromServer(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
        },
        options,
      });

              if (!response.ok) {
          throw new Error(`Erreur http : ${response.status}`);
          
        }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur fetch :", error.message);
      throw error;
    }
  }