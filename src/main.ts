let data: unknown;

// Test
// data = "ciao";
// data = 3;
// data = true;
// data = false;

switch (typeof data) {

  case "string":
    console.log(data.toUpperCase());
    break;
  
  case "number":
    console.log(data * 2);
    break;

  case "boolean":
    console.log(data ? "Si" : "No");
    break;
  
  default:
    console.log("Tipo non supportato");
}
