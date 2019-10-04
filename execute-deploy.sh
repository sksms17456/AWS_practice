#!/bin/bash

cd /home/ec2-user/docker-image
pwd
./deploy.sh > /dev/null 2> /home/ec2-user/error < /dev/null &