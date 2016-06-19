import Home from './home';
import Projects from './projects';

const pages = [
    [Home, '/home', 'home'],
    [Projects, '/projects', 'projects']
]

Object.defineProperties(pages, {
    indexPath: {
        value: '/home'
    }
});

export default pages;

