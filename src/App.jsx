import Hero from "./components/Hero"
import Demo from "./components/Demo"
import './App.css'
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="">
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app relative h-screen">
        <Hero/>
        <Demo/>
        <Footer/>
      </div>
    </main>
  )
}

export default App

