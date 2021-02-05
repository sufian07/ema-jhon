import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Products from './Products/Products';
function Index() {
    return (
        <div className="container">
            <Header/>
            <Products/>
            <h1>hello world</h1>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
