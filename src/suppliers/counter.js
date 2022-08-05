const repeater = require('../usecase/repeater');

const skeleton = async ({ char, entity }) => {
  return {
    char,
    count: await repeater({ char, entity }),
    resource: `${entity}`,
  };
};

module.exports = skeleton;
