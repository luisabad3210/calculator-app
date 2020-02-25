import React from 'react'

class Output extends React.Component {

    render() {
        return (
            <div className='resultContainer'>
                <p className='result'>{this.props.result}</p>
            </div>
        )
    }
}

export default Output;