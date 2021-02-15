import React from 'react';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';

const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false);
  
  if (!isReady) {
    return <AppLoading onFinish={() => setIsReady(true)}
                       onError={(err) => console.log(err)}
                       startAsync={bootstrap}/>
  } 

  return <AppNavigation />
}

export default App;