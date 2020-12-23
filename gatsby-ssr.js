const React = require("react");
const { Helmet } = require("react-helmet");

exports.onRenderBody = (
  {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPostBodyComponents,
  },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);

  setPostBodyComponents([
    <script
      src="https://code.tidio.co/vbxlguzrm3eesqejfajl3tviriyig8td.js"
      async
    ></script>,
  ]);
};
