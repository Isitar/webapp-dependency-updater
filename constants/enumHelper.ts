const StringIsNumber = (value: string | number) => !isNaN(Number(value));

export function enumToArray(enumToProcess: { [k: number]: any }) {
  return Object.keys(enumToProcess)
    .filter(StringIsNumber)
    .map((s: string) => parseInt(s))
    .map((key: number) => enumToProcess[key]);
}

export function enumToOptions(enumToProcess: { [k: number]: any }, translFunc: (k: number, s: string) => string = (k, s) => s): { id: number, value: string }[] {
  return Object.keys(enumToProcess)
    .filter(StringIsNumber)
    .map((s: string) => parseInt(s))
    .map((key: number) => {
      return {id: key, value: translFunc(key, enumToProcess[key])};
    });
}
