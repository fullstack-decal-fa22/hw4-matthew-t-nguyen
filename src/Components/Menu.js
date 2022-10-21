import React from 'react';
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
        <Color color="red" handleClick={() => props.handleClick("red")}/>
        <Color color="pink" handleClick={() => props.handleClick("pink")}/>
        <Color color="blue" handleClick={() => props.handleClick("blue")}/>
        <Color color="pink" handleClick={() => props.handleClick("green")}/>
      </div>
    );
}

export default Menu;