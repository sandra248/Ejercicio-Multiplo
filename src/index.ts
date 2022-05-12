function esMultiplo(N1: number, N2: number): string {
  if (N1 % N2 === 0) {
    return "Verdadero";
  } else {
    return "Falso";
  }
}

console.log("¿El numero N1 es Multiplo de N2?:", esMultiplo(20, 10));
