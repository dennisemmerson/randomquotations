import React from 'react';
import './App.css';

// This app uses the API from https://api.quotable.io/random to show random quotations

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {},
    }
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    this.newQuote();
  }

  // fetch a random quotation using the quotable API and assign it to the state variable "quote"
  newQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      let newQuote = {quoteText: data.content, quoteAuthor: data.author}
      this.setState((state) => (
        {quote:  newQuote}
      ));
      console.log(`${data.content} —${data.author}`)
    });
  }

  render() {
    return (
      <div id="quote-box">
          <div  className="inner">
          <div>
            <h2 id="text"><span id="block-quote">"</span>   {this.state.quote.quoteText}<span id="block-quote">   "</span></h2>
            <p id="author">{this.state.quote.quoteAuthor}</p>
            <button className="button-53" id="new-quote" onClick={this.newQuote}>New Quote</button>
            </div>
          </div>
      </div>
    );
  }
};

export default App;
