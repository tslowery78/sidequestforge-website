document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formElement = e.target;
            const status = formElement.querySelector('.form-status');
            const submitButton = formElement.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Clear previous status
            status.textContent = '';
            status.style.display = 'none';
            status.classList.remove('success', 'error');

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
                status.textContent = error.message;
                status.classList.add('error');
            } finally {
                status.style.display = 'block';
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                setTimeout(() => {
                    status.style.display = 'none';
                    status.classList.remove('success', 'error');
                }, 5000);
            }
        });
    });
}); 