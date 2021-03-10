class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="navbar navbar-expand-sm container-fluid text-center">
            <li class="list-inline-item footer-copyright text-center py-1" >
                <img src="./images/email.jpg"></img>kea@kea.dk
            </li>
            <li class="list-inline-item footer-copyright text-center py-1" >
                <img src="./images/phone.png"></img> +45 46460000
            </li>
            <li class="list-inline-item footer-copyright text-center py-1" > <span style="color: white">CVR:</span> 31656206</li>
            <li class="list-inline-item footer-copyright text-center py-1" >
                <img src="./images/address.png"></img> Guldbergsgade 29N, 2200 København N
            </li>
            <li class="list-inline-item footer-copyright text-center py-1" > <span style="color: white">2021</span> 
                <a className="social-icon text-xs-center" target="_blank" href="https://kea.dk/"> kea.dk</a>
            </li>
        </footer>`;
    }
  }
  customElements.define('my-footer', MyFooter);

  class MyNavBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a class="navbar-brand" href="/"><img class="logo" src="./images/logo.png"></img></a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
   <ul class="nav navbar-nav">
     <li><a href="/">Home</a></li>
     <li><a href="/getting-started">Getting Started</a></li>
     <li><a href="/js">Javascript</a></li>
     <li><a href="/node-modules">Node Modules</a></li>
     <li><a href="/rest-api">REST API</a></li>
     <li><a href="/express">Express</a></li>
   </ul>
 </div>
</div>
</nav>`;
    }
  }
  customElements.define('my-navbar', MyNavBar);

 
  //Navigation menu highlighting tab
  $(document).ready(function() {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
  });



//ParticlesJS loaded only if it's not Firefox on Windows because of lag
if(!(navigator.userAgent.indexOf("Firefox") != -1 && navigator.platform.indexOf('Win')!= -1)){
  window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 100,
      sizeVariations: 10,
      speed:2,
      connectParticles: true,
      color: '#a020f0'
    });
  };
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}