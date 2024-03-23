def mergeSort(array):
    # checamos se o array é maior que 1 para podermos continuar
    # se ele for de tamanho 1 significa que chegamos no menor caso possível
    if len(array) > 1:

        #  dividimos o array pela metade
        r = len(array)//2
        L = array[:r]
        M = array[r:]

        # aplicamos a recorrência para as duas metades do array 
        mergeSort(L)
        mergeSort(M)

        i = j = k = 0

        # Até alcançarmos qualquer um dos extremos de L ou M, escolha o maior entre os elementos de L e M e coloque-os na posição correta em A[p..r]
        while i < len(L) and j < len(M):
            if L[i] < M[j]:
                array[k] = L[i]
                i += 1
            else:
                array[k] = M[j]
                j += 1
            k += 1

        # Quando acabarmos os elementos em L ou M, pegue os elementos restantes e coloque em A[p..r].
        while i < len(L):
            array[k] = L[i]
            i += 1
            k += 1

        while j < len(M):
            array[k] = M[j]
            j += 1
            k += 1

if __name__ == '__main__':
    array = [9, 532, 12, 10, 1, -1]

    mergeSort(array)

    print(array)
    