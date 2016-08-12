## Make React components from functions

```
npm install react-knitter --save
```

```javascript
import { knit } from 'react-knitter';

// Syntax
knit(componentName, prototypeProps = {}, classProps = {});

// `knit` creates new component via `class extends React.Component`
// `init` is a special function, it is executed during `constuctor` execution
knit('MyComponent', { init, render }, { propTypes })
```

### Example

`CommentBox.js` without knit:

```javascript
import React, { PropTypes } from 'react';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url,
      success: (data) => {
        this.setState({ data: data });
      },
    });
  },

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CommentBox;
```

`CommentBox.js` with knit:
```javascript
import React, { PropTypes } from 'react';
import { knit } from 'react-knitter';

const propTypes = {
  url: PropTypes.string.isRequired,
};

function init() {
  this.state = { data: [] };
}

function componentDidMount() {
  $.ajax({
    url: this.props.url,
    success: (data) => {
      this.setState({ data: data });
    },
  });
}

function render() {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.state.data} />
      <CommentForm />
    </div>
  );
}

export default knit('CommentBox', { init, componentDidMount, render }, { propTypes });
```
