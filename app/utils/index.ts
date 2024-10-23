export function camelToNormal(camelCaseStr: string) {
  // Replace lowercase-uppercase boundaries with a space and capitalize the first letter
  const normalStr = camelCaseStr
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between camelCase boundaries
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter

  return normalStr;
}
