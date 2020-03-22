const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */

/* Function Parse for guide michelin */


const parse = data => {
  const $ = cheerio.load(data);
  var tab = [];
  nb_restos = 100
  for(var i = 1;i<nb_restos+1;i++) /* on crée une boucle afin de parcourir chaque restaurant de la page */
  {
  var name = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-content.js-match-height-content > h5 > a").text();
  var city = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-footer.d-flex.js-match-height-footer > div.card__menu-footer--location.flex-fill").text();
  var url = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-content.js-match-height-content > h5 > a").attr('href');
  var speciality = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-footer.d-flex.js-match-height-footer > div.card__menu-footer--price").text();
  name = name.replace(/\n/g,'').trim().toUpperCase();
  city = city.replace(/\n/g,'').trim();
  speciality = speciality.replace(/\n/g,'').trim();
  if(name != '') /* on place les informations du restaurant si il existe */
  {
  tab.push({name,city, url, speciality});
  }
  }
  return tab
};



 /* Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */

module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};

/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  
};

