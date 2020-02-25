import React, { Component } from 'react'

export default class KeyPad extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };
    render() {
        return (
            <div className='buttons'>
                <div>
                    <button className='AC' name='AC' onClick={this.buttonPressed}>AC</button>
                    <button className='top' name='(' onClick={this.buttonPressed}>(</button>
                    <button className='top' name=')' onClick={this.buttonPressed}>)</button>
                    <button className='oper1' name='/' onClick={this.buttonPressed}>/</button>
                </div>

                <div>
                    <button className='nums' name='7' onClick={this.buttonPressed}>7</button>
                    <button className='nums' name='8' onClick={this.buttonPressed}>8</button>
                    <button className='nums' name='9' onClick={this.buttonPressed}>9</button>
                    <button className='oper2' name='*' onClick={this.buttonPressed}>*</button>
                </div>

                <div>
                    <button className='nums' name='4' onClick={this.buttonPressed}>4</button>
                    <button className='nums' name='5' onClick={this.buttonPressed}>5</button>
                    <button className='nums' name='6' onClick={this.buttonPressed}>6</button>
                    <button className='oper3' name='-' onClick={this.buttonPressed}>-</button>
                </div>

                <div>
                    <button className='nums1' name='1' onClick={this.buttonPressed}>1</button>
                    <button className='nums' name='2' onClick={this.buttonPressed}>2</button>
                    <button className='nums' name='3' onClick={this.buttonPressed}>3</button>
                    <button className='oper4' name='+' onClick={this.buttonPressed}>+</button>
                </div>

                <div>
                    <button className='zero' name='0' onClick={this.buttonPressed}>0</button>
                    <button className='dot' name='.' onClick={this.buttonPressed}>.</button>
                    <button className='oper5' name='=' onClick={this.buttonPressed}>=</button>
                </div>
            </div>
        )
    }
}