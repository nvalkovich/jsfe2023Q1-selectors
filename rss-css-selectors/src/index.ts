import './styles/animation.css';
import './styles/style.css';
import Page from './modules/page';
import Level from './modules/level';
import storage from './modules/storage';
import 'highlight.js/styles/stackoverflow-dark.css';

const page = new Page();
const level = new Level();

page.render();
level.render(Number(storage.parseLocalStorage('level') || 1));
