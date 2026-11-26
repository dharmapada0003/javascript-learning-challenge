//Aliases (as): An alias means giving a different name (rename) to an existing exported variable, function or class when importing or exporting it.

//Ex: --------- Importing with an alias (renaming) --------------

export const username = "Raja";
export const age = 25;

export function add(a, b) {
  return a + b;
}

//Ex: ----------- Exporting with an alias (renaming) ------------

const name = "Kapil";
const userAge = 23;

export { name as firstName, userAge as myUserAge };
