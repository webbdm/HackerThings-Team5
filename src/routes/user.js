import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.User.findAll();
    return res.send(users);
});

router.get('/:userId', (req, res) => {
    return res.send(users.find(user => user.id == req.params.userId));
});

router.post('/', (req, res) => {
    return res.send(`Received a POST HTTP method for ${req.params.itemId}`);
});

router.put('/:userId', (req, res) => {
    return res.send(`Received a PUT HTTP method for ${req.params.itemId}`);
});

router.delete('/:userId', (req, res) => {
    return res.send(`Received a DELETE HTTP method for ${req.params.itemId}`);
});

export default router;