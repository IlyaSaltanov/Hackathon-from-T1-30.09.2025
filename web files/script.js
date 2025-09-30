document.getElementById('indicatorSelector').addEventListener('change', function() {
    const selected = this.value;
    const container = document.getElementById('tableContainer');
    
    if (!selected) {
        container.innerHTML = '';
        return;
    }

    // Пример данных для разных индикаторов
    const data = {
        sales: [
            { month: 'Январь', amount: 15000 },
            { month: 'Февраль', amount: 18000 },
            { month: 'Март', amount: 21000 }
        ],
        expenses: [
            { category: 'Реклама', amount: 3000 },
            { category: 'Зарплаты', amount: 12000 },
            { category: 'Аренда', amount: 5000 }
        ],
        profit: [
            { quarter: 'Q1', amount: 12000 },
            { quarter: 'Q2', amount: 15000 },
            { quarter: 'Q3', amount: 18000 }
        ]
    };

    const tableData = data[selected];
    const headers = Object.keys(tableData[0]);

    let html = `<table><thead><tr>`;
    headers.forEach(header => html += `<th>${header}</th>`);
    html += `</tr></thead><tbody>`;

    tableData.forEach(row => {
        html += '<tr>';
        headers.forEach(header => html += `<td>${row[header]}</td>`);
        html += '</tr>';
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
});
