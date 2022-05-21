let userName = prompt('Enter your first name:')

let content = `
  <main>
    <h1>On The Farm</h1>
    <footer>
      <h3>Read these articles about horses, cows, and chickens. Then click on a tab and test your knowledge.</h3>
      <a href="https://spca.bc.ca/news/fun-facts-about-horses/">10 fun horse facts!</a>
      <br>
      <a href="https://www.instructables.com/Saddling-a-Horse-the-Western-Way/">Saddling a Horse</a>
      <br>
      <a href="https://www.konnecthq.com/cow-facts/">Cow Facts</a>
      <br>
      <a href="https://www.fourpawsusa.org/campaigns-topics/topics/farm-animals/10-amazing-facts-about-cattle">Dairy Cows</a>
      <br>
      <a href="https://www.fourpawsusa.org/campaigns-topics/topics/farm-animals/10-facts-about-chickens">10 fun chicken facts!</a>
      <br>
      <a href="https://www.chickensandmore.com/chicken-facts/">25 amazing facts about chickens</a>
    </footer>
    <h3>Think you know everything there is to know about farm animals? Then let's test your knowledge, ${userName}. </h3>
    <div class="flex-container"></div>
        <div id="horse">
          <img src="
            https://images.pexels.com/photos/1236028/pexels-photo-1236028.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="People riding a horses on beach." width="300" height="300">
          <button><a href="./horse.html">Horses</a></button>
        </div>   
        <div id="cow">
          <img src="https://images.pexels.com/photos/4488405/pexels-photo-4488405.jpeg?    auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Curious calf by fence post" width="300" height="300">
          <button><a href="./cow.html">Cows</a></button>
        </div> 
        <div id="chickens">
          <img src="https://images.pexels.com/photos/840111/pexels-photo-840111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Multiple chickens in a coop" width="300" height="300">
          <button><a href="./chicken.html">Chickens</a></button>
        </div>
    </div>
  </main>`;

    document.body.innerHTML = content;

    
    

