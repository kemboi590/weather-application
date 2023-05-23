import { useState, useEffect} from 'react'

import './App.css'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Nairobi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c91f9666e1msha2a78962a9ff863p1255ffjsnc55172833efb',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
      
    }
    fetchData()
        
  },[])


  return (
    <div>
      <h1>Welcome To Weather Application</h1>

  
      
      
    </div>
  )
}

export default App
