#you need create a terraform.tfvars with the credentials "access_key & secret_key " and add to gitignore
provider "aws" {
  region = "us-west-2"
  access_key = var.aws_access_key
  secret_key = var.secret_key_key
}

# Create a cluster ECS
resource "aws_ecs_cluster" "wave-cluster" {
  name = "my-ecs-cluster"
}

#Define BACKEND & FRONTEND TASK & SERVICE 

#<------- BACKEND  task - service - ---->

#task definition 
resource "aws_ecs_task_definition" "backend" {
  family                   = "my-backend"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn

  container_definitions = <<DEFINITION
  [
    {
      "name": "my-backend",
      "image": "411951638844.dkr.ecr.us-west-2.amazonaws.com/server-image:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80
        }
      ]
    }
  ]
  DEFINITION
}

#service 
resource "aws_ecs_service" "backend" {
  name            = "my-backend-service"
  cluster         = aws_ecs_cluster.wave-cluster.id
  task_definition = aws_ecs_task_definition.backend.arn
  launch_type     = "FARGATE"

  network_configuration {
    subnets = ["subnet-12345678", "subnet-87654321"] # Cambia a tus subnets
  }
}

#<------- FRONTEND  task - service  ---->

#task definition 
resource "aws_ecs_task_definition" "frontend" {
  family                   = "my-frontend"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn

  container_definitions = <<DEFINITION
  [
    {
      "name": "my-bfrontend",
      "image": "411951638844.dkr.ecr.us-west-2.amazonaws.com/frontend-image:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80
        }
      ]
    }
  ]
  DEFINITION
}

#service 
resource "aws_ecs_service" "waveservice" {
  name            = "my-backend-service"
  cluster         = aws_ecs_cluster.wave-cluster.id
  task_definition = aws_ecs_task_definition.backend.arn
  launch_type     = "FARGATE"

  network_configuration {
    subnets = ["subnet-12345678", "subnet-87654321"] # Cambia a tus subnets
  }
}



# Create a Application Load Balancer (ALB) frontend & backend 
resource "aws_lb" "my_alb" {
  name               = "my-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = ["subnet-12345678", "subnet-87654321"] #check your subnets 
}

#SSL  - you need create a ssl fist en then a ALB listener
resource "aws_acm_certificate" "wave" {
  domain_name       = "weworkwave.net" # your domein
  validation_method = "DNS"

  tags = {
    Name = "waveCertificate"
  }
}

#ALB listener
resource "aws_lb_listener" "https_listener" {
  load_balancer_arn = aws_lb.my_alb.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.wave.arn #ssl certificate

  default_action {
    type             = "fixed-response"
    fixed_response {
      content_type = "text/plain"
      status_code  = "200"
      message_body = "OK"
    }
  }
}

#DENIFE YOUR DOMAIN 
resource "aws_route53_zone" "waverute" { #define you domin 
  name = "weworkwave.net" # domain
}

resource "aws_route53_record" "cname_record" {
  zone_id = aws_route53_zone.waverute.zone_id
  name    = "app.weworkwave.net" # Change name you want
  type    = "CNAME"
  ttl     = "300"
  records = ["weworkwave.net"] # Change to the domain name you want get
}

