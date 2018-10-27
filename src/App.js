import React, { Component } from 'react';
import './App.css';
import animals from './animals.json'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Title from './components/Title'
import AnimalCard from './components/AnimalCard'

class App extends Component {
    state = {
        message: "",
        highScore: 0,
        currentScore: 0,
        animals: animals,
        unselectedAnimals: animals
    }

    shuffleArray = animalCards => {
        for (let i = animalCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            console.log(j);
            [animalCards[i], animalCards[j]] = [animalCards[j], animalCards[i]];
        }
    }

    selectAnimal = animalType => {
        const findAnimal = this.state.unselectedAnimals.find(item => item.animalType === animalType);

        if(findAnimal === undefined) {
            this.setState({
                message: "You already clicked that one!",
                highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
                currentScore: 0,
                animals: animals,
                unselectedAnimals: animals
            });
        } else {
            const newAnimals = this.state.unselectedAnimals.filter(item => item.animalType !== animalType);
            
            this.setState({ 
                message: "Nice!",
                currentScore: this.state.currentScore + 1,
                animals: animals,
                unselectedAnimals: newAnimals
            });
        }

        this.shuffleArray(animals);
    };

    render() {
        return (
            <Wrapper>
                <Nav
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    highScore={this.state.highScore}
                />
                <Title />
                {
                    this.state.animals.map((Animal,i) => (
                        <AnimalCard
                            key={i}
                            animalType={Animal.animalType}
                            image={Animal.image}
                            selectAnimal={this.selectAnimal} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

