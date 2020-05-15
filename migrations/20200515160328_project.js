
exports.up = function(knex) {
  return knex.schema
      .createTable('projects',tbl => {
          tbl.increments()
          tbl.string('project_name',128)
              .unique()
              .notNullable()
          tbl.string('description',128)
              .notNullable()
          tbl.boolean('completed')
              .defaultTo(false)
      })
      .createTable('tasks',tbl => {
          tbl.increments()
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
          tbl.string('task',128)
              .notNullable()
          tbl.string('notes',128)
              .notNullable()
          tbl.boolean('completed')
              .defaultTo(false)
      })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
