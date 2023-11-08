# Monorepo-ci-cd
This repository is a mono repo containing two backend NodeJS based projects. The project uses github workflows to automate deployment to AWS ECS based infrastructure. 
The Github workflows take care of push the image to ECR repository and thereafter update the task definition, deploy new task definition to ECS. 

## Workflow Files
The Workflow files can be found in `.github/workflows` 

## Plugins: 
[ECR Login](https://github.com/aws-actions/amazon-ecr-login)https://github.com/aws-actions/amazon-ecr-login
[Push image to ECR](https://github.com/marketplace/actions/push-to-amazon-ecr)https://github.com/marketplace/actions/push-to-amazon-ecr
[Docker setup](https://github.com/docker/setup-buildx-action)https://github.com/docker/setup-buildx-action
[Deploy task definition](https://github.com/aws-actions/amazon-ecs-deploy-task-definition)https://github.com/aws-actions/amazon-ecs-deploy-task-definition
