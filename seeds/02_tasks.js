
exports.seed = function(knex) {
      return knex('tasks').insert([
        {project_id: 1, task:"Test_Task",notes:"test_notes",completed:false},
      ]);
};
