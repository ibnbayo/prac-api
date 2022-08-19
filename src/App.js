import { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

// const fetchQuotes = async () => {
// 	const config = {
// 		headers: {
// 			'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
// 			'x-rapidapi-key': API_KEY
// 		}
// 	};
// 	const res = await axios.get(
// 		`https://famous-quotes4.p.rapidapi.com/random`,
// 		config
// 	);
// 	return res.data;
// };
const config = {
  headers: {
        'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
        'X-RapidAPI-Host': 'getguidelines.p.rapidapi.com'
      }
}
// const options = {
//   method: 'GET',
//   url: 'https://getguidelines.p.rapidapi.comhttps//getguidelines.com/all',
//   headers: {
//     'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
//     'X-RapidAPI-Host': 'getguidelines.p.rapidapi.com'
//   }
// };

function App() {
  const [edamamData,setEdamamData] = useState()

  useEffect(()=>{
    
axios.get('https://getguidelines.p.rapidapi.comhttps//getguidelines.com/all', config)
.then(res => {
	console.log(res.data);
})
.catch(err => {
	console.log(err);
});
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        ttt
      </header>
    </div>
  );
}

export default App;
