
exports.up = function(knex) {

    return knex.schema
        .createTable('project', tbl => {
            tbl.increments();
            tbl.string('project_name', 128)
                .unique()
                .notNullable()
            tbl.string('description', 128)
                .notNullable()
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
            tbl.string('task', 128)
                .notNullable()
            tbl.string('notes', 128)
                .notNullable()
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
            tbl.string("name",128)
                .notNullable()
            tbl.string("description",128)
                .notNullable()
    })
};

exports.down = function(knex) {
  
};
