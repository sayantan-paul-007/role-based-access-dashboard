import bcrypt from "bcryptjs";

async function run() {
  const password = "abc123";
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);
}

run();
