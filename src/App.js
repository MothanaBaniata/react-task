import logo from './logo.svg';
import './App.css';
import DoubleCounter from './DoubleCounter';
import { useEffect, useState } from 'react';
import Name from './Components/Name';
import SignUp from './SignUp';

function App() {

  const [data, setData] = useState([])

  const dataShow = data.map((item,index) => <Name name={item} key={index} />)
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => setData(data.data.memes.map((item) => item.name))
    )
  }, [])



  return (
    <div className="App">
      <SignUp />
      <DoubleCounter />
      {dataShow}
    </div>
  );
}

export default App;
