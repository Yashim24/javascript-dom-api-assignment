// this is my Array of five student objects
        const students = [
            { name: "David", score: 75 },
            { name: "Mary", score: 45 },
            { name: "Emmanuel", score: 60 },
            { name: "Grace", score: 30 },
            { name: "Prince", score: 50 }
        ];

        const table = document.getElementById("resultTable");

        
        students.forEach(function(student) {

            let result;

        
            if (student.score >= 50) {
                result = "PASSED";
            } else {
                result = "FAILED";
            }

        
            table.innerHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.score}</td>
                    <td class="${result === 'PASSED' ? 'passed' : 'failed'}">
                        ${result}
                    </td>
                </tr>
            `;
        });