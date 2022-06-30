import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello there!</h1>
      </div>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
