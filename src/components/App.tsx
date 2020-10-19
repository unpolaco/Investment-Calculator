import React from 'react';
import {ProductsPage} from './ProductsPage/ProductsPage';
import {PageNotFound} from './PageNotFound/PageNotFound';
import {CalculatorForm} from './CalculatorPage/CalculatorForm/CalculatorForm';
import {Main} from './App.styles';
import {Header} from './Header/Header';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from '../helpers/routes';
import {getBaseName} from './App.helpers';
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
                        <ProductsPage />
                    </Route>
                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
            </Main>
        </BrowserRouter>
    );
};
