import FetchUtil from '../utils/FetchUtil';
import constants from '../constants';

const domain = constants.domain;

const LOGIN_URL = domain + '/users/';
const USERS_URL = domain + '/users';


export const logOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    window.location.href = '/login';
};

export const logIn = ( login, password ) => {
    return ( dispatch ) => {
        localStorage.setItem( 'login', login );
        localStorage.setItem( 'password', login );

        const onSuccess = ( response ) => {
            localStorage.setItem( 'username', response.username );
            localStorage.setItem( 'role', response.roles[0].name );
            window.location.href = '/dashboard';
        };

        const onError = ( response ) => {
            logOut();
        };

        return FetchUtil.fetchWrapper( LOGIN_URL, null, onSuccess, onError );
    };
};

export const registration = (user, onSuccess) => {
    return ( dispatch ) => {
        const onError = ( response ) => {
            logOut();
        };
        const data = {
            username: user.username,
            password: user.password,
            email: user.email,
            name: user.name,
            surname: user.surname,
        };

        return FetchUtil.fetchWrapper( USERS_URL, data,
            onSuccess, onSuccess, null, null, 'POST' );
    };
};
