
import "./index.css"
import "./App.css"
import omelette from "./assets/images/image-omelette.jpeg"
function App() {

  return (
    <>
      <div className="container">
        <img src={omelette} className="container-img" alt="img" />
        <div className="container-1">

          <h3 className="c-h3">Simple Omelette Recipe</h3>
          <div className="c-div">

            <p className="c-p">An easy and quick dish, perfect for any meal. this classic omelette combines beaten  eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables,  or meats.
            </p>
          </div>
        </div>
        <div className="preparation">

          <h4 className="p-h3">Preparation time</h4>
          <li className="p-li">Total</li>
          <li className="p-li">Preparation</li>
          <li className="p-li">Cooking</li>

        </div>
        <div className="i-div">

          <h4 className="i-h4">Ingredients</h4>
          <li className="i-li">2-3 large eggs</li>
          <li className="i-li">Pepper, to taste</li>
          <li className="i-li">1 tablespoon of butter or oil</li>
          <li className="i-li">Optional fillings: cheese, diced vegetables, cooked meats, herbs </li>

        </div>
        <div className="In">

          <h4 className="In-h3">Instructions</h4>
          <div className="In-div-center">
            <div className="mydiv">


              <li className="In-li"><span className="In-span">Beat the eggs:</span>
                In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture
              </li>
            </div>
          </div>
          <div className="In-div-center">
            <div className="mydiv">


              <li className="In-li"><span className="In-span">Heat the pan:</span>
                Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
            </div>
          </div>
          <div className="In-div-center">
            <div className="mydiv">


              <li className="In-li"><span className="In-span">Cook the omelette:</span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface
              </li>
            </div>
          </div>
          <div className="In-div-center">
            <div className="mydiv">


              <li className="In-li"><span className="In-span">Add fillings(optional):</span>
                When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette
              </li>
            </div>
          </div>
          <div className="In-div-center">
            <div className="mydiv">


              <li className="In-li"><span className="In-span">Fold and serve:</span>
                As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate
              </li>
            </div>
          </div>
          <div className="In-div-center">
            <div className="mydiv">


              <li className="In-li"><span className="In-span">Enjoy:</span>
                Serve hot, with addtional salt and pepper if needed.
              </li>
            </div>
          </div>

        </div>
        <div className="Ing">
          <h4 className="Ing-h4">Nutrition</h4>
          <p className="Ing-p">The table below shows nutritional values per serving without the additional fillings</p>
          <div class="nutrition-info">
            <p className="Ing-p-2">Calories</p>
            <p className="Ing-p-2">277kcal</p>
          </div>
          <div class="nutrition-info">
            <p className="Ing-p-2">Carbs</p>
            <p className="Ing-p-2">0g</p>
          </div>
          <div class="nutrition-info">
            <p className="Ing-p-2">Protein</p>
            <p className="Ing-p-2">20g</p>
          </div>
          <div class="nutrition-info">
            <p className="Ing-p-2">Fat</p>
            <p className="Ing-p-2">22g</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
