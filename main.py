from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def HomePage():
    return render_template('index.html')

@app.route('/signup')
def SignupPage():
    return render_template('signup.html')

@app.route('/login')
def LoginPage():
    return render_template('login.html')

@app.route('/dashboard')
def Dashboard():
    return render_template('dashboard.html')
    
if __name__ == "__main__":
    app.run()