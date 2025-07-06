const newman = require('newman');

const environment = require('./environnement.json'); // chemin relatif à ton script

const collections = [
  { file: './collection.json', report: 'rapport.html' }
];

collections.forEach(({ file, report }) => {
  newman.run({
    collection: require(`./${file}`),
    environment: environment,
    reporters: ['cli', 'html'],
    reporter: {
      html: {
        export: `./rapports/${report}`
      }
    }
  }, (err) => {
    if (err) {
      console.error(`❌ Erreur dans la collection ${file}`, err);
    } else {
      console.log(`✅ Collection terminée : ${file}`);
    }
  });
});
