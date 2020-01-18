import React from 'react'
// import HiddenMenu from './util/HiddenMenu'
import HeaderMenu from './HomePage/HeaderMenu'
import QuestionList from './Questions/QuestionsList'
import IntroSegment from './HomePage/IntroSegment';

class App extends React.Component{
    constructor () {
        super();
        this.state={
            questions:['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
        }
    }

    render(){
        return(
            <div className="pushable">
                <div className="pusher">
                    <HeaderMenu title="MongoDB Workshop"/>
                    <IntroSegment/>
                    {/* <QuestionList questions={this.state.questions}/> */}
                </div>
            </div>
        )
    }
}

export default App;