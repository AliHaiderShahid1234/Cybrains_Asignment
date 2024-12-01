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

@app.route('/contact')
def Contact():
    return render_template("base.html", title="Contact Us", content="<h1>Contact Us</h1><p>Contact page coming soon.</p>")
    
if __name__ == "__main__":
    app.run()