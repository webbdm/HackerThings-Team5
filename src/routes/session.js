import { Router } from 'express';

const router = Router();

const session = [{
    id: 1,
    userId: 1,
    token: 'abc'
}];

router.get('/', (req, res) => {
    return res.send(session);
});

router.post('/:sessionId', (req, res) => {
    return res.send(`Received a POST HTTP method for ${req.params.sessionId}`);
});

router.put('/:sessionId', (req, res) => {
    return res.send(`Received a PUT HTTP method for ${req.params.sessionId}`);
});

router.delete('/:sessionId', (req, res) => {
    return res.send(`Received a DELETE HTTP method for ${req.params.sessionId}`);
});

export default router;