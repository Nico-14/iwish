import admin from 'firebase-admin';
import auth from './firebaseauth.json';
try {
  admin.initializeApp({
    credential: admin.credential.cert(auth),
    databaseURL: 'https://wishes-5bdaf.firebaseio.com'
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();