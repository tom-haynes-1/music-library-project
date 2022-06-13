const getDb = require('../services/db');

// create an artist controller func returning a 201 status code using the '.create' artistController
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

    // returns all artists currently in Artists table using the '.read' artistController

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

  // returns artist by artistId using the '.readById' artistController

  exports.readById = async (request, response) => {
      const db = await getDb();
      const { artistId } = request.params;

      const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [artistId]);

      if (!artist) {
          response.sendStatus(404)
      } else {
          response.status(200).json(artist)
      }

      db.close();
  }

  // updates artist by artistId using the '.update' artistController

  exports.update = async (req, res) => {
    const db = await getDb()
    const data = req.body
    const { artistId } = req.params
  
    try {
      const [
        { affectedRows }
      ] = await db.query('UPDATE Artist SET ? WHERE id = ?', [data, artistId])
  
      if (!affectedRows) {
        res.sendStatus(404);
      } else {
        res.status(200).send();
      }
    } catch (err) {
      res.sendStatus(500);
    }
  
    db.close();

  }

  // deletes artist by artistId using the '.destroy' artistController

  exports.destroy = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;

    try {
        console.log(db);
        const [ { affectedRows }, ] = await db.query('DELETE FROM Artist WHERE id = ?', [
          artistId]);
  
      if (!affectedRows) {
        res.sendStatus(404);
      } else {
        res.status(200).send();
      }
    } catch(err) {
        res.sendStatus(404);
    }
  
    db.close();

  }

