import React from 'react';

const API = 'http://localhost:4000/api/random';

class RandomRecipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            requestFailed: false
        }
    }

    componentDidMount() {
        fetch(API, {
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json()).catch(err => {
            console.err(`'${err}' happened!`);
            return {};
        }).then(data => this.setState({recipeData: data}))
            .catch((err) => { console.log('fetch request failed: ', err) }
            );
    }



    render() {

        return (
            <div>
                    <h2>{this.state.recipeData.name}</h2>
            </div>
        );
    }


   /* render() {
        return (<div>
            <h1>Recipe title</h1>
            <p>Category</p>
            <p>{this.state.hits}</p>
        </div>);

    } */
}

export default RandomRecipe;