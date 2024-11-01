import {useEffect} from 'react';
import {useLocation} from "react-router-dom";

export const ScrollToTop = () => {
    const location = useLocation();
    console.log(location)
    const { pathname } = location;
    console.log("Path name", pathname)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};