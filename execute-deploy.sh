#!/bin/bash

cd /home/ec2-user/docker-image
ls
./deploy.sh 1> /home/ec2-user/stdoutResult 2> /home/ec2-user/error < /dev/null &