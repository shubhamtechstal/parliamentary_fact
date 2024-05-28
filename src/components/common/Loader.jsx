import PropTypes from 'prop-types';
import { Stack, CircularProgress } from '@mui/material';

const Loader = ({ position, loading, size }) => {
    const sizes = {
        xs: 32,
        sm: 56,
        md: 72,
        lg: 94,
    };
    return (
        <Stack
            sx={{
                background: 'rgba(255, 255, 255, 0.25)',
                justifyContent: 'center',
                alignItems: 'center',
                position: position,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: loading ? 100000 : -1,
                visibility: loading ? 'visible' : 'hidden',
            }}
        >
            <CircularProgress color="secondary" size={sizes[size]} />
        </Stack>
    );
};

Loader.defaultProps = {
    position: 'fixed',
    loading: false,
    size: 'sm'
}

Loader.propTypes = {
    position: PropTypes.oneOf(['fixed', 'absolute']).isRequired,
    loading: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

export default Loader;