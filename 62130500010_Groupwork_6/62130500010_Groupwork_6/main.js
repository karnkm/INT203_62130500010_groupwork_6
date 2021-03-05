const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
    },
    email: {
        presence: true,
        email: true,
    },
    telno: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}
const app = Vue.createApp({
    data() {
        return {
            image : './images/2.JPG',
            firstname: 'Karnkamol',
            lastname: 'Phattanaphirome',
            age: '19',
            email: 'kamkrn1213@gmail.com ',
            telno: '0945466949',
            form: {
                firstname: null,
                lastname:null,
                age: null,
                email: null,
                telno: null,
            },
            errors: null,
        }
    },
    methods: {
        checkForm(e) {
            console.log('Checkform Method run')
            this.errors = validate({
                firstname: this.form.firstname,
                lastname : this.form.lastname,
                age: this.form.age,
                email: this.form.email,
                telno: this.form.telno,
            }, constraints)
            if (this.errors) {
                e.preventDefault();
            } if (this.errors == null) {
                this.firstname = this.form.firstname;
                this.lastname = this.form.lastname;
                this.age = this.form.age;
                this.email = this.form.email;
                this.telno = this.form.telno;
                alert('Success!!')
                e.preventDefault();
            }
        }
    },
})
app.mount('#app')
