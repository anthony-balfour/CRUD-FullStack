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

# Steps

- Connect database to RDS
- Clarify inbound rules
- Connect backend app to new database hosted on AWS
- Create EC2 instance and connect to it using SSH
- Install JDK if java or npm if Node
- Build spring boot project into Jar file and move it to EC2
- Create build file and connect it to S3 Bucket