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
  var name = $(".infos-nom").text();
  var city = $(".infos-complement > a").text();
  var address = $(".section-item-right > span > #adresse_pro_1_map > #adresse_pro_1_map_tooltip > p > a").text()//.attr('href');
  var url = $(".section-item-right > a").text()
 
  name = name.replace(/\n/g,'').trim();
  city = city.replace(/\n/g,'').trim();
  address = address.replace(/\n/g,'').trim();
  tab.push({name, city, address, url});//,city, url, speciality});
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

