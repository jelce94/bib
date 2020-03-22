/* eslint-disable no-console, no-process-exit */
const axios = require('axios');
const cheerio = require('cheerio');
const michelin = require('./michelin');
const maitre = require('./maitre');
var fileSystem = require( "fs" );
var JSONStream = require( "JSONStream" );



function WriteJson(tab, file)
{
	console.log("Get ready !!!");
	var str = JSON.stringify(tab);
	fs.writeFile(file, str, function(err){
		if(err) throw err;
		console.log('Done!');
	});
}


function ParseToJson(tab, file)
{	
	console.log(tab);
	var transformStream = JSONStream.stringify();
    var outputStream = fileSystem.createWriteStream( __dirname + file );
	transformStream.pipe( outputStream );
	tab.forEach( transformStream.write );
  	transformStream.end();

}

/* Function sandbox for all pages in guide michelin */

async function sandbox (searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/') {
   let bib_gourmand = [];
    let temp = searchLink;
    const one = 1;
    let first = searchLink + one.toString();  // Url du site de la première page
    console.log(`🕵️‍♀️  browsing ${first} source`); 
    const restaurant1 = await michelin.scrapeRestaurant(first); 
    // Recherche des informations contenu dans l'Url + stocke les informations sous forme de tableau 
    bib_gourmand = restaurant1; // ajout des informations du 1 er restaurant
    //console.log(tab);
    //tab.forEach(restau => tab2.push(restau));
    // Boucle pour faire une recherche sur les 14 autres pages 
    for(let i=2;i <= 15;i++) // 15
    {
      temp += i.toString() + "/";
      console.log(`🕵️‍♀️  browsing ${temp} source`);

      let restaurant = await michelin.scrapeRestaurant(temp);
      //restaurant.forEach(restau => tab.push(restau));
      bib_gourmand = bib_gourmand.concat(restaurant);
      temp = searchLink;

    }
    //tab.forEach(element => tab2.push(element));
    //console.log(tab);
    //ParseToJson(tab, '/bib-gourmand.json'); // exporte les informations dans un fichier JSON 
    console.log('done'); 
    return bib_gourmand;
  	
} 

/* Function sandbox for all pages in Maitre restaurateurs */

async function sandbox2 (searchLink = 'https://www.maitresrestaurateurs.fr/profil/') {
	var maitreRestaurant = [];
	for(var i = 1; i <= 1000; i++) // 6000
	{
			console.log(`🕵️‍♀️  browsing ${searchLink+i} source`); 
			let restaurant = await maitre.scrapeRestaurant(searchLink+i+"/");
			restaurant.forEach(restau => maitreRestaurant.push(restau));
	}
	//console.log(maitreRestaurant);
	//ParseToJson(bib_gourmand, '/maitre.json');
	console.log("Done !")
	return maitreRestaurant;
}

async function main(searchLink)
{
	var bib_gourmand =  await sandbox(searchLink); 
	var maitreRestaurants = await sandbox2(searchLink);
	console.log(bib_gourmand);
	console.log(maitreRestaurants);
	var bib_maitre = []; // Maitrerestaurants with a bib_gourmand distinction
	let bibLength = bib_gourmand.length;
	let maitreLength = maitreRestaurants.length;
	for(let i = 0;i < maitreLength;i++)
	{
		for(let j = 0;j < bibLength;j++)
		{
			if(bib_gourmand[j].name === maitreRestaurants[i].name)
			{
				bib_maitre.push(maitreRestaurants[i]);
			}
		}
	}
	//ParseToJson(bib_maitre, '/my-app/src/bib_maitre2.json');
}

const [,, searchLink] = process.argv;
main(searchLink);
