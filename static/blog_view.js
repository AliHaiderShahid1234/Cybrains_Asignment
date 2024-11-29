document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'), 10);
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs.find(b => b.id === blogId);

    if (blog) {
        document.getElementById('blogTitle').innerText = blog.title;
        document.getElementById('blogBody').innerText = blog.body;
    } else {
        document.getElementById('blogTitle').innerText = 'Blog not found';
        document.getElementById('blogBody').innerText = '';
    }
});
