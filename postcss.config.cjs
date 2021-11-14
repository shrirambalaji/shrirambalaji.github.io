import postcssImport from `postcss-import`;
import postcssCssNext from `postcss-cssnext`;
import postcssBrowserReporter from `postcss-browser-reporter`;
import postcssReporter from `postcss-reporter`;

export default () => ({
  plugins: [
    postcssImport(),
    postcssCssNext(),
    postcssBrowserReporter(),
    postcssReporter()
  ]
});
