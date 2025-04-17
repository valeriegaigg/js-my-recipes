const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

//add a new recipe
router.post('/recipe/add', async (request, response) => {
    const { title, image, description, ingredients, instructions, prepTime, difficulty } = request.body

    const id = recipes.length + 1
   
    recipes.push({ id, title, image, description, ingredients, instructions, prepTime, difficulty })
    response.send({ id, title, image, description, ingredients, instructions, prepTime, difficulty })
     
})

//get a specific recipe by id
router.get('/recipe/:id', async (request, response) => {
    const { id } = request.params
    const found = recipes.find(r => r.id.toString() === id)
    response.send(found)
   
})

//get id, title, prepTime, and difficulty for all recipes
router.get('/', async (request, response) => {
    const all = recipes.map(({id, title, prepTime, difficulty}) => {
        return {id, title, prepTime, difficulty}
    })
    
    response.send(all)
})








module.exports = router