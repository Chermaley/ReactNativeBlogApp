import React from 'react';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { Routes } from './src/Routes/Routes';

const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false);
  
  if (!isReady) {
    return <AppLoading onFinish={() => setIsReady(true)}
                       onError={(err) => console.log(err)}
                       startAsync={bootstrap}/>
  } 

  return <Routes />
}

export default App;