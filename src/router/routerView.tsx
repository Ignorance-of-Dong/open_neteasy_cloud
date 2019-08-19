import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import Wrong from '../views/PgWrong'//404页面
function RouterView(props: any) {
    let routers = props.routers ? props.routers : props.routerList
    // const { route } = this.props;
    const defaultRouter = <Route path="/" component={() => {
        return <Redirect to="/index/fined" key={22}/>
    }} key={22} />
    return (
        <HashRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {
                        routers.map((item, index) => {
                            const Comp = item.component
                            return <Route path={item.path} component={(routers) => {
                                return <Comp route={item.children} {...routers}></Comp>
                            }} key={index}/>
                        }).concat(defaultRouter)
                    }

                </Switch>
            </Suspense>
        </HashRouter>
    )
}



export default RouterView