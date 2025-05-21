import React from 'react'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Users from "./components/Users/Users"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <div>
       <Header/>
       <main className="">
        <Hero />
        <Users/>
      </main>
       <Footer/>
    </div>
  )
}

export default App