"# sam-dynamo-api-gw" 

TODO:
    "build-sam": "sam build -t ./sam.yml -m package.json"
    "local-invoke": "sam local invoke dbManagerService --event ./test/events/event.json",
    "local-api": "sam local start-api"


COMMANDS: 
    aws s3 mb s3://rahzel-package --region us-east-2
    aws --region us-east-2 cloudformation delete-stack --stack-name sam-dynamo-apigw