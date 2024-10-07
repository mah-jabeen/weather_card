document.write(`<h1 align="center"> Weather Information Services</h1> <hr>
    <p align="center"> Please do input from given examples!</p>
    `);

var weather = prompt(`Enter current cities: 
eg:
   hot,
   cold,
   fall,
   rainy,
   cloudy `).toLowerCase();

if (weather === "hot") {
  document.write(` <div class="card">
 <img src="assets/i'm-hot.gif" alt="Avatar" style="width:100%">
 <div class="container">
   <h4><b>Hot</b></h4>
       <p>The sun blazes fiercely, turning the air into a blanket of heat. Every breeze feels warm, offering little relief from the sweltering day.</p>
  </div>
 </div>`);
} else if (weather === "cold") {
  document.write(` <div class="card">
        <img src="assets/cold.gif" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>Cold</b></h4>
          <p>A sharp chill lingers in the air, turning every breath into a misty puff. The ground crunches underfoot, and a frosty breeze bites gently at uncovered skin. </p>
         </div>
        </div>`);
} else if (weather === "fall") {
  document.write(` <div class="card">
        <img src="assets/fall.gif" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>Fall</b></h4>
       <p>A gentle breeze carries the crisp scent of fallen leaves, as golden hues blanket the earth. The air turns cooler, inviting cozy moments under the warm autumn sun.</p>
         </div>
        </div>`);
} else if (weather === "rainy") {
  document.write(` <div class="card">
        <img src="assets/rainy.gif" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>Rainy</b></h4>
          <p>Raindrops dance against the windows, creating a soothing rhythm that fills the air. The sky is draped in shades of gray, as fresh, earthy scents rise from the rain-soaked ground. </p>
         </div>
        </div>`);
} else if (weather === "cloudy") {
  document.write(` <div class="card">
        <img src="assets/cloudy.gif" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>Cloudy</b></h4>
       <p>The sky is a canvas of soft, gray clouds, filtering the sunlight into a gentle, diffused glow. A calm stillness fills the air, as if the world is wrapped in a quiet, soothing blanket.</p>
         </div>
        </div>`);
} else {
  document.write(
    `<h2 align="center">Please write authentic information!! </h2>`
  );
}
