import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate= useNavigate()
    const [animation, setAnimation] = useState(false);

    const handleMoveToLeft = () => {
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false);
            navigate('/')
        }, 1000);
       
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-7xl text-red-600 font-bold mb-6 cursor-pointer hover:scale-110 transition-transform">404!</p>
            <p className="text-xl text-black fo9*/77nt-bold mb-6">Page Not Found</p>
            <p className="text-lg text-blue-400 mb-6">Click the following icon to ride back to us:</p>
            <div className="flex items-center justify-center">
            </div>
            <button onClick={handleMoveToLeft} className={`mt-6 px-6 py-2 text-white ${animation ? 'move-left' : ''}`}>
                <img src="https://i.ibb.co/D15WqBC/logo.png" alt="" className="h-32 custom-btn rounded-full shadow-lg" style={{ background: 'black' }} />
            </button>
        </div>
    );
};

export default ErrorPage;
