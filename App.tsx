import React from 'react';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { Routes } from './src/Routes/Routes';
import { Provider } from 'react-redux';
import store from './src/store';

const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false);
  
  if (!isReady) {
    return <AppLoading onFinish={() => setIsReady(true)}
                       onError={(err) => console.log(err)}
                       startAsync={bootstrap}/>
  } 

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;