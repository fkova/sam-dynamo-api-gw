# API <> LAMBDA <> DynamoDB Example 
+ typescript
+ AWS SAM  
+ webpack
+ ajv for schema validation

## Installation

```
aws s3 mb s3://rahzel-package --region us-east-2
```

## Uninstall
```
aws --region us-east-2 cloudformation delete-stack --stack-name sam-dynamo-apigw
```

##TODO:
```
"build-sam": "sam build -t ./sam.yml -m package.json"
"local-invoke": "sam local invoke dbManagerService --event ./test/events/event.json",
"local-api": "sam local start-api"˛
```