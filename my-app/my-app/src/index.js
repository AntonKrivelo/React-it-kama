import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';
import { rerenderEntireTree } from './render';



rerenderEntireTree(state);

reportWebVitals();

