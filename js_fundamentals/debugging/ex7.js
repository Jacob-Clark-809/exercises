// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team[ceo] = 'Kim';
team[scrumMaster] = 'Alice';
team[developer] = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team[ceo]}`);
console.log(`Scrum master: ${company.team[scrumMaster]}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

/*
This code does not work as expected due to line 22 to line 24. When trying
to assign a value to team[ceo] the ceo variable is being referenced. Because
we are attempting to use this as a key it is first converted to a String
with value "[object Object]". Therefore after this line team has a property
"[object Object]" with value "kim". Unfortunately on the two subsequent lines
this property is reassigned because the string conversion of scrumMaster
and developer has the same value. Therefore, after the 3 lines the value
of the key "[object Object]" is undefined as on line 24.

We access this property on line 33 and line 34 and so undefined is output
both times.
*/