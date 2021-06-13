export interface Errors {
  [field: string]: string[];
}

export default abstract class EditModel {

  public errors: Errors | null = null;

  public hasError(field: string): boolean {
    return (null !== this.errors && undefined !== this.errors[field] && null !== this.errors[field])
  }

  public getError(field: string): string | null {
    if (null === this.errors || undefined === this.errors[field]) {
      return null;
    }
    return this.errors[field].join(', ');
  }
}
