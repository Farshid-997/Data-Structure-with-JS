// 1. hash has key value pair
// 2. hash key goes to the hash function and convert to the hash code

// 3. we can easily look up hash code to find its value

// 4. A hash collision occurs when two distinct pieces of data produce the same hash value using a hash function
// 5. it is called the collision
// 6. to prevent this we can store array within array in the same hash value for example, name->>>[["name","bruce"],["name","aaa"]],
// here name is the key insead of using single value we can enter an array here ..

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  setHash(key, value) {
    let index = this.hash(key);

    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      // check if this key already exist or not
      const sameKeyItem = bucket.find((item) => item === key[0]);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  getValue(key) {
    let index = this.hash(key);

    const bucket = this.table[index];

    if (bucket) {
      // check if this key already exist or not
      const sameKeyItem = bucket.find((item) => item === key[0]);

      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  removeValue(key) {
    let index = this.hash(key);
    

    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item === key[0]);

      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  displayValue() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(20);

table.setHash("name", "Ahsan");
table.setHash("age", 28);

table.displayValue();
