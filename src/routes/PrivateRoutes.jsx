import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const location= useLocation()

    if(loading){
        return <span className="loading loading-spinner text-accent"></span>

    }
    if(user){
        return children
     }
    
    return <Navigate state={location?.pathname} to='/signin' ></Navigate>
    };

    PrivateRoutes.propTypes = {
        children: PropTypes.node,
      };
export default PrivateRoutes;