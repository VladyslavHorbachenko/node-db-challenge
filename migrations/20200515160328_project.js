
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
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
          tbl.string('task',128)
              .notNullable()
          tbl.string('notes',128)
              .notNullable()
          tbl.boolean('completed')
              .defaultTo(false)
      })
      .createTable('resources',tbl => {
          tbl.increments()
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
          tbl.string('name',128)
              .notNullable()
          tbl.string('description',128)
              .notNullable()
      })
      .createTable('projects_resources',tbl => {
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')

          tbl.integer('resource_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('resources')
              .onUpdate('CASCADE')
              .onDelete('CASCADE')

          tbl.primary(['project_id','resource_id'])
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
