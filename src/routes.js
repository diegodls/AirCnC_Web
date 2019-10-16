import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
                }
            </Switch>
        </BrowserRouter>
    )
}

// o "exact" na rota Login serve para chamar a rota apenas se o path for exatamente igual, isso por que o Router DOM não verifica se o path é o digitado e sim se o path contem o que foi digitado, nesse caso, o "/" tem em todos, logo a pagina Login seria chamada caso chamassemos as demais, pois todas tem o "/"