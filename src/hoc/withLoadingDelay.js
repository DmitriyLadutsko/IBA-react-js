import React, {useEffect, useState} from "react";
import Spinner from "../components/Spinner";

const withLoadingDelay = LoadingComponent => props => {

    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 2000)
    }, []);

    return isLoad ? <LoadingComponent {...props}/> : <Spinner/>
};

export default withLoadingDelay;