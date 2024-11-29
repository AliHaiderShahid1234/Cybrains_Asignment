document.addEventListener('DOMContentLoaded', function () {
    const trmContainer = document.getElementById('trm_container');
    const clockInButton = document.getElementById('clockInButton');
    const clockOutButton = document.getElementById('clockOutButton');
    let records = JSON.parse(localStorage.getItem('timeRecords')) || [];
    let clockInTime = null;

    // Initial setup: hide the Clock Out button
    clockOutButton.style.display = 'none';

    // Render initial records
    renderRecords();

    // Function to render all records
    function renderRecords() {
        trmContainer.innerHTML = ''; // Clear existing content

        // Display a message if no records are available
        if (records.length === 0) {
            trmContainer.innerHTML = '<p>No time records available. Start clocking in!</p>';
        } else {
            records.forEach(record => {
                const recordElement = document.createElement('div');
                recordElement.className = 'time-record border p-3 my-2 rounded';

                // Create the time record HTML structure
                recordElement.innerHTML = `
                    <p><strong>Employee Name:</strong> ${record.employeeName}</p>
                    <p><strong>Clocked In:</strong> ${new Date(record.clockInTime).toLocaleString()}</p>
                    <p><strong>Clocked Out:</strong> ${new Date(record.clockOutTime).toLocaleString()}</p>
                    <p><strong>Total Time:</strong> ${record.totalTime} hours</p>
                    <button class="btn btn-danger delete-btn" data-id="${record.id}">Delete</button>
                `;
                trmContainer.appendChild(recordElement);
            });

            // Add delete functionality
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', function () {
                    const recordId = this.getAttribute('data-id');
                    deleteRecord(recordId);
                });
            });
        }
    }

    // Function to delete a record
    function deleteRecord(recordId) {
        records = records.filter(record => record.id !== parseInt(recordId));
        localStorage.setItem('timeRecords', JSON.stringify(records));
        renderRecords(); // Re-render the records
    }

    // Event listener for "Clock In" button
    clockInButton.addEventListener('click', function () {
        if (clockInTime) {
            alert('You are already clocked in!');
            return;
        }

        const employeeName = prompt('Enter employee name:');
        if (employeeName) {
            clockInTime = Date.now(); // Record the clock-in time
            alert(`Clocked in at ${new Date(clockInTime).toLocaleTimeString()} for ${employeeName}.`);

            // Show the Clock Out button
            clockOutButton.style.display = 'inline-block';
        } else {
            alert('Employee name is required to clock in.');
        }
    });

    // Event listener for "Clock Out" button
    clockOutButton.addEventListener('click', function () {
        if (!clockInTime) {
            alert('You need to clock in first!');
            return;
        }

        const clockOutTime = Date.now();
        const totalTime = ((clockOutTime - clockInTime) / (1000 * 60 * 60)).toFixed(2); // Convert milliseconds to hours

        // Create a new record
        const employeeName = prompt('Confirm your name to clock out:');
        if (employeeName) {
            const newRecord = {
                id: Date.now(),
                employeeName,
                clockInTime,
                clockOutTime,
                totalTime,
            };

            // Add the record to the list and save to localStorage
            records.push(newRecord);
            localStorage.setItem('timeRecords', JSON.stringify(records));

            // Reset clock-in time and update UI
            clockInTime = null;
            renderRecords();

            // Hide the Clock Out button
            clockOutButton.style.display = 'none';

            alert('Clocked out successfully!');
        } else {
            alert('Employee name is required to clock out.');
        }
    });
});
