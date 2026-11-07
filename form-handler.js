document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formElement = e.target;
            const status = formElement.querySelector('.form-status');
            const submitButton = formElement.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Keep progress and results visible, including for live announcements.
            status.classList.remove('success', 'error');
            status.style.display = 'block';
            status.textContent = 'Sending...';

            try {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                const response = await fetch(formElement.action, {
                    method: 'POST',
                    body: new FormData(formElement),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    status.textContent = 'Thanks for subscribing!';
                    status.classList.add('success');
                    formElement.reset();
                } else {
                    const data = await response.json();
                    status.textContent = data.error || 'Something went wrong. Please try again.';
                    status.classList.add('error');
                }
            } catch (error) {
                status.textContent = 'Could not send your request. Please check your connection and try again.';
                status.classList.add('error');
            } finally {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    });
});
