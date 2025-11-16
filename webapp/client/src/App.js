import { useEffect, useState } from "react";

function App() {

  const [serverStatus, setServerStatus] = useState(null);
  useEffect(() => {
    const fetchServerStatus = async () => {
      const serverUrl = 'https://localhost:5000';
      const response = await fetch(`${serverUrl}/api/health`);
      setServerStatus(response);
    }
    fetchServerStatus();
  }, [])

  return (
    <div className="App" >
      {`server status: ${serverStatus}`}
    </div >
  );
}

export default App;
