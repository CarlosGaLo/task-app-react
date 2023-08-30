import Blackboard from '@/components/pages/Blackboard';
import Login from '@/components/pages/Login';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [access, setAccess] = useState(true); // Estado inicial

  const handleChangeAccess = () => {
    setAccess(!access); // Cambiar el valor de access al contrario
  };

  return (
    <main>
      <button onClick={handleChangeAccess}>Change Access</button>
      {access ? <Blackboard /> : <Login />}
    </main>
  );
};

export default Home;