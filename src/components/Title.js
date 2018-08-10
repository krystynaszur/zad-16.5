import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    
    render() {
        return (
            <div>
            <h1 className={style.Title}>
                Zadania do wykonania
            </h1>
            <p className={style.TaskNumber}>Liczba zadań do wykonania wynosi: {this.state.data.length}</p>
            </div>
        );
    }
}

export default Title;