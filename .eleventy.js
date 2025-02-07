
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scroll.js")

  eleventyConfig.addShortcode("planetCard", function(planet, au){
    return `
      <div class="cards" id="${planet}_card">  
        <div class="planet_drawing" id="${planet}_drawing"></div>
        <div id="${planet}_div">
          <h2 class="card_title" id="${planet}_title">${planet}</h2>
          <p class="au_card" id="${planet}_au">AU ${au}</p>
        </div>
      </div>
    `;
  });
};
