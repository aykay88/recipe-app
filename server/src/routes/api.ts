import * as express from 'express';
import {Recipe} from '../models/recipe'

export const routes = express.Router();

routes.get('/recipes/:name', (req, res, next) => {
    Recipe.find({}).where('name').equals(req.params.name).then((ninjas) => {
        res.send(ninjas);
    });
});

routes.get('/recipes/', (req, res, next) => {
    Recipe.find({}).then((ninjas) => {
        res.send(ninjas);
    });
});

routes.post('/recipes', async (req, res, next) => {
    const recipe = await Recipe.create(req.body).catch(next);
    //good practise to send back the created data
    try {
        res.send({recipe});
    }
    catch (err) {
        console.log(err.message);
    }
});

routes.put('/recipes/:id', (req, res, next) => {
    Recipe.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Recipe.findOne({_id: req.params.id}).then((recipe) => {
            res.send('updated entry: ' + recipe)
        });
    })
});

routes.delete('/recipes/:id', (req, res, next) => {
    Recipe.findByIdAndRemove({_id: req.params.id}).then((recipe) => {
        res.send('deleted entry: ' + recipe);
    })

});
