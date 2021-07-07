import { useEffect, useState } from 'react'; //uso los hooks
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light'); //coloco el estado en light
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };
    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme'); //y almaceno en el localstorage el tema
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler, mountedComponent] 
};