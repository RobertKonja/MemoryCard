import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Card from "./Card.jsx";


import s105 from "./image/105.png";
import s107 from "./image/107.png";
import s108 from "./image/117.png";
import s109 from "./image/109.png";
import s113 from "./image/dino.png";
import s114 from "./image/patrol.png";
import s115 from "./image/spider.png";
import s116 from "./image/pepa.png";
import s117 from "./image/car.png";

export default class Board extends Component {
  state = {
    cards: [
      { id: 1, value: 1, selected: false,  url: s113 },
      { id: 2, value: 2, selected: false,  url: s114 },
      { id: 3, value: 3, selected: false,  url: s115 },
      { id: 4, value: 4, selected: false,  url: s116 },
      { id: 5, value: 5, selected: false,  url: s117 },
      { id: 6, value: 6, selected: false,  url: s108 },
      { id: 7, value: 1, selected: false,  url: s113 },
      { id: 8, value: 2, selected: false, url: s114 },
      { id: 9, value: 3, selected: false,  url: s115 },
      { id: 10, value: 4, selected: false, url: s116 },
      { id: 11, value: 5, selected: false, url: s117 },
      { id: 12, value: 6, selected: false, url: s108 }
    ],
    checkedCards: []
  };

  handleClick = (element) => {
    const cards = [...this.state.cards];
    let index = cards.indexOf(element);
    cards[index] = { ...element };
    cards[index].selected = true;
    this.setState({ cards: cards });
    this.addCheckedCard(cards[index]);
    

    if (this.state.checkedCards.length === 2) {
      if (
        this.state.checkedCards[0].value !== this.state.checkedCards[1].value
      ) {
        this.fixCard(this.state.checkedCards[0], this.state.checkedCards[1]);
        this.emptyCheckedFile();
      } else {
       
        cards[index].selected = false;
        this.setState({ cards: cards });
        this.emptyCheckedFile();
      }
    }
    if (this.state.checkedCards.length > 2) {
      
      this.emptyCheckedFile();
    }
  };

  addCheckedCard = (card) => {
    const check = [...this.state.checkedCards];
    check.push(card);
    this.setState({ checkedCards: check });
  };

  fixCard = (card1, card2) => {
    const cards = [...this.state.cards];
    let index1 = cards.indexOf(card1);
    cards[index1] = { ...card1 };
    cards[index1].selected = false;
    this.setState({ cards: cards });
    let index2 = cards.indexOf(card2);
    cards[index2] = { ...card2 };
    cards[index2].selected = false;
    this.setState({ cards: cards });
  };
  emptyCheckedFile = () => {
    var checked = [...this.state.checkedCards];
    checked = [];
    this.setState({ checkedCards: checked });
  };

  resetCard = () => {
    const cards = this.state.cards.map((card) => {
      card.selected = false;
      return card;
    });
    this.setState({ cards: cards });
    const newCard = [...this.state.cards];
    newCard.sort(() => Math.random() - 0.5);
    this.setState({ cards: newCard });
  };

  render() {
    return (
      <div className="App">
        <h1>This game is only for kids </h1>
        <button onClick={this.resetCard}> reset </button>
        <div className="board">
          {this.state.cards.map((element) => (
            <Card
              key={element.id}
              onCheck={this.handleClick}
              selected={element.selected}
              backSide={element.url}
              element={element}
            />
          ))}
        </div>
      </div>
    );
  }
}
