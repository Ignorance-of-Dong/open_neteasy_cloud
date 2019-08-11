import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import routerConfig from './router/index'
import Wrong from './views/Wrong'//404页面

export default () => {

    return <HashRouter>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Redirect exact from='/' to="/login" />
                {
                    routerConfig.config.map((item, ind) => {

                        return <Route exact={item.exact} key={ind} path={item.path} render={(location) => {
                            // Store.getHistory({...location})
                            // commonStore.getHistory({...location})
                            return <item.component {...location} />
                        }} />
                    })
                }
                <Route component={Wrong} />
            </Switch>
        </Suspense>
    </HashRouter>
};