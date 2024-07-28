const { init } = require("@paralleldrive/cuid2");
import { buildMakeTask } from "./task";
import { buildMakeProject } from "./project";

const createId = init({
  random: Math.random,
  length: 64,
});
const IdGenerator = {
  makeId: createId
};

export const makeTask = buildMakeTask(IdGenerator);
export const makeProject = buildMakeProject(IdGenerator);
