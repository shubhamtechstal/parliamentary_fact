import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const isAuthenticated = useSelector((state) => state?.toast?.isAuthenticated);
    const navigate = useNavigate();
    console.log("isAuthenticated", isAuthenticated)

    // React.useEffect(() => {
    //     if (!isAuthenticated) {
    //         return navigate('/login', { replace: true });
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuthenticated]);

    return <>{props.component}</>;
};

PrivateRoute.propTypes = {
    component: PropTypes.node.isRequired,
}

export default PrivateRoute;
