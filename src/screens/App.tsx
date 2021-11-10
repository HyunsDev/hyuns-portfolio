import React, { useState } from 'react';
import IntroPage from './IntroPage';
import MainPage from './MainPage';

function App() {
    const [ page, setPage ] = useState('intro')

    return (
        <div className="App">
            { page === "intro" ? <IntroPage change={() => setPage("main")} /> : <MainPage /> }
        </div>
    );
}

export default App;
