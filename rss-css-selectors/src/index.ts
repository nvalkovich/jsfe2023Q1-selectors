import './styles/animation.css';
import './styles/style.css';
import Page from './page';
import Level from './level';
import storage from './storage';
import 'highlight.js/styles/stackoverflow-dark.css';

const page = new Page();
const level = new Level();

page.render();
level.render(storage.getLevel());
