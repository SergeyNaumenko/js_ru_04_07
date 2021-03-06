import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from './Routes/ArticlesPage'
import NotFoundPage from './Routes/NotFound'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Link to = "/articles">Articles</Link>
                <Link to = "/counter">Counter</Link>
                <Link to = "/filters">Filters</Link>
                <UserForm />
                <Switch>
                    <Route path = "/articles/new" render = {this.getNewArticle} exact />
                    <Route path = "/articles" component = {ArticlesPage} />
                    <Route path = "/counter" component = {Counter} />
                    <Route path = "/filters" component = {Filters} />
                    <Route path = "*" component = {NotFoundPage} />
                </Switch>
            </div>
        )
    }

    getNewArticle = () => <h1>New Article Page</h1>
}

export default App