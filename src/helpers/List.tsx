export class List<T> {
  private _items: T[] = [];

  /**
   * Retorna o numero de itens na lista.
   */
  get count(): number {
    return this._items.length;
  }

  /**
   * Retorna uma copia do array de itens.
   *
   * @returns {T[]} Uma copia do array de itens.
   */
  get items(): T[] {
    return this._items;
  }

  /**
   * Adiciona um novo item na lista.
   * @param item O item a ser adicionado.
   */
  add(item: T): void {
    this._items.push(item);
  }

  /**
   * Remove um item da lista.
   *
   * @param item O item a ser removido.
   * @returns {boolean} Verdadeiro se o item foi removido, falso caso contrario.
   */
  remove(item: T): boolean {
    const index = this._items.indexOf(item);
    if (index !== -1) {
      this._items.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Remove o item na posicao especificada.
   *
   * @param index O indice do item a ser removido.
   */
  removeAt(index: number): void {
    if (index >= 0 && index < this._items.length) {
      this._items.splice(index, 1);
    }
  }

  /**
   * Limpa a lista removendo todos os itens.
   */
  clear(): void {
    this._items = [];
  }

  /**
   * Retorna verdadeiro se o item estiver na lista, caso contrario retorna falso.
   *
   * @param item O item a ser verificado na lista.
   */
  contains(item: T): boolean {
    return this._items.includes(item);
  }

  /**
   * Retorna o ndice do primeiro item na lista que
   *   igual ao item especificado, ou -1 se o item
   * n o for encontrado.
   *
   * @param item O item a ser procurado na lista.
   * @returns O Índice do item na lista se encontrado, ou -1 se n o for encontrado.
   */
  indexOf(item: T): number {
    return this._items.indexOf(item);
  }

  /**
   * Itera sobre todos os elementos da lista e executa a fun o de callback em cada um deles.
   *
   * @param callback A fun o a ser executada em cada elemento da lista.
   */
  forEach(callback: (item: T) => void): void {
    this._items.forEach(callback);
  }

  /**
   * Aplica uma função de callback a cada elemento da lista,
   * transformando-os, e retorna uma nova lista com os resultados.
   *
   * @template U O tipo dos elementos na nova lista.
   * @param callback A função a ser aplicada em cada elemento da lista.
   * @returns Uma nova lista contendo os resultados da aplicação da função de callback.
   */
  map<U>(callback: (item: T) => U): List<U> {
    const newList = new List<U>();
    this._items.forEach((item) => {
      newList.add(callback(item));
    });
    return newList;
  }

  /**
   * Retorna uma nova lista com os elementos da lista original que
   *   verdadeiros para a fun o de callback especificada.
   *
   * @param callback A fun o a ser executada em cada elemento da lista.
   * @returns Uma nova lista contendo os elementos que atendem   condicionada da fun o de callback.
   */
  filter(callback: (item: T) => boolean): List<T> {
    const newList = new List<T>();
    this._items.forEach((item) => {
      if (callback(item)) {
        newList.add(item);
      }
    });
    return newList;
  }

  /**
   * Cria uma nova instancia de List a partir de um array.
   * @param arr array com os itens a serem adicionados na lista.
   * @returns uma nova instancia de List.
   */
  static fromArray<T>(arr: T[]): List<T> {
    const list = new List<T>();
    arr.forEach((item) => {
      list.add(item);
    });
    return list;
  }

  /**
   * Retorna uma copia do array de itens.
   *
   * @returns {T[]} Uma c pia do array de itens.
   */
  toArray(): T[] {
    return this._items.slice();
  }
}
