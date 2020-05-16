
exports.seed = function(knex) {

      return knex('resources').insert([
          {project_id: 1, name: 'PC,or laptop',description:"OS/Windows"},
          {project_id: 1, name: 'Team and brain',description:"Min 2 people"},
      ]);
};
