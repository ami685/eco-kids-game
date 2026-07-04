import GlassBottle from "../images/wine-bottle.svg";
import AppleCore from "../images/apple-core.svg";
import CardboardBox from "../images/cardboard-box.svg";
import CoffeeCup from "../images/coffee-cup2.svg";
import DrinksCan from "../images/drinks-can.svg";
import MilkCarton from "../images/milk-carton.svg";
import Newspaper from "../images/newspaper.svg";
import Papers from "../images/paper.svg";
import PlasticBag from "../images/plastic-bag.svg";
import PlasticBottle from "../images/plastic-bottle.svg";
import Shirt from "../images/shirt.svg";
import SweetWrapper from "../images/sweet-wrapper.svg";
import TeaBag from "../images/tea-bag.svg";
import TreeLeaves from "../images/leaves.svg";
import Grass from "../images/grass-and-yard-clippings.svg";
import Cellphone from "../images/cellphone.svg";
import MotorOil from "../images/motor-oil.svg";
import Furniture from "../images/furniture.svg";
import DVDCDTape from "../images/dvd-cd-vcr-tape.svg";
import PensMarkers from "../images/pens_and_markers.svg";
import AlkalineBattery from "../images/alkaline-batteries.svg";
import PlasticDetergentBottle from "../images/plastic-detergent-bottles.svg";
import PlasticUtensils from "../images/plastic-utensils.svg";
import IceCreamContainers from "../images/ice-cream-containers.svg";
import TinCan from "../images/tin-can.svg";
import Straw from "../images/straw.png";
import Can from "../images/can.png";
import Apple from "../images/apple.png";
import MilkBottle from "../images/milk_bottle.png";
import NewsPaper from "../images/newspaper.png";
import WaterBottle from "../images/water_bottle.png";
import PopsicleStick from "../images/popsicle_stick.png";
import PizzaBox from "../images/pizza_box.png";
import GreasyPizzaBox from "../images/greasy_pizza_box.png";
import ToiletRoll from "../images/toilet_roll.png";
import PlasticBagNew from "../images/plastic_bag.png";
import Letter from "../images/letter.png";
import Ketchup from "../images/ketchup.png";
import IceCreamTubCardboard from "../images/iceCreamTubCardboard.png";
import IceCreamTubPlastic from "../images/iceCreamTubPlastic.png";
import GlassBottleNew from "../images/glass_bottle.png";
import Chips from "../images/chips.png";
import CoffeeCupNew from "../images/coffeeCup.png";
import CoffeeCupOnlyCup from "../images/coffeeCupOnlyCup.png";
import CoffeeCupOnlyLid from "../images/coffeeCupOnlyLid.png";

