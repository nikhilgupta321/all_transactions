const express = require('express');
const router = express.Router();
// const itemController = require('../controllers/itemController');
const itemController = require('../controllers/controllers');

// Get all items
// router.route('/items').get(itemController.getAllItems)
router.route('/items').get(itemController.getAllItems)

// Get a specific item by ID
router.get('/items/:transactionid', itemController.getItemById);

// Add a new item
router.post('/items', itemController.addItem);

// Update an item
router.put('/items/:transactionid', itemController.updateItem);

// Delete an item
router.delete('/items/:transactionid', itemController.deleteItem);

module.exports = router;



// name - varchar(255), inputFild
// email - varchar(255), inputFild
// phone - varchar(255), inputFild
// amount - DECIMAL(10, 2), inputFild
// journal - text, inputFild
// refnumber - text, inputFild
// title - text, inputFild
// transactionid - int(11),
//   txnid - varchar(255),
//   ctxnid - varchar(255),
//   address - text,
//   country - varchar(255),
//   currency - char(3),
//   paymenttypes - set('DOI Charge', 'Hard Copy Charge',
//     'Journal Maintenance', 'Membership Charge',
//     'Parcel&sol;Post Charge', 'Publication Charge', '
//     Publication Charge with Hard Copy',
// 'Subscription Charge', 'Other'),

//   paymentmode - varchar(255),
//   status - varchar(255),
//   done -enum('true', 'false'),
//     txncode - int(11)
// secret - varchar(255),
//   secretkey - varchar(255),
//   creation - datetime,
//   updated_by - varchar(100),
//   updated_at - datetime,
//   paymenttype - varchar(255),
//   isused - enum('Y', 'N'),
//     remark - text