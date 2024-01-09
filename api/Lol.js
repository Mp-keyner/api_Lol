import axios from 'axios';

const apiLol = axios.create({
 baseURL: 'http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json',
 headers: {
   'Content-Type': 'application/json'
 }
});

export default apiLol;
