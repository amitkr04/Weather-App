import axios from "axios";

const API_KEY = "5c950e82feb6b0eae70b493c4404a5b2";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (City, Country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${City},${Country}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.response;
  }
};

//https://api.openweathermap.org/data/2.5/weather?q=Ara,India&appid=5c950e82feb6b0eae70b493c4404a5b2&units=metric
