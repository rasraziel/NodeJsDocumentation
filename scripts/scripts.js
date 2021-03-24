class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="navbar navbar-expand-sm container-fluid text-center" id="myFooter">
            <li class="list-inline-item footer-copyright text-center py-1" >
                <img src="./images/email.jpg"></img>mail@mail.dk
            </li>
            <li class="list-inline-item footer-copyright text-center py-1" >
                <img src="./images/phone.png"></img> +45 512 156 84
            </li>
            <li class="list-inline-item footer-copyright text-center py-1" > <span style="color: white">CVR:</span> 35698425</li>
            <li class="list-inline-item footer-copyright text-center py-1" >
                <img src="./images/address.png"></img> H.C. Andersens vej, 1952 Frederiksberg C
            </li>
            <li class="list-inline-item footer-copyright text-center py-1" > <span style="color: white">2021</span> 
                <a className="social-icon text-xs-center" target="_blank" href="https://nodejs.org/en/"> nodejs.org</a>
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
     <li><a href="">Home</a></li>
     <li><a href="getting-started">Getting Started</a></li>
     <li><a href="js">Javascript</a></li>
     <li><a href="node-modules">Node Modules</a></li>
     <li><a href="rest-api">REST API</a></li>
     <li><a href="express">Express</a></li>
   </ul>
 </div>
</div>
<div class="switch">
          <input onclick="darker()" type="checkbox" class="switch__input" id="Switch">
          <label class="switch__label" for="Switch">
              <span class="switch__indicator"></span>
              <span class="switch__decoration"></span>
          </label>
      </div>
</nav>`;
    }
  }
  customElements.define('my-navbar', MyNavBar);

 
  //Navigation menu highlighting tab and night/light mode detection
  $(document).ready(async function() {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
    if(await getDark()){
      $("#Switch").prop("checked", false);
      $('body').addClass("dark-mode");
      $('h1.typed-title').addClass("dark-mode");
      $('div.sidenav').addClass("dark-mode");
      $('div.span4').addClass("dark-mode");
      $('footer.navbar').addClass("dark-mode");
      $('h4.divider2').addClass("dark-mode");
    }else{
      $("#Switch").prop("checked", true);
      $('body').removeClass('dark-mode');
      $('h1.typed-title').removeClass("dark-mode");
      $('div.sidenav').removeClass("dark-mode");
      $('div.span4').removeClass("dark-mode");
      $('footer.navbar').removeClass("dark-mode");
      $('h4.divider2').removeClass("dark-mode");
    }
  });

  // Toggle night/light mode
  async function darker() {
    
    await setDark(!(await getDark()));

    let body = document.body;
    let h1 = document.getElementById("typed-title");
    let links = document.getElementById("sidenav");
    let main_content = document.getElementById("span4");
    let footer = document.getElementById("myFooter");
    let divider = document.getElementById("divider");
  
    
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    links.classList.toggle("dark-mode");
    main_content.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    divider.classList.toggle("dark-mode");
  
    
  }

  async function getDark(){
    return JSON.parse(localStorage.getItem("isDark"));
  };

  async function setDark(value){
    localStorage.setItem("isDark", value);
  };





//ParticlesJS loaded only if it's not Firefox on Windows because of lag - main logo changes css
if(!(navigator.userAgent.indexOf("Firefox") != -1 && navigator.platform.indexOf('Win')!= -1)){
  window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 100,
      sizeVariations: 10,
      speed:2,
      connectParticles: true,
      color: '#382D69'
    });
  };
} else {
  $(document).ready(function() {
    $('canvas.background').removeClass('background');
    $('img.node-logo').addClass('firefox-win'); 
  });
}

// Button to get to top of page function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dynamic animation time css property based on length of title so the typing speed is the same
$(document).ready(function() {
   let length = $("h1.typed-title").text().length;
   $("h1.typed-title").css({
    'animation' : 'typing ' + length/9.43 + 's steps(300, end) forwards,  blink-caret 999ms step-end ' + length/9.43 + 's infinite'
  });
});
