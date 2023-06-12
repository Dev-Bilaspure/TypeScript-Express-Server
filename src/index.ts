import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.json("This is express with typesccript!!!!!!!!!!!!!");
})

app.listen(8000, () => {
    console.log('Listening to port 8000');
}) 