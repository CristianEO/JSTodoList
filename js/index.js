import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

  view.render();
});

// Video Pull Request
// Video Pull Request 2
// Video Pull Request 3