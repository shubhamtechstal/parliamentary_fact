import PropTypes from 'prop-types'

const PrivateRoute = (props) => {
    // const isAuthenticated = useSelector((state) => state?.toast?.isAuthenticated);
    // console.log("isAuthenticated", isAuthenticated)

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
