const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);





const workObj = [
    {
        name: 'task1',
        id: 'b0062f74-52ac-4127-b268-7e0bd25b65e1'
    },
    {
        name: 'task2',
        id: '748fc7c9-27c3-4e4f-9180-85d2f3b5e8db'
    },
    {
        name: 'task3',
        id: '29c11f93-cb9a-42ef-a89c-b5e874254e3c'
    },
    {
        name: 'task4',
        id: '5edbc1fe-3762-4943-8f99-418bf1834737'
    }
]


const ID = '29c11f93-cb9a-42ef-a89c-b5e874254e3c'


const newarr = workObj.find((item) => item.id === ID)
console.log(newarr,"newwarr")







const b = arr.map((item) => {

    if (item > 3) {
        return item;
    }

})

const bb = arr.map((item) => item * 2)
console.log(b);

console.log(bb);

const c = arr.find((item) => item > 3);
console.log(c)
console.log(arr)