const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
    purgecss({
      content: ['./**/*.html']
    })
  ],
};
