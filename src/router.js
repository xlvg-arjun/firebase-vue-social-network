const Home = () => import('./components/routes/Home');
const About = () => import('./components/routes/About');

export default [
    { path: '/', component: Home }
];