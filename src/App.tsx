import './App.css'
import { useEffect, useState } from 'react'

interface WindowSize{
  width: number;
  height: number;
}

const getWindowSize = (): WindowSize => ({
  width: window.innerWidth, height: window.innerHeight
});

function App() {

  const [size, setSize] = useState<WindowSize>(() => getWindowSize());

  useEffect(() => {
    const onResize = () => setSize(getWindowSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <div className="main">
        <p> Width: {size.width}</p>
        <p> Height: {size.height}</p>
      </div>
    </>
  )
}

export default App
