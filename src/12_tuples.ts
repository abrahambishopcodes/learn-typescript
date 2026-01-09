  // tuples means that we can have an array with fixed number of elements whose types are known

  const userEntry: [string, number, boolean] = ["Bob", 15, false];
  

  type Response = [ status: number, message?: string]

  const res1: Response = [200, "OK"]


  // readonly tuples

const coords: readonly [number, number] = [10, 20];
// coords[0] = 15; // Error: Cannot assign to '0' because it is a read-only property.