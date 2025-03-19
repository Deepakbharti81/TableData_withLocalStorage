let form = document.querySelector('form');
let tbody = document.querySelector('table tbody');
let clearbtn = document.querySelector('#clearbtn');
console.log(tbody)

// Function For Add Data in LocalStorage
form.addEventListener('submit', (e) => {
    let object = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
    }


    // 1️⃣ **पुराने डेटा (Old Data) को localStorage से लोड करें,  old_Date नहीं है, तो blank ऐरे [] Assign कर देगा '?? Nullish Coalescing Operator' **
    let AddData = JSON.parse(localStorage.getItem('user')) ?? [];

    // 2️⃣ **नया डेटा (New Data) ऐरे में जोड़ें**
    AddData.push(object);

    // 3️⃣ **अपडेटेड ऐरे को localStorage में सेव करें**
    localStorage.setItem('user', JSON.stringify(AddData));
    console.log(AddData);

    TodoData(); // टेबल अपडेट करें
    e.target.reset();
    e.preventDefault();
})


// Function For Add Data in Table
function TodoData() {
    let getData_FromLocalStorage = JSON.parse(localStorage.getItem("user"));
    console.log(getData_FromLocalStorage);

    let AddData_in_Table = ''
    getData_FromLocalStorage.forEach((data, index) => {

        AddData_in_Table += `         
                    <tr>
                            <th>${index + 1}</th>
                            <th>${data.name}</th>
                            <th>${data.email}</th>
                            <th>${data.phone}</th>
                            <th> <button onclick='deletItem(${index})'> Delete </button> </th>
                            <th> <button onclick='editItem(${index})'> Edit </button> </th>
                    </tr>
        `

    });

    tbody.innerHTML = AddData_in_Table;

}
    
TodoData(); // पेज लोड होने पर डेटा दिखाएँ



// Delete Data From Table
function deletItem(index) {
    let getData_FromLocalStorage = JSON.parse(localStorage.getItem("user"));
    getData_FromLocalStorage.splice(index, 1);

    localStorage.setItem('user', JSON.stringify(getData_FromLocalStorage));

    TodoData();  // टेबल अपडेट करें
}




function editItem(index) {
    // 1️⃣ LocalStorage से डेटा लाना
    let storedData = JSON.parse(localStorage.getItem("user"));
    
    // 2️⃣ जिस डेटा को एडिट करना है, उसे निकालना
    let item = storedData[index];

    // 3️⃣ उस डेटा को फॉर्म में भरना
    form.name.value = item.name;
    form.email.value = item.email;
    form.phone.value = item.phone;

    // // 4️⃣ पुराना डेटा हटाना (ताकि डुप्लिकेट न हो)
    deletItem(index);
}

editItem();