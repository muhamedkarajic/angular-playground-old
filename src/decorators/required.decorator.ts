export function Required(target: unknown, propertyKey: string): void {
  Object.defineProperty(target, propertyKey, {
    get() {
      throw new Error(`Attribute ${propertyKey} is required`);
    },
    set(value) {
      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
        configurable: true
      });
    },
    configurable: true
  });
}
