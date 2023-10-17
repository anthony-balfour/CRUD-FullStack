# RDS

username: ant5692
password: databasepassword
DB name: CRUDFUllStack
Port: 3306
Endpoint: crudfullstack.cjivcrkjkxeh.us-east-2.rds.amazonaws.com
start date: 10/1

# EC2

EC2 name: CRUDFullStack
Public IP address: 3.14.251.109

Open an SSH client.

Locate your private key file. The key used to launch this instance is CRUDFullStack.pem

Run this command, if necessary, to ensure your key is not publicly viewable.
 chmod 400 CRUDFullStack.pem

Connect to your instance using its Public DNS:
 ec2-3-14-251-109.us-east-2.compute.amazonaws.com

Example:

 ssh -i "CRUDFullStack.pem" ec2-user@ec2-3-14-251-109.us-east-2.compute.amazonaws.com

 #### Moving JAR file

 scp -i "E:/Engineering/Spring Boot/student-system/CRUDFullStack.pem" student-system-0.0.1-SNAPSHOT.jar ec2-3-14-251-109.us-east-2.compute.amazonaws.com:/home/ec2-user


 #### Running jar file constantly on server

 ‘nohup java -jar ~jar file~ > output.log &’ 

# Steps

- Connect database to RDS
- Clarify inbound rules
- Connect backend app to new database hosted on AWS
- Create EC2 instance and connect to it using SSH (the pem file)
- Install JDK if java or npm if Node
- Build spring boot project into Jar file (selecting Maven, lifecycle, install) and move it to EC2
- Create build file and connect it to S3 Bucket

## Running the app in the background

At around 33:00 after copying the jar file, you can run ‘nohup java -jar ~jar file~ > output.log &’ instead of just running ‘java -jar ~jar file~’. This should keep the server up and running even after closing out the terminal as well!