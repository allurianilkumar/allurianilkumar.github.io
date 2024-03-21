import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Logout({ setIsAuthenticated }) {
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.removeItem("isLogined");
        sessionStorage.removeItem("user");
        toast.success("Successfully logout", { autoClose: 800 });
        setIsAuthenticated(false);
        navigate('/login');
    });
    return (
        <div>
            <ToastContainer position="top-right" />
        </div>
        
    );
}

export default Logout;