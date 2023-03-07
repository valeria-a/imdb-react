import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import LoginPage from './LoginPage/LoginPage';
import { ME } from './urls';


function App() {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('access')
    if (token) {
      axios.get(ME, {headers: {Authorization: `Bearer ${token}`}})
      .then((responseData) => {
        if (responseData.status !== 200) {
          throw responseData.statusText
        } else {
          setUserData(responseData.data)
        }
      })
      .catch((error) => {

      })
    } else {

    }
    
  }, [])

  return (
    <Routes>
    <Route path="/" element={<Layout user={userData}/>}>
      {/* <Route index element={<Home />} />
      <Route path="countries/" element={<CountriesPage />}>
          <Route path=":countryId/" element={ <CountryDetails />}/>
      </Route> */}
    </Route>
    <Route path='login/' element={<LoginPage />}/>
  </Routes>
  );
}

export default App;
