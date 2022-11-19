import React,{Component} from "react";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import randomWord from "./words";
import Button from '@mui/material/Button';

class Hangman extends Component{
    constructor(){
        super()
            this.state = {
                mistake: 0,
                guessed: new Set([]),
                answer: randomWord(),
            }
            
            this.maxWrong = 10;
            this.images = [
                image0,
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                image8,
                image9,
                image10,
         ]
        }
    guessedWord = () => {
        return this.state.answer.split("").map((letter)=>this.state.guessed.has(letter)?letter: " __ ")
    }

    handleGuess = (guessedletter) => {
        this.setState({
            guessed : this.state.guessed.add(guessedletter),
            mistake: this.state.mistake + (this.state.answer.includes(guessedletter)? 0 : 1)
    })
    }

    generateButton = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((letter)=>(
        <Button variant="text" key={letter} value={letter} 
        onClick={()=>this.handleGuess(letter)}
        disabled = {this.state.guessed.has(letter)}
        >{letter}</Button>)
        )
    }
   
    render(){
        var gameState = this.generateButton();
        const gameOver = this.state.mistake >= this.maxWrong;
        const isWon = this.guessedWord().join("") === this.state.answer;
        if(gameOver){
            gameState = "Better luck next time!!!"
        }
        if(isWon){
            gameState = "You Won!!!"
        }
        console.log(this.guessedWord())
        return(
            <div align="center">
                <h3>Hangman Game</h3>
                <p>Wrong guesses: {this.state.mistake} of {this.maxWrong}</p><br/>
                <img src={this.images[this.state.mistake]}/>
                <p>Guess the Programming Language</p>
                <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                <p style={{width: "50%"}}>{gameState}</p>
            </div>

        )
    }
}

export default Hangman;