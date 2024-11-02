import { Navbar, About, Skills, Portfolio, Contact, Header } from './components'

import './assets/scss/style.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}
export default App
