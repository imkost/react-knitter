import React from 'react';

function knit(componentName, prototypeProps = {}, classProps = {}) {
  const Component = class extends React.Component {
    constructor(props) {
      super(props);
      this.init && this.init(props);
    }
  };

  Component.displayName = componentName;

  for (const key in classProps) {
    Component[key] = classProps[key];
  }

  const prototype = Component.prototype;

  for (const key in prototypeProps) {
    prototype[key] = prototypeProps[key];
  }

  return Component;
}

export default knit;
