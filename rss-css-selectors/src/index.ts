import './styles/animation.css';
import './styles/style.css';
import Page from './page';
import Level from './level';
import Storage from './storage';
import 'highlight.js/styles/a11y-dark.css';

const page = new Page();
const level = new Level();
const storage = new Storage();

page.render();
level.render(storage.getLevel());
