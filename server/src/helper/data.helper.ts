const jsonParser = (set: Set<string>): string => {
  return JSON.stringify(Array.from(set?.values() ?? []));
}

const setToArray = (set: Set<string>): string[] => {
  return Array.from(set?.values() ?? []);
}

export { jsonParser, setToArray };
