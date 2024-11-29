document.getElementById('blogForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    
    const blog = {
        id: Date.now(),
        title: title,
        body: body
    };

    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    window.location.href = 'dashboard.html';
});

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
    window.location.href = 'login.html';
}

document.getElementById('blogForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    
    const blog = {
        id: Date.now(),
        title: title,
        body: body,
        author: loggedInUser.username
    };

    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    window.location.href = 'dashboard.html';
});

