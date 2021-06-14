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

export function enumToBitValues(enumValue: object) {
  return Object.keys(enumValue).map(Number).filter(e => !isNaN(e))
}

export function formValueToBit(enumeration: object, selection: number[]) {
  return selection.reduce((total, selected) => total + selected, 0,);
}

export function bitToFormValue(enumeration: object, bit: number): number[] {
  const bits = enumToBitValues(enumeration)
  return bits.filter((b) => (bit & b) === b && b !== 0);
}
