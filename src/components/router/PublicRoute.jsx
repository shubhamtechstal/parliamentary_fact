import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PublicRoute = (props) => {
    const isAuthenticated = useSelector((state) => state?.toast?.isAuthenticated);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isAuthenticated) {
            return navigate('/', { replace: true });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    return <>{props.component}</>;
};

PublicRoute.propTypes = {
    component: PropTypes.node.isRequired,
}

export default PublicRoute;
