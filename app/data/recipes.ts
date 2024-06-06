import { Recipe } from "@/app/lib/interfaces";

const recipes: Recipe[] = [
  {
    id: "chocolate-cookies",
    title: "Chocolate Cookies",
    thumbnail: "/cookie.jpg",
    ingredients: [
      "140 grams of butter at room temperature",
      "40 grams of melted butter",
      "120 grams of brown sugar",
      "90 grams of refined sugar",
      "1 egg",
      "1 teaspoon of baking powder",
      "0.75 teaspoon of bicarbonate",
      "0.75 teaspoon of salt",
      "250 grams of wheat flour",
      "vanilla essence or paste to taste",
      "180 grams of chopped chocolate",
    ],
    process: [
      "In a small pan, heat 40 grams of butter over medium heat until golden. Transfer to a bowl and place in the fridge for 10 minutes to lower the temperature. Reserve.",
      "Place the remaining butter (140 grams) at room temperature in a large bowl and, using a spatula, mix and knead until it forms an ointment. Add the sugar and noisette butter and beat with a mixer or a whisk until creamy. Add the egg and vanilla and mix well. Reserve.",
      "Sift the flour with the salt and baking powder and chop the chocolate. The chocolate should be chopped unevenly so that there are larger and smaller pieces inside the cookies after baking.",
      "Gently incorporate the sifted flour with a spatula, alternating with the chopped chocolate.",
      "Shape the dough into a ball (approximately the size of a small scoop of ice cream), transfer to a baking tray lined with baking paper, leaving space between them, and refrigerate for at least 1 hour. It is important that the dough only goes into the fridge after it has been shaped.",
      "Tip: The dough balls can stay in the refrigerator for up to 2 days or 1 month in the freezer before baking.",
      "Bake in a preheated oven at 180 ºC for 12 to 15 minutes. The center of the cookie should still be soft when removed from the oven.",
      "Let cool before eating.",
    ],
  },
  {
    id: "carrot-cake-with-chocolate",
    title: "Carrot Cake with Chocolate",
    thumbnail: "/carrot-cake.jpg",
    ingredients: [
      "270 grams of carrot",
      "1 cup (200ml) of brown sugar",
      "1.5 cups of wheat flour",
      "0.5 cup of cornstarch",
      "1 spoon of baking powder",
      "3 eggs",
      "1 cup of corn oil",
      "4 spoons of cacao",
      "1 can of condensed milk",
      "1 can of milk cream",
    ],
    process: [
      "Grate the carrots and put them in a blender together with the oil, the eggs, and the sugar. Blend until you get a homogeneous cream and then transfer it to a larger bowl",
      "Add the wheat flour and the cornstarch. Mix everything a fouet and then add the baking power. Mix again.",
      "Grease the cake pan with butter and flour and pour the dough on it. Preheat the oven at 180 ºC and then put the cake inside for 15 to 20 minutes. After 15 minutes I use a toothpick to pierce the cake, when the toothpick comes out clean the dough is ready.",
      "Turn off the oven and take the cake out to cool. On cold days, do not take the cake out of the oven immediately to prevent it from sinking due to the thermal shock. Open the oven a little and let the cake cool slowly inside.",
      "In a small pan add the condensed milk, cacao and milk cream and stir constantly with a fouet until it thickens, but not too much.",
      "Pour the chocolate on top of the cake.",
      "Let cool before eating.",
    ],
  },
];

export default recipes;
