const generator = require('generate-password');

const generatePassword = () => {
  const password = generator.generate({
    length: 10,
    numbers: true
  });
  console.log('Generated Password:', password);
};

generatePassword();