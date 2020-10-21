import React from 'react';
import {PageNotFound} from './PageNotFound/PageNotFound';
import {CalculatorForm} from './CalculatorPage/CalculatorForm/CalculatorForm';
import {Main} from './App.styles';
import {Header} from './Header/Header';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from '../helpers/routes';
import {getBaseName} from './App.helpers';
import {ProductsList} from './ProductsPage/ProductsList';
export const App = () => {
    const basename = getBaseName();
    return (
        <BrowserRouter basename={basename}>
            <Header />
            <Main>
                <Switch>
                    <Route path={'/'} exact>
                        <Redirect to={ROUTES.PRODUCTS} />
                    </Route>
                    <Route path={ROUTES.CALCULATOR}>
                        <CalculatorForm />
                    </Route>
                    <Route path={ROUTES.PRODUCTS}>
                        <ProductsList />
                    </Route>
                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
            </Main>
        </BrowserRouter>
    );
};
