import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const notes = [
  { id: 11, name: 'Exercise Routine', des:'rd' },
  { id: 12, name: 'Weeks Schedule', des: 'MLSTQAProject '},
  { id: 13, name: 'Project Work', des: 'Blackbook final application' },
  { id: 14, name: 'Paper Submission', des:'do' },
  { id: 15, name: 'My Council Journey', des:'Started in 2015' },
  { id: 16, name: 'Online Courses', des: 'Statistics, R, Python, ML' },
  { id: 17, name: 'ZS', des: ' Info day at 10 april' },
  { id: 18, name: 'Books to read', des:'When breath becomes air, Raghuram rajan' },
  { id: 19, name: 'Netflix', des:'Star trek' },
  { id: 20, name: 'Tie-saree day', des:'7th april' }
];
    return {notes};
  }
}