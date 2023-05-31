import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({ headComponents, body, postBodyComponents }) => (
  <html lang="en">
    <head>
      {headComponents}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

export default HTML;
