import Grimpan from "./grimpan-singleton.js";

function main() {
  // main - Grimpan 강한 결합이 구성됨
  const grimpan = Grimpan.getInstance();
  grimpan.initialize();
}

main();
