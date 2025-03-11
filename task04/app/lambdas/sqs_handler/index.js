exports.handler = async (event) => {
    console.log('SQS Message:', JSON.stringify(event));
    return 'Success';
  };
  