
exports.seed = function(knex) {
      return knex('tasks').insert([
          {project_id: 1, task:"Create git repo first",notes:"Make sure u a not cheat ",completed:false},
           {project_id: 1, task:"Create folder and files first",notes:"Make sure u a using right naming on it",completed:false},
          {project_id: 2, task:"Create git database tables first",notes:"Draw on a paper",completed:false},

      ]);
};
