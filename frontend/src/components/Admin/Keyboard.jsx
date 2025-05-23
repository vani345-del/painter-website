import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Keyboard = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const handleShortcut = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        navigate('/admin');
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [navigate]);
  return null
}

export default Keyboard