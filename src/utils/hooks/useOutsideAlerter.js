import { useEffect } from 'react';

const useOutsideAlerter = (ref) => {
    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                if (window.innerWidth <= 900) {
                    alert("You clicked outside of me!");
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref])
};

export default useOutsideAlerter;