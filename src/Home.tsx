import './App.css'
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout';

function HomePage({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
  const navigate = useNavigate();

  return (
    <Layout onThemeChange={onThemeChange}>
      <div id='logo'>
        <div id='logohover'>
          <h1><span id='cursor'>_</span>username <span id='red'>Taken</span></h1>
        </div>

        <div className='columns-container'>
          <button className='redbutton' onClick={() => {navigate('/about')}}>About</button>
          <button className='bluebutton'onClick={() => {navigate('/news')}}>News</button>
          <button className='greenbutton'onClick={() => {navigate('/contact')}}>Contact</button>
        </div>
      </div>
    </Layout>
  )
}


export default HomePage;