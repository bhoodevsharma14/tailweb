# Setup
## Basic requiremnets
`python3`

## Steps to follow
### step 1
Create a local python environment for project <br>
Eg.  `python3 -m venv ENV`
### step 2
Activate the environment <br>
for linux. `source ENV/bin/activate`
### step 3 
Install the Dependencies
`pip install -r requirements.txt`

### step 4
Runing the project localy
`python3 manage.py runserver`<br>
<bold>Note:- make sure you are in same directory where manage.py file is present</bold>


# ENDPOINTS
1. `admin/` :- For django Defaut Admin Portal
2. `api/token/` :- To get the JWT Token
3. `api/token/refresh/` :- To refresh JWT using refresh token
4. `app/student/` :- Create/Retrive/Update/Delete students from student table
5. `app/subject/` :- Create/Retrive/Update/Delete subject from subject table
6. `app/score/` :- Create/Retrive/Update/Delete Score of student in specific subject

## Default Superuser
can hit the `admin/` and `api/token/` with the credentials
username: 'bhoodev',
password: 1234
<br>
<bold> Using the JWT access Token we will call all the other API , if do not provide the JWT it will not allow you the get data </bold>


## Update or Delete specific record
append the id retrived in the get request to the endpoint <br>
from StudentSubjectMarks we get 1 to 10 records we want delete record 2 then the endpoint will be. <br>
eg. `app/score/2/` with delete requeset
<br>
Similarly we can do it with student endpoint and subject endpoint
<bold>NOTE:- <br>
1. UPDATE WILL NOT CREATE NEW USER OR NEW SUBJECT <br>
2. Update Request the student and subject id will be provided to update the record.
</bold>
