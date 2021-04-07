import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'

it('shows a component Header',()=>{


    const div= document.createElement('div');
    ReactDOM.render(<App/>,div);
    expect(div.innerHTML).toContain('Header');
    ReactDOM.unmountComponentAtNode(div);

})