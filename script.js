document.addEventListener("DOMContentLoaded", function () {
    const animalForm = document.getElementById("animalForm");
    const animalList = document.getElementById("animalList");
    const cancelarBtn = document.getElementById("cancelarBtn");
    let selectedIndex = -1;

    animalForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nomeDono = document.getElementById("nomeDono").value;
        const nomePet = document.getElementById("nomePet").value;
        const idadePet = document.getElementById("idadePet").value;
        const racaPet = document.getElementById("racaPet").value;
        const generoPet = document.getElementById("generoPet").value;

        if (selectedIndex === -1) {
            adicionarAnimal(nomeDono, nomePet, idadePet, racaPet, generoPet);
        } else {
            atualizarAnimal(selectedIndex, nomeDono, nomePet, idadePet, racaPet, generoPet);
            selectedIndex = -1;
            const atualizarBtn = document.getElementById("atualizarBtn");
            atualizarBtn.style.display = "none";
            cancelarBtn.style.display = "none";
            animalForm.reset();
        }
    });

    function adicionarAnimal(nomeDono, nomePet, idadePet, racaPet, generoPet) {
        const row = animalList.insertRow(-1);
        row.insertCell(0).textContent = nomeDono;
        row.insertCell(1).textContent = nomePet;
        row.insertCell(2).textContent = idadePet;
        row.insertCell(3).textContent = racaPet;
        row.insertCell(4).textContent = generoPet;
        row.insertCell(5).innerHTML = '<button class="edit-btn" onclick="editarAnimal(' + (animalList.rows.length - 1) + ')">Editar</button>' +
            '<button class="delete-btn" onclick="excluirAnimal(this)">Excluir</button>';
    }

    function atualizarAnimal(index, nomeDono, nomePet, idadePet, racaPet, generoPet) {
        const row = animalList.rows[index];
        row.cells[0].textContent = nomeDono;
        row.cells[1].textContent = nomePet;
        row.cells[2].textContent = idadePet;
        row.cells[3].textContent = racaPet;
        row.cells[4].textContent = generoPet;
    }

    function editarAnimal(index) {
        const row = animalList.rows[index];
        const cells = row.cells;
        document.getElementById("nomeDono").value = cells[0].textContent;
        document.getElementById("nomePet").value = cells[1].textContent;
        document.getElementById("idadePet").value = cells[2].textContent;
        document.getElementById("racaPet").value = cells[3].textContent;
        document.getElementById("generoPet").value = cells[4].textContent;
        selectedIndex = index;
        const atualizarBtn = document.getElementById("atualizarBtn");
        atualizarBtn.style.display = "inline-block";
        cancelarBtn.style.display = "inline-block";
    }

    window.editarAnimal = editarAnimal;

    function excluirAnimal(button) {
        if (confirm("Deseja excluir este registro?")) {
            const row = button.parentElement.parentElement;
            animalList.deleteRow(row.rowIndex);
        }
    }

    window.excluirAnimal = excluirAnimal;

    cancelarBtn.addEventListener("click", function () {
        selectedIndex = -1;
        const atualizarBtn = document.getElementById("atualizarBtn");
        atualizarBtn.style.display = "none";
        cancelarBtn.style.display = "none";
        animalForm.reset();
    });
});
