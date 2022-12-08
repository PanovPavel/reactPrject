import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app'
import './index.css'

class WhoAnI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
        this.nextYear = this.nextYear.bind(this);
    }
    nextYear(){
        this.setState(state => ({
            years: ++this.state.years
        }))
    }
    render() {
        const {years} = this.state;
        return(
            <>
                <h1>Имя - {this.props.name} Фамилия - {this.props.surname} Возраст {years}</h1>
                <button onClick={this.nextYear}>ссылка</button>
            </>
        )
    }

}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            years: 26
        };

        // Это привязывание необходимо, чтобы работал объект `this` в колбэке
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.years)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            years: ++this.state.years
        }));
    }

    render() {
        return (
            <>
                <p>Возраст {this.state.years}</p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn?'on':'off'}
                </button>
            </>

        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
