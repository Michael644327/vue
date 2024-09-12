<!-- 1.作業一
建立一個vue組件叫Register.vue
在template中建立一表單，需要有姓名、電話、生日、性別的欄位


運用今天所學的語法，使用事件與v-bind(綁定)製作表單驗證
(每個欄位必填，若未填寫則在input底下出現紅字提示訊息)
按下submit要出現所填的資料

2.作業二
預習事件修飾符 -->


<script setup>
import { ref, reactive, onUpdated, onUnmounted } from 'vue';

const name = ref('')
const phone = ref('')
const bir = ref('')
const gender = ref('')
const errormsg = ref({ color: 'red' })

    const isValidPhone = (phone) => {
    const phonePattern = /^09\d{8}$/;
    return phonePattern.test(phone);
    };

onUpdated(() => {
    updateLocalStorage();
})

onUnmounted(() => {
    updateLocalStorage();
})


const updateLocalStorage = () => {
    localStorage.setItem('name', name.value)
    localStorage.setItem('phone', phone.value)
    localStorage.setItem('bir', bir.value)
    localStorage.setItem('gender', gender.value)
}

const validateForm = () => {
    if (name.value.length < 1) {
        return;
    }
    if (!isValidPhone(phone.value)) {
        return;
    }
    if (bir.value.length < 1) {
        return;
    }
    if (gender.value.length < 1) {
        return;
    }
    showForm(name.value, phone.value, bir.value, gender.value)

}
const showForm = (name, phone, bir, gender) => {
    alert('表單內容:\n姓名:' + name + '\n電話:' + phone + '\n生日:' + bir + '\n性別:' + gender)
}

</script>
<template>
    <h1>0805 HW</h1>
    <div>
        <div>
            <form id="hwForm" @submit.prevent="validateForm">
                <div>姓名:
                    <input type="text" v-model="name" />
                    <div v-show="name.length < 1" v-bind:style="errormsg">請輸入姓名</div>
                </div>
                <div>電話:
                    <input type="text" v-model="phone" />
                    <div v-show="!isValidPhone(phone)" v-bind:style="errormsg">請輸入有效的手機電話</div>
                </div>
                <div>生日:
                    <input type="date" v-model="bir" />
                    <div v-show="bir.length < 1" v-bind:style="errormsg">請選擇日期</div>
                </div>
                <div>性別:
                    <input type="radio" name="gender" id="male" value="男" v-model="gender" />
                    <label for="male">男</label>
                    <input type="radio" name="gender" id="female" value="女" v-model="gender" />
                    <label for="female">女</label>
                    <input type="radio" name="gender" id="unknown" value="暫不作答" v-model="gender" />
                    <label for="unknown">暫不作答</label>
                    <div v-show="gender.length < 1" :style="errormsg">請選擇性別</div>
                </div>
                <button @click="validateForm">檢查與送出</button>
            </form>
        </div>
        <div class="datadisplay">
            <p>姓名:{{ name }}</p>
            <p>電話:{{ phone }}</p>
            <p>生日:{{ bir }}</p>
            <p>性別:{{ gender }}</p>
        </div>
    </div>
</template>


<style scoped>
.datadisplay{
    background-color: white;
    color:black;
}
</style>