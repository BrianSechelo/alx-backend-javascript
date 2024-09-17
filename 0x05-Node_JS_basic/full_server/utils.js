const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const hashtable = {};
        let students = -1;
        for (const line of lines) {
          if (line.trim() !== '') {
            const columns = line.split(',');
            const field = columns[3];
            const firstname = columns[0];
            if (students >= 0) {
              if (!Object.hasOwnProperty.call(hashtable, field)) {
                hashtable[field] = [];
              }
              hashtable[field] = [...hashtable[field], firstname];
            }
            students += 1;
          }
        }
        resolve(hashtable);
      }
  });
  });
}

module.exports = readDatabase;
