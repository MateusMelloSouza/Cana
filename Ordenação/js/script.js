function sort(algorithm) {
    let input = document.getElementById("input").value.trim();
    let numbers = input.split(",").map(Number);

    let steps = [];
    let sorted;

    switch (algorithm) {
        case "insertion":
            sorted = insertionSort(numbers.slice(), steps);
            break;
        case "merge":
            sorted = mergeSort(numbers.slice(), steps);
            break;
        case "bubble":
            sorted = bubbleSort(numbers.slice(), steps);
            break;
        default:
            alert("Invalid algorithm");
            return;
    }

    displaySteps(steps, sorted);
}

// Função de ordenação por inserção
function insertionSort(arr, steps) {
    let n = arr.length;
    // Loop pelos elementos da matriz
    for (let i = 1; i < n; i++) {
        // Salva o valor atual e inicializa o índice anterior
        let key = arr[i];
        let j = i - 1;
        // Move os elementos da matriz que são maiores que a chave para uma posição à frente de sua posição atual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insere a chave na posição correta
        arr[j + 1] = key;
        // Adiciona uma cópia do array após cada iteração para mostrar o progresso
        steps.push(arr.slice());
    }
    // Retorna a matriz ordenada
    return arr;
}

// Função de ordenação por mesclagem
function mergeSort(arr, steps) {
    // Verifica se a matriz tem um ou nenhum elemento, pois já está ordenada
    if (arr.length <= 1) {
        return arr;
    }
    // Calcula o ponto médio da matriz e divide em submatrizes esquerda e direita
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // Ordena recursivamente as submatrizes esquerda e direita
    const leftSorted = mergeSort(left, steps);
    const rightSorted = mergeSort(right, steps);
    // Mescla as submatrizes ordenadas
    const merged = merge(leftSorted, rightSorted, steps);
    // Adiciona informações sobre os subarrays e o array mesclado para mostrar o progresso
    steps.push({ left: left.slice(), right: right.slice(), merged: merged.slice() });
    // Retorna o array mesclado
    return merged;
}

// Função auxiliar para mesclar duas submatrizes ordenadas
function merge(left, right, steps) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // Mescla as submatrizes enquanto houver elementos em ambas
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Adiciona os elementos restantes, se houver, de cada submatriz
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Função de ordenação por bolha
function bubbleSort(arr, steps) {
    let n = arr.length;
    // Loop para percorrer toda a matriz
    for (let i = 0; i < n - 1; i++) {
        // Loop para percorrer a matriz - 1 elemento a cada iteração
        for (let j = 0; j < n - i - 1; j++) {
            // Compara elementos adjacentes e os troca se estiverem na ordem errada
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // Adiciona uma cópia do array após cada iteração para mostrar o progresso
                steps.push(arr.slice());
            }
        }
    }
    // Retorna a matriz ordenada
    return arr;
}

function displaySteps(steps, sortedArray) {
    let output = document.getElementById("output");
    output.innerHTML = "";
    steps.forEach((step, index) => {
        let div = document.createElement("div");
        div.classList.add("output-step");
        if ("merged" in step) {
            // Para merge sort, mostra os subarrays e o array mesclado
            div.innerHTML = `<p>Step ${index + 1}:</p><p>Left: [${step.left.join(", ")}]</p><p>Right: [${step.right.join(", ")}]</p><p>Merged: [${step.merged.join(", ")}]</p>`;
        } else {
            // Para insertion sort e bubble sort, mostra o estado atual do array
            div.innerHTML = `<p>Step ${index + 1}: [${step.join(", ")}]</p>`;
        }
        output.appendChild(div);
    });
    let div = document.createElement("div");
    div.textContent = `Sorted Array: [${sortedArray.join(", ")}]`;
    output.appendChild(div);
}