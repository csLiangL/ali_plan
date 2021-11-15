import React, { Component } from 'react';

import Title from "./title"
import Item from "./item"

class Todo extends React.Component {

    render() { 
        return (
        <div>
            <Title/>
            <div className="box">
                <div className="search">
                    <div className="imgDiv">
                        <img src="./dropout.svg" alt="" />
                    </div>
                    <input type="text" placeholder="What needs to be done"/>
                </div>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>
        </div>
        
        );
    }
}
 
export default Todo;