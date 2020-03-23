import React from 'react';
import './App.css';
import './logoMR.jpeg';


const bibMaitre  =  require('./bib_maitre.json');

function App() {
  return (
    <div className="App">
       <header className="App-header">
       <nav class="navbar  navbar-fixed-top navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="./app.js" title="">
          <img src="logoMR.jpeg" class="navbar-logo-img" alt=""/>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="./app.js" title="" class="active">Home</a></li>
          <li><a href="https://guide.michelin.com/fr/fr/restaurants/bib-gourmand" title=""> Bib Gourmet</a></li>
          <li><a href="https://www.maitresrestaurateurs.fr/" title="">Maitre Restaurateurs</a></li>
          <li>
            <p>
              <a href="./src/bib_maitre.json" download="./bib_maitre.json" class="btn btn-primary navbar-btn">Télécharger le Json</a>
            </p>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
        </header> 
        <body>
        <div class="white-text-container background-image-container">
    <div class="opacity"></div>
    <div class="container">
        <div class="row">
           
            <div class="col-md-6">
                <h1>Maitre Restaurants with bib gourmet distinction</h1>
                <p>All the restaurants in maitrerestaurateurs website with a bib gourmet distinction are displayed below. </p>
            </div>

        </div>
    </div>
</div>
<br/>
        <div class="test">
    <div >
      {bibMaitre.filter(restau => restau.name).map(filteredRestau => (
        <div id="divisionRestaurant">
          <p>Name: <strong>{filteredRestau.name} </strong><br/></p>
          <p>City: {filteredRestau.city}<br/></p>
          <p>Address: {filteredRestau.address}<br/></p>
          <p>Url: <a className="App-link" href="${filteredRestau.url}">{filteredRestau.url}</a><br/></p>
          
        </div>
      ))}
    </div>
      </div>
  <br/>    
      <div class="section-container background-color-container white-text-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="text-center">
                    <h2>Distinctions</h2>
                    <p> Le titre de maître restaurateur, créé en 2007, est décerné par l’État, 
                      au travers des préfets, à partir d'un audit réalisé par un organisme indépendant. 
                      Il s'agit du seul titre officiel pour la restauration, désormais inscrit dans la loi
                       ce qui lui confère une importance supplémentaire. 
                       Il met en avant des compétences professionnelles reconnues et 
                       l'engagement à travailler des produits bruts, essentiellement frais. 
                       Ce titre permet au consommateur d'identifier les restaurateurs de métier, et de les
                        sécuriser concernant la nature de la prestation. </p>
                      <p>En 1997 apparaît le Bib Gourmand, qui récompense un repas soigné à prix modéré. Un « Bib hôtel » signale les établissements offrant une prestation de qualité à prix raisonnable</p>
                    <a href="./download.html" title="" class="btn btn-primary btn-lg">Liste des restaurants</a>
                </div>
            </div>
        </div>
     </div>
 </div>

 <footer>
    <div class="section-container footer-container">
        <div class="container">
            <div class="row">
                    <div class="col-md-4">
                        <h4>About us</h4>
                        <p>Chasle Jean-Luc - IBO CORE 2 / Web Applications Architectures</p>
                    </div>

                    <div class="col-md-4">
                        <h4>Do you like ? Share this !</h4>
                        <p>
                            <a href="https://facebook.com/" class="social-round-icon white-round-icon fa-icon" title="">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                          <a href="https://twitter.com/" class="social-round-icon white-round-icon fa-icon" title="">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="https://www.linkedin.com/" class="social-round-icon white-round-icon fa-icon" title="">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </p>
                         </div>

                    <div class="col-md-4">
                        <h4>Subscribe to newsletter</h4>
                        
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-control footer-input-text"/>
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-primary btn-newsletter ">OK</button>
                                </div>
                            </div>
                        </div>


                    </div>
            </div>
        </div>
    </div>
</footer>
        </body>
        
  
      </div>
  );
} 

export default App;