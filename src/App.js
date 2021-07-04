import React from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Shop} from "./Components/Shop";

import {ContextProvider} from "./Components/Context";

function App() {

    return (
        <>
            <Header/>
            <ContextProvider>
                <Shop/>
            </ContextProvider>
            <Footer/>
        </>
    );
}

export default App;
