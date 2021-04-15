const console = require('./_console.log');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
  }

	// append - добавляет элементы в конец списка
  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) { this.tail.next = newNode; }
		this.tail = newNode;
    if (!this.head) { this.head = newNode; }
	}
	
	// prepend - добавляет элементы в начало списка
	prepend(value) {
    const newNode = { value: value, next: this.head };

		this.head = newNode;
		if (!this.tail) {
			this.tail = newNode
		} 
	}

	// insertAfter - вставляет элемент после заданного элемента
	insertAfter(value, afterValue) {
		const existingNode = this.find(afterValue);

		if (existingNode) {
			const newNode = { value: value, next: existingNode.next };
			existingNode.next = newNode;
		}
	}

	// find - находит первое совпадение
	find(value) {
		if (!this.head) return null;

		let curNode = this.head;

		while (curNode) {
			if (curNode.value === value) return curNode;
			curNode = curNode.next;
		}

		return null;
	}

	delete(value) {
		// { value: 1, next: { value: 2, next: { value: 3, next: null } } } 

		if (!this.head) return;

		let curNode = this.head;

		while (this.head && this.head.value === value) this.head = this.head.next; // Первый элемент

		// Промежуточные элементы
		while (curNode.next) {
			if (curNode.next.value == value) {
				curNode.next = curNode.next.next;
			} else {
				curNode = curNode.next;
			}
		}

		if (this.tail.value === value) this.tail = curNode; // Последний элемент
	}

	// toArray() - конвертирует список, который хранится в памяти, в массив
  toArray() {
		console.log(this.head);

		const elements = [];

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
linkedList1.append(3);

// linkedList1.prepend(4);
// linkedList1.prepend(5);
// linkedList1.prepend(6);

// linkedList1.delete(4);

// linkedList1.toArray()

linkedList1.insertAfter(200, 2);
console.log(linkedList1.toArray());
