document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'), 10);
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs.find(b => b.id === blogId);

    if (blog) {
        document.getElementById('title').value = blog.title;
        document.getElementById('body').value = blog.body;
    }

    document.getElementById('editBlogForm').addEventListener('submit', function (e) {
        e.preventDefault();

        blog.title = document.getElementById('title').value;
        blog.body = document.getElementById('body').value;

        localStorage.setItem('blogs', JSON.stringify(blogs));

        window.location.href = 'dashboard.html';
    });
});
