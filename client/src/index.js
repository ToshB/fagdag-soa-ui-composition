import react from 'react-dom';
import createApp from './app';

const app = createApp((component, data) => {
    react.render(component(data), document.getElementById('app'));
});

app.start();
