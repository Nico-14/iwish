import firebase from '../../../lib/firebase';

export default (req, res) => new Promise((resolve) => {
  const count = parseInt(req.query?.count);
  let ref;

  if (!isNaN(parseInt(req.query?.offset))) {
    ref = firebase.collection('wishes').orderBy('date', req.query?.order || 'desc').offset(parseInt(req.query.offset)).limit(isNaN(count) ? 5 : count)
  } else {
    ref = firebase.collection('wishes').orderBy('date', req.query?.order || 'desc').limit(isNaN(count) ? 5 : count)
  }
  ref.get().then((querySnapshot) => {
    res.status(200).json({
      wishes: querySnapshot.docs.map(doc => {
        doc = doc.data();
        return { wish: doc.wish, date: doc.date.toDate().getTime(), likes: doc.likes }
      }),
    });
    resolve();
  })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
      resolve();
    });
});

