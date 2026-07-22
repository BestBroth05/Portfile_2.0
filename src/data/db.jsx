/* Temporary compatibility layer during content-model migration.
 * Prefer importing from `src/data/index.js`.
 */
export {
  site,
  navigation,
  experience,
  education,
  languages,
  featuredProjects,
  professionalWork,
  skillCategories,
} from "./index";

/** @deprecated Use skillCategories */
export { skillCategories as datacategorias } from "./skills";

/** @deprecated Use featuredProjects */
export { featuredProjects as dataProductos } from "./featuredProjects";
