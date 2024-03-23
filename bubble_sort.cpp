#include <iostream>
using namespace std;

void bubbleSort(int array[], int size) {

  // acessando todos os elementos do array
  for (int step = 0; step < size; ++step) {
      
    // comparando elementos do array
    for (int i = 0; i < size - step; ++i) {

      // comparando elementos adjacentes
      if (array[i] > array[i + 1]) {

        // trocando elementos que não estão em ordem
        int temp = array[i]; // aqui usamos uma variável temporária para trocar os elementos do array
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
}


// função auxiliar apenas para imprimir o array da solução
void printArray(int array[], int size) {
  for (int i = 0; i < size; ++i) {
    cout << "  " << array[i];
  }
  cout << "\n";
}


int main() {
  // array para ser ordenado
  int lista[] = {-22, 453, 1, 12, -9};
  
  // encontrando o tamanho (N) do problema
  int size = sizeof(lista) / sizeof(lista[0]);
  
  bubbleSort(lista, size);

  printArray(lista, size);
  return 0;;
}