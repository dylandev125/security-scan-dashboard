import React, { useState } from "react";
import SecurityScan from './security-scan'
import History from './history'
import Layout from '../../../components/layout/Layout'
import "./Security.scss"

const Security = () => {
    const components = [SecurityScan, History];
    const [state, setState] = useState({
        tab: 0,
    });

    const handleClick = (tabIndex) => {
        setState(
            prevState => ({
                ...prevState,
                tab: tabIndex,
            })
        );
    }

    const CurrentComponent = components[state.tab];
    return (
        <>
            <Layout type='security' userType={'customer'} handleClick={handleClick}>
                <CurrentComponent></CurrentComponent>
            </Layout>
        </>
    )
}

export default Security

