import React from 'react'
import "./App.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Particles from 'react-particles-js'

function App() {
  return (
    <div>
      <Particles
        params={{
          particles:{
            number:{
              value :30 ,
              density:{
                enable:true ,
                value_area :600
              }
            },
            shape :{
              type:"circle" ,
              stroke: {
                width : 6,
                color: "#f9ab00"
              }
            }
          }
        }}/>
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
