import React, { useState } from 'react'

import './RandomQuote.css'

import twitter_icon from '../Assests/twitter.png'
import refresh_icon from '../Assests/refresh.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
        console.log(quotes)
    }

    const [quote, setQuote] = useState({
        text: 'Time never comes back, use productively',
        author: 'Neeraj Dattu Dudam',
    });

    
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuotes();

    return (
        // <div>RandomQuote</div>
        <div className="container">
            <div className="quote">{quote.text}</div>
            {/* <div> */}
                <div className="line"></div>
                <div className="bottom">
                    <div className="author"> - {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={refresh_icon} alt="reload" onClick={() => {random()}} width='25px'/>
                        <img src={twitter_icon} alt="twitter" onClick={() => {twitter()}} width='25px' />
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default RandomQuote