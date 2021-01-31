document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE
    const changeDevourBtns = document.querySelectorAll('.change-devour');

    // Event Listener
    if (changeDevourBtns) {
        changeDevourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newdevour');
                const newDevourState = {
                    devour: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`Changed devour to: ${newDevour}`);
                        location.reload('/');
                    } else {
                        alert('Oops!');
                    }
                });
            });
        });
    }

    // CREATE
    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            const newBurger = {
                burger_name: document.getElementById('burg').nodeValue.trim(),
                devoured: document.getElementById('devoured').checked,
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('burg').value = '';
                console.log('Created a new burger!');
                location.reload();
            });
        });
    }
});