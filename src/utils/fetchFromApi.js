import axios from "axios";

const apiUrl = 'https://youtube-v3-alternative.p.rapidapi.com';
const options = {
    url: apiUrl,
    params: {},
    headers: {
      'X-RapidAPI-Key': 'API_PRIVATE_KEY',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

const getData = async (url)=>{
    const res = await axios.get(`${apiUrl}/${url}`,options);

    return res;
}

export {getData};
