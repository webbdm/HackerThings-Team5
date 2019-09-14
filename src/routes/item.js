import { Router } from 'express';

const router = Router();


router.get('/', async (req, res) => {
    const items = await req.context.models.Item.findAll();
    return res.send(items);
});       

router.get('/:itemId', async (req, res) => {
    return res.send(await req.context.models.Item.findByPk(req.params.itemId));
});

router.post('/:itemId', (req, res) => {
    return res.send(`Received a POST HTTP method for ${req.params.itemId}`);
});

router.put('/:itemId', (req, res) => {
    return res.send(`Received a PUT HTTP method for ${req.params.itemId}`);
});

router.delete('/:itemId', (req, res) => {
    return res.send(`Received a DELETE HTTP method for ${req.params.itemId}`);
});

export default router;