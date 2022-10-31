import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '967eb9e6a1msha0b0b17f7b55b7ep1992ddjsn4fe2a448c334' ,
    },
  });
    
  return data;
}