const items = [
  {
    name: "Bouteilles en Verre",
    src: GlassBottle,
    bin: "recycling",
    fact: "Les familles utilisent environ 330 bouteilles et pots en verre chaque année"
  },
  {
    name: "Tasses à Café",
    src: CoffeeCup,
    bin: "general waste",
    fact: "Vous pouvez parfois retourner les tasses à café au magasin pour le recyclage!"
  },
  {
    name: "Journaux",
    src: Newspaper,
    bin: "recycling",
    fact: "Il faut un arbre pour faire 230 journaux ou magazines!"
  },
  {
    name: "Sachets de Thé",
    src: TeaBag,
    bin: "food compost",
    fact: "Les sachets de thé peuvent être transformés en compost pour vos plantes!"
  },
  {
    name: "Trognons de Pomme",
    src: AppleCore,
    bin: "food compost",
    fact: "Les restes de nourriture peuvent être utilisés pour nourrir les animaux!"
  },
  {
    name: "Boîtes en Carton",
    src: CardboardBox,
    bin: "recycling",
    fact: "Aplatissez les boîtes en carton avant de les jeter!"
  },
  {
    name: "Canettes de Boisson",
    src: DrinksCan,
    bin: "recycling",
    fact:
      "Une canette de boisson recyclée pourrait être de retour en magasin en 60 jours!"
  },
  {
    name: "Briques de Lait",
    src: MilkCarton,
    bin: "recycling",
    fact:
      "Les briques de boisson peuvent généralement être recyclées, mais pas toujours... vérifiez les règles de votre région!"
  },
  {
    name: "Papiers",
    src: Papers,
    bin: "recycling",
    fact: "Le papier non contaminé va toujours dans la poubelle de recyclage."
  },
  {
    name: "Sacs en Plastique",
    src: PlasticBag,
    bin: "general waste",
    fact: "Si vous avez un sac réutilisable, vous n'aurez pas besoin de tant de sacs en plastique!"
  },
  {
    name: "Bouteilles en Plastique",
    src: PlasticBottle,
    bin: "recycling",
    fact: "Il peut falloir 500 ans pour que le plastique se décompose complètement!"
  },
  {
    name: "Vêtements",
    src: Shirt,
    bin: "special programs",
    fact: "Vous pouvez donner vos vieux vêtements aux magasins de charité ou aux bacs de recyclage de vêtements!"
  },
  {
    name: "Emballages de Bonbons",
    src: SweetWrapper,
    bin: "general waste",
    fact:
      "Chaque année, nous jetons assez de plastique pour faire le tour du monde 5 fois!"
  },
  {
    name: "Boîtes de Conserve",
    src: TinCan,
    bin: "recycling",
    fact: "Les aliments en conserve peuvent durer deux ans!"
  },
  {
    name: "Paille",
    src: Straw,
    bin: "general waste",
    fact: "Les pailles sont faites de plastique, mais elles sont trop petites pour les installations de recyclage."
  },
  {
    name: "Canettes en Aluminium",
    src: Can,
    bin: "recycling",
    fact: "Les canettes en aluminium sont 100% recyclables."
  },
  {
    name: "Apple",
    src: Apple,
    bin: "food compost",
    fact: "Food waste cannot be recycled. To reduce your food waste, build a compost bin!"
  },
  {
    name: "Milk Bottle",
    src: MilkBottle,
    bin: "recycling",
    fact: "If your milk bottle is made out of plastic, put it in the recycling bin."
  },
  {
    name: "Newspaper",
    src: NewsPaper,
    bin: "recycling",
    fact: "Uncontaminated paper always goes into the recycling bin."
  },
  {
    name: "Water Bottle",
    src: WaterBottle,
    bin: "recycling",
    fact: "If your water bottle is made out of plastic, always put it in the recycling bin."
  },
  {
    name: "Popsicle Stick",
    src: PopsicleStick,
    bin: "general waste",
    fact: "Popsicle sticks are already made out of recycled materials, so it can’t be recycled again!"
  },
  {
    name: "Pizza Box",
    src: PizzaBox,
    bin: "recycling",
    fact: "Pizza boxes are 100% recyclable if they’re not contaminated."
  },
  {
    name: "Greasy Pizza Box",
    src: GreasyPizzaBox,
    bin: "general waste",
    fact: "Greasy and contaminated items cannot go into the recycling bin!"
  },
  {
    name: "Toilet Roll",
    src: ToiletRoll,
    bin: "recycling",
    fact: "Toilet rolls are made out of cardboard which is 100% recyclable!"
  },
  {
    name: "Plastic Bag",
    src: PlasticBagNew,
    bin: "general waste",
    fact: "Plastic bags are no good for recycling bins, but you can drop them off in a REDcycle bin if there is one near you!"
  },
  {
    name: "Letter",
    src: Letter,
    bin: "general waste",
    fact: "If your letter still has the thin plastic film over it, it cannot be placed in the recycling bin."
  },
  {
    name: "Ketchup",
    src: Ketchup,
    bin: "recycling",
    fact: "Ketchup bottles are 100% recyclable."
  },
  {
    name: "Ice Cream Tub Cardboard",
    src: IceCreamTubCardboard,
    bin: "general waste",
    fact: "Cardboard ice-cream containers are contaminated and cannot be recycled."
  },
  {
    name: "Ice Cream Tub Plastic",
    src: IceCreamTubPlastic,
    bin: "recycling",
    fact: "Plastic ice-cream containers can be recycled, but make sure to rinse them before you put it into the recycling bin!"
  },
  {
    name: "Glass Bottle",
    src: GlassBottleNew,
    bin: "recycling",
    fact: "Glass bottles are 100% recyclable."
  },
  {
    name: "Chips",
    src: Chips,
    bin: "general waste",
    fact: "Snack packaging is made out of soft plastic and cannot be recycled, but you can drop them off in a REDcycle bin if there is one near you!"
  },
  {
    name: "Coffee Cup",
    src: CoffeeCupNew,
    bin: "general waste",
    fact: "Takeaway coffee cups cannot be put into the recycling bin as it is! Some parts are recyclable whilst other parts are not!"
  },
  {
    name: "Coffee Cup Only",
    src: CoffeeCupOnlyCup,
    bin: "general waste",
    fact: "The cups of coffee cups usually have a layer of wax in it which is not recyclable!"
  },
  {
    name: "Coffee Cup Led Only",
    src: CoffeeCupOnlyLid,
    bin: "recycling",
    fact: "The lids of takeaway coffee cups are recyclable alone."
  },
  {
    name: "Tree Leaves",
    src: TreeLeaves,
    bin: "yard waste",
    fact: "Leaves can be composted and turned into nutrient-rich soil!"
  },
  {
    name: "Grass Clippings",
    src: Grass,
    bin: "yard waste",
    fact: "Grass clippings can be composted and used as mulch!"
  }, 
  {
    name: "Cellphone",
    src: Cellphone,
    bin: "special programs",
    fact: "Old cellphones can be recycled at special e-waste recycling points!"
  }, 
  {
    name: "Motor Oils",
    src: MotorOil,
    bin: "special programs",
    fact: "Used motor oils can be recycled at special collection points!"
  },
  {
    name: "Furniture",
    src: Furniture,
    bin: "special programs",
    fact: "Old furniture can be recycled or donated to local charities!"
  },
  {
    name: "DVD/CD/VCR Tape",
    src: DVDCDTape,
    bin: "general waste",
    fact: "Old DVDs, CDs and VCR tapes cannot be recycled in regular recycling bins."
  }, 
  {
    name: "Pens and Markers",
    src: PensMarkers,
    bin: "general waste",
    fact: "Used pens and markers go in the general waste bin as they cannot be recycled."
  }, 
  {
    name: "Alkaline Batteries",
    src: AlkalineBattery,
    bin: "general waste",
    fact: "Alkaline batteries can be disposed of in the general waste bin, but consider using rechargeable batteries to reduce waste!"  
  }, 
  {
    name: "Plastic Detergent Bottles",
    src: PlasticDetergentBottle,
    bin: "recycling",
    fact: "Plastic detergent bottles are 100% recyclable. Remember to rinse them out before recycling!"
  }, 
  {
    name: "Plastic Utensils",
    src: PlasticUtensils,
    bin: "general waste",
    fact: "Plastic utensils cannot be recycled in regular recycling bins."
  }, 
  {
    name: "Ice Cream Containers",
    src: IceCreamContainers,
    bin: "general waste",
    fact: "Ice cream containers are often contaminated and cannot be recycled."
  }

];

export default items;
