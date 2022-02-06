import AWS from 'aws-sdk'

export const albumBucketName = 'smollalex';

AWS.config.region = 'us-east-1';

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:53b418bf-b27e-4e89-96ff-d6a033b026af',
});

export const AWSWithConf = AWS;


