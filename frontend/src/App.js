import React from 'react';
import './App.css';

// Components (assume these are created separately)
import RiskDashboard from './components/RiskDashboard';
import RouteVisualization from './components/RouteVisualization';
import DataInput from './components/DataInput';
import OptimizedRoutes from './components/OptimizedRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Operational Risk & Routing Optimization System</h1>
      </header>
      
      <main>
        {/* Section for inputting relevant data like weather, geopolitical events */}
        <section className="input-section">
          <DataInput />
        </section>

        {/* Section for displaying operational risk dashboard */}
        <section className="dashboard-section">
          <RiskDashboard />
        </section>

        {/* Section for visualizing route options with real-time risk assessment */}
        <section className="visualization-section">
          <RouteVisualization />
        </section>

        {/* Section for optimized routing decisions */}
        <section className="optimized-routes-section">
          <OptimizedRoutes />
        </section>
      </main>

      <footer>
        <p>Powered by Machine Learning & Real-Time Data</p>
      </footer>
    </div>
  );
}

export default App;
