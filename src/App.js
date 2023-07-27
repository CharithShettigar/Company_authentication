import './App.css';
import Header from './MyComponents/Header';
import Login from './MyComponents/Login';
import SignUp from './MyComponents/SignUp';
import Home from './MyComponents/Home';  
import Footer from './MyComponents/Footer';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  let initCredential;
  if (localStorage.getItem("credentials") === null) {
    initCredential = []
  }
  else {
    initCredential = JSON.parse(localStorage.getItem("credentials"))
  }

 

  const addCredential = (email, name,password) => {
    let sno = 1
    if (credentialList.length) {
      sno = credentialList[credentialList.length - 1].sno + 1
    }

    const myCredential = {
      sno: sno,
      email: email,
      name: name,
      password:password
    }
    setCredentials([...credentialList, myCredential])
  }


  const [credentialList, setCredentials] = useState(initCredential)
  useEffect(() => {
    localStorage.setItem("credentials", JSON.stringify(credentialList))
  }, [credentialList])


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/login' element={
            <Login credentialList={credentialList} />
          }>
          </Route>
        </Routes>
        <Routes>
          <Route exact path='/' element={
            <SignUp addCredential={addCredential}/>
          }>
          </Route>
        </Routes>
        <Routes>
          <Route exact path='/home' element={
            <Home />
          }>
          </Route>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
