import java.util.Arrays;

class InsertionSort {

  void insertionSort(int array[]) {
    // encontrano o tamanho (N) do problema 
    int size = array.length;

    // iteramos para todos os elementos do problema
    for (int step = 1; step < size; step++) {
      // declaramos uma variável chave para cada iteração que vamos usar para comparação
      int key = array[step];
      
      int j = step - 1;

      // comparamos o elemento chave com todos o elementos a sua esquerda até encotrarmos um elemento menor
      while (j >= 0 && key < array[j]) {
        array[j + 1] = array[j];
        --j;
      }

      // colocamos a chave após primeiro elemento encontrado menor que a chave
      array[j + 1] = key;
    }
  }

  public static void main(String args[]) {
    int[] lista = { 1, 2, 3, 4, 3 };
    InsertionSort is = new InsertionSort();
    
    is.insertionSort(lista);
    
    System.out.println(Arrays.toString(lista));
  }
}