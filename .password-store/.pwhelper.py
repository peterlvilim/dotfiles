import subprocess

def get_password(user): 
    pw = subprocess.check_output(["pass", user]) 
    return str(pw).strip() 
