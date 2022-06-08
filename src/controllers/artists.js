const getDb = require('../services/db');

// create an artist controller func returning a 201 status code
exports.create = async (request, response) => {
    const db = await getDb();
    const { name, genre } = request.body;

    try {
        // await db.query(`INSERT INTO Artist (name, genre) VALUES ('${name}', '${genre}')`);

    await db.query('INSERT INTO Artist (name, genre) VALUES (?, ?)', [
      name,
      genre,
    ]);  // preventing SQL injection by providing '?' parameters to form an array
    
        response.sendStatus(201);
      } catch (err) {
        response.sendStatus(500).json(err);
      }
    
      db.close();
    };

    exports.read = async (request, response) => {
        const db = await getDb();

    try {
        const [artists] = await db.query('SELECT * FROM Artist');
        console.log([artists]);

    response.status(200).json(artists);
    } catch (err) {
    response.status(500).json(err);
    }
    db.close();
  };