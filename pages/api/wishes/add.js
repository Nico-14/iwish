import firebase from '../../../lib/firebase';

export default (req, res) => new Promise(async (resolve) => {
  if (req.method == 'POST' && 'wish' in req.body && req.body?.wish.trim().length > 6 && req.body?.wish.length <= 160) {
    try {
      await firebase.collection('wishes').add({
        wish: req.body.wish,
        date: new Date(),
      });
      res.status(200).json({ wish: req.body.wish });
      resolve();
    } catch (err) {
      console.log(err)
      res.status(401).end();
      resolve();
    }
  } else {
    res.status(400).end();
    resolve();
  }
})