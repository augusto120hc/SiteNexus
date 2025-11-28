 const texto = "Bem-vindo ao Sky Nexus — prepare-se para a missão.";
        const elemento = document.getElementById("typewriter");
        let index = 0;

        function digitar() {
            if (index < texto.length) {
                elemento.textContent += texto.charAt(index);
                index++;
                setTimeout(digitar, 70);
            } else {
                // Após terminar, espera 1.5s e reinicia
                setTimeout(() => {
                    elemento.textContent = "";
                    index = 0;
                    digitar();
                }, 1500);
            }
        }

        digitar();



