
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('projects').truncate()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Camagru' ,description:"Write please simple instagram instance",completed:false},
          {project_name: 'Matcha' ,description:"Write please simple Matcha instance",completed:false},
      ]);
    // });
};
