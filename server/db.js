const path = require ('path')
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema
    .hasTable('ingredient')
        .then((exists) => {
            if (!exists) { 
                return knex.schema.createTable ('ingredient', (table) => {
                    table.increments('id').primary()
                    table.string('ingredient')
                    table.integer('quantity')
            })
            .then(() => {
                console.log('Table\'ingredient\'created')
            })
            .catch((error) => {
                console.log(`there was an error creating table: ${error}`)
            })
        }
    })
    .then(() => {
    console.log('done')
    })
    .catch((error) => { 
        console.error(`There was an error setting up the database: ${error}`)
    })

knex.select('*').from('ingredient')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))

module.exports = knex