// ===== ВСТАВЬ СЮДА ТВОЮ ССЫЛКУ =====
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5ezKZcw94lyyxGu-spgV9BpE3_IJVAAnNnASxsb1xbFEKIxyzlPsRu5sNyF0A2kGRyA/exec';

document.getElementById('weddingForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const spiritsSelected = document.querySelector('input[name="spirits"]:checked')?.value || '';
    let spiritsChoiceValue = document.getElementById('spiritsChoice').value;
    if (spiritsSelected === 'Нет') {
        spiritsChoiceValue = '';
    }

    const data = {
        fullname: document.getElementById('fullname').value,
        attend: document.querySelector('input[name="attend"]:checked')?.value || '',
        address: document.getElementById('address').value,
        relation: document.getElementById('relation').value,
        tableWishes: document.getElementById('tableWishes').value,
        hostComments: document.getElementById('hostComments').value,
        transfer: document.querySelector('input[name="transfer"]:checked')?.value || '',
        taxi: document.querySelector('input[name="taxi"]:checked')?.value || '',
        phone: document.getElementById('phone').value,
        food: document.getElementById('food').value,
        champagne: document.querySelector('input[name="champagne"]:checked')?.value || '',
        wine: document.querySelector('input[name="wine"]:checked')?.value || '',
        spirits: spiritsSelected,
        spiritsChoice: spiritsChoiceValue,
        importantInfo: document.getElementById('importantInfo').value
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('weddingForm').reset();
        document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        alert('Ошибка при отправке. Проверьте интернет и попробуйте ещё раз.');
        console.error(error);
    }
});