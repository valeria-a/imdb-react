import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import LoginPage from './LoginPage/LoginPage';
import ProfilePage from './ProfilePage/ProfilePage';
import { ME, REFRESH } from './urls';
import sendRequest from './utils';


function App() {

  const [userData, setUserData] = useState(null)

  function sendRequest(url) {
    const token = localStorage.getItem('access')
    if (token) {
    axios.get(url, {headers: {Authorization: `Bearer ${token}`}})
    .then((responseData) => {
        if (responseData.status !== 200) {
        throw responseData.statusText
        } else {
            setUserData(responseData.data)
        }
    })
    .catch((error) => {
        const refreshToken = localStorage.getItem('refresh')
        if (! refreshToken) {
        // the user will have to perforn login
        } else {
        axios.post(REFRESH, {refresh: refreshToken})
        .then((responseData) => {
            if (responseData.status === 200) {
                localStorage.setItem('access', responseData.data.access)
                sendRequest(url)
            }
        })
        .catch()
        }
    })
    } else {

    }
  }

  useEffect(() => {
      sendRequest(ME)
  }, [])

  return (
    <Routes>
    <Route path="/" element={<Layout user={userData}/>}>
      <Route 
        path="profile/" 
        element={<ProfilePage user={userData} onImgUpload={() => sendRequest(ME)} />} />
      

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
