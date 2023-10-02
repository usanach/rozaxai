var data = [{
    id: "006",
    name: ":: ผัดเส้นสปาเกตตี้พริกแห้งเบคอน ::",
    spicy: 1,
    description1:
        [
            'เส้นสปาเกตตี้ 120 กรัม',
            'ซอสสารพัดผัดปรุงสำเร็จ ตราโรซ่า',
            'เชฟแอทโฮม 1 ช้อนโต๊ะ',
            'กระเทียมสับ 1 ช้อนชา',
            'หอมใหญ่สับ 1 ช้อนโต๊ะ',
            'เบคอน 40 กรัม ',
            'พริกแห้ง 3 เม็ด(ตัดเป็นชิ้นเล็ก)',
            'น้ำมันพืช 1 ช้อนโต๊ะ'
        ],
    description2: {
        1: ['ตั้งกระทะไฟกลางใส่น้ำมัน กระเทียม หอมหัวใหญ่', 'พริกแห้ง เบคอน ลงไปผัดจนหอม'],
        2: ['ใส่เส้นที่ลวกไว้แล้วลงไปผัดให้เข้ากัน'],
        3: ['ปรุงรสด้วยซอสสารพัดผัดปรุงสำเร็จตราโรซ่า', 'เชฟแอทโฮม ผัดให้เข้ากัน'],
        4: ['ปิดไฟตักเสิร์ฟใส่ภาชนะที่เตรียมไว้ ']

    }
}, {
    id: "007",
    name: ":: กะเพราหมูสับพริกแห้ง ::",
    spicy: 2,
    description1:
        [
            'หมูสับ 100 กรัม',
            'ซอสสารพัดผัดปรุงสำเร็จ ตราโรซ่า ',
            'เชฟแอทโฮม 1 ช้อนโต๊ะ',
            'กระเทียมสับ 1 ช้อนชา',
            'พริกแห้งสับละเอียด 1 ช้อนชา',
            'ใบกะเพรา 1 / 2 ถ้วย(10กรัม)',
            'น้ำมันพืช 1 ช้อนโต๊ะ'
        ],
    description2: {
        1: ['ตั้งกระทะไฟกลางใส่น้ำมันลงไป ตามด้วยกระเทียม', 'ผัดจนเหลืองหอมแล้วใส่ไข่ไก่ผัดให้สุกเล็กน้อย'],
        2: ['นำกะหล่ำปลีซอยใส่ลงไปผัดให้เข้ากัน', 'ระหว่างผัดใส่น้ำเปล่าลงไปด้วย'],
        3: ['ปรุงรสด้วยซอสสารพัดผัดปรุงสำเร็จตราโรซ่า', 'เชฟแอทโฮม และ พริกไทย ผัดให้เข้ากัน'],
        4: ['ปิดไฟตักเสิร์ฟใส่ภาชนะที่เตรียมไว้']
    }
}, {
    id: "008",
    name: ":: ผัดทะเลกระเทียม ::",
    spicy: 0,
    description1:
        [
            'กุ้งหมึก 120 กรัม',
            'ซอสสารพัดผัดปรุงสำเร็จตราโรซ่า',
            'เชฟแอทโฮม 1 ช้อนโต๊ะ',
            'กระเทียมสับ 1 ช้อนโต๊ะ',
            'น้ำมันพืช 1 ช้อนโต๊ะ',
            'พริกไทยเล็กน้อย'
        ],
    description2: {
        1: ['ตั้งกระทะไฟกลางใส่น้ำมันพืช พอร้อนแล้ว', 'ใส่กระเทียมผัดจนเหลือง'],
        2: ['ตามด้วยกุ้งกับหมึกที่เตรียมใส่ลงไป', 'ผัดจนสุก'],
        3: ['ปรุงรสด้วยซอสสารพัดผัดปรุงสำเร็จตราโรซ่า', 'เชฟแอทโฮม พริกไทย ผัดให้เข้ากัน'],
        4: ['ปิดไฟตักเสิร์ฟใส่ภาชนะที่เตรียมไว้']
    }
}, {
    id: "009",
    name: ":: ผัดทะเลกระเทียม ::",
    spicy: 0,
    description1:
        [
            'กุ้งหมึก 120 กรัม',
            'ซอสสารพัดผัดปรุงสำเร็จตราโรซ่า',
            'เชฟแอทโฮม 1 ช้อนโต๊ะ',
            'กระเทียมสับ 1 ช้อนโต๊ะ',
            'น้ำมันพืช 1 ช้อนโต๊ะ',
            'พริกไทยเล็กน้อย'
        ],
    description2: {
        1: ['ตั้งกระทะไฟกลางใส่น้ำมันพืช พอร้อนแล้ว', 'ใส่กระเทียมผัดจนเหลือง'],
        2: ['ตามด้วยกุ้งกับหมึกที่เตรียมใส่ลงไป', 'ผัดจนสุก'],
        3: ['ปรุงรสด้วยซอสสารพัดผัดปรุงสำเร็จตราโรซ่า', 'เชฟแอทโฮม พริกไทย ผัดให้เข้ากัน'],
        4: ['ปิดไฟตักเสิร์ฟใส่ภาชนะที่เตรียมไว้']
    }
}]
function onStart() {
    $('#section-1').addClass('hidden');
    $('#section-2').removeClass('hidden');
    $('#section-3').addClass('hidden');
    $('#section-4').addClass('hidden');
    $('#section-5').addClass('hidden');
}
function backToStart() {
    $('#section-1').removeClass('hidden');
    $('#section-2').addClass('hidden');
    $('#section-3').addClass('hidden');
    $('#section-4').addClass('hidden');
    $('#section-5').addClass('hidden');
}
function step2() {
    $('#section-1').addClass('hidden');
    $('#section-2').addClass('hidden');
    $('#section-3').removeClass('hidden');
    $('#section-4').addClass('hidden');
    $('#section-5').addClass('hidden');
}
function generatePage() {
    $('#section-1').addClass('hidden');
    $('#section-2').addClass('hidden');
    $('#section-3').addClass('hidden');
    $('#section-4').removeClass('hidden')
    $('#section-5').addClass('hidden');
}
function downloadPage() {
    $('#section-1').addClass('hidden');
    $('#section-2').addClass('hidden');
    $('#section-3').addClass('hidden');
    $('#section-4').addClass('hidden');
    $('#section-5').removeClass('hidden');
}
function selectFirstRawMats(e) {
    $('.select-menu').removeClass('selected');
    $('.' + e).toggleClass('selected');
    $('.selected-menu').addClass('hidden');
    $('.selected-menu.' + e).toggleClass('hidden');
    $('#goStep2').prop("disabled", false);
    $('#goStep2_m').prop("disabled", false);
    $('#goStep2').addClass('selected');
    $('#goStep2_m').addClass('selected');
}
function selectTaste(e) {
    $('.select-menu').removeClass('selected');
    $('.' + e).toggleClass('selected');
    $('.selected-menu2').addClass('hidden');
    $('.selected-menu2.' + e).toggleClass('hidden');
    $('#goGeneratePage').prop("disabled", false);
    $('#goGeneratePage_m').prop("disabled", false);
    $('#goGeneratePage').addClass('selected');
    $('#goGeneratePage_m').addClass('selected');
}