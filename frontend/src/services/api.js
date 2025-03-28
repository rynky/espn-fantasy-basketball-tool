import API_KEY from './keys'

const BASE_URL = "https://api.balldontlie.io/v1";

export const searchPlayers = async (firstName, lastName) => {
  const response = await fetch(
    `${BASE_URL}/players?first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(lastName)}`
  );
  const data = await response.json();
  return data.results;
}

/*const searchPlayers = async (firstName, lastName) => {
  const url = `${BASE_URL}/players?first_name=${firstName}&last_name=${lastName}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `${API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const player = await response.json();
    console.log(player); // Log the player data directly

    if (!player) {
      console.log("Player not found.");
    }
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
};

searchPlayers("LeBron", "James");*/