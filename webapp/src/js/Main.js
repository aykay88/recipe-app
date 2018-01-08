import React, { Component } from "react";
import {
    Route,
    NavLink as RRNavLink,
    BrowserRouter
} from "react-router-dom";
import RecipeSelection from "./RecipeSelection";
import ShoppingList from "./ShoppingList";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Jumbotron, Nav, NavItem, NavLink} from "reactstrap";
import RandomRecipe from "./RandomRecipe";

class Main extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Container>
                        <Jumbotron>
                            <h1 align="center">Food App</h1>
                            <Nav pills color="red">
                                <NavItem>
                                    <NavLink tag={RRNavLink} exact to="/">Recipes</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/shopping-list">Shopping List</NavLink>
                                </NavItem>
                            </Nav>
                        </Jumbotron>
                    </Container>

                    <Container>
                        <Route exact path="/" component={RecipeSelection}/>
                        <Route exact path="/recipes" component={RecipeSelection}/>
                        <Route exact path="/recipes/random" component={RandomRecipe}/>
                        <Route path="/shopping-list" component={ShoppingList}/>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;