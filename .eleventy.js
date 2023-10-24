const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: "./public/css/**/*.css",
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("y'-'LL'-'dd' at 'T");
  });

  eleventyConfig.addPassthroughCopy("./src/css/**/*.css");
  eleventyConfig.addPassthroughCopy("./src/font");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
