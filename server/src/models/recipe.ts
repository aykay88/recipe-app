import {Schema, model} from 'mongoose';

const RecipeScheme = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    category: {
        type: String
    },
    ingreedients: [
        {type: String}
    ]
});

export const Recipe = model('recipe', RecipeScheme);


