const getDb = require('../services/db');

// artist controller func returning a 201 status code
exports.create = async (request, response) => {
    const db = await getDb();
    const { name, genre } = request.body;

    try {
        await db.query(`INSERT INTO Artist (name, genre) VALUES ('${name}', '${genre}')`);
    
        response.sendStatus(201);
      } catch (err) {
        response.sendStatus(500).json(err);
      }
    
      db.close();
    };
//     response.sendStatus(201)
//   };