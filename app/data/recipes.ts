interface Recipe {
  title: string;
  thumbnail: string;
  ingredients: string[];
  process: string[];
}

const recipes: Record<string, Recipe> = {
  "chocolate-cookies": {
    title: "Chocolate Cookies",
    thumbnail: "/cookie.jpg",
    ingredients: [
      "140 grams of butter at room temperature",
      "40 grams of melted butter",
      "120 grams of brown sugar",
      "90 grams of refined sugar",
      "1 large egg",
      "1 teaspoon of baking powder",
      "¾ teaspoon of bicarbonate",
      "¾ teaspoon of salt",
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
};

export default recipes;
