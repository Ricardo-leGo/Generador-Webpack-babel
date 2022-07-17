import * as _ from 'lodash';

function component() {
  const DIV = document.createElement('div');

  DIV.innerHTML = _.join(['Hello ', 'webpack'], ' ');

  return DIV;
}

document.body.appendChild(component());


console.log("Ts file");