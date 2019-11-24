import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      (function(w, d){
                        var id='embedly-platform', n = 'script';
                        if (!d.getElementById(id)){
                          w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
                          var e = d.createElement(n); e.id = id; e.async=1;
                          e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
                          var s = d.getElementsByTagName(n)[0];
                          s.parentNode.insertBefore(e, s);
                        }
                      })(window, document);
              `
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
