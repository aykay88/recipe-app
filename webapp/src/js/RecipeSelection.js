import React from 'react';
import {Button, Container, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {Link} from "react-router-dom";


class RecipeSelection extends React.Component {
    render() {
        return (
                <Container>
                    <Button color="primary" size="lg" block tag={Link} to="/recipes/random">Random Recipe</Button>
                    <Button color="primary" size="lg" block>Food Categories</Button>
                    <Button color="primary" size="lg" block>Search By Ingredient</Button>
                </Container>
        );
    }
}

export default RecipeSelection;