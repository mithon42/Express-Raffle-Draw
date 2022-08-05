const e = require('cors');
const router = require('express').Router();
const {sellBulkTicket, sellSingleTicket, findAll, findById, findByUsername, updateById, updateByUsername, deleteById, deleteByUsername, drawWinners} = require('./controllers')

// router.get('/t/:id')
// router.put('/t/:id')
// router.delete('/t/:id')
router.route('t/:id').get(findById).put(updateById).delete(deleteById); // Short hand


// router.get('/u/:username')
// router.put('/u/:username')
// router.delete('/u/:username')
router.route('u/username').get(findByUsername).put(updateByUsername).delete(deleteByUsername) // Short hand

router.post('/bulk', sellBulkTicket)
router.get('/draw', drawWinners)

// router.post('/')
// router.get('/')
router.route('/').get(findAll).post(sellSingleTicket); // Short hand



module.exports = router;