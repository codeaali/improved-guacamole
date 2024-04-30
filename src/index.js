import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create the context
const MyContext = createContext();

// Create the provider component
const MyProvider = ({ children }) => {
  const [prodData, setProdData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [weeklydata, setWeeklyData] = useState([]);

  return (
    <MyContext.Provider value=
    {{ prodData, setProdData, salesData, setSalesData, weeklydata, setWeeklyData }}
    >
      {children}
    </MyContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
    <App/>
  </MyProvider>
);
export { MyContext, MyProvider };