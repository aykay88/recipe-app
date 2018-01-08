import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import {routes} from "./routes/api";


(async () => {
    const app = express();
    app.use(cors());

    await mongoose.connect('mongodb://test:test@ds239217.mlab.com:39217/recipedb');

    app.use(bodyParser.json());

    app.use('/api', routes);

    app.use((err, req, res, next) => {
        // console.error(err.stack)
        res.status(500).send({error: err.message});
    });

    app.listen(4000, () => {
        console.log('now listening to port 4000')
    });
})();

