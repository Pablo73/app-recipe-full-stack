'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('meals', 
    [
      {
        str_area: 1, 
        str_category: 1, 
        str_image_source: null,
        str_instructions: 'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later'
        + 'In a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.'
        + 'Add the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.'
        + 'Immediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.'
        + 'After it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.'
        + 'After the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.'
        + 'Serve with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.',
        str_meal_thumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
        str_meal: 'Corba',
        str_tags: 'Soup',
        str_youtube: 'https://www.youtube.com/watch?v=VVnZd8A84z4'
      },
      {
        str_area: 2, 
        str_category: 2, 
        str_image_source: null,
        str_instructions: 'STEP 1'
        + 'TO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.'
        + ''
        + 'STEP 2'
        + 'Spread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.'
        + ''
        + 'STEP 3'
        + 'Add the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.'
        + ''
        + 'STEP 4'
        + 'Roll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.'
        + ''
        + 'STEP 5'
        + 'Stick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.'
        + ''
        + 'STEP 6'
        + 'Wrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.'
        + ''
        + 'STEP 7'
        + 'TO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.'
        + ''
        + 'STEP 8'
        + 'Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.'
        + ''
        + 'STEP 9'
        + 'Tip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.'
        + ''
        + 'STEP 10'
        + 'TO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.'
        + ''
        + 'STEP 11'
        + 'Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.',
        str_meal_thumb: 'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',
        str_meal: 'Sushi',
        str_tags: null,
        str_youtube: 'https://www.youtube.com/watch?v=ub68OxEypaY'
      },
      {
        str_area: 3, 
        str_category: 3, 
        str_image_source: null,
        str_instructions: '0.	Marinate beef in soy sauce, lemon (or calamansi), and ground black pepper for at least 1 hour. Note: marinate overnight for best result'
        + '1.	Heat the cooking oil in a pan then pan-fry half of the onions until the texture becomes soft. Set aside'
        + '2.	Drain the marinade from the beef. Set it aside. Pan-fry the beef on the same pan where the onions were fried for 1 minute per side. Remove from the pan. Set aside'
        + '3.	Add more oil if needed. Saute garlic and remaining raw onions until onion softens.'
        + '4.	Pour the remaining marinade and water. Bring to a boil.'
        + '5.	Add beef. Cover the pan and simmer until the meat is tender. Note: Add water as needed.'
        + '6.	Season with ground black pepper and salt as needed. Top with pan-fried onions.'
        + '7.	Transfer to a serving plate. Serve hot. Share and Enjoy!',
        str_meal_thumb: 'https://www.themealdb.com/images/media/meals/4pqimk1683207418.jpg',
        str_meal: 'Bistek',
        str_tags: null,
        str_youtube: 'https://www.youtube.com/watch?v=xOQON5_S7as'
      },
      {
        str_area: 4, 
        str_category: 4, 
        str_image_source: null,
        str_instructions: 'oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.'
        + 'Grind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.'
        + 'Shape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.'
        + 'Heat at least 1½-inches of oil over medium heat to 365 degrees.'
        + 'Fry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.',
        str_meal_thumb: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
        str_meal: 'Tamiya',
        str_tags: null,
        str_youtube: 'https://www.youtube.com/watch?v=mulqW-J3Yy4'
      },
    ], {});
      },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('meals', null, {});
  }
};
