import React from 'react'

class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quotes: [
                "Good friends are like stars. You don't always see them, but you know they're always there",
                "The best cure for a bad day is a good friend",
                "The only way to have a friend is to be one",
                "Good times + Crazy friends = Amazing memories",
                "True friends won't grow apart even if they don't talk everyday"
            ]
        }
    }

    render() {
        const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        return (
            <span>{randomQuote}</span>                
        )
    }
}

export default Quote;