
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("planetCard", function(planet, au){
    return `
      <div class="${planet}_card">  
        <div class="planet_drawing" id="${planet}_drawing"></div>
        <h2 class="card_title">${planet}</h2>
        <p class="au_card">AU ${au}</p>
      </div>
    `;
  });
};