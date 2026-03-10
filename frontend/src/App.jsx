import React from 'react';
import StrategyFlow from './components/StrategyFlow/StrategyFlow';

function App() {
    return (
        <div className="app-container">
            <header className="hero-header">
                <h1>Welcome to SniperThink</h1>
                <p>Your ultimate algorithmic trading engine.</p>
            </header>
            <main>
                <StrategyFlow />
            </main>
        </div>
    );
}

export default App;
