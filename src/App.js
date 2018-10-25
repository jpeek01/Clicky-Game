import React, { Component } from 'react';
import './App.css';
import animals from './animals.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Nav'
import Title from './components/Title'
import AnimalCard from './components/AnimalCard'

class App extends Component {
    state = {
        message: "",
        topScore: 0,
        curScore: 0,
        animals: animals,
        unselectedAnimals: animals
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectAnimal = animalType => {
        const findAnimal = this.state.unselectedAnimals.find(item => item.animalType === animalType);

        if(findAnimal === undefined) {
            this.setState({ 
                message: "You already clicked that one!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                animals: animals,
                unselectedAnimals: animals
            });
        }
        else {
            const newAnimals = this.state.unselectedAnimals.filter(item => item.animalType !== animalType);
            
            this.setState({ 
                message: "Nice!",
                curScore: this.state.curScore + 1,
                animals: animals,
                unselectedAnimals: newAnimals
            });
        }

        this.shuffleArray(animals);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.animals.map(Animal => (
                        <AnimalCard
                            animalType={Animal.animalType}
                            image={Animal.image}
                            selectAnimal={this.selectAnimal} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

