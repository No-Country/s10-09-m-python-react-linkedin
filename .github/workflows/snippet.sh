#!/bin/bash

# Replace 'your-cluster-name' with the actual name of your ECS cluster
CLUSTER_NAME="your-cluster-name"

# Use the AWS CLI to describe the ECS cluster and extract the ARN
CLUSTER_ARN=$(aws ecs describe-clusters --clusters $CLUSTER_NAME --query 'clusters[0].clusterArn' --output text)

# Check if the CLUSTER_ARN variable is empty, which indicates that the cluster doesn't exist or there was an error
if [ -z "$CLUSTER_ARN" ]; then
  echo "Error: ECS cluster '$CLUSTER_NAME' not found or an error occurred."
  exit 1
fi

# Print the ARN for verification
echo "ECS Cluster ARN: $CLUSTER_ARN"

# Now you can use the $CLUSTER_ARN variable in your script
      
      
      
      # Replace 'your-cluster-name' with your ECS cluster name.
        task_arn=$(aws ecs list-tasks --cluster arn:aws:ecs:us-east-2:411951638844:cluster/workwave-dev --desired-status RUNNING --query 'taskArns[0]' --output text)
        if [ -z "$task_arn" ]; then
          echo "::set-output name=task_ip::NoRunningTasks"
        else
          eni_id=$(aws ecs describe-tasks --cluster arn:aws:ecs:us-east-2:411951638844:cluster/workwave-dev --tasks $task_arn --query 'tasks[0].attachments[0].details[?name==`networkInterfaceId`].value' --output text)
          public_ip=$(aws ec2 describe-network-interfaces --network-interface-ids $eni_id --query 'NetworkInterfaces[0].Association.PublicIp' --output text)
          echo "::set-output name=task_ip::$public_ip"
        fi





    - name: Update Route 53 A Record
      run: |
        # Replace 'your-hosted-zone-id' and 'your-record-set-name' with your Route 53 hosted zone ID and record set name.
        if [ "$public_ip" != "NoRunningTasks" ]; then
          aws route53 change-resource-record-sets --hosted-zone-id Z0201908RVKCBGER6OFM --change-batch '{"Changes":[{"Action":"UPSERT","ResourceRecordSet":{"Name":"www","Type":"A","TTL":300,"ResourceRecords":[{"Value":"'"$public_ip"'"}]}}]'
        fi