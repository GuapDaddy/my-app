const path = require ('path')
const dbPath= path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema
    .hasTable('ingredients')
        .then((exists) => {
            if (!exists) { 
                return knex.shema.createTable('ingredients', (table) => {
                    table.increments('id').primary()
                    table.integer('ingredient')
                    table.integer('quantity')
            })
            .then(() => {
                console.log('Table\'Ingredients\'created')
            })
            .catch((error) => {
                console.log('there was an error creating table: ${error}')
            })
        }
    })
    .then(() => {
    consol.log('done')
    })
    .catch((error) => { 
        console.error('There was an error setting up the database: ${error}')
    })

knex.select('*').from('ingredients')
    .then(data => console.log('data:', data))
    .catch(err=>console.log(err))

module.exports = knex