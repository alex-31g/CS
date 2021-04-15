// "program": "${workspaceFolder}\\!_lessons\\03. Linked List.js"


class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

	// append() - добавляет данные в конец списка
  append(value) {
    const newNode = { value: value, next: null };

		console.log(this);
		
		// Обновляем значение next для предыдущего последнего елемента
    if (this.tail) {
      this.tail.next = newNode;
		}
		
		// Обновляем значение последнего елемента
		this.tail = newNode;
		
		// Если head не существует - в него будет присвоено значение.
		// Этот участок кода сработает только при первом обращении к append()
    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
		const elements = [];
		
		// elements.push(this.head, this.tail) // <---------------------------------------------

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();

linkedList1.append(1);
linkedList1.append(2);
// linkedList1.append('Max');
// linkedList1.append('Max');
// linkedList1.append(true);
// linkedList1.append(18.51);

console.log(linkedList1.toArray());